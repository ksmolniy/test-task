const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
const baseName = "indexedDB-reducer";
const storeName = "reducers";

function logerr(err) {
    console.log(err);
}

function connectDB(f) {
    const request = indexedDB.open(baseName, 1);
    request.onerror = logerr;
    request.onsuccess = () => {
        f(request.result);
    }
    request.onupgradeneeded = e => {
        e.currentTarget.result.createObjectStore(storeName, { keyPath: "reducer" });
        connectDB(f);
    }
}

export function getReducer(reducerName) {
    return new Promise((resolve, reject) => {
        connectDB(db => {
            var request = db.transaction([storeName], "readonly").objectStore(storeName).get(reducerName);
            request.onerror = reject;
            request.onsuccess = function () {
                resolve(request.result ? request.result : -1);
            }
        });
    });
}

export function getStorage() {
    return new Promise((resolve, reject) => {
        connectDB(db => {
            const rows = [];
            const store = db.transaction([storeName], "readonly").objectStore(storeName);

            if (store.mozGetAll) {
                const mozAll = store.mozGetAll();
                mozAll.onsuccess = (e) => {
                    resolve(e.target.result);
                };
                mozAll.onerror = reject;
            } else {
                const openedCursor = store.openCursor();
                openedCursor.onsuccess = e => {
                    const cursor = e.target.result;
                    if (cursor) {
                        rows.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        resolve(rows);
                    }
                };
                openedCursor.onerror = reject;
            }
        });
    });
}

export function setReducer(reducer) {
    return new Promise((resolve, reject) => {
        connectDB(db => {
            const request = db.transaction([storeName], "readwrite").objectStore(storeName).put(reducer);
            request.onerror = reject;
            request.onsuccess = () => {
                resolve(request.result);
            }
        });
    });
}

export function deleteReducer(reducer) {
    return new Promise((resolve, reject) => {
        connectDB(function (db) {
            const request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(reducer);
            request.onerror = reject;
            request.onsuccess = () => {
                resolve(true);
            }
        });
    });
}
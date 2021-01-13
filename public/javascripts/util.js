/*
    util.js
    - 직접 정의한 Promise 객체
    - 유틸성 함수
    - querySelector 기능을 직접 구현한 함수
*/

/* 이미지 넣는 함수 */
function addImg(prefix, node, src, suffix) {
    node.innerHTML += (prefix) + "<img src = " + src + ">" + (suffix);
}

function addHTML(node, text) {
    node.innerHTML += text;
}

const getElementsClass = (className) => document.getElementsByClassName(className);

/* DFS 함수 정의하기 */
function dfs_for_querySelector(node, target) {
    let returnVal;
    /* dfs 탐색 */
    for (element of node.children) {
        let result;
        if (element.matches(target)) {
            return element;
        }
        if (element.hasChildNodes()) {
            result = dfs_for_querySelector(element, target);
            if (result !== undefined) { /* 찾았을 경우 */
                returnVal = result;
            }
        }
    }
    return returnVal;
}

function dfs_for_querySelectorAll(nodeList, node, target) {
    /* dfs 탐색 */
    for (element of node.children) {
        if (element.matches(target)) {
            nodeList.push(element);
        }
        if (element.hasChildNodes()) {
            dfs_for_querySelectorAll(nodeList, element, target);
        }
    }
    return nodeList;
}

/* querySelector custom API (parameter : string, return : HTML element)*/
const querySelector = (element) => dfs_for_querySelector(document.body, element);

/* querySelectorAll custom API (parameter : string, return : Array) */
const querySelectorAll = (element) => dfs_for_querySelectorAll([], document.body, element);

/* Custom API 클래스 정의 */
class Custom {
    constructor(element) {
        this.element = element;
    }
    dfs_for_querySelector(node, target) {
        let returnVal;
        /* dfs 탐색 */
        for (element of node.children) {
            let result;
            if (element.matches(target))
                return element;
            if (element.hasChildNodes()) {
                result = dfs_for_querySelector(element, target);
                if (result !== undefined)  /* 찾았을 경우 */
                    returnVal = result;
            }
        }
        return returnVal;
    }
    dfs_for_querySelectorAll([], node, target) {
        /* dfs 탐색 */
        for (element of node.children) {
            if (element.matches(target)) 
                nodeList.push(element);
            if (element.hasChildNodes()) 
                dfs_for_querySelectorAll(nodeList, element, target);
        }
        return nodeList;
    }
    querySelector() {
        return dfs_for_querySelector(document.body, this.element);
    }
    querySelectorAll(){
        return dfs_for_querySelectorAll([], document.body, this.element);
    }
}

"use strict"

var PI = Math.PI; 
exports.area = function(r){
    return r*r*PI;
};

exports.length = function(r){
    return 2*PI*r;
}
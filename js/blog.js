$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
 	Parse.initialize("ahcjN7YahwGeFgi4Vc3v4En95j6ipZuNLQU5kIU8", "qAgQnh5Oj3WhWkT3LIc6muNh3tK5yhUhDPaz3JG8");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
# Build Api বৃদ্ধি
```JAVASCRIPT
extendUserApi({
  highlight(color) {
    this.el.style.backgroundColor = color;
    return this;
  },
  logTag() {
    console.log('Element tag:', this.el.tagName);
    return this;
  }
  /*api name(){
  here code
  }
  */
});

```
**নোট** প্রতিটি api একেকটি function 
## ব্যাবহার 
এটিকে block modifier এর মত ব্যাবহার করা যায়।
```JAVASCRIPT
//এখানে highlight() //ব্যাবহার করা হয়েছে
const button=create("button").text("Button").highlight("green").add("#main)
```


## পৃষ্ঠা সমূহ
প্রধান পৃষ্ঠা [Main Doc](/Readme.md),২য় পৃষ্ঠা [Native Js Doc](/NativeJs.md),৩য় পৃষ্ঠা [Create Doc](/createDoc.md),৪র্থ পৃষ্ঠা [GetUi Doc](/getUiDoc.md),৫ম পৃষ্ঠা [Build Api](/buildApi.md)

**সংস্করণ:** ২য় (১৮ মে, ২০২৫)
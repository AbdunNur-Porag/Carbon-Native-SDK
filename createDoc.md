# Create Documention
**এর ব্লক গুলো হল:**
```JAVASCRIPT
create(tagname)
.className([])
.id()
.attrs({})
.text()
.html()
.appendText()
.appendHtml()
.style({})
.event(name,function)
.child({})
.add(/*id or class or parent*/)
.clone()
```

## **Block Modifier**
কিছু Block Modifier রয়েছে। এগুলো সাধারনত event() ব্যাবহার করা হয়।
```JAVASCRIPT
.removeHtml()
.removeText()
.getId()
.removeId()
.readId()
.appendClass(name)
.removeAllClass()
.removeAClass(name)
.getAllClass()
.getAAttrs(name)// get attrs value
.removeAllAttrs()
.appendAAttrs(name,value)
.deleteAAttrs(name)
.getInnerValue()
```

## ব্যাবহার 
```JAJAVASCRIPT
function <ActivityName>{
   React.useEffect(() => {
   const var=create("tag")
   const get=getUi("#id")
   //add more
   },[])
  return(
    <html>
  )
}

```

**সংস্করণ:** ২য় (১৮ মে, ২০২৫)  

## পৃষ্ঠা সমূহ
প্রধান পৃষ্ঠা [Main Doc](/Readme.md),২য় পৃষ্ঠা [Native Js Doc](/NativeJs.md),৩য় পৃষ্ঠা [Create Doc](/createDoc.md),৪র্থ পৃষ্ঠা [GetUi Doc](/getUiDoc.md),৫ম পৃষ্ঠা [Build Api](/buildApi.md)

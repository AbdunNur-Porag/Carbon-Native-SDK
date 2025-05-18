# Carbon Native লেখার নিয়ম
এটি Build Api,ও React এর উপর ভিতি করে কাজ করে।
## Basic Structure React
```JAVASCRIPT
animation.config({
  "fade":`<style>//css</style><html>`
  "name":`css and html`

})//this use to launch activity animation


function MainActivity(){
  return(
    <div></div>
  )
}

function NotFound(){
  return(
    <div>Router Erroe</div>
  )
}

//<here your jsx>


//router
router.config({
  'main': <MainActivity/>//must
  //other activity
  // name:router
  "": <MainActivity/>,//must
  default: <MainActivity/>,//must
  notfound:<NotFound/>,//must
});
```
## Use of Build Api
Build Api দুই প্রকার:

* [create](/createDoc.md)
* [getUi](/getUiDoc.md)

 **Build Api** কে প্রয়োজন অনুযায়ী বৃদ্ধি করা যায়। [Build Api বৃদ্ধি করার পদ্ধতি।](/buildApi.md)

**সংস্করণ:** ২য় (১৮ মে, ২০২৫)  

## পৃষ্ঠা সমূহ
প্রধান পৃষ্ঠা [Main Doc](/Readme.md),২য় পৃষ্ঠা [Native Js Doc](/NativeJs.md),৩য় পৃষ্ঠা [Create Doc](/createDoc.md),৪র্থ পৃষ্ঠা [GetUi Doc](/getUiDoc.md),৫ম পৃষ্ঠা [Build Api](/buildApi.md)


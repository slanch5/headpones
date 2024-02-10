const BtnColor = document.querySelectorAll('.btn');
const ContentItem = document.querySelectorAll('.content-item');

BtnColor.forEach(function (element) {
   element.addEventListener('click', open)
})


function open(evt) {
   const target = evt.currentTarget;
   const button = target.dataset.btn;
   const active = document.querySelectorAll(`.${button}`);

   BtnColor.forEach(function (item) {
      item.classList.remove('btn-active')
   });

   target.classList.add('btn-active')

   ContentItem.forEach(function (item) {

      item.classList.remove('content-item_active')

   });

   active.forEach(function (item) {
      item.classList.add('content-item_active')
   })

}


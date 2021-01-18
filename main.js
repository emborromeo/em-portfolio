function changeImg(x){
    x.src="images/pic2.png";
}
function backImg(x){
    x.src="images/pic.png";

}
$('.video-btn').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});
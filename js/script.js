window.onload = function() {
	var lis = document.getElementsByTagName('footer')[0].children[0].children;
	var header = document.getElementsByTagName('header')[0];
	var spans = header.getElementsByTagName('span')
	var bar = document.getElementsByClassName('bar')[0];
	var mySwiper = new Swiper('.content', {
		initialSlide :1,
		on: {
			slideChange: function() {
				var ind = this.activeIndex;

				for (var i = 0; i < lis.length; i++) {

					lis[i].classList.remove('active');
				}
				lis[ind].classList.add('active');
			}
		}
	});

	Array.from(lis).map(function(el, ind) {
		var ind = ind;
		el.onclick = function(){
			mySwiper.slideTo(ind, 500);
		}
	});


	Array.from(spans).map(function(el, ind) {

		el.onclick = function(){
			for(var i = 0; i < spans.length; i++){
				spans[i].classList.remove('pitch');
			}
			bar.style.left = ind * this.offsetWidth + 'px';

			el.classList.add('pitch');
		}
	});
}
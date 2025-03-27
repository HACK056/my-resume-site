document.addEventListener('DOMContentLoaded', function(){
  // التعامل مع زر "احجز استشارتك الآن" لفتح المودال
  const bookBtn = document.getElementById('bookNowBtn');
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.querySelector('.close-btn');

  bookBtn.addEventListener('click', function(){
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
  });

  // إغلاق المودال عند النقر خارج محتواه
  window.addEventListener('click', function(e){
    if(e.target === modal){
      modal.style.display = 'none';
    }
  });
});
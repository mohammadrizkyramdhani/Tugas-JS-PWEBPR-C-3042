// addEventListener('click', function() { const colom = document.querySelector('.colom'); })
// container.style.backgroundColor = 'lightblue'; // Change background color

const iya = document.querySelector('.iya');
const tidak= document.querySelector('.tidak');
const colom = document.querySelector('.colom');
const img = colom.querySelector('img');
const h2 = document.querySelector('h2');
const teks = document.querySelector('.teks');
const h5 = teks.querySelector('h5')


iya.addEventListener('click', () => {
    colom.style.backgroundColor = '#E12E2E'; 
    img.src = 'assets/image 3.png';
    h2.textContent = 'Anda Berbohong!';
    h5.textContent = 'Anda adalah seorang Teknisi';
    iya.style.display = 'none';
    tidak.style.display = 'none';
    
  });
  
  
  tidak.addEventListener('click', () => {
      colom.style.backgroundColor = '#6FD240'; 
      img.src = 'assets/image 2.png';
      h2.textContent = 'Anda Benar!';
      h5.textContent = 'Anda adalah seorang Mahasiswa';
      iya.style.display = 'none';
      tidak.style.display = 'none';
  });
  

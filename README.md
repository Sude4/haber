# HaberSitesi
Bu projede Haber Sitesi örneği yaptım. Backend tarafında .Net Sql Server ile çalıştım. Frontend Tarafında Angular ile çalıştım. .Net tarafını Visual Studio ile Anguları ise VSCode ile geliştirdim. Entity Framework Core, veritabanı işlemleri için kullandım. Haber ve Yorum olarak 2 model içeriyor . Haber ile alakalı her şeyi veritabanından erişim sağlanıyor. CRUD işlemleri için uygun endpointleri sağlıyor. HttpPost, HttpGet, HttpPut,[HttpDelete("{id}")] . 
Haberi görüntüleye tıklandığında Haberin idsine göre sayfa değişikliği olmaktadır => <a [routerLink]="['/news', news.id]" routerLinkActive="active">Haberi Görüntüle</a> kullanımı bu şekildedir.
Resimlerimi bu şekilde ekledim =>  <img src="../assets/images/news.jpg" alt="{{news.title}}" class="news-image">
Haber içerik ve başlığı da bu şekildedir =>   <h3 class="news-title">{{news.title}}</h3>
      <p class="news-context">{{news.context}}</p>
      
   Yorum oluştururken Api kullandım =>  saveComment(comment: string) {
    const requestBody = { comment: comment };
    return this.http.post('https://api.example.com/comments', requestBody);
  }
  Fakat bu kısımın daha da geliştirilmesi gerektiğini düşünüyorum birkaç eksiği var.
  Backend tarafından istenilenleri eksiksiz yerine getirdiğimi düşünüyorum . Kodlarımı yorum satırlarıyla henüz açıklamadım fakat açıklamaları ekleyeceğim . 
   
   
   [HttpGet]
        public async Task<ActionResult<List<TheNews>>> GetTheNewss() {

            return Ok(await _context.TheNewss.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<TheNews>>> CreateTheNews(TheNews news)
        {
            _context.TheNewss.Add(news);
            await _context.SaveChangesAsync();

            return Ok(await _context.TheNewss.ToListAsync());
        }
      
      
 Bu kısım TheNewsController.cs içindeki bir yapı , kısaca açıklayacak olursam:
   Bir veritabanı bağlantısı olan DataContext sınıfına erişmek için enjekte edilen _context bağımlılığı kullanılıyor. Totalde 4  farklı Http isteği var fakat dediğim gibi ikisine açıklama yapmak istedim. GetTheNewss metodu, HttpGet isteklerine yanıt olarak çalışır ve _context üzerinden TheNewss tablosundaki tüm verileri alır ve bunları Ok metodunu kullanarak HTTP 200 (Başarılı) yanıtıyla birlikte döndürür.

CreateTheNews metodu, HttpPost isteklerine yanıt olarak çalışır ve bir TheNews nesnesi alır. Bu nesneyi _context üzerinden veritabanına ekler (_context.TheNewss.Add(news)) ve değişiklikleri kaydeder (await _context.SaveChangesAsync()). Ardından, güncellenmiş veri listesini Ok metodunu kullanarak HTTP 200 (Başarılı) yanıtıyla birlikte döndürür.
  
  
![home-page-news](https://github.com/Sude4/haber/assets/56775168/4a72fee9-7eab-416b-9e94-74dc05f751ed)

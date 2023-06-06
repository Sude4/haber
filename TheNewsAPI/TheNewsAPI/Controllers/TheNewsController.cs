using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheNewsAPI.Data;

namespace TheNewsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheNewsController : ControllerBase
    {
        private readonly DataContext _context;
        public TheNewsController(DataContext context) 
        { 
        _context = context;
        }

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

        [HttpPut]
        public async Task<ActionResult<List<TheNews>>> UpdateTheNews(TheNews news)
        {
            var dbNews = await _context.TheNewss.FindAsync(news.Id);
            if (dbNews == null)
                return BadRequest("News not found");

            dbNews.Title = news.Title;
            dbNews.Context = news.Context;

            await _context.SaveChangesAsync();
            return Ok(await _context.TheNewss.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<TheNews>>> DeleteTheNews(int id)
        {
            var dbNews = await _context.TheNewss.FindAsync(id);
            if (dbNews == null)
                return BadRequest("News not found");

            _context.TheNewss.Remove(dbNews);
            await _context.SaveChangesAsync();
            return Ok(await _context.TheNewss.ToListAsync());
        }

    }
}

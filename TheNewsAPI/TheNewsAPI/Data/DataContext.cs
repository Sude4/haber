using Microsoft.EntityFrameworkCore;

namespace TheNewsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<TheNews> TheNewss => Set<TheNews>();
    }
}

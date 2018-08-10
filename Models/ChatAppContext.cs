using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace signalR_react_chat_app.Models
{
    public class ChatAppContext : IdentityDbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(GetConnectionString());
        }

        private static string GetConnectionString()
        {
            const string databaseName = "webapijwt";
            const string databaseUser = "";
            const string databasePass = "";

            // return $"Server=localhost;" +
            //        $"database={databaseName};" +
            //        $"uid={databaseUser};" +
            //        $"pwd={databasePass};" +
            //        $"pooling=true;";
            return "USER ID=postgres;Password=test123;Host=127.0.0.1;Port=5432;Database=chatapp; Integrated Security=true;Pooling=true;";
        }
        public ChatAppContext(DbContextOptions<ChatAppContext> options) : base(options) { }

        //public DbSet<User> Users { get; set; }
    }
}
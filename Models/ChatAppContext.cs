using Microsoft.EntityFrameworkCore;

namespace signalR_react_chat_app.Models
{
    public class ChatAppContext : DbContext
    {
        public ChatAppContext(DbContextOptions<ChatAppContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
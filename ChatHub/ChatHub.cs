using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace signalR_react_chat_app.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;

        public ChatHub(UserManager<IdentityUser> userManager,
        SignInManager<IdentityUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
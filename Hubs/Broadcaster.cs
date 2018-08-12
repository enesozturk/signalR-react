using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using signalR_react_chat_app.Models;

namespace signalR_react_chat_app.Hubs
{
    public class Broadcaster : Hub<IBroadcaster>
    {
        public override Task OnConnectedAsync()
        {
            // Set connection id for just connected client only
            return Clients.Client(Context.ConnectionId).SetConnectionId(Context.ConnectionId);
        }

        // Server side methods called from client
        public Task Subscribe(string chatroom)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, chatroom.ToString());
        }

        public Task Unsubscribe(string chatroom)
        {
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, chatroom.ToString());
        }
    }

    // Client side methods to be invoked by Broadcaster Hub
    public interface IBroadcaster
    {
        Task SetConnectionId(string connectionId);
        Task AddChatMessage(MessageViewModel message);
    }
}
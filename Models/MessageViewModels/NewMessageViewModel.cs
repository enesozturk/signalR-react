using System.ComponentModel.DataAnnotations;

namespace signalR_react_chat_app.Models
{
    public class NewMessageViewModel
    {
        [Required]
        public string Content { get; set; }
    }
}
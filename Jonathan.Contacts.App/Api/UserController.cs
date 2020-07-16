using Jonathan.Contacts.App.Application;
using Jonathan.Contacts.App.Core;
using Microsoft.AspNetCore.Mvc;

namespace Jonathan.Contacts.App.Api
{
    [Route("api/user")]
    public class UserController: Controller
    {
        private readonly IUserRepository UserRepository;
        public UserController(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }

        [HttpGet("{email}")]
        public User GetUser(string email)
        {
            var user = UserRepository.FindFirst(email);

            if (user != null)
            {
                return user;
            }
            else
            {
                return UserRepository.CreateUser(email);
            }
        }
    }
}
using Jonathan.Contacts.App.Core;

namespace Jonathan.Contacts.App.Application
{
    public interface IUserRepository
    {
        User FindFirst(string email);
        User CreateUser(string email);
    }
}
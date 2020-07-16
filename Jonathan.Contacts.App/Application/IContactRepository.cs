using Jonathan.Contacts.App.Core;

namespace Jonathan.Contacts.App.Application
{
    public interface IContactRepository
    {
        Page<Contact> FindContacts(int userId, int pageSize, int pageNumber);
        Contact CreateContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int contactId);
    }
}
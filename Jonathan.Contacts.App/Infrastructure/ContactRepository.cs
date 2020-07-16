using Jonathan.Contacts.App.Application;
using Jonathan.Contacts.App.Core;

using LiteDB;

namespace Jonathan.Contacts.App.Infrastructure
{
    public class ContactRepository : BaseRepo, IContactRepository
    {
        public ContactRepository(LiteDbConfiguration configuration): base(configuration) {}

        public Contact CreateContact(Contact contact)
        {
            return Query(dbContext =>
            {
                var contactCollection = GetContactCollection(dbContext);
                var contactId = contactCollection.Insert(contact);
                contactCollection.EnsureIndex(c => c.UserId);
                return contactCollection.FindById(contactId);
            });
        }

        public void DeleteContact(int contactId)
        {
            Execute(dbContext =>
            {
                var contactCollection = GetContactCollection(dbContext);
                contactCollection.Delete(contactId);
            });
        }

        public Page<Contact> FindContacts(int userId, int pageSize, int pageNumber)
        {
            return Query(dbContext =>
            {
                var contactCollection = GetContactCollection(dbContext);
                var totalPages = contactCollection.Count(c => c.UserId == userId);
                var contacts = contactCollection.Query()
                    .Where(c => c.UserId == userId)
                    .Skip(pageSize * (pageNumber - 1))
                    .Limit(pageSize)
                    .ToList();
                return new Page<Contact>
                {
                    Data = contacts,
                    PageNumber = pageNumber,
                    PageSize = pageSize,
                    TotalPages = totalPages
                };
            });
        }

        public void UpdateContact(Contact contact)
        {
            Execute(dbContext =>
            {
                var contactCollection = GetContactCollection(dbContext);
                contactCollection.Update(contact);
            });
        }

        private static ILiteCollection<Contact> GetContactCollection(ILiteDatabase dbContext)
        {
            return dbContext.GetCollection<Contact>("contacts");
        }
    }
}
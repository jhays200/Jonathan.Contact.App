using Jonathan.Contacts.App.Application;
using Jonathan.Contacts.App.Core;

using LiteDB;

namespace Jonathan.Contacts.App.Infrastructure
{
    public class UserRepository : BaseRepo, IUserRepository
    {
        public UserRepository(LiteDbConfiguration configuration): base(configuration) {}

        public User CreateUser(string email)
        {
            return Query(dbContext =>
            {
                var userCollections = GetUsersCollection(dbContext);
                var userId = userCollections.Insert(new User { Email = email, IsActive = true });
                userCollections.EnsureIndex(u => u.Email);

                return userCollections.FindById(userId);
            });
        }

        public User FindFirst(string email)
        {
            return Query(dbContext =>
            {
                var userCollections = GetUsersCollection(dbContext);
                return userCollections.FindOne(x => x.Email == email);
            });
        }

        private static ILiteCollection<User> GetUsersCollection(ILiteDatabase dbContext)
        {
            return dbContext.GetCollection<User>("users");
        }
    }
}
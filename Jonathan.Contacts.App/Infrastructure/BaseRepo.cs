using System;
using LiteDB;

namespace Jonathan.Contacts.App.Infrastructure
{
    public abstract class BaseRepo
    {
        private readonly LiteDbConfiguration DbConfiguration;

        public BaseRepo(LiteDbConfiguration dbConfiguration)
        {
            DbConfiguration = dbConfiguration;
        }

        public T Query<T>(Func<ILiteDatabase, T> query)
        {
            using(var dbContext = new LiteDatabase(DbConfiguration.DbFile))
            {
                return query(dbContext);
            }
        }

        public void Execute(Action<ILiteDatabase> action)
        {
            using(var dbContext = new LiteDatabase(DbConfiguration.DbFile))
            {
                action(dbContext);
            }
        }
    }
}
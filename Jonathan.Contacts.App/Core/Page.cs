using System.Collections.Generic;

namespace Jonathan.Contacts.App.Core
{
    public class Page<T>
    {
        public IList<T> Data { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
    }
}
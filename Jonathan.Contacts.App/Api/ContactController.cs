using Jonathan.Contacts.App.Application;
using Jonathan.Contacts.App.Core;
using Microsoft.AspNetCore.Mvc;

namespace Jonathan.Contacts.App.Api
{
    [Route("api/contact")]
    public class ContactController : Controller
    {
        private readonly IContactRepository ContactRepository;

        public ContactController(IContactRepository contactRepository)
        {
            ContactRepository = contactRepository;
        }

        [HttpGet]
        public Page<Contact> GetContacts(int userId, int pageNumber = 10, int pageSize = 10)
        {
            return ContactRepository.FindContacts(userId, pageSize, pageNumber);
        }

        [HttpPost]
        public ActionResult<Contact> CreateContact(Contact contact)
        {
            var newContact = ContactRepository.CreateContact(contact);
            return Created($"contact/{newContact.Id}", newContact);
        }

        [HttpPut("{contactId:int}")]
        public ActionResult UpdateContact(int contactId, Contact contact)
        {
            contact.Id = contactId;
            ContactRepository.UpdateContact(contact);
            return Ok();
        }

        [HttpDelete("{contactId:int}")]
        public IActionResult DeleteContact(int contactId)
        {
            ContactRepository.DeleteContact(contactId);
            return Ok();
        }
    }
}
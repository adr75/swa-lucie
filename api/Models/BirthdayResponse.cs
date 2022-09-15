
using System;

public class BirthdayResponse 
{
    public string Id {get; set; } = Guid.NewGuid().ToString();
    public DateTime Timestamp {get;set;} = DateTime.UtcNow;
    public string Nom {get; set;}
    public Boolean Vient {get; set;}


}
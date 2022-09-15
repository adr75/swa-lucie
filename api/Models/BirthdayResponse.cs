
using System;

public class BirthdayResponse 
{

    public string id {get; set; } = Guid.NewGuid().ToString();
    public DateTime timestamp {get;set;} = DateTime.UtcNow;
    public string nom {get; set;}
    public Boolean vient {get; set;}


}
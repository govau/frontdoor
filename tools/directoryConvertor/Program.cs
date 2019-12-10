using System;
using System.Linq;
using System.IO;
using System.Xml.Linq;
using System.Text;

namespace Dta.Frontdoor.Tools.DirectoryConvertor
{
    class Program
    {
        static void Main(string[] args)
        {
            var filename = "data/directory.gov.au.xml";
            var currentDirectory = Directory.GetCurrentDirectory();
            var directoryGovAuFilepath = Path.Combine(currentDirectory, filename);

            XElement directoryGovAu = XElement.Load(directoryGovAuFilepath);

            var agencies = directoryGovAu.Descendants("item")
                                         .Where(item => item != null && item.Element("type_of_body") != null && ((string)item.Element("type_of_body")).Contains("Corporate Commonwealth Entity"))
                                         .Select(i => new
                                         {
                                             title = (string)i.Element("title"),
                                             typeOfBody = (string)i.Element("type_of_body"),
                                         })
                                         .OrderBy(i => i.title)
                                         .GroupBy(i => i.typeOfBody)
                                         ;


            var sb = new StringBuilder();
            sb.AppendLine(@"---
layout: page
title: 'Agencies'
---
            ");
            foreach (var group in agencies)
            {
                sb.AppendLine($"#{group.Key}");
                Console.WriteLine(group.Key);
                foreach (var i in group) {   
                    sb.AppendLine($"* {i.title}");
                    Console.WriteLine("* " + i.title);
                }
                sb.AppendLine("");
            }

            File.WriteAllText(Path.Combine("data", "agencies.md"), sb.ToString());
        }
    }
}

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
            sb.AppendLine(string.Join("\t", "Question", "Answer", "Source", "Metadata", "SuggestedQuestions", "IsContextOnly", "Prompts", "QnaId"));

            foreach (var group in agencies)
            {
                Console.WriteLine(group.Key);
                var cce = true;
                var qnaId = 0;
                switch(group.Key) {
                    case "A. Non Corporate Commonwealth Entity":
                        cce = false;
                        qnaId = 10000;
                        break;
                    case "B. Corporate Commonwealth Entity":
                        cce = true;
                        qnaId = 10001;
                        break;
                }
                foreach (var i in group) {   
                    sb.AppendLine(
                        string.Join(
                            "\t",
                            Escape(i.title),
                            Escape(group.Key),
                            "https://www.directory.gov.au/sites/default/files/export.xml",
                            $"cce:{cce.ToString().ToLower()}",
                            "[]",
                            "false",
                            "[]",
                            qnaId
                        )
                    );
                    Console.WriteLine(i.title);
                }
                sb.AppendLine("");
            }

            File.WriteAllText(Path.Combine("data", "agencies.tsv"), sb.ToString());
        }
        private static string Escape(string input) {
            return input.Replace("\n", @"\n").Replace("\t", @"\t").Replace("\r", @"\r").Replace("\\", @"\\");
        }
    }
}

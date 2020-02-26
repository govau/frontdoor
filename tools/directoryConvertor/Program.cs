using System;
using System.Linq;
using System.IO;
using System.Xml.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Dta.Frontdoor.Tools.DirectoryConvertor
{
    class Program
    {
        static void Main(string[] args)
        {
            var filename = "data/export.xml";
            var currentDirectory = Directory.GetCurrentDirectory();
            var directoryGovAuFilepath = Path.Combine(currentDirectory, filename);

            XElement directoryGovAu = XElement.Load(directoryGovAuFilepath);

            var agencies = directoryGovAu.Descendants("item")
                                         .Where(item =>
                                            item != null &&
                                            item.Element("type_of_body") != null && (
                                                ((string)item.Element("type_of_body")).Contains("Corporate Commonwealth Entity") ||
                                                ((string)item.Element("type_of_body")).Contains("C. Commonwealth Company")
                                            )
                                         )
                                         .Select(i => new
                                         {
                                             title = (string)i.Element("title"),
                                             typeOfBody = (string)i.Element("type_of_body"),
                                             website = (string)i.Element("website"),
                                         })
                                         .OrderBy(i => i.title)
                                         .GroupBy(i => i.typeOfBody);


            var sb = new StringBuilder();
            sb.AppendLine(string.Join("\t", "Question", "Answer", "Metadata"));
            var regex = new Regex(@"(https?:\/\/)?(w{0,3}\.){0,1}(.*?)(\..*)", RegexOptions.IgnoreCase);
            foreach (var group in agencies)
            {
                Console.WriteLine(group.Key);
                var typeOfBody = "";
                switch(group.Key) {
                    case "A. Non Corporate Commonwealth Entity":
                        typeOfBody = "nce";
                        break;
                    case "B. Corporate Commonwealth Entity":
                        typeOfBody = "cce";
                        break;
                    case "C. Commonwealth Company":
                        typeOfBody = "gbe";
                        break;
                }
                foreach (var i in group) {   
                    sb.AppendLine(
                        string.Join(
                            "\t",
                            Escape(i.title),
                            Escape($"{i.title}"),
                            $"typeofbody:{typeOfBody}|result:agency"
                        )
                    );
                    Console.Write(i.title);
                    if (string.IsNullOrWhiteSpace(i.website) == false) {
                        var match = regex.Match(i.website);
                        var shortName = match.Groups[3].Value;
                        sb.AppendLine(
                            string.Join(
                                "\t",
                                Escape(shortName),
                                Escape($"{i.title}"),
                                $"typeofbody:{typeOfBody}|result:agency"
                            )
                        );
                        Console.Write($": {shortName}");
                    }
                    Console.WriteLine();
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

import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import React from "../../assets/TechIcons/React.svg";
import HTML from "../../assets/TechIcons/HTML.svg";
import CSS from "../../assets/TechIcons/CSS.svg";
import TypeScript from "../../assets/TechIcons/TypeScript.svg";
import JavaScript from "../../assets/TechIcons/JavaScript.svg";
import Next from "../../assets/TechIcons/Next.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Springboot from "../../assets/TechIcons/Springboot.svg";
import CSharp from "../../assets/TechIcons/Csharp.svg";
import Dotnet from "../../assets/TechIcons/Dotnet.svg";
import Node from "../../assets/TechIcons/Node.svg";
import MySQL from "../../assets/TechIcons/MySQL.svg";
import SQLServer from "../../assets/TechIcons/SQLServer.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Github from "../../assets/TechIcons/Github.svg";

export const TecnologiesPanel = () => {
    return (
        <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                Tecnologias:
              </h3>
              <Tabs defaultValue="frontend">
                <TabsList className="bg-neutral-900 border-2 w-full">
                  <TabsTrigger value="frontend">Front-end</TabsTrigger>
                  <TabsTrigger value="backend">Back-end</TabsTrigger>
                  <TabsTrigger value="database">Banco de dados</TabsTrigger>
                  <TabsTrigger value="versioning">Versionamento</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                  <Badge>
                    <img src={HTML} className="w-8" />
                    <p className="text-lg">HTML</p>
                  </Badge>
                  <Badge>
                    <img src={CSS} className="w-8" />
                    <p className="text-lg">CSS</p>
                  </Badge>
                  <Badge>
                    <img src={JavaScript} className="w-8" />
                    <p className="text-lg">JavaScript</p>
                  </Badge>
                  <Badge>
                    <img src={TypeScript} className="w-8" />
                    <p className="text-lg">TypeScript</p>
                  </Badge>
                  <Badge>
                    <img src={React} className="w-8" />
                    <p className="text-lg">React.JS</p>
                  </Badge>
                  <Badge>
                    <img src={Next} className="w-8" />
                    <p className="text-lg">Next.JS</p>
                  </Badge>
                </TabsContent>
                <TabsContent value="backend">
                  <Badge>
                    <img src={Node} className="w-8" />
                    <p className="text-lg">Node.JS</p>
                  </Badge>
                  <Badge>
                    <img src={CSharp} className="w-8" />
                    <p className="text-lg">C#</p>
                  </Badge>
                  <Badge>
                    <img src={Dotnet} className="w-8" />
                    <p className="text-lg">.NET Core</p>
                  </Badge>
                  <Badge>
                    <img src={Java} className="w-8" />
                    <p className="text-lg">Java</p>
                  </Badge>
                  <Badge>
                    <img src={Springboot} className="w-8" />
                    <p className="text-lg">Springboot</p>
                  </Badge>
                </TabsContent>
                <TabsContent value="database">
                  <Badge>
                    <img src={MySQL} className="w-8" />
                    <p className="text-lg">MySQL</p>
                  </Badge>
                  <Badge>
                    <img src={SQLServer} className="w-8" />
                    <p className="text-lg">SQL Server</p>
                  </Badge>
                </TabsContent>
                <TabsContent value="versioning">
                  <Badge>
                    <img src={Git} className="w-8" />
                    <p className="text-lg">Git</p>
                  </Badge>
                  <Badge>
                    <img src={Github} className="w-8" />
                    <p className="text-lg">Github</p>
                  </Badge>
                </TabsContent>
              </Tabs>
            </div>
    )
}
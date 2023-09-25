import { Inbox, Loader2 } from "lucide-react";
import { useDropzone } from 'react-dropzone'


export default function Uploadfile() {
      const { getRootProps, getInputProps } = useDropzone({
            accept: { 'application/pdf': ['.pdf'] },
            maxFiles: 1,
            onDrop: (acceptedFiles) => {

             console.log(acceptedFiles[0].name);
                 
            }
      })

      return (
            <div className="p-2 bg-white rounded-xl">
                  <div className="border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col" {...getRootProps()}>
                        <Inbox className="w-10 h-10 text-blue-500" />
                        <input type="text" {...getInputProps()} />
                        <p className="mt-2 text-sm text-slate-400">Drop Your File Here</p>
                  </div>
            </div>
      )
}
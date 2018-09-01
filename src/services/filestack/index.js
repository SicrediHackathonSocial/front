
import * as filestack from 'filestack-js';

export class FilestackService {

  sources = ['local_file_system', 'facebook', 'instagram', 'googledrive', 'dropbox', 'gmail'];
  client

  pickOptions = {
    fromSources: this.sources,
    maxFiles: 1,
    minFiles: 1,
    lang: 'pt',
    transformations: {
        crop: {
            force: true,
            aspectRatio: 1    
        }
    },
  }

  constructor () {
    // https://github.com/filestack/filestack-js#module_filestack..init
    const apikey = 'AFPiWSd6CTrR0HZFPbeW9z'
    this.client = filestack.init(apikey)
  } 

  abrirPicker(onUploadDone) {
    this.pickOptions['onUploadDone'] = onUploadDone
    return this.client.picker(this.pickOptions).open()
  }
}


import * as util from 'util';
const exec = util.promisify(require('child_process').exec);
export interface Device {
  name: string;
  path: string;
}

export async function ListPenDrive(): Promise<Device[]> {
  if (process.platform === 'win32') {
    const { stdout, stderr } = await exec('wmic logicaldisk where drivetype=2 get deviceid, volumename, description');
    if (stderr) {
      return [];
    }

    let splited = stdout.split('\n');
    let device: Device[] = [];
    for (let i = 1; splited[i] != ''; i++) {
      let divided = splited[i].split('  ');
      if (divided.length > 2) {
        device.push({
          name: divided[5],
          path: divided[1]
        });
      }
    }
    return device;
  } else {
    throw new Error('Plataforma Não Suportada');
  }
}
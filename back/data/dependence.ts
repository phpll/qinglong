export class Dependence {
  timestamp?: string;
  created?: number;
  _id?: string;
  status?: DependenceStatus;
  type?: DependenceTypes;
  name?: number;
  log?: string[];
  remark?: string;

  constructor(options: Dependence) {
    this._id = options._id;
    this.created = options.created || new Date().valueOf();
    this.status = options.status || DependenceStatus.installing;
    this.type = options.type || DependenceTypes.nodejs;
    this.timestamp = new Date().toString();
    this.name = options.name;
    this.log = options.log || [];
    this.remark = options.remark || '';
  }
}

export enum DependenceStatus {
  'installing',
  'installed',
  'installFailed',
}

export enum DependenceTypes {
  'nodejs',
  'python3',
  'linux',
}

export enum InstallDependenceCommandTypes {
  'pnpm install -g',
  'pip3 install',
  'apk add --no-cache',
}

export enum unInstallDependenceCommandTypes {
  'pnpm uninstall -g',
  'pip3 uninstall',
  'apk del',
}
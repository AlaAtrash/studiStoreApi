import { typeOrmConfig } from '../config/typeorm.config';

import fs = require('fs');
fs.writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfig, null, 2));

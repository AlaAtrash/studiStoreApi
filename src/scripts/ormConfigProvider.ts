import { typeOrmConfig } from '../config/typeorm.config';

import { writeFileSync } from 'fs';
writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfig, null, 2));

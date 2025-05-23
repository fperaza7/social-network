import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

export default class UserTestSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repo = dataSource.getRepository(User);

    const existingUser = await repo.findOne({ where: { email: 'user@example.com' } });

    if (!existingUser) {
      const user = repo.create({
        email: 'user@example.com',
        password: await bcrypt.hash('123456', 10),
      });

      await repo.save(user);
    }
  }
}

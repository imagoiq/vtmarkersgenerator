import yaml from 'js-yaml';
import fs from 'fs';

interface TasksFile {
    tasks: Tasks;
}

interface Tasks {
    [key: string]: Task;
}

interface Task {
    channelName: string;
    debounceWait: number;
    sql: string;
    sqlColumNameRef: string;
    vtParams: string[];
}

const getTasks = async () => {
    try {
        const doc: TasksFile = yaml.safeLoad(fs.readFileSync('./tasks.yml', 'utf8')) as TasksFile; // Probably not the best way to do it
        return Object.entries(doc.tasks);

    } catch (e) {
        console.log('Error with the loading or reading of the tasks.yml file:');
        console.log(e);
        process.exit(1);
    }
};

export {
    getTasks
};


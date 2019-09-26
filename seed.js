const Repo = require('./models/repo');

const repo = Repo.build({
  name: 'George',
  user: 'omgeorge',
  language: 'javascript',
  forks: 123,
  description: 'asdlkfjaslkdjflkasd'
});

repo.save().then(() => {
  console.log('saved dummy')
})
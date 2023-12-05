import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sroki-участник', 'Unit | Serializer | i-i-s-sroki-участник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sroki-участник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sroki-роли',

    'model:i-i-s-sroki-календарь',
    'model:i-i-s-sroki-проект',
    'model:i-i-s-sroki-участник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

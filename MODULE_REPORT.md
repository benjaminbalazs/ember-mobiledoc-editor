## Module Report
### Unknown Global

**Global**: `Ember.uuid`

**Location**: `addon/components/mobiledoc-editor/component.js` at line 167

```js
    editorOptions.cardOptions = {
      [ADD_CARD_HOOK]: ({env, options, payload}, isEditing=false) => {
        let cardId = Ember.uuid();
        let cardName = env.name;
        if (isEditing) {
```

### Unknown Global

**Global**: `Ember.uuid`

**Location**: `addon/components/mobiledoc-editor/component.js` at line 193

```js
      },
      [ADD_ATOM_HOOK]: ({env, options, payload, value}) => {
        let atomId = Ember.uuid();
        let atomName = env.name;
        let destinationElementId = `mobiledoc-editor-atom-${atomId}`;
```

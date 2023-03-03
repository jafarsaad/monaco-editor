/*! For license information please see tsMode.js.LICENSE.txt */
"use strict";define("vs/language/typescript/tsMode",["require"],(e=>(()=>{var t,i,s=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(t=>void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,i)=>(void 0!==e?e:t)[i]}):t)((function(t){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),d=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of o(t))l.call(e,a)||a===i||r(e,a,{get:()=>t[a],enumerable:!(s=n(t,a))||s.enumerable});return e},u=(e,t,i)=>(i=null!=e?s(a(e)):{},d(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)),g=(e,t,i)=>(((e,t,i)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),p=(t={"src/fillers/monaco-editor-core-amd.ts"(e,t){var i=u(c("vs/editor/editor.api"));t.exports=i}},function(){return i||(0,t[o(t)[0]])((i={exports:{}}).exports,i),i.exports}),m={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(m,{Adapter:()=>S,CodeActionAdaptor:()=>H,DefinitionAdapter:()=>I,DiagnosticsAdapter:()=>x,DocumentHighlightAdapter:()=>A,FormatAdapter:()=>R,FormatHelper:()=>K,FormatOnTypeAdapter:()=>E,InlayHintsAdapter:()=>j,Kind:()=>P,LibFiles:()=>v,OutlineAdapter:()=>T,QuickInfoAdapter:()=>F,ReferenceAdapter:()=>L,RenameAdapter:()=>V,SignatureHelpAdapter:()=>D,SuggestAdapter:()=>k,WorkerManager:()=>f,flattenDiagnosticMessageText:()=>y,getJavaScriptWorker:()=>U,getTypeScriptWorker:()=>$,setupJavaScript:()=>B,setupTypeScript:()=>W});var h={};((e,t,i)=>{d(e,t,"default")})(h,u(p()));var f=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=h.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(h.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},b=c("./monaco.contribution"),_={};function y(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=y(r,t,i);return s}function w(e){return e?e.map((e=>e.text)).join(""):""}_["lib.d.ts"]=!0,_["lib.dom.d.ts"]=!0,_["lib.dom.iterable.d.ts"]=!0,_["lib.es2015.collection.d.ts"]=!0,_["lib.es2015.core.d.ts"]=!0,_["lib.es2015.d.ts"]=!0,_["lib.es2015.generator.d.ts"]=!0,_["lib.es2015.iterable.d.ts"]=!0,_["lib.es2015.promise.d.ts"]=!0,_["lib.es2015.proxy.d.ts"]=!0,_["lib.es2015.reflect.d.ts"]=!0,_["lib.es2015.symbol.d.ts"]=!0,_["lib.es2015.symbol.wellknown.d.ts"]=!0,_["lib.es2016.array.include.d.ts"]=!0,_["lib.es2016.d.ts"]=!0,_["lib.es2016.full.d.ts"]=!0,_["lib.es2017.d.ts"]=!0,_["lib.es2017.full.d.ts"]=!0,_["lib.es2017.intl.d.ts"]=!0,_["lib.es2017.object.d.ts"]=!0,_["lib.es2017.sharedmemory.d.ts"]=!0,_["lib.es2017.string.d.ts"]=!0,_["lib.es2017.typedarrays.d.ts"]=!0,_["lib.es2018.asyncgenerator.d.ts"]=!0,_["lib.es2018.asynciterable.d.ts"]=!0,_["lib.es2018.d.ts"]=!0,_["lib.es2018.full.d.ts"]=!0,_["lib.es2018.intl.d.ts"]=!0,_["lib.es2018.promise.d.ts"]=!0,_["lib.es2018.regexp.d.ts"]=!0,_["lib.es2019.array.d.ts"]=!0,_["lib.es2019.d.ts"]=!0,_["lib.es2019.full.d.ts"]=!0,_["lib.es2019.object.d.ts"]=!0,_["lib.es2019.string.d.ts"]=!0,_["lib.es2019.symbol.d.ts"]=!0,_["lib.es2020.bigint.d.ts"]=!0,_["lib.es2020.d.ts"]=!0,_["lib.es2020.full.d.ts"]=!0,_["lib.es2020.intl.d.ts"]=!0,_["lib.es2020.promise.d.ts"]=!0,_["lib.es2020.sharedmemory.d.ts"]=!0,_["lib.es2020.string.d.ts"]=!0,_["lib.es2020.symbol.wellknown.d.ts"]=!0,_["lib.es2021.d.ts"]=!0,_["lib.es2021.full.d.ts"]=!0,_["lib.es2021.intl.d.ts"]=!0,_["lib.es2021.promise.d.ts"]=!0,_["lib.es2021.string.d.ts"]=!0,_["lib.es2021.weakref.d.ts"]=!0,_["lib.es5.d.ts"]=!0,_["lib.es6.d.ts"]=!0,_["lib.esnext.d.ts"]=!0,_["lib.esnext.full.d.ts"]=!0,_["lib.esnext.intl.d.ts"]=!0,_["lib.esnext.promise.d.ts"]=!0,_["lib.esnext.string.d.ts"]=!0,_["lib.esnext.weakref.d.ts"]=!0,_["lib.scripthost.d.ts"]=!0,_["lib.webworker.d.ts"]=!0,_["lib.webworker.importscripts.d.ts"]=!0,_["lib.webworker.iterable.d.ts"]=!0;var S=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:o,column:a}=s;return{startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a}}},v=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!_[e.path.slice(1)]}getOrCreateModel(e){const t=h.Uri.parse(e),i=h.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return h.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=b.typescriptDefaults.getExtraLibs()[e];return s?h.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},x=class extends S{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():h.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{h.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(h.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(h.editor.onWillDisposeModel(n)),this._disposables.push(h.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of h.editor.getModels())n(e)}});const o=()=>{for(const e of h.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),h.editor.getModels().forEach((e=>r(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=await Promise.all(i);if(!o||e.isDisposed())return;const a=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=a.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?h.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||h.editor.setModelMarkers(e,this._selector,a.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:o,column:a}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(h.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(h.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a,message:y(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:o,column:a}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:c,message:y(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return h.MarkerSeverity.Error;case 3:return h.MarkerSeverity.Info;case 0:return h.MarkerSeverity.Warning;case 2:return h.MarkerSeverity.Hint}return h.MarkerSeverity.Info}},k=class extends S{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const r=e.getWordUntilPosition(t),n=new h.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=e.uri,a=e.getOffsetAt(t),l=await this._worker(o);if(e.isDisposed())return;const c=await l.getCompletionsAtPosition(o.toString(),a);return c&&!e.isDisposed()?{suggestions:c.entries.map((i=>{let s=n;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),r=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new h.Range(t.lineNumber,t.column,r.lineNumber,r.column)}const r=[];return void 0!==i.kindModifiers&&-1!==i.kindModifiers.indexOf("deprecated")&&r.push(h.languages.CompletionItemTag.Deprecated),{uri:o,position:t,offset:a,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:k.convertKind(i.kind),tags:r}}))}:void 0}async resolveCompletionItem(e,t){const i=e,s=i.uri,r=i.position,n=i.offset,o=await this._worker(s),a=await o.getCompletionEntryDetails(s.toString(),n,i.label);return a?{uri:s,position:r,label:a.name,kind:k.convertKind(a.kind),detail:w(a.displayParts),documentation:{value:k.createDocumentationString(a)}}:i}static convertKind(e){switch(e){case P.primitiveType:case P.keyword:return h.languages.CompletionItemKind.Keyword;case P.variable:case P.localVariable:return h.languages.CompletionItemKind.Variable;case P.memberVariable:case P.memberGetAccessor:case P.memberSetAccessor:return h.languages.CompletionItemKind.Field;case P.function:case P.memberFunction:case P.constructSignature:case P.callSignature:case P.indexSignature:return h.languages.CompletionItemKind.Function;case P.enum:return h.languages.CompletionItemKind.Enum;case P.module:return h.languages.CompletionItemKind.Module;case P.class:return h.languages.CompletionItemKind.Class;case P.interface:return h.languages.CompletionItemKind.Interface;case P.warning:return h.languages.CompletionItemKind.File}return h.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${C(i)}`;return t}};function C(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var D=class extends S{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case h.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case h.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case h.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const a=await o.getSignatureHelpItems(r.toString(),n,{triggerReason:D._toSignatureHelpTriggerReason(s)});if(!a||e.isDisposed())return;const l={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]};return a.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:w(e.documentation)},t.label+=w(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=w(i.displayParts),o={label:n,documentation:{value:w(i.documentation)}};t.label+=n,t.parameters.push(o),s<r.length-1&&(t.label+=w(e.separatorDisplayParts))})),t.label+=w(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},F=class extends S{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getQuickInfoAtPosition(s.toString(),r);if(!o||e.isDisposed())return;const a=w(o.documentation),l=o.tags?o.tags.map((e=>C(e))).join("  \n\n"):"",c=w(o.displayParts);return{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:a+(l?"\n\n"+l:"")}]}}},A=class extends S{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);return o&&!e.isDisposed()?o.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?h.languages.DocumentHighlightKind.Write:h.languages.DocumentHighlightKind.Text}))))):void 0}},I=class extends S{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getDefinitionAtPosition(s.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>h.Uri.parse(e.fileName)))),e.isDisposed())return;const a=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&a.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return a}},L=class extends S{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const a=await o.getReferencesAtPosition(r.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>h.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of a){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},T=class extends S{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;const n=(t,i)=>{const s={name:t.text,detail:"",kind:O[t.kind]||h.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map((e=>n(e,s.name))),containerName:i};return s};return r.childItems?r.childItems.map((e=>n(e))):[]}},P=class{};g(P,"unknown",""),g(P,"keyword","keyword"),g(P,"script","script"),g(P,"module","module"),g(P,"class","class"),g(P,"interface","interface"),g(P,"type","type"),g(P,"enum","enum"),g(P,"variable","var"),g(P,"localVariable","local var"),g(P,"function","function"),g(P,"localFunction","local function"),g(P,"memberFunction","method"),g(P,"memberGetAccessor","getter"),g(P,"memberSetAccessor","setter"),g(P,"memberVariable","property"),g(P,"constructorImplementation","constructor"),g(P,"callSignature","call"),g(P,"indexSignature","index"),g(P,"constructSignature","construct"),g(P,"parameter","parameter"),g(P,"typeParameter","type parameter"),g(P,"primitiveType","primitive type"),g(P,"label","label"),g(P,"alias","alias"),g(P,"const","const"),g(P,"let","let"),g(P,"warning","warning");var O=Object.create(null);O[P.module]=h.languages.SymbolKind.Module,O[P.class]=h.languages.SymbolKind.Class,O[P.enum]=h.languages.SymbolKind.Enum,O[P.interface]=h.languages.SymbolKind.Interface,O[P.memberFunction]=h.languages.SymbolKind.Method,O[P.memberVariable]=h.languages.SymbolKind.Property,O[P.memberGetAccessor]=h.languages.SymbolKind.Property,O[P.memberSetAccessor]=h.languages.SymbolKind.Property,O[P.variable]=h.languages.SymbolKind.Variable,O[P.const]=h.languages.SymbolKind.Variable,O[P.localVariable]=h.languages.SymbolKind.Variable,O[P.variable]=h.languages.SymbolKind.Variable,O[P.function]=h.languages.SymbolKind.Function,O[P.localFunction]=h.languages.SymbolKind.Function;var N,M,K=class extends S{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},R=class extends K{async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getFormattingEditsForRange(r.toString(),n,o,K._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},E=class extends K{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,o=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const l=await a.getFormattingEditsAfterKeystroke(n.toString(),o,i,K._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},H=class extends K{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=K._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,o,l,a);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},V=class extends S{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),o=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getRenameInfo(n,o,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await a.findRenameLocations(n,o,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}},j=class extends S{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(s);return e.isDisposed()?null:{hints:(await a.provideInlayHints(r,n,o)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?h.languages.InlayHintKind.Parameter:h.languages.InlayHintKind.Type}};function W(e){M=z(e,"typescript")}function B(e){N=z(e,"javascript")}function U(){return new Promise(((e,t)=>{if(!N)return t("JavaScript not registered!");e(N)}))}function $(){return new Promise(((e,t)=>{if(!M)return t("TypeScript not registered!");e(M)}))}function z(e,t){const i=[],s=[],r=new f(t,e);i.push(r);const n=(...e)=>r.getLanguageServiceWorker(...e),o=new v(n);return function(){const{modeConfiguration:i}=e;q(s),i.completionItems&&s.push(h.languages.registerCompletionItemProvider(t,new k(n))),i.signatureHelp&&s.push(h.languages.registerSignatureHelpProvider(t,new D(n))),i.hovers&&s.push(h.languages.registerHoverProvider(t,new F(n))),i.documentHighlights&&s.push(h.languages.registerDocumentHighlightProvider(t,new A(n))),i.definitions&&s.push(h.languages.registerDefinitionProvider(t,new I(o,n))),i.references&&s.push(h.languages.registerReferenceProvider(t,new L(o,n))),i.documentSymbols&&s.push(h.languages.registerDocumentSymbolProvider(t,new T(n))),i.rename&&s.push(h.languages.registerRenameProvider(t,new V(o,n))),i.documentRangeFormattingEdits&&s.push(h.languages.registerDocumentRangeFormattingEditProvider(t,new R(n))),i.onTypeFormattingEdits&&s.push(h.languages.registerOnTypeFormattingEditProvider(t,new E(n))),i.codeActions&&s.push(h.languages.registerCodeActionProvider(t,new H(n))),i.inlayHints&&s.push(h.languages.registerInlayHintsProvider(t,new j(n))),i.diagnostics&&s.push(new x(o,e,t,n))}(),i.push(function(e){return{dispose:()=>q(e)}}(s)),n}function q(e){for(;e.length;)e.pop().dispose()}return(e=>d(r({},"__esModule",{value:!0}),e))(m)})()));
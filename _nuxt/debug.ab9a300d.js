import{A as a}from"./entry.2043473a.js";function d(t){let o=[],i=!1;const s=(u,l)=>{const{loc:e}=l,n=[`\u{1F511} ${u}`];e!=null&&e.file&&(n.push(""),n.push(`\u{1F517} ${e.file}`)),e!=null&&e.type&&(n.push(""),n.push(`\u2753 Missing token inside a ${e.type==="v"?"variant":"computed style or CSS prop"}.`)),o.push(n.join(`
`)),i||(a(()=>{console.log("\u{1F58C}\uFE0F Pinceau `runtime` encountered some errors!"),o.forEach(r=>{console.log(r)}),console.log("\u203C\uFE0F This warning will be hidden from production and can be disabled using `dev: false` option.")}),i=!0)};t.onNotFound=s}export{d as usePinceauRuntimeDebug};

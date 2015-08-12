# Result

```
Please be patient.
{ http_parser: '1.0',
  node: '0.10.40',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1p' }
Scores: (bigger is better)

xxhash
Raw:
 > 10.194624652455978
 > 10.166358595194085
 > 10.082493125572869
 > 9.881422924901186
Average (mean) 10.081224824531029

crypto
Raw:
 > 1.0235414534288638
 > 1.0515247108307044
 > 1.0341261633919339
 > 1.015228426395939
Average (mean) 1.0311051885118603

xxhashjs
Raw:
 > 0.17229496898690558
 > 0.16700066800267202
 > 0.168321831341525
 > 0.16957775139901646
Average (mean) 0.16929880493252975

Winner: xxhash
Compared with next highest (crypto), it's:
89.77% faster
9.78 times as fast
0.99 order(s) of magnitude faster
QUITE A BIT FASTER

Compared with the slowest (xxhashjs), it's:
98.32% faster
59.55 times as fast
1.77 order(s) of magnitude faster
```

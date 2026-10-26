# HPN Explorer: GitHub ਤੇ Vercel 'ਤੇ ਲਾਈਵ ਕਰਨ ਦੀ ਪੂਰੀ ਗਾਈਡ

## 1. ਇਸ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ Frontend ਤੇ Backend

- **Frontend** (ਸਾਈਟ 'ਤੇ ਆਉਣ ਵਾਲਾ ਜੋ ਦੇਖਦਾ ਹੈ): React + Vite + Tailwind। ਫਾਈਲਾਂ: `index.html`, `index.tsx`, `App.tsx`, `components/`, `constants.tsx` (ਸਾਰਾ ਡਾਟਾ), `pa-content.ts`, `i18n.ts`, `public/`।
- **Backend**: ਸਿਰਫ਼ ਇੱਕ ਫਾਈਲ `api/chat.js` (Vercel ਦਾ ਛੋਟਾ ਸਰਵਰ ਫੰਕਸ਼ਨ)। ਇਹ ਚੈਟ ਦਾ ਸਵਾਲ Gemini AI ਨੂੰ ਭੇਜਦੀ ਹੈ। ਗੁਪਤ ਕੁੰਜੀ (API key) ਇੱਥੇ ਹੀ ਰਹਿੰਦੀ ਹੈ।
- ਡਾਟਾਬੇਸ ਕੋਈ ਨਹੀਂ।

## 2. GitHub 'ਤੇ ਕਿਵੇਂ ਚੜ੍ਹਾਉਣਾ ਹੈ (ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ)

**ਕੰਪਿਊਟਰ (laptop/PC) ਵਰਤੋ।** ਮੋਬਾਈਲ ਦੇ GitHub ਵਿੱਚ ਫੋਲਡਰ ਅੱਪਲੋਡ ਨਹੀਂ ਹੁੰਦੇ, ਇਸੇ ਕਰਕੇ ਅਕਸਰ `components` ਵਰਗੇ ਫੋਲਡਰ ਰਹਿ ਜਾਂਦੇ ਹਨ।

1. zip 'ਤੇ ਸੱਜਾ ਕਲਿੱਕ → **Extract All (ਸਭ ਖੋਲ੍ਹੋ)**।
2. ਖੁੱਲ੍ਹੇ ਫੋਲਡਰ ਦੇ **ਅੰਦਰ ਜਾਓ**। ਸਾਹਮਣੇ ਇਹ ਦਿਸਣਾ ਚਾਹੀਦਾ ਹੈ: `package.json`, `index.html`, `App.tsx`, ਫੋਲਡਰ `components`, `api`, `public`, `services`।
3. github.com 'ਤੇ ਨਵੀਂ ਖਾਲੀ repository ਬਣਾਓ (ਨਾਮ: `hpn-explorer`)।
4. **"uploading an existing file"** ਲਿੰਕ ਦਬਾਓ।
5. ਫੋਲਡਰ ਦੇ ਅੰਦਰ Ctrl+A ਕਰਕੇ **ਸਭ ਕੁਝ ਚੁਣੋ** ਅਤੇ ਖਿੱਚ ਕੇ ਬਰਾਊਜ਼ਰ ਵਿੱਚ ਛੱਡ ਦਿਓ। (ਬਾਹਰਲਾ ਫੋਲਡਰ ਨਹੀਂ, ਉਸ ਦੇ ਅੰਦਰਲੀਆਂ ਚੀਜ਼ਾਂ।)
6. ਅੱਪਲੋਡ ਮੁੱਕਣ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰੋ, ਫਿਰ ਹੇਠਾਂ **Commit changes** ਦਬਾਓ।
7. repository ਦੇ ਮੁੱਖ ਪੰਨੇ 'ਤੇ `package.json` ਤੇ `components` ਫੋਲਡਰ ਦਿਸਣੇ ਚਾਹੀਦੇ ਹਨ। ਨਾ ਦਿਸਣ ਤਾਂ ਅਗਲੇ ਕਦਮ 'ਤੇ ਨਾ ਜਾਓ।

(ਬੋਨਸ: ਇਸ ਫੋਲਡਰ ਵਿੱਚ `.gitignore` ਨਾਮ ਦੀ ਲੁਕੀ ਫਾਈਲ ਹੈ, ਉਹ ਨਾ ਦਿਸੇ ਤਾਂ ਕੋਈ ਗੱਲ ਨਹੀਂ।)

## 3. Gemini API ਕੁੰਜੀ ਕਿੱਥੋਂ ਬਣਾਉਣੀ ਹੈ

1. aistudio.google.com ਖੋਲ੍ਹੋ ਤੇ Google ਖਾਤੇ ਨਾਲ ਲੌਗਇਨ ਕਰੋ।
2. ਖੱਬੇ ਪਾਸੇ **Get API key** → **Create API key**।
3. ਕੁੰਜੀ ਕਾਪੀ ਕਰ ਲਓ (`AIza...` ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ)। ਇਹ ਕਿਸੇ ਨੂੰ ਨਾ ਦਿਖਾਓ, ਨਾ GitHub ਜਾਂ ਕੋਡ ਵਿੱਚ ਲਿਖੋ।
4. ਮੁਫ਼ਤ ਵਰਤੋਂ ਦੀ ਹੱਦ ਹੁੰਦੀ ਹੈ। ਕਾਰਡ ਨਾ ਜੋੜੋ ਤਾਂ ਕੋਈ ਖਰਚਾ ਨਹੀਂ ਲੱਗਦਾ।

## 4. Vercel ਦੀਆਂ ਸੈਟਿੰਗਾਂ

vercel.com → **Continue with GitHub** → **Add New → Project** → ਆਪਣੀ `hpn-explorer` repository ਦੇ ਅੱਗੇ **Import**। ਫਿਰ:

| ਸੈਟਿੰਗ | ਕੀ ਰੱਖਣਾ ਹੈ |
|---|---|
| Framework Preset | **Vite** (ਆਪੇ ਚੁਣਿਆ ਜਾਂਦਾ ਹੈ) |
| Root Directory | **`./`** (ਖਾਲੀ/ਮੂਲ ਰੱਖੋ)। ਜੇ `package.json` ਕਿਸੇ ਅੰਦਰਲੇ ਫੋਲਡਰ ਵਿੱਚ ਚੜ੍ਹ ਗਈ ਹੈ ਤਾਂ Edit ਦਬਾ ਕੇ ਉਹ ਫੋਲਡਰ ਚੁਣੋ |
| Build Command | `npm run build` (ਮੂਲ ਰਹਿਣ ਦਿਓ) |
| Output Directory | `dist` |
| Install Command | `npm install` (ਮੂਲ) |
| Node.js Version | 20.x ਜਾਂ 22.x |

**Environment Variables** (ਡਿਪਲੌਏ ਤੋਂ ਪਹਿਲਾਂ ਇਸੇ ਪੰਨੇ 'ਤੇ):

| ਨਾਮ (Key) | ਮੁੱਲ (Value) |
|---|---|
| `GEMINI_API_KEY` | ਤੁਹਾਡੀ ਕੁੰਜੀ (`AIza...`) |

ਨਾਮ ਬਿਲਕੁਲ ਇਹੀ ਲਿਖੋ, ਵੱਡੇ ਅੱਖਰਾਂ ਵਿੱਚ, ਬਿਨਾਂ ਖਾਲੀ ਥਾਂ। ਫਿਰ **Deploy** ਦਬਾਓ।

ਚੈਟ ਦਾ AI ਮਾਡਲ ਹੁਣ `gemini-3.5-flash` ਹੈ। ਗੂਗਲ ਮਾਡਲ ਬਦਲਦਾ ਰਹਿੰਦਾ ਹੈ। ਕਦੇ ਚੈਟ "ਮਾਡਲ ਨਹੀਂ ਮਿਲਿਆ" ਦੱਸੇ ਤਾਂ ਕੋਡ ਛੇੜੇ ਬਿਨਾਂ Vercel ਵਿੱਚ ਇੱਕ ਹੋਰ ਵੇਰੀਏਬਲ `GEMINI_MODEL` ਬਣਾ ਕੇ ਨਵਾਂ ਮਾਡਲ ਨਾਮ ਪਾ ਦਿਓ।

## 5. ਕੁੰਜੀ ਬਾਅਦ ਵਿੱਚ ਪਾਈ ਜਾਂ ਬਦਲੀ ਤਾਂ

Vercel → ਪ੍ਰੋਜੈਕਟ → Settings → Environment Variables ਵਿੱਚ ਪਾਓ/ਬਦਲੋ। ਫਿਰ Deployments → ਸਭ ਤੋਂ ਨਵੇਂ ਦੇ ਅੱਗੇ ⋯ → **Redeploy**। (ਕੁੰਜੀ ਬਦਲਣ ਤੋਂ ਬਾਅਦ Redeploy ਬਿਨਾਂ ਨਹੀਂ ਚੱਲਦੀ।)

## 6. ਡਿਪਲੌਏ ਤੋਂ ਬਾਅਦ ਜਾਂਚ

- ਸਾਈਟ ਖੁੱਲ੍ਹੇ, ਜ਼ਿਲ੍ਹੇ ਖੁੱਲ੍ਹਣ, EN / ਪੰਜਾਬੀ ਬਟਨ ਚੱਲੇ।
- ਹੇਠਲੇ ਕੋਨੇ ਵਾਲਾ ਚੈਟ ਬਟਨ ਦਬਾ ਕੇ ਸਵਾਲ ਪੁੱਛੋ: "ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਕੀ ਦੇਖੀਏ?" ਜਵਾਬ ਆਵੇ ਤਾਂ ਸਭ ਪੱਕਾ।

## 7. ਆਮ ਗਲਤੀਆਂ ਤੇ ਹੱਲ

| ਗਲਤੀ | ਕਾਰਨ | ਹੱਲ |
|---|---|---|
| "Could not resolve ./components/ChatWidget" | `components` ਫੋਲਡਰ GitHub 'ਤੇ ਨਹੀਂ ਚੜ੍ਹਿਆ | ਪੰਨਾ 2 ਮੁੜ ਕਰੋ (ਕੰਪਿਊਟਰ ਤੋਂ) |
| "No package.json found" / ਬਿਲਡ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦੀ | ਫਾਈਲਾਂ ਕਿਸੇ ਅੰਦਰਲੇ ਫੋਲਡਰ ਵਿੱਚ ਚੜ੍ਹ ਗਈਆਂ | Root Directory ਵਿੱਚ ਉਹ ਫੋਲਡਰ ਚੁਣੋ, ਜਾਂ ਮੁੜ ਸਹੀ ਅੱਪਲੋਡ |
| ਚੈਟ: "Server is not configured" | `GEMINI_API_KEY` ਨਹੀਂ ਪਾਈ / ਨਾਮ ਗਲਤ | ਪੰਨਾ 5 ਕਰੋ |
| ਚੈਟ: "Failed to get response" | ਕੁੰਜੀ ਗਲਤ, ਮੁਫ਼ਤ ਹੱਦ ਮੁੱਕੀ, ਜਾਂ ਮਾਡਲ ਬੰਦ | Vercel → Logs ਦੇਖੋ; `GEMINI_MODEL` ਬਦਲੋ |
| ਜ਼ਿਲ੍ਹੇ ਦੇ ਲਿੰਕ ਰਿਫ੍ਰੈਸ਼ 'ਤੇ 404 | `vercel.json` ਨਹੀਂ ਚੜ੍ਹੀ | ਇਹ ਫਾਈਲ ਵੀ ਅੱਪਲੋਡ ਕਰੋ |

## 8. ਡੋਮੇਨ

Vercel → Settings → Domains → ਆਪਣਾ ਡੋਮੇਨ (ਜਿਵੇਂ hpnexplorer.in) ਜੋੜੋ। Vercel ਜੋ DNS ਰਿਕਾਰਡ ਦੱਸੇ, ਉਹ ਡੋਮੇਨ ਖਰੀਦਣ ਵਾਲੀ ਸਾਈਟ ਦੇ DNS ਪੰਨੇ ਵਿੱਚ ਪਾ ਦਿਓ।

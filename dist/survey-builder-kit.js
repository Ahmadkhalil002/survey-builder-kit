import * as e from "react";
import t, { createContext as n, forwardRef as r, memo as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useMemo as l, useReducer as u, useRef as d, useState as f } from "react";
import p from "@mui/material/Box";
import { ThemeProvider as m, alpha as h, createTheme as g } from "@mui/material/styles";
import _ from "@mui/material/CssBaseline";
import { CacheProvider as v } from "@emotion/react";
import y from "@emotion/cache";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
import { Alert as C, AlertTitle as w, AppBar as T, Autocomplete as E, Box as D, Button as O, Card as k, Checkbox as A, Chip as j, Collapse as M, Dialog as N, Divider as P, Drawer as F, FormControlLabel as I, IconButton as L, Link as ee, List as R, ListItem as z, ListItemButton as B, ListItemIcon as V, ListItemText as H, Menu as te, MenuItem as U, Paper as ne, Popover as W, Select as G, Slide as re, Snackbar as ie, Stack as K, Tab as ae, Tabs as oe, TextField as q, ToggleButton as se, ToggleButtonGroup as ce, Toolbar as le, Tooltip as ue, Typography as J, useTheme as de } from "@mui/material";
import fe from "@mui/material/Button";
import pe from "@mui/icons-material/ViewAgendaOutlined";
import me from "@mui/icons-material/AccountTreeOutlined";
import he from "@mui/icons-material/Undo";
import ge from "@mui/icons-material/Redo";
import _e from "@mui/icons-material/Visibility";
import ve from "@mui/icons-material/MoreHoriz";
import ye from "@mui/icons-material/CloudDone";
import be from "@mui/icons-material/CloudUpload";
import xe from "@mui/icons-material/ErrorOutline";
import Y from "@mui/icons-material/Download";
import Se from "@mui/icons-material/DashboardOutlined";
import Ce from "@mui/icons-material/Close";
import we from "@mui/material/CircularProgress";
import X from "@mui/icons-material/ArrowBack";
import Te from "@mui/icons-material/ArrowForward";
import Ee from "@mui/icons-material/KeyboardReturn";
import De from "@mui/icons-material/Check";
import Oe from "@mui/icons-material/WarningAmber";
import ke from "@mui/icons-material/CheckCircle";
import { createPortal as Ae, unstable_batchedUpdates as je } from "react-dom";
import Me from "@mui/icons-material/Add";
import Ne from "@mui/icons-material/DeleteOutline";
import Pe from "@mui/icons-material/ExpandMore";
import Fe from "@mui/icons-material/DragIndicator";
import Ie from "@mui/icons-material/SwapVert";
import Le from "@mui/icons-material/PlayArrow";
import Re from "@mui/icons-material/PlayCircleOutline";
import ze from "@mui/icons-material/DescriptionOutlined";
import Be from "@mui/icons-material/CallSplit";
import Ve from "@mui/icons-material/ShortText";
import He from "@mui/icons-material/Notes";
import Ue from "@mui/icons-material/RadioButtonChecked";
import We from "@mui/icons-material/CheckBox";
import Ge from "@mui/icons-material/StarRate";
import Ke from "@mui/icons-material/Speed";
import qe from "@mui/icons-material/Numbers";
import Je from "@mui/icons-material/ToggleOn";
import Ye from "@mui/icons-material/CalendarToday";
import Xe from "@mui/icons-material/Title";
import Ze from "@mui/icons-material/ShieldOutlined";
import Qe from "@mui/icons-material/ContentCopy";
import $e from "@mui/icons-material/ArrowUpward";
import et from "@mui/icons-material/ArrowDownward";
import tt from "@mui/icons-material/EditOutlined";
import nt from "@mui/icons-material/CheckCircleOutline";
import rt from "@mui/icons-material/Link";
//#region \0rolldown/runtime.js
var it = Object.create, at = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, st = Object.getOwnPropertyNames, ct = Object.getPrototypeOf, lt = Object.prototype.hasOwnProperty, ut = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Z = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), dt = (e, t) => {
	let n = {};
	for (var r in e) at(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || at(n, Symbol.toStringTag, { value: "Module" }), n;
}, ft = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = st(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !lt.call(e, s) && s !== n && at(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ot(t, s)) || r.enumerable
	});
	return e;
}, pt = (e, t, n) => (n = e == null ? {} : it(ct(e)), ft(t || !e || !e.__esModule || !lt.call(e, "default") ? at(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), mt = (e) => lt.call(e, "module.exports") ? e["module.exports"] : ft(at({}, "__esModule", { value: !0 }), e), ht = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), gt = {
	warningBanner: {
		bg: "#fffbeb",
		border: "#fde68a",
		iconBg: "#fef3c7",
		icon: "#d97706",
		textStrong: "#78350f",
		text: "#92400e"
	},
	successBanner: {
		bg: "#ecfdf5",
		text: "#10b981"
	}
}, _t = "0 1px 2px rgba(16,24,40,0.04)", vt = "#4f46e5";
function yt(e) {
	return g({
		custom: gt,
		palette: {
			text: {
				primary: "#14171f",
				secondary: "#6b7280",
				disabled: "#94a3b8"
			},
			divider: "#e2e8f0",
			background: {
				default: "#f8fafc",
				paper: "#ffffff"
			},
			primary: e ? { main: e } : {
				main: vt,
				dark: "#4338ca",
				light: "#eef2ff",
				contrastText: "#ffffff"
			},
			warning: {
				main: "#d97706",
				light: "#fde68a",
				dark: "#92400e"
			},
			success: {
				main: "#10b981",
				light: "#ecfdf5"
			}
		},
		shape: { borderRadius: 10 },
		typography: { fontFamily: "\"Plus Jakarta Sans\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif" },
		components: {
			MuiPaper: { styleOverrides: {
				root: { backgroundImage: "none" },
				outlined: { boxShadow: _t }
			} },
			MuiCard: { styleOverrides: { root: {
				boxShadow: _t,
				borderRadius: 14
			} } },
			MuiButton: { styleOverrides: { root: {
				borderRadius: 8,
				textTransform: "none",
				fontWeight: 600
			} } },
			MuiChip: { styleOverrides: { root: {
				borderRadius: 6,
				fontWeight: 500
			} } },
			MuiAppBar: { styleOverrides: { root: { boxShadow: "none" } } }
		}
	});
}
yt();
//#endregion
//#region ../../node_modules/zustand/esm/vanilla.mjs
var bt = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, xt = ((e) => e ? bt(e) : bt);
//#endregion
//#region src/types/survey.ts
function St(e) {
	return e.logic !== void 0;
}
var Ct = 1, wt = /* @__PURE__ */ Z(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Tt = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Et = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Tt()(Object.keys, Object);
})), Dt = /* @__PURE__ */ Z(((e, t) => {
	var n = wt(), r = Et(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Ot = /* @__PURE__ */ Z(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), kt = /* @__PURE__ */ Z(((e, t) => {
	var n = Ot(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), At = /* @__PURE__ */ Z(((e, t) => {
	t.exports = kt().Symbol;
})), jt = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), Mt = /* @__PURE__ */ Z(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), Nt = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = jt(), i = Mt(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), Pt = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), Ft = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Pt(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), It = /* @__PURE__ */ Z(((e, t) => {
	t.exports = kt()["__core-js_shared__"];
})), Lt = /* @__PURE__ */ Z(((e, t) => {
	var n = It(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), Rt = /* @__PURE__ */ Z(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), zt = /* @__PURE__ */ Z(((e, t) => {
	var n = Ft(), r = Lt(), i = Pt(), a = Rt(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), Bt = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), Vt = /* @__PURE__ */ Z(((e, t) => {
	var n = zt(), r = Bt();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), Ht = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(kt(), "DataView");
})), Ut = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(kt(), "Map");
})), Wt = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(kt(), "Promise");
})), Gt = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(kt(), "Set");
})), Kt = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(kt(), "WeakMap");
})), qt = /* @__PURE__ */ Z(((e, t) => {
	var n = Ht(), r = Ut(), i = Wt(), a = Gt(), o = Kt(), s = Nt(), c = Rt(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Jt = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), Yt = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Jt(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), Xt = /* @__PURE__ */ Z(((e, t) => {
	var n = Yt(), r = Jt(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), Zt = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Array.isArray;
})), Qt = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), $t = /* @__PURE__ */ Z(((e, t) => {
	var n = Ft(), r = Qt();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), en = /* @__PURE__ */ Z(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), tn = /* @__PURE__ */ Z(((e, t) => {
	var n = kt(), r = en(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), nn = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Qt(), i = Jt(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), rn = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), an = /* @__PURE__ */ Z(((e, t) => {
	var n = Ot(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), on = /* @__PURE__ */ Z(((e, t) => {
	var n = nn(), r = rn(), i = an(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), sn = /* @__PURE__ */ Z(((e, t) => {
	var n = Dt(), r = qt(), i = Xt(), a = Zt(), o = $t(), s = tn(), c = wt(), l = on(), u = "[object Map]", d = "[object Set]", f = Object.prototype.hasOwnProperty;
	function p(e) {
		if (e == null) return !0;
		if (o(e) && (a(e) || typeof e == "string" || typeof e.splice == "function" || s(e) || l(e) || i(e))) return !e.length;
		var t = r(e);
		if (t == u || t == d) return !e.size;
		if (c(e)) return !n(e).length;
		for (var p in e) if (f.call(e, p)) return !1;
		return !0;
	}
	t.exports = p;
})), cn = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n, r) {
		var i = -1, a = e == null ? 0 : e.length;
		for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
		return n;
	}
	t.exports = n;
})), ln = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return function(t) {
			return e?.[t];
		};
	}
	t.exports = n;
})), un = /* @__PURE__ */ Z(((e, t) => {
	t.exports = ln()({
		À: "A",
		Á: "A",
		Â: "A",
		Ã: "A",
		Ä: "A",
		Å: "A",
		à: "a",
		á: "a",
		â: "a",
		ã: "a",
		ä: "a",
		å: "a",
		Ç: "C",
		ç: "c",
		Ð: "D",
		ð: "d",
		È: "E",
		É: "E",
		Ê: "E",
		Ë: "E",
		è: "e",
		é: "e",
		ê: "e",
		ë: "e",
		Ì: "I",
		Í: "I",
		Î: "I",
		Ï: "I",
		ì: "i",
		í: "i",
		î: "i",
		ï: "i",
		Ñ: "N",
		ñ: "n",
		Ò: "O",
		Ó: "O",
		Ô: "O",
		Õ: "O",
		Ö: "O",
		Ø: "O",
		ò: "o",
		ó: "o",
		ô: "o",
		õ: "o",
		ö: "o",
		ø: "o",
		Ù: "U",
		Ú: "U",
		Û: "U",
		Ü: "U",
		ù: "u",
		ú: "u",
		û: "u",
		ü: "u",
		Ý: "Y",
		ý: "y",
		ÿ: "y",
		Æ: "Ae",
		æ: "ae",
		Þ: "Th",
		þ: "th",
		ß: "ss",
		Ā: "A",
		Ă: "A",
		Ą: "A",
		ā: "a",
		ă: "a",
		ą: "a",
		Ć: "C",
		Ĉ: "C",
		Ċ: "C",
		Č: "C",
		ć: "c",
		ĉ: "c",
		ċ: "c",
		č: "c",
		Ď: "D",
		Đ: "D",
		ď: "d",
		đ: "d",
		Ē: "E",
		Ĕ: "E",
		Ė: "E",
		Ę: "E",
		Ě: "E",
		ē: "e",
		ĕ: "e",
		ė: "e",
		ę: "e",
		ě: "e",
		Ĝ: "G",
		Ğ: "G",
		Ġ: "G",
		Ģ: "G",
		ĝ: "g",
		ğ: "g",
		ġ: "g",
		ģ: "g",
		Ĥ: "H",
		Ħ: "H",
		ĥ: "h",
		ħ: "h",
		Ĩ: "I",
		Ī: "I",
		Ĭ: "I",
		Į: "I",
		İ: "I",
		ĩ: "i",
		ī: "i",
		ĭ: "i",
		į: "i",
		ı: "i",
		Ĵ: "J",
		ĵ: "j",
		Ķ: "K",
		ķ: "k",
		ĸ: "k",
		Ĺ: "L",
		Ļ: "L",
		Ľ: "L",
		Ŀ: "L",
		Ł: "L",
		ĺ: "l",
		ļ: "l",
		ľ: "l",
		ŀ: "l",
		ł: "l",
		Ń: "N",
		Ņ: "N",
		Ň: "N",
		Ŋ: "N",
		ń: "n",
		ņ: "n",
		ň: "n",
		ŋ: "n",
		Ō: "O",
		Ŏ: "O",
		Ő: "O",
		ō: "o",
		ŏ: "o",
		ő: "o",
		Ŕ: "R",
		Ŗ: "R",
		Ř: "R",
		ŕ: "r",
		ŗ: "r",
		ř: "r",
		Ś: "S",
		Ŝ: "S",
		Ş: "S",
		Š: "S",
		ś: "s",
		ŝ: "s",
		ş: "s",
		š: "s",
		Ţ: "T",
		Ť: "T",
		Ŧ: "T",
		ţ: "t",
		ť: "t",
		ŧ: "t",
		Ũ: "U",
		Ū: "U",
		Ŭ: "U",
		Ů: "U",
		Ű: "U",
		Ų: "U",
		ũ: "u",
		ū: "u",
		ŭ: "u",
		ů: "u",
		ű: "u",
		ų: "u",
		Ŵ: "W",
		ŵ: "w",
		Ŷ: "Y",
		ŷ: "y",
		Ÿ: "Y",
		Ź: "Z",
		Ż: "Z",
		Ž: "Z",
		ź: "z",
		ż: "z",
		ž: "z",
		Ĳ: "IJ",
		ĳ: "ij",
		Œ: "Oe",
		œ: "oe",
		ŉ: "'n",
		ſ: "s"
	});
})), dn = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	t.exports = n;
})), fn = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Jt(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), pn = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = dn(), i = Zt(), a = fn(), o = 1 / 0, s = n ? n.prototype : void 0, c = s ? s.toString : void 0;
	function l(e) {
		if (typeof e == "string") return e;
		if (i(e)) return r(e, l) + "";
		if (a(e)) return c ? c.call(e) : "";
		var t = e + "";
		return t == "0" && 1 / e == -o ? "-0" : t;
	}
	t.exports = l;
})), mn = /* @__PURE__ */ Z(((e, t) => {
	var n = pn();
	function r(e) {
		return e == null ? "" : n(e);
	}
	t.exports = r;
})), hn = /* @__PURE__ */ Z(((e, t) => {
	var n = un(), r = mn(), i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
	function o(e) {
		return e = r(e), e && e.replace(i, n).replace(a, "");
	}
	t.exports = o;
})), gn = /* @__PURE__ */ Z(((e, t) => {
	var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	function r(e) {
		return e.match(n) || [];
	}
	t.exports = r;
})), _n = /* @__PURE__ */ Z(((e, t) => {
	var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	function r(e) {
		return n.test(e);
	}
	t.exports = r;
})), vn = /* @__PURE__ */ Z(((e, t) => {
	var n = "\\ud800-\\udfff", r = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", i = "\\u2700-\\u27bf", a = "a-z\\xdf-\\xf6\\xf8-\\xff", o = "\\xac\\xb1\\xd7\\xf7", s = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", c = "\\u2000-\\u206f", l = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", u = "A-Z\\xc0-\\xd6\\xd8-\\xde", d = "\\ufe0e\\ufe0f", f = o + s + c + l, p = "['’]", m = "[" + f + "]", h = "[" + r + "]", g = "\\d+", _ = "[" + i + "]", v = "[" + a + "]", y = "[^" + n + f + g + i + a + u + "]", b = "(?:" + h + "|\\ud83c[\\udffb-\\udfff])", x = "[^" + n + "]", S = "(?:\\ud83c[\\udde6-\\uddff]){2}", C = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "[" + u + "]", T = "\\u200d", E = "(?:" + v + "|" + y + ")", D = "(?:" + w + "|" + y + ")", O = "(?:" + p + "(?:d|ll|m|re|s|t|ve))?", k = "(?:" + p + "(?:D|LL|M|RE|S|T|VE))?", A = b + "?", j = "[" + d + "]?", M = "(?:" + T + "(?:" + [
		x,
		S,
		C
	].join("|") + ")" + j + A + ")*", N = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", P = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", F = j + A + M, I = "(?:" + [
		_,
		S,
		C
	].join("|") + ")" + F, L = RegExp([
		w + "?" + v + "+" + O + "(?=" + [
			m,
			w,
			"$"
		].join("|") + ")",
		D + "+" + k + "(?=" + [
			m,
			w + E,
			"$"
		].join("|") + ")",
		w + "?" + E + "+" + O,
		w + "+" + k,
		P,
		N,
		g,
		I
	].join("|"), "g");
	function ee(e) {
		return e.match(L) || [];
	}
	t.exports = ee;
})), yn = /* @__PURE__ */ Z(((e, t) => {
	var n = gn(), r = _n(), i = mn(), a = vn();
	function o(e, t, o) {
		return e = i(e), t = o ? void 0 : t, t === void 0 ? r(e) ? a(e) : n(e) : e.match(t) || [];
	}
	t.exports = o;
})), bn = /* @__PURE__ */ Z(((e, t) => {
	var n = cn(), r = hn(), i = yn(), a = RegExp("['’]", "g");
	function o(e) {
		return function(t) {
			return n(i(r(t).replace(a, "")), e, "");
		};
	}
	t.exports = o;
})), xn = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		var r = -1, i = e.length;
		t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
		for (var a = Array(i); ++r < i;) a[r] = e[r + t];
		return a;
	}
	t.exports = n;
})), Sn = /* @__PURE__ */ Z(((e, t) => {
	var n = xn();
	function r(e, t, r) {
		var i = e.length;
		return r = r === void 0 ? i : r, !t && r >= i ? e : n(e, t, r);
	}
	t.exports = r;
})), Cn = /* @__PURE__ */ Z(((e, t) => {
	var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
	function r(e) {
		return n.test(e);
	}
	t.exports = r;
})), wn = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e.split("");
	}
	t.exports = n;
})), Tn = /* @__PURE__ */ Z(((e, t) => {
	var n = "\\ud800-\\udfff", r = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", i = "\\ufe0e\\ufe0f", a = "[" + n + "]", o = "[" + r + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + o + "|" + s + ")", l = "[^" + n + "]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "\\u200d", p = c + "?", m = "[" + i + "]?", h = "(?:" + f + "(?:" + [
		l,
		u,
		d
	].join("|") + ")" + m + p + ")*", g = m + p + h, _ = "(?:" + [
		l + o + "?",
		o,
		u,
		d,
		a
	].join("|") + ")", v = RegExp(s + "(?=" + s + ")|" + _ + g, "g");
	function y(e) {
		return e.match(v) || [];
	}
	t.exports = y;
})), En = /* @__PURE__ */ Z(((e, t) => {
	var n = wn(), r = Cn(), i = Tn();
	function a(e) {
		return r(e) ? i(e) : n(e);
	}
	t.exports = a;
})), Dn = /* @__PURE__ */ Z(((e, t) => {
	var n = Sn(), r = Cn(), i = En(), a = mn();
	function o(e) {
		return function(t) {
			t = a(t);
			var o = r(t) ? i(t) : void 0, s = o ? o[0] : t.charAt(0), c = o ? n(o, 1).join("") : t.slice(1);
			return s[e]() + c;
		};
	}
	t.exports = o;
})), On = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Dn()("toUpperCase");
})), kn = /* @__PURE__ */ Z(((e, t) => {
	var n = bn(), r = On();
	t.exports = n(function(e, t, n) {
		return e + (n ? " " : "") + r(t);
	});
})), An = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), jn = /* @__PURE__ */ Z(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), Mn = /* @__PURE__ */ Z(((e, t) => {
	var n = An(), r = Xt(), i = Zt(), a = tn(), o = jn(), s = on(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), Nn = /* @__PURE__ */ Z(((e, t) => {
	var n = Mn(), r = Dt(), i = $t();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), Pn = /* @__PURE__ */ Z(((e, t) => {
	var n = Math.ceil, r = Math.max;
	function i(e, t, i, a) {
		for (var o = -1, s = r(n((t - e) / (i || 1)), 0), c = Array(s); s--;) c[a ? s : ++o] = e, e += i;
		return c;
	}
	t.exports = i;
})), Fn = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), In = /* @__PURE__ */ Z(((e, t) => {
	var n = Fn(), r = $t(), i = jn(), a = Pt();
	function o(e, t, o) {
		if (!a(o)) return !1;
		var s = typeof t;
		return (s == "number" ? r(o) && i(t, o.length) : s == "string" && t in o) ? n(o[t], e) : !1;
	}
	t.exports = o;
})), Ln = /* @__PURE__ */ Z(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), Rn = /* @__PURE__ */ Z(((e, t) => {
	var n = Ln(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), zn = /* @__PURE__ */ Z(((e, t) => {
	var n = Rn(), r = Pt(), i = fn(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if (typeof e == "number") return e;
		if (i(e)) return a;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var u = s.test(e);
		return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? a : +e;
	}
	t.exports = u;
})), Bn = /* @__PURE__ */ Z(((e, t) => {
	var n = zn(), r = 1 / 0, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Vn = /* @__PURE__ */ Z(((e, t) => {
	var n = Pn(), r = In(), i = Bn();
	function a(e) {
		return function(t, a, o) {
			return o && typeof o != "number" && r(t, a, o) && (a = o = void 0), t = i(t), a === void 0 ? (a = t, t = 0) : a = i(a), o = o === void 0 ? t < a ? 1 : -1 : i(o), n(t, a, o, e);
		};
	}
	t.exports = a;
})), Hn = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vn()();
})), Un = /* @__PURE__ */ Z(((e, t) => {
	var n = Zt(), r = fn(), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
	function o(e, t) {
		if (n(e)) return !1;
		var o = typeof e;
		return o == "number" || o == "symbol" || o == "boolean" || e == null || r(e) ? !0 : a.test(e) || !i.test(e) || t != null && e in Object(t);
	}
	t.exports = o;
})), Wn = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Vt()(Object, "create");
})), Gn = /* @__PURE__ */ Z(((e, t) => {
	var n = Wn();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), Kn = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), qn = /* @__PURE__ */ Z(((e, t) => {
	var n = Wn(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Jn = /* @__PURE__ */ Z(((e, t) => {
	var n = Wn(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), Yn = /* @__PURE__ */ Z(((e, t) => {
	var n = Wn(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Xn = /* @__PURE__ */ Z(((e, t) => {
	var n = Gn(), r = Kn(), i = qn(), a = Jn(), o = Yn();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Zn = /* @__PURE__ */ Z(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), Qn = /* @__PURE__ */ Z(((e, t) => {
	var n = Fn();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), $n = /* @__PURE__ */ Z(((e, t) => {
	var n = Qn(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), er = /* @__PURE__ */ Z(((e, t) => {
	var n = Qn();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), tr = /* @__PURE__ */ Z(((e, t) => {
	var n = Qn();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), nr = /* @__PURE__ */ Z(((e, t) => {
	var n = Qn();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), rr = /* @__PURE__ */ Z(((e, t) => {
	var n = Zn(), r = $n(), i = er(), a = tr(), o = nr();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ir = /* @__PURE__ */ Z(((e, t) => {
	var n = Xn(), r = rr(), i = Ut();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), ar = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), or = /* @__PURE__ */ Z(((e, t) => {
	var n = ar();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), sr = /* @__PURE__ */ Z(((e, t) => {
	var n = or();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), cr = /* @__PURE__ */ Z(((e, t) => {
	var n = or();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), lr = /* @__PURE__ */ Z(((e, t) => {
	var n = or();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), ur = /* @__PURE__ */ Z(((e, t) => {
	var n = or();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), dr = /* @__PURE__ */ Z(((e, t) => {
	var n = ir(), r = sr(), i = cr(), a = lr(), o = ur();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), fr = /* @__PURE__ */ Z(((e, t) => {
	var n = dr(), r = "Expected a function";
	function i(e, t) {
		if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(r);
		var a = function() {
			var n = arguments, r = t ? t.apply(this, n) : n[0], i = a.cache;
			if (i.has(r)) return i.get(r);
			var o = e.apply(this, n);
			return a.cache = i.set(r, o) || i, o;
		};
		return a.cache = new (i.Cache || n)(), a;
	}
	i.Cache = n, t.exports = i;
})), pr = /* @__PURE__ */ Z(((e, t) => {
	var n = fr(), r = 500;
	function i(e) {
		var t = n(e, function(e) {
			return i.size === r && i.clear(), e;
		}), i = t.cache;
		return t;
	}
	t.exports = i;
})), mr = /* @__PURE__ */ Z(((e, t) => {
	var n = pr(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g;
	t.exports = n(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(r, function(e, n, r, a) {
			t.push(r ? a.replace(i, "$1") : n || e);
		}), t;
	});
})), hr = /* @__PURE__ */ Z(((e, t) => {
	var n = Zt(), r = Un(), i = mr(), a = mn();
	function o(e, t) {
		return n(e) ? e : r(e, t) ? [e] : i(a(e));
	}
	t.exports = o;
})), gr = /* @__PURE__ */ Z(((e, t) => {
	var n = fn(), r = 1 / 0;
	function i(e) {
		if (typeof e == "string" || n(e)) return e;
		var t = e + "";
		return t == "0" && 1 / e == -r ? "-0" : t;
	}
	t.exports = i;
})), _r = /* @__PURE__ */ Z(((e, t) => {
	var n = hr(), r = gr();
	function i(e, t) {
		t = n(t, e);
		for (var i = 0, a = t.length; e != null && i < a;) e = e[r(t[i++])];
		return i && i == a ? e : void 0;
	}
	t.exports = i;
})), vr = /* @__PURE__ */ Z(((e, t) => {
	var n = _r();
	function r(e, t, r) {
		var i = e == null ? void 0 : n(e, t);
		return i === void 0 ? r : i;
	}
	t.exports = r;
})), yr = /* @__PURE__ */ Z(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e, t) {
		return e != null && n.call(e, t);
	}
	t.exports = r;
})), br = /* @__PURE__ */ Z(((e, t) => {
	var n = hr(), r = Xt(), i = Zt(), a = jn(), o = Qt(), s = gr();
	function c(e, t, c) {
		t = n(t, e);
		for (var l = -1, u = t.length, d = !1; ++l < u;) {
			var f = s(t[l]);
			if (!(d = e != null && c(e, f))) break;
			e = e[f];
		}
		return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && o(u) && a(f, u) && (i(e) || r(e)));
	}
	t.exports = c;
})), xr = /* @__PURE__ */ Z(((e, t) => {
	var n = yr(), r = br();
	function i(e, t) {
		return e != null && r(e, t, n);
	}
	t.exports = i;
})), Sr = /* @__PURE__ */ Z(((e, t) => {
	var n = rr();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), Cr = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), wr = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), Tr = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Er = /* @__PURE__ */ Z(((e, t) => {
	var n = rr(), r = Ut(), i = dr(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), Dr = /* @__PURE__ */ Z(((e, t) => {
	var n = rr(), r = Sr(), i = Cr(), a = wr(), o = Tr(), s = Er();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Or = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), kr = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Ar = /* @__PURE__ */ Z(((e, t) => {
	var n = dr(), r = Or(), i = kr();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), jr = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), Mr = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), Nr = /* @__PURE__ */ Z(((e, t) => {
	var n = Ar(), r = jr(), i = Mr(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), Pr = /* @__PURE__ */ Z(((e, t) => {
	t.exports = kt().Uint8Array;
})), Fr = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), Ir = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), Lr = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = Pr(), i = Fn(), a = Nr(), o = Fr(), s = Ir(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var O = T.get(e);
				if (O) return O == t;
				x |= l, T.set(e, t);
				var k = a(E(e), E(t), x, C, w, T);
				return T.delete(e), k;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), Rr = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), zr = /* @__PURE__ */ Z(((e, t) => {
	var n = Rr(), r = Zt();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), Br = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), Vr = /* @__PURE__ */ Z(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), Hr = /* @__PURE__ */ Z(((e, t) => {
	var n = Br(), r = Vr(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), Ur = /* @__PURE__ */ Z(((e, t) => {
	var n = zr(), r = Hr(), i = Nn();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), Wr = /* @__PURE__ */ Z(((e, t) => {
	var n = Ur(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), Gr = /* @__PURE__ */ Z(((e, t) => {
	var n = Dr(), r = Nr(), i = Lr(), a = Wr(), o = qt(), s = Zt(), c = tn(), l = on(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var O = E ? e.value() : e, k = D ? t.value() : t;
				return v ||= new n(), _(O, k, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), Kr = /* @__PURE__ */ Z(((e, t) => {
	var n = Gr(), r = Jt();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), qr = /* @__PURE__ */ Z(((e, t) => {
	var n = Dr(), r = Kr(), i = 1, a = 2;
	function o(e, t, o, s) {
		var c = o.length, l = c, u = !s;
		if (e == null) return !l;
		for (e = Object(e); c--;) {
			var d = o[c];
			if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
		}
		for (; ++c < l;) {
			d = o[c];
			var f = d[0], p = e[f], m = d[1];
			if (u && d[2]) {
				if (p === void 0 && !(f in e)) return !1;
			} else {
				var h = new n();
				if (s) var g = s(p, m, f, e, t, h);
				if (!(g === void 0 ? r(m, p, i | a, s, h) : g)) return !1;
			}
		}
		return !0;
	}
	t.exports = o;
})), Jr = /* @__PURE__ */ Z(((e, t) => {
	var n = Pt();
	function r(e) {
		return e === e && !n(e);
	}
	t.exports = r;
})), Yr = /* @__PURE__ */ Z(((e, t) => {
	var n = Jr(), r = Nn();
	function i(e) {
		for (var t = r(e), i = t.length; i--;) {
			var a = t[i], o = e[a];
			t[i] = [
				a,
				o,
				n(o)
			];
		}
		return t;
	}
	t.exports = i;
})), Xr = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return function(n) {
			return n != null && n[e] === t && (t !== void 0 || e in Object(n));
		};
	}
	t.exports = n;
})), Zr = /* @__PURE__ */ Z(((e, t) => {
	var n = qr(), r = Yr(), i = Xr();
	function a(e) {
		var t = r(e);
		return t.length == 1 && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
			return r === e || n(r, e, t);
		};
	}
	t.exports = a;
})), Qr = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e != null && t in Object(e);
	}
	t.exports = n;
})), $r = /* @__PURE__ */ Z(((e, t) => {
	var n = Qr(), r = br();
	function i(e, t) {
		return e != null && r(e, t, n);
	}
	t.exports = i;
})), ei = /* @__PURE__ */ Z(((e, t) => {
	var n = Kr(), r = vr(), i = $r(), a = Un(), o = Jr(), s = Xr(), c = gr(), l = 1, u = 2;
	function d(e, t) {
		return a(e) && o(t) ? s(c(e), t) : function(a) {
			var o = r(a, e);
			return o === void 0 && o === t ? i(a, e) : n(t, o, l | u);
		};
	}
	t.exports = d;
})), ti = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})), ni = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return function(t) {
			return t?.[e];
		};
	}
	t.exports = n;
})), ri = /* @__PURE__ */ Z(((e, t) => {
	var n = _r();
	function r(e) {
		return function(t) {
			return n(t, e);
		};
	}
	t.exports = r;
})), ii = /* @__PURE__ */ Z(((e, t) => {
	var n = ni(), r = ri(), i = Un(), a = gr();
	function o(e) {
		return i(e) ? n(a(e)) : r(e);
	}
	t.exports = o;
})), ai = /* @__PURE__ */ Z(((e, t) => {
	var n = Zr(), r = ei(), i = ti(), a = Zt(), o = ii();
	function s(e) {
		return typeof e == "function" ? e : e == null ? i : typeof e == "object" ? a(e) ? r(e[0], e[1]) : n(e) : o(e);
	}
	t.exports = s;
})), oi = /* @__PURE__ */ Z(((e, t) => {
	var n = ai(), r = $t(), i = Nn();
	function a(e) {
		return function(t, a, o) {
			var s = Object(t);
			if (!r(t)) {
				var c = n(a, 3);
				t = i(t), a = function(e) {
					return c(s[e], e, s);
				};
			}
			var l = e(t, a, o);
			return l > -1 ? s[c ? t[l] : l] : void 0;
		};
	}
	t.exports = a;
})), si = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n, r) {
		for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
		return -1;
	}
	t.exports = n;
})), ci = /* @__PURE__ */ Z(((e, t) => {
	var n = Bn();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), li = /* @__PURE__ */ Z(((e, t) => {
	var n = si(), r = ai(), i = ci(), a = Math.max;
	function o(e, t, o) {
		var s = e == null ? 0 : e.length;
		if (!s) return -1;
		var c = o == null ? 0 : i(o);
		return c < 0 && (c = a(s + c, 0)), n(e, r(t, 3), c);
	}
	t.exports = o;
})), ui = /* @__PURE__ */ Z(((e, t) => {
	t.exports = oi()(li());
})), di = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e !== e;
	}
	t.exports = n;
})), fi = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
		return -1;
	}
	t.exports = n;
})), pi = /* @__PURE__ */ Z(((e, t) => {
	var n = si(), r = di(), i = fi();
	function a(e, t, a) {
		return t === t ? i(e, t, a) : n(e, r, a);
	}
	t.exports = a;
})), mi = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Zt(), i = Jt(), a = "[object String]";
	function o(e) {
		return typeof e == "string" || !r(e) && i(e) && n(e) == a;
	}
	t.exports = o;
})), hi = /* @__PURE__ */ Z(((e, t) => {
	var n = dn();
	function r(e, t) {
		return n(t, function(t) {
			return e[t];
		});
	}
	t.exports = r;
})), gi = /* @__PURE__ */ Z(((e, t) => {
	var n = hi(), r = Nn();
	function i(e) {
		return e == null ? [] : n(e, r(e));
	}
	t.exports = i;
})), _i = /* @__PURE__ */ Z(((e, t) => {
	var n = pi(), r = $t(), i = mi(), a = ci(), o = gi(), s = Math.max;
	function c(e, t, c, l) {
		e = r(e) ? e : o(e), c = c && !l ? a(c) : 0;
		var u = e.length;
		return c < 0 && (c = s(u + c, 0)), i(e) ? c <= u && e.indexOf(t, c) > -1 : !!u && n(e, t, c) > -1;
	}
	t.exports = c;
})), vi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
	var t = class {};
	e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var n = class extends t {
		constructor(t) {
			if (super(), !e.IDENTIFIER.test(t)) throw Error("CodeGen: name must be a valid identifier");
			this.str = t;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			return !1;
		}
		get names() {
			return { [this.str]: 1 };
		}
	};
	e.Name = n;
	var r = class extends t {
		constructor(e) {
			super(), this._items = typeof e == "string" ? [e] : e;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			if (this._items.length > 1) return !1;
			let e = this._items[0];
			return e === "" || e === "\"\"";
		}
		get str() {
			return this._str ??= this._items.reduce((e, t) => `${e}${t}`, "");
		}
		get names() {
			return this._names ??= this._items.reduce((e, t) => (t instanceof n && (e[t.str] = (e[t.str] || 0) + 1), e), {});
		}
	};
	e._Code = r, e.nil = new r("");
	function i(e, ...t) {
		let n = [e[0]], i = 0;
		for (; i < t.length;) s(n, t[i]), n.push(e[++i]);
		return new r(n);
	}
	e._ = i;
	var a = new r("+");
	function o(e, ...t) {
		let n = [p(e[0])], i = 0;
		for (; i < t.length;) n.push(a), s(n, t[i]), n.push(a, p(e[++i]));
		return c(n), new r(n);
	}
	e.str = o;
	function s(e, t) {
		t instanceof r ? e.push(...t._items) : t instanceof n ? e.push(t) : e.push(d(t));
	}
	e.addCodeArg = s;
	function c(e) {
		let t = 1;
		for (; t < e.length - 1;) {
			if (e[t] === a) {
				let n = l(e[t - 1], e[t + 1]);
				if (n !== void 0) {
					e.splice(t - 1, 3, n);
					continue;
				}
				e[t++] = "+";
			}
			t++;
		}
	}
	function l(e, t) {
		if (t === "\"\"") return e;
		if (e === "\"\"") return t;
		if (typeof e == "string") return t instanceof n || e[e.length - 1] !== "\"" ? void 0 : typeof t == "string" ? t[0] === "\"" ? e.slice(0, -1) + t.slice(1) : void 0 : `${e.slice(0, -1)}${t}"`;
		if (typeof t == "string" && t[0] === "\"" && !(e instanceof n)) return `"${e}${t.slice(1)}`;
	}
	function u(e, t) {
		return t.emptyStr() ? e : e.emptyStr() ? t : o`${e}${t}`;
	}
	e.strConcat = u;
	function d(e) {
		return typeof e == "number" || typeof e == "boolean" || e === null ? e : p(Array.isArray(e) ? e.join(",") : e);
	}
	function f(e) {
		return new r(p(e));
	}
	e.stringify = f;
	function p(e) {
		return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	}
	e.safeStringify = p;
	function m(t) {
		return typeof t == "string" && e.IDENTIFIER.test(t) ? new r(`.${t}`) : i`[${t}]`;
	}
	e.getProperty = m;
	function h(t) {
		if (typeof t == "string" && e.IDENTIFIER.test(t)) return new r(`${t}`);
		throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
	}
	e.getEsmExportName = h;
	function g(e) {
		return new r(e.toString());
	}
	e.regexpCode = g;
})), yi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
	var t = vi(), n = class extends Error {
		constructor(e) {
			super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
		}
	}, r;
	(function(e) {
		e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
	})(r || (e.UsedValueState = r = {})), e.varKinds = {
		const: new t.Name("const"),
		let: new t.Name("let"),
		var: new t.Name("var")
	};
	var i = class {
		constructor({ prefixes: e, parent: t } = {}) {
			this._names = {}, this._prefixes = e, this._parent = t;
		}
		toName(e) {
			return e instanceof t.Name ? e : this.name(e);
		}
		name(e) {
			return new t.Name(this._newName(e));
		}
		_newName(e) {
			let t = this._names[e] || this._nameGroup(e);
			return `${e}${t.index++}`;
		}
		_nameGroup(e) {
			if ((this._parent?._prefixes)?.has(e) || this._prefixes && !this._prefixes.has(e)) throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
			return this._names[e] = {
				prefix: e,
				index: 0
			};
		}
	};
	e.Scope = i;
	var a = class extends t.Name {
		constructor(e, t) {
			super(t), this.prefix = e;
		}
		setValue(e, { property: n, itemIndex: r }) {
			this.value = e, this.scopePath = (0, t._)`.${new t.Name(n)}[${r}]`;
		}
	};
	e.ValueScopeName = a;
	var o = (0, t._)`\n`;
	e.ValueScope = class extends i {
		constructor(e) {
			super(e), this._values = {}, this._scope = e.scope, this.opts = {
				...e,
				_n: e.lines ? o : t.nil
			};
		}
		get() {
			return this._scope;
		}
		name(e) {
			return new a(e, this._newName(e));
		}
		value(e, t) {
			if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
			let n = this.toName(e), { prefix: r } = n, i = t.key ?? t.ref, a = this._values[r];
			if (a) {
				let e = a.get(i);
				if (e) return e;
			} else a = this._values[r] = /* @__PURE__ */ new Map();
			a.set(i, n);
			let o = this._scope[r] || (this._scope[r] = []), s = o.length;
			return o[s] = t.ref, n.setValue(t, {
				property: r,
				itemIndex: s
			}), n;
		}
		getValue(e, t) {
			let n = this._values[e];
			if (n) return n.get(t);
		}
		scopeRefs(e, n = this._values) {
			return this._reduceValues(n, (n) => {
				if (n.scopePath === void 0) throw Error(`CodeGen: name "${n}" has no value`);
				return (0, t._)`${e}${n.scopePath}`;
			});
		}
		scopeCode(e = this._values, t, n) {
			return this._reduceValues(e, (e) => {
				if (e.value === void 0) throw Error(`CodeGen: name "${e}" has no value`);
				return e.value.code;
			}, t, n);
		}
		_reduceValues(i, a, o = {}, s) {
			let c = t.nil;
			for (let l in i) {
				let u = i[l];
				if (!u) continue;
				let d = o[l] = o[l] || /* @__PURE__ */ new Map();
				u.forEach((i) => {
					if (d.has(i)) return;
					d.set(i, r.Started);
					let o = a(i);
					if (o) {
						let n = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
						c = (0, t._)`${c}${n} ${i} = ${o};${this.opts._n}`;
					} else if (o = s?.(i)) c = (0, t._)`${c}${o}${this.opts._n}`;
					else throw new n(i);
					d.set(i, r.Completed);
				});
			}
			return c;
		}
	};
})), bi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
	var t = vi(), n = yi(), r = vi();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return r._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return r.str;
		}
	}), Object.defineProperty(e, "strConcat", {
		enumerable: !0,
		get: function() {
			return r.strConcat;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return r.nil;
		}
	}), Object.defineProperty(e, "getProperty", {
		enumerable: !0,
		get: function() {
			return r.getProperty;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	}), Object.defineProperty(e, "regexpCode", {
		enumerable: !0,
		get: function() {
			return r.regexpCode;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return r.Name;
		}
	});
	var i = yi();
	Object.defineProperty(e, "Scope", {
		enumerable: !0,
		get: function() {
			return i.Scope;
		}
	}), Object.defineProperty(e, "ValueScope", {
		enumerable: !0,
		get: function() {
			return i.ValueScope;
		}
	}), Object.defineProperty(e, "ValueScopeName", {
		enumerable: !0,
		get: function() {
			return i.ValueScopeName;
		}
	}), Object.defineProperty(e, "varKinds", {
		enumerable: !0,
		get: function() {
			return i.varKinds;
		}
	}), e.operators = {
		GT: new t._Code(">"),
		GTE: new t._Code(">="),
		LT: new t._Code("<"),
		LTE: new t._Code("<="),
		EQ: new t._Code("==="),
		NEQ: new t._Code("!=="),
		NOT: new t._Code("!"),
		OR: new t._Code("||"),
		AND: new t._Code("&&"),
		ADD: new t._Code("+")
	};
	var a = class {
		optimizeNodes() {
			return this;
		}
		optimizeNames(e, t) {
			return this;
		}
	}, o = class extends a {
		constructor(e, t, n) {
			super(), this.varKind = e, this.name = t, this.rhs = n;
		}
		render({ es5: e, _n: t }) {
			let r = e ? n.varKinds.var : this.varKind, i = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
			return `${r} ${this.name}${i};` + t;
		}
		optimizeNames(e, t) {
			if (e[this.name.str]) return this.rhs &&= k(this.rhs, e, t), this;
		}
		get names() {
			return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
		}
	}, s = class extends a {
		constructor(e, t, n) {
			super(), this.lhs = e, this.rhs = t, this.sideEffects = n;
		}
		render({ _n: e }) {
			return `${this.lhs} = ${this.rhs};` + e;
		}
		optimizeNames(e, n) {
			if (!(this.lhs instanceof t.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = k(this.rhs, e, n), this;
		}
		get names() {
			return O(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
		}
	}, c = class extends s {
		constructor(e, t, n, r) {
			super(e, n, r), this.op = t;
		}
		render({ _n: e }) {
			return `${this.lhs} ${this.op}= ${this.rhs};` + e;
		}
	}, l = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `${this.label}:` + e;
		}
	}, u = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `break${this.label ? ` ${this.label}` : ""};` + e;
		}
	}, d = class extends a {
		constructor(e) {
			super(), this.error = e;
		}
		render({ _n: e }) {
			return `throw ${this.error};` + e;
		}
		get names() {
			return this.error.names;
		}
	}, f = class extends a {
		constructor(e) {
			super(), this.code = e;
		}
		render({ _n: e }) {
			return `${this.code};` + e;
		}
		optimizeNodes() {
			return `${this.code}` ? this : void 0;
		}
		optimizeNames(e, t) {
			return this.code = k(this.code, e, t), this;
		}
		get names() {
			return this.code instanceof t._CodeOrName ? this.code.names : {};
		}
	}, p = class extends a {
		constructor(e = []) {
			super(), this.nodes = e;
		}
		render(e) {
			return this.nodes.reduce((t, n) => t + n.render(e), "");
		}
		optimizeNodes() {
			let { nodes: e } = this, t = e.length;
			for (; t--;) {
				let n = e[t].optimizeNodes();
				Array.isArray(n) ? e.splice(t, 1, ...n) : n ? e[t] = n : e.splice(t, 1);
			}
			return e.length > 0 ? this : void 0;
		}
		optimizeNames(e, t) {
			let { nodes: n } = this, r = n.length;
			for (; r--;) {
				let i = n[r];
				i.optimizeNames(e, t) || (A(e, i.names), n.splice(r, 1));
			}
			return n.length > 0 ? this : void 0;
		}
		get names() {
			return this.nodes.reduce((e, t) => D(e, t.names), {});
		}
	}, m = class extends p {
		render(e) {
			return "{" + e._n + super.render(e) + "}" + e._n;
		}
	}, h = class extends p {}, g = class extends m {};
	g.kind = "else";
	var _ = class e extends m {
		constructor(e, t) {
			super(t), this.condition = e;
		}
		render(e) {
			let t = `if(${this.condition})` + super.render(e);
			return this.else && (t += "else " + this.else.render(e)), t;
		}
		optimizeNodes() {
			super.optimizeNodes();
			let t = this.condition;
			if (t === !0) return this.nodes;
			let n = this.else;
			if (n) {
				let e = n.optimizeNodes();
				n = this.else = Array.isArray(e) ? new g(e) : e;
			}
			if (n) return t === !1 ? n instanceof e ? n : n.nodes : this.nodes.length ? this : new e(j(t), n instanceof e ? [n] : n.nodes);
			if (t !== !1 && this.nodes.length) return this;
		}
		optimizeNames(e, t) {
			if (this.else = this.else?.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = k(this.condition, e, t), this;
		}
		get names() {
			let e = super.names;
			return O(e, this.condition), this.else && D(e, this.else.names), e;
		}
	};
	_.kind = "if";
	var v = class extends m {};
	v.kind = "for";
	var y = class extends v {
		constructor(e) {
			super(), this.iteration = e;
		}
		render(e) {
			return `for(${this.iteration})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iteration = k(this.iteration, e, t), this;
		}
		get names() {
			return D(super.names, this.iteration.names);
		}
	}, b = class extends v {
		constructor(e, t, n, r) {
			super(), this.varKind = e, this.name = t, this.from = n, this.to = r;
		}
		render(e) {
			let t = e.es5 ? n.varKinds.var : this.varKind, { name: r, from: i, to: a } = this;
			return `for(${t} ${r}=${i}; ${r}<${a}; ${r}++)` + super.render(e);
		}
		get names() {
			return O(O(super.names, this.from), this.to);
		}
	}, x = class extends v {
		constructor(e, t, n, r) {
			super(), this.loop = e, this.varKind = t, this.name = n, this.iterable = r;
		}
		render(e) {
			return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iterable = k(this.iterable, e, t), this;
		}
		get names() {
			return D(super.names, this.iterable.names);
		}
	}, S = class extends m {
		constructor(e, t, n) {
			super(), this.name = e, this.args = t, this.async = n;
		}
		render(e) {
			return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
		}
	};
	S.kind = "func";
	var C = class extends p {
		render(e) {
			return "return " + super.render(e);
		}
	};
	C.kind = "return";
	var w = class extends m {
		render(e) {
			let t = "try" + super.render(e);
			return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t;
		}
		optimizeNodes() {
			var e, t;
			return super.optimizeNodes(), (e = this.catch) == null || e.optimizeNodes(), (t = this.finally) == null || t.optimizeNodes(), this;
		}
		optimizeNames(e, t) {
			var n, r;
			return super.optimizeNames(e, t), (n = this.catch) == null || n.optimizeNames(e, t), (r = this.finally) == null || r.optimizeNames(e, t), this;
		}
		get names() {
			let e = super.names;
			return this.catch && D(e, this.catch.names), this.finally && D(e, this.finally.names), e;
		}
	}, T = class extends m {
		constructor(e) {
			super(), this.error = e;
		}
		render(e) {
			return `catch(${this.error})` + super.render(e);
		}
	};
	T.kind = "catch";
	var E = class extends m {
		render(e) {
			return "finally" + super.render(e);
		}
	};
	E.kind = "finally", e.CodeGen = class {
		constructor(e, t = {}) {
			this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
				...t,
				_n: t.lines ? "\n" : ""
			}, this._extScope = e, this._scope = new n.Scope({ parent: e }), this._nodes = [new h()];
		}
		toString() {
			return this._root.render(this.opts);
		}
		name(e) {
			return this._scope.name(e);
		}
		scopeName(e) {
			return this._extScope.name(e);
		}
		scopeValue(e, t) {
			let n = this._extScope.value(e, t);
			return (this._values[n.prefix] || (this._values[n.prefix] = /* @__PURE__ */ new Set())).add(n), n;
		}
		getScopeValue(e, t) {
			return this._extScope.getValue(e, t);
		}
		scopeRefs(e) {
			return this._extScope.scopeRefs(e, this._values);
		}
		scopeCode() {
			return this._extScope.scopeCode(this._values);
		}
		_def(e, t, n, r) {
			let i = this._scope.toName(t);
			return n !== void 0 && r && (this._constants[i.str] = n), this._leafNode(new o(e, i, n)), i;
		}
		const(e, t, r) {
			return this._def(n.varKinds.const, e, t, r);
		}
		let(e, t, r) {
			return this._def(n.varKinds.let, e, t, r);
		}
		var(e, t, r) {
			return this._def(n.varKinds.var, e, t, r);
		}
		assign(e, t, n) {
			return this._leafNode(new s(e, t, n));
		}
		add(t, n) {
			return this._leafNode(new c(t, e.operators.ADD, n));
		}
		code(e) {
			return typeof e == "function" ? e() : e !== t.nil && this._leafNode(new f(e)), this;
		}
		object(...e) {
			let n = ["{"];
			for (let [r, i] of e) n.length > 1 && n.push(","), n.push(r), (r !== i || this.opts.es5) && (n.push(":"), (0, t.addCodeArg)(n, i));
			return n.push("}"), new t._Code(n);
		}
		if(e, t, n) {
			if (this._blockNode(new _(e)), t && n) this.code(t).else().code(n).endIf();
			else if (t) this.code(t).endIf();
			else if (n) throw Error("CodeGen: \"else\" body without \"then\" body");
			return this;
		}
		elseIf(e) {
			return this._elseNode(new _(e));
		}
		else() {
			return this._elseNode(new g());
		}
		endIf() {
			return this._endBlockNode(_, g);
		}
		_for(e, t) {
			return this._blockNode(e), t && this.code(t).endFor(), this;
		}
		for(e, t) {
			return this._for(new y(e), t);
		}
		forRange(e, t, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
			let o = this._scope.toName(e);
			return this._for(new b(a, o, t, r), () => i(o));
		}
		forOf(e, r, i, a = n.varKinds.const) {
			let o = this._scope.toName(e);
			if (this.opts.es5) {
				let e = r instanceof t.Name ? r : this.var("_arr", r);
				return this.forRange("_i", 0, (0, t._)`${e}.length`, (n) => {
					this.var(o, (0, t._)`${e}[${n}]`), i(o);
				});
			}
			return this._for(new x("of", a, o, r), () => i(o));
		}
		forIn(e, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
			if (this.opts.ownProperties) return this.forOf(e, (0, t._)`Object.keys(${r})`, i);
			let o = this._scope.toName(e);
			return this._for(new x("in", a, o, r), () => i(o));
		}
		endFor() {
			return this._endBlockNode(v);
		}
		label(e) {
			return this._leafNode(new l(e));
		}
		break(e) {
			return this._leafNode(new u(e));
		}
		return(e) {
			let t = new C();
			if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error("CodeGen: \"return\" should have one node");
			return this._endBlockNode(C);
		}
		try(e, t, n) {
			if (!t && !n) throw Error("CodeGen: \"try\" without \"catch\" and \"finally\"");
			let r = new w();
			if (this._blockNode(r), this.code(e), t) {
				let e = this.name("e");
				this._currNode = r.catch = new T(e), t(e);
			}
			return n && (this._currNode = r.finally = new E(), this.code(n)), this._endBlockNode(T, E);
		}
		throw(e) {
			return this._leafNode(new d(e));
		}
		block(e, t) {
			return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this;
		}
		endBlock(e) {
			let t = this._blockStarts.pop();
			if (t === void 0) throw Error("CodeGen: not in self-balancing block");
			let n = this._nodes.length - t;
			if (n < 0 || e !== void 0 && n !== e) throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
			return this._nodes.length = t, this;
		}
		func(e, n = t.nil, r, i) {
			return this._blockNode(new S(e, n, r)), i && this.code(i).endFunc(), this;
		}
		endFunc() {
			return this._endBlockNode(S);
		}
		optimize(e = 1) {
			for (; e-- > 0;) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
		}
		_leafNode(e) {
			return this._currNode.nodes.push(e), this;
		}
		_blockNode(e) {
			this._currNode.nodes.push(e), this._nodes.push(e);
		}
		_endBlockNode(e, t) {
			let n = this._currNode;
			if (n instanceof e || t && n instanceof t) return this._nodes.pop(), this;
			throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
		}
		_elseNode(e) {
			let t = this._currNode;
			if (!(t instanceof _)) throw Error("CodeGen: \"else\" without \"if\"");
			return this._currNode = t.else = e, this;
		}
		get _root() {
			return this._nodes[0];
		}
		get _currNode() {
			let e = this._nodes;
			return e[e.length - 1];
		}
		set _currNode(e) {
			let t = this._nodes;
			t[t.length - 1] = e;
		}
	};
	function D(e, t) {
		for (let n in t) e[n] = (e[n] || 0) + (t[n] || 0);
		return e;
	}
	function O(e, n) {
		return n instanceof t._CodeOrName ? D(e, n.names) : e;
	}
	function k(e, n, r) {
		return e instanceof t.Name ? i(e) : a(e) ? new t._Code(e._items.reduce((e, n) => (n instanceof t.Name && (n = i(n)), n instanceof t._Code ? e.push(...n._items) : e.push(n), e), [])) : e;
		function i(e) {
			let t = r[e.str];
			return t === void 0 || n[e.str] !== 1 ? e : (delete n[e.str], t);
		}
		function a(e) {
			return e instanceof t._Code && e._items.some((e) => e instanceof t.Name && n[e.str] === 1 && r[e.str] !== void 0);
		}
	}
	function A(e, t) {
		for (let n in t) e[n] = (e[n] || 0) - (t[n] || 0);
	}
	function j(e) {
		return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, t._)`!${L(e)}`;
	}
	e.not = j;
	var M = I(e.operators.AND);
	function N(...e) {
		return e.reduce(M);
	}
	e.and = N;
	var P = I(e.operators.OR);
	function F(...e) {
		return e.reduce(P);
	}
	e.or = F;
	function I(e) {
		return (n, r) => n === t.nil ? r : r === t.nil ? n : (0, t._)`${L(n)} ${e} ${L(r)}`;
	}
	function L(e) {
		return e instanceof t.Name ? e : (0, t._)`(${e})`;
	}
})), xi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
	var t = bi(), n = vi();
	function r(e) {
		let t = {};
		for (let n of e) t[n] = !0;
		return t;
	}
	e.toHash = r;
	function i(e, t) {
		return typeof t == "boolean" ? t : Object.keys(t).length === 0 || (a(e, t), !o(t, e.self.RULES.all));
	}
	e.alwaysValidSchema = i;
	function a(e, t = e.schema) {
		let { opts: n, self: r } = e;
		if (!n.strictSchema || typeof t == "boolean") return;
		let i = r.RULES.keywords;
		for (let n in t) i[n] || x(e, `unknown keyword: "${n}"`);
	}
	e.checkUnknownRules = a;
	function o(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t[n]) return !0;
		return !1;
	}
	e.schemaHasRules = o;
	function s(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (n !== "$ref" && t.all[n]) return !0;
		return !1;
	}
	e.schemaHasRulesButRef = s;
	function c({ topSchemaRef: e, schemaPath: n }, r, i, a) {
		if (!a) {
			if (typeof r == "number" || typeof r == "boolean") return r;
			if (typeof r == "string") return (0, t._)`${r}`;
		}
		return (0, t._)`${e}${n}${(0, t.getProperty)(i)}`;
	}
	e.schemaRefOrVal = c;
	function l(e) {
		return f(decodeURIComponent(e));
	}
	e.unescapeFragment = l;
	function u(e) {
		return encodeURIComponent(d(e));
	}
	e.escapeFragment = u;
	function d(e) {
		return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	e.escapeJsonPointer = d;
	function f(e) {
		return e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	e.unescapeJsonPointer = f;
	function p(e, t) {
		if (Array.isArray(e)) for (let n of e) t(n);
		else t(e);
	}
	e.eachItem = p;
	function m({ mergeNames: e, mergeToName: n, mergeValues: r, resultToName: i }) {
		return (a, o, s, c) => {
			let l = s === void 0 ? o : s instanceof t.Name ? (o instanceof t.Name ? e(a, o, s) : n(a, o, s), s) : o instanceof t.Name ? (n(a, s, o), o) : r(o, s);
			return c === t.Name && !(l instanceof t.Name) ? i(a, l) : l;
		};
	}
	e.mergeEvaluated = {
		props: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => {
				e.if((0, t._)`${n} === true`, () => e.assign(r, !0), () => e.assign(r, (0, t._)`${r} || {}`).code((0, t._)`Object.assign(${r}, ${n})`));
			}),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => {
				n === !0 ? e.assign(r, !0) : (e.assign(r, (0, t._)`${r} || {}`), g(e, r, n));
			}),
			mergeValues: (e, t) => e === !0 || {
				...e,
				...t
			},
			resultToName: h
		}),
		items: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => e.assign(r, (0, t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => e.assign(r, n === !0 || (0, t._)`${r} > ${n} ? ${r} : ${n}`)),
			mergeValues: (e, t) => e === !0 || Math.max(e, t),
			resultToName: (e, t) => e.var("items", t)
		})
	};
	function h(e, n) {
		if (n === !0) return e.var("props", !0);
		let r = e.var("props", (0, t._)`{}`);
		return n !== void 0 && g(e, r, n), r;
	}
	e.evaluatedPropsToName = h;
	function g(e, n, r) {
		Object.keys(r).forEach((r) => e.assign((0, t._)`${n}${(0, t.getProperty)(r)}`, !0));
	}
	e.setEvaluated = g;
	var _ = {};
	function v(e, t) {
		return e.scopeValue("func", {
			ref: t,
			code: _[t.code] || (_[t.code] = new n._Code(t.code))
		});
	}
	e.useFunc = v;
	var y;
	(function(e) {
		e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
	})(y || (e.Type = y = {}));
	function b(e, n, r) {
		if (e instanceof t.Name) {
			let i = n === y.Num;
			return r ? i ? (0, t._)`"[" + ${e} + "]"` : (0, t._)`"['" + ${e} + "']"` : i ? (0, t._)`"/" + ${e}` : (0, t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
		}
		return r ? (0, t.getProperty)(e).toString() : "/" + d(e);
	}
	e.getErrorPath = b;
	function x(e, t, n = e.opts.strictSchema) {
		if (n) {
			if (t = `strict mode: ${t}`, n === !0) throw Error(t);
			e.self.logger.warn(t);
		}
	}
	e.checkStrictMode = x;
})), Si = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi();
	e.default = {
		data: new t.Name("data"),
		valCxt: new t.Name("valCxt"),
		instancePath: new t.Name("instancePath"),
		parentData: new t.Name("parentData"),
		parentDataProperty: new t.Name("parentDataProperty"),
		rootData: new t.Name("rootData"),
		dynamicAnchors: new t.Name("dynamicAnchors"),
		vErrors: new t.Name("vErrors"),
		errors: new t.Name("errors"),
		this: new t.Name("this"),
		self: new t.Name("self"),
		scope: new t.Name("scope"),
		json: new t.Name("json"),
		jsonPos: new t.Name("jsonPos"),
		jsonLen: new t.Name("jsonLen"),
		jsonPart: new t.Name("jsonPart")
	};
})), Ci = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
	var t = bi(), n = xi(), r = Si();
	e.keywordError = { message: ({ keyword: e }) => (0, t.str)`must pass "${e}" keyword validation` }, e.keyword$DataError = { message: ({ keyword: e, schemaType: n }) => n ? (0, t.str)`"${e}" keyword must be ${n} ($data)` : (0, t.str)`"${e}" keyword is invalid ($data)` };
	function i(n, r = e.keywordError, i, a) {
		let { it: o } = n, { gen: s, compositeRule: u, allErrors: f } = o, p = d(n, r, i);
		a ?? (u || f) ? c(s, p) : l(o, (0, t._)`[${p}]`);
	}
	e.reportError = i;
	function a(t, n = e.keywordError, i) {
		let { it: a } = t, { gen: o, compositeRule: s, allErrors: u } = a;
		c(o, d(t, n, i)), s || u || l(a, r.default.vErrors);
	}
	e.reportExtraError = a;
	function o(e, n) {
		e.assign(r.default.errors, n), e.if((0, t._)`${r.default.vErrors} !== null`, () => e.if(n, () => e.assign((0, t._)`${r.default.vErrors}.length`, n), () => e.assign(r.default.vErrors, null)));
	}
	e.resetErrorsCount = o;
	function s({ gen: e, keyword: n, schemaValue: i, data: a, errsCount: o, it: s }) {
		/* istanbul ignore if */
		if (o === void 0) throw Error("ajv implementation error");
		let c = e.name("err");
		e.forRange("i", o, r.default.errors, (o) => {
			e.const(c, (0, t._)`${r.default.vErrors}[${o}]`), e.if((0, t._)`${c}.instancePath === undefined`, () => e.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(r.default.instancePath, s.errorPath))), e.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${n}`), s.opts.verbose && (e.assign((0, t._)`${c}.schema`, i), e.assign((0, t._)`${c}.data`, a));
		});
	}
	e.extendErrors = s;
	function c(e, n) {
		let i = e.const("err", n);
		e.if((0, t._)`${r.default.vErrors} === null`, () => e.assign(r.default.vErrors, (0, t._)`[${i}]`), (0, t._)`${r.default.vErrors}.push(${i})`), e.code((0, t._)`${r.default.errors}++`);
	}
	function l(e, n) {
		let { gen: r, validateName: i, schemaEnv: a } = e;
		a.$async ? r.throw((0, t._)`new ${e.ValidationError}(${n})`) : (r.assign((0, t._)`${i}.errors`, n), r.return(!1));
	}
	var u = {
		keyword: new t.Name("keyword"),
		schemaPath: new t.Name("schemaPath"),
		params: new t.Name("params"),
		propertyName: new t.Name("propertyName"),
		message: new t.Name("message"),
		schema: new t.Name("schema"),
		parentSchema: new t.Name("parentSchema")
	};
	function d(e, n, r) {
		let { createErrors: i } = e.it;
		return i === !1 ? (0, t._)`{}` : f(e, n, r);
	}
	function f(e, t, n = {}) {
		let { gen: r, it: i } = e, a = [p(i, n), m(e, n)];
		return h(e, t, a), r.object(...a);
	}
	function p({ errorPath: e }, { instancePath: i }) {
		let a = i ? (0, t.str)`${e}${(0, n.getErrorPath)(i, n.Type.Str)}` : e;
		return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, a)];
	}
	function m({ keyword: e, it: { errSchemaPath: r } }, { schemaPath: i, parentSchema: a }) {
		let o = a ? r : (0, t.str)`${r}/${e}`;
		return i && (o = (0, t.str)`${o}${(0, n.getErrorPath)(i, n.Type.Str)}`), [u.schemaPath, o];
	}
	function h(e, { params: n, message: i }, a) {
		let { keyword: o, data: s, schemaValue: c, it: l } = e, { opts: d, propertyName: f, topSchemaRef: p, schemaPath: m } = l;
		a.push([u.keyword, o], [u.params, typeof n == "function" ? n(e) : n || (0, t._)`{}`]), d.messages && a.push([u.message, typeof i == "function" ? i(e) : i]), d.verbose && a.push([u.schema, c], [u.parentSchema, (0, t._)`${p}${m}`], [r.default.data, s]), f && a.push([u.propertyName, f]);
	}
})), wi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
	var t = Ci(), n = bi(), r = Si(), i = { message: "boolean schema is false" };
	function a(e) {
		let { gen: t, schema: i, validateName: a } = e;
		i === !1 ? s(e, !1) : typeof i == "object" && i.$async === !0 ? t.return(r.default.data) : (t.assign((0, n._)`${a}.errors`, null), t.return(!0));
	}
	e.topBoolOrEmptySchema = a;
	function o(e, t) {
		let { gen: n, schema: r } = e;
		r === !1 ? (n.var(t, !1), s(e)) : n.var(t, !0);
	}
	e.boolOrEmptySchema = o;
	function s(e, n) {
		let { gen: r, data: a } = e, o = {
			gen: r,
			keyword: "false schema",
			data: a,
			schema: !1,
			schemaCode: !1,
			schemaValue: !1,
			params: {},
			it: e
		};
		(0, t.reportError)(o, i, void 0, n);
	}
})), Ti = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getRules = e.isJSONType = void 0;
	var t = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null",
		"object",
		"array"
	]);
	function n(e) {
		return typeof e == "string" && t.has(e);
	}
	e.isJSONType = n;
	function r() {
		let e = {
			number: {
				type: "number",
				rules: []
			},
			string: {
				type: "string",
				rules: []
			},
			array: {
				type: "array",
				rules: []
			},
			object: {
				type: "object",
				rules: []
			}
		};
		return {
			types: {
				...e,
				integer: !0,
				boolean: !0,
				null: !0
			},
			rules: [
				{ rules: [] },
				e.number,
				e.string,
				e.array,
				e.object
			],
			post: { rules: [] },
			all: {},
			keywords: {}
		};
	}
	e.getRules = r;
})), Ei = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0;
	function t({ schema: e, self: t }, r) {
		let i = t.RULES.types[r];
		return i && i !== !0 && n(e, i);
	}
	e.schemaHasRulesForType = t;
	function n(e, t) {
		return t.rules.some((t) => r(e, t));
	}
	e.shouldUseGroup = n;
	function r(e, t) {
		return e[t.keyword] !== void 0 || t.definition.implements?.some((t) => e[t] !== void 0);
	}
	e.shouldUseRule = r;
})), Di = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
	var t = Ti(), n = Ei(), r = Ci(), i = bi(), a = xi(), o;
	(function(e) {
		e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
	})(o || (e.DataType = o = {}));
	function s(e) {
		let t = c(e.type);
		if (t.includes("null")) {
			if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
		} else {
			if (!t.length && e.nullable !== void 0) throw Error("\"nullable\" cannot be used without \"type\"");
			e.nullable === !0 && t.push("null");
		}
		return t;
	}
	e.getSchemaTypes = s;
	function c(e) {
		let n = Array.isArray(e) ? e : e ? [e] : [];
		if (n.every(t.isJSONType)) return n;
		throw Error("type must be JSONType or JSONType[]: " + n.join(","));
	}
	e.getJSONTypes = c;
	function l(e, t) {
		let { gen: r, data: i, opts: a } = e, s = d(t, a.coerceTypes), c = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, n.schemaHasRulesForType)(e, t[0]));
		if (c) {
			let n = h(t, i, a.strictNumbers, o.Wrong);
			r.if(n, () => {
				s.length ? f(e, t, s) : _(e);
			});
		}
		return c;
	}
	e.coerceAndCheckDataType = l;
	var u = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null"
	]);
	function d(e, t) {
		return t ? e.filter((e) => u.has(e) || t === "array" && e === "array") : [];
	}
	function f(e, t, n) {
		let { gen: r, data: a, opts: o } = e, s = r.let("dataType", (0, i._)`typeof ${a}`), c = r.let("coerced", (0, i._)`undefined`);
		o.coerceTypes === "array" && r.if((0, i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, i._)`${a}[0]`).assign(s, (0, i._)`typeof ${a}`).if(h(t, a, o.strictNumbers), () => r.assign(c, a))), r.if((0, i._)`${c} !== undefined`);
		for (let e of n) (u.has(e) || e === "array" && o.coerceTypes === "array") && l(e);
		r.else(), _(e), r.endIf(), r.if((0, i._)`${c} !== undefined`, () => {
			r.assign(a, c), p(e, c);
		});
		function l(e) {
			switch (e) {
				case "string":
					r.elseIf((0, i._)`${s} == "number" || ${s} == "boolean"`).assign(c, (0, i._)`"" + ${a}`).elseIf((0, i._)`${a} === null`).assign(c, (0, i._)`""`);
					return;
				case "number":
					r.elseIf((0, i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c, (0, i._)`+${a}`);
					return;
				case "integer":
					r.elseIf((0, i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c, (0, i._)`+${a}`);
					return;
				case "boolean":
					r.elseIf((0, i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c, !1).elseIf((0, i._)`${a} === "true" || ${a} === 1`).assign(c, !0);
					return;
				case "null":
					r.elseIf((0, i._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(c, null);
					return;
				case "array": r.elseIf((0, i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c, (0, i._)`[${a}]`);
			}
		}
	}
	function p({ gen: e, parentData: t, parentDataProperty: n }, r) {
		e.if((0, i._)`${t} !== undefined`, () => e.assign((0, i._)`${t}[${n}]`, r));
	}
	function m(e, t, n, r = o.Correct) {
		let a = r === o.Correct ? i.operators.EQ : i.operators.NEQ, s;
		switch (e) {
			case "null": return (0, i._)`${t} ${a} null`;
			case "array":
				s = (0, i._)`Array.isArray(${t})`;
				break;
			case "object":
				s = (0, i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
				break;
			case "integer":
				s = c((0, i._)`!(${t} % 1) && !isNaN(${t})`);
				break;
			case "number":
				s = c();
				break;
			default: return (0, i._)`typeof ${t} ${a} ${e}`;
		}
		return r === o.Correct ? s : (0, i.not)(s);
		function c(e = i.nil) {
			return (0, i.and)((0, i._)`typeof ${t} == "number"`, e, n ? (0, i._)`isFinite(${t})` : i.nil);
		}
	}
	e.checkDataType = m;
	function h(e, t, n, r) {
		if (e.length === 1) return m(e[0], t, n, r);
		let o, s = (0, a.toHash)(e);
		if (s.array && s.object) {
			let e = (0, i._)`typeof ${t} != "object"`;
			o = s.null ? e : (0, i._)`!${t} || ${e}`, delete s.null, delete s.array, delete s.object;
		} else o = i.nil;
		s.number && delete s.integer;
		for (let e in s) o = (0, i.and)(o, m(e, t, n, r));
		return o;
	}
	e.checkDataTypes = h;
	var g = {
		message: ({ schema: e }) => `must be ${e}`,
		params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, i._)`{type: ${e}}` : (0, i._)`{type: ${t}}`
	};
	function _(e) {
		let t = v(e);
		(0, r.reportError)(t, g);
	}
	e.reportTypeError = _;
	function v(e) {
		let { gen: t, data: n, schema: r } = e, i = (0, a.schemaRefOrVal)(e, r, "type");
		return {
			gen: t,
			keyword: "type",
			data: n,
			schema: r.type,
			schemaCode: i,
			schemaValue: i,
			parentSchema: r,
			params: {},
			it: e
		};
	}
})), Oi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assignDefaults = void 0;
	var t = bi(), n = xi();
	function r(e, t) {
		let { properties: n, items: r } = e.schema;
		if (t === "object" && n) for (let t in n) i(e, t, n[t].default);
		else t === "array" && Array.isArray(r) && r.forEach((t, n) => i(e, n, t.default));
	}
	e.assignDefaults = r;
	function i(e, r, i) {
		let { gen: a, compositeRule: o, data: s, opts: c } = e;
		if (i === void 0) return;
		let l = (0, t._)`${s}${(0, t.getProperty)(r)}`;
		if (o) {
			(0, n.checkStrictMode)(e, `default is ignored for: ${l}`);
			return;
		}
		let u = (0, t._)`${l} === undefined`;
		c.useDefaults === "empty" && (u = (0, t._)`${u} || ${l} === null || ${l} === ""`), a.if(u, (0, t._)`${l} = ${(0, t.stringify)(i)}`);
	}
})), ki = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
	var t = bi(), n = xi(), r = Si(), i = xi();
	function a(e, n) {
		let { gen: r, data: i, it: a } = e;
		r.if(d(r, i, n, a.opts.ownProperties), () => {
			e.setParams({ missingProperty: (0, t._)`${n}` }, !0), e.error();
		});
	}
	e.checkReportMissingProp = a;
	function o({ gen: e, data: n, it: { opts: r } }, i, a) {
		return (0, t.or)(...i.map((i) => (0, t.and)(d(e, n, i, r.ownProperties), (0, t._)`${a} = ${i}`)));
	}
	e.checkMissingProp = o;
	function s(e, t) {
		e.setParams({ missingProperty: t }, !0), e.error();
	}
	e.reportMissingProp = s;
	function c(e) {
		return e.scopeValue("func", {
			ref: Object.prototype.hasOwnProperty,
			code: (0, t._)`Object.prototype.hasOwnProperty`
		});
	}
	e.hasPropFunc = c;
	function l(e, n, r) {
		return (0, t._)`${c(e)}.call(${n}, ${r})`;
	}
	e.isOwnProperty = l;
	function u(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} !== undefined`;
		return i ? (0, t._)`${a} && ${l(e, n, r)}` : a;
	}
	e.propertyInData = u;
	function d(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} === undefined`;
		return i ? (0, t.or)(a, (0, t.not)(l(e, n, r))) : a;
	}
	e.noPropertyInData = d;
	function f(e) {
		return e ? Object.keys(e).filter((e) => e !== "__proto__") : [];
	}
	e.allSchemaProperties = f;
	function p(e, t) {
		return f(t).filter((r) => !(0, n.alwaysValidSchema)(e, t[r]));
	}
	e.schemaProperties = p;
	function m({ schemaCode: e, data: n, it: { gen: i, topSchemaRef: a, schemaPath: o, errorPath: s }, it: c }, l, u, d) {
		let f = d ? (0, t._)`${e}, ${n}, ${a}${o}` : n, p = [
			[r.default.instancePath, (0, t.strConcat)(r.default.instancePath, s)],
			[r.default.parentData, c.parentData],
			[r.default.parentDataProperty, c.parentDataProperty],
			[r.default.rootData, r.default.rootData]
		];
		c.opts.dynamicRef && p.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
		let m = (0, t._)`${f}, ${i.object(...p)}`;
		return u === t.nil ? (0, t._)`${l}(${m})` : (0, t._)`${l}.call(${u}, ${m})`;
	}
	e.callValidateCode = m;
	var h = (0, t._)`new RegExp`;
	function g({ gen: e, it: { opts: n } }, r) {
		let a = n.unicodeRegExp ? "u" : "", { regExp: o } = n.code, s = o(r, a);
		return e.scopeValue("pattern", {
			key: s.toString(),
			ref: s,
			code: (0, t._)`${o.code === "new RegExp" ? h : (0, i.useFunc)(e, o)}(${r}, ${a})`
		});
	}
	e.usePattern = g;
	function _(e) {
		let { gen: r, data: i, keyword: a, it: o } = e, s = r.name("valid");
		if (o.allErrors) {
			let e = r.let("valid", !0);
			return c(() => r.assign(e, !1)), e;
		}
		return r.var(s, !0), c(() => r.break()), s;
		function c(o) {
			let c = r.const("len", (0, t._)`${i}.length`);
			r.forRange("i", 0, c, (i) => {
				e.subschema({
					keyword: a,
					dataProp: i,
					dataPropType: n.Type.Num
				}, s), r.if((0, t.not)(s), o);
			});
		}
	}
	e.validateArray = _;
	function v(e) {
		let { gen: r, schema: i, keyword: a, it: o } = e;
		/* istanbul ignore if */
		if (!Array.isArray(i)) throw Error("ajv implementation error");
		if (i.some((e) => (0, n.alwaysValidSchema)(o, e)) && !o.opts.unevaluated) return;
		let s = r.let("valid", !1), c = r.name("_valid");
		r.block(() => i.forEach((n, i) => {
			let o = e.subschema({
				keyword: a,
				schemaProp: i,
				compositeRule: !0
			}, c);
			r.assign(s, (0, t._)`${s} || ${c}`), e.mergeValidEvaluated(o, c) || r.if((0, t.not)(s));
		})), e.result(s, () => e.reset(), () => e.error(!0));
	}
	e.validateUnion = v;
})), Ai = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
	var t = bi(), n = Si(), r = ki(), i = Ci();
	function a(e, n) {
		let { gen: r, keyword: i, schema: a, parentSchema: o, it: s } = e, c = n.macro.call(s.self, a, o, s), l = u(r, i, c);
		s.opts.validateSchema !== !1 && s.self.validateSchema(c, !0);
		let d = r.name("valid");
		e.subschema({
			schema: c,
			schemaPath: t.nil,
			errSchemaPath: `${s.errSchemaPath}/${i}`,
			topSchemaRef: l,
			compositeRule: !0
		}, d), e.pass(d, () => e.error(!0));
	}
	e.macroKeywordCode = a;
	function o(e, i) {
		let { gen: a, keyword: o, schema: d, parentSchema: f, $data: p, it: m } = e;
		l(m, i);
		let h = u(a, o, !p && i.compile ? i.compile.call(m.self, d, f, m) : i.validate), g = a.let("valid");
		e.block$data(g, _), e.ok(i.valid ?? g);
		function _() {
			if (i.errors === !1) b(), i.modifying && s(e), x(() => e.error());
			else {
				let t = i.async ? v() : y();
				i.modifying && s(e), x(() => c(e, t));
			}
		}
		function v() {
			let e = a.let("ruleErrs", null);
			return a.try(() => b((0, t._)`await `), (n) => a.assign(g, !1).if((0, t._)`${n} instanceof ${m.ValidationError}`, () => a.assign(e, (0, t._)`${n}.errors`), () => a.throw(n))), e;
		}
		function y() {
			let e = (0, t._)`${h}.errors`;
			return a.assign(e, null), b(t.nil), e;
		}
		function b(o = i.async ? (0, t._)`await ` : t.nil) {
			let s = m.opts.passContext ? n.default.this : n.default.self, c = !("compile" in i && !p || i.schema === !1);
			a.assign(g, (0, t._)`${o}${(0, r.callValidateCode)(e, h, s, c)}`, i.modifying);
		}
		function x(e) {
			a.if((0, t.not)(i.valid ?? g), e);
		}
	}
	e.funcKeywordCode = o;
	function s(e) {
		let { gen: n, data: r, it: i } = e;
		n.if(i.parentData, () => n.assign(r, (0, t._)`${i.parentData}[${i.parentDataProperty}]`));
	}
	function c(e, r) {
		let { gen: a } = e;
		a.if((0, t._)`Array.isArray(${r})`, () => {
			a.assign(n.default.vErrors, (0, t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors, (0, t._)`${n.default.vErrors}.length`), (0, i.extendErrors)(e);
		}, () => e.error());
	}
	function l({ schemaEnv: e }, t) {
		if (t.async && !e.$async) throw Error("async keyword in sync schema");
	}
	function u(e, n, r) {
		if (r === void 0) throw Error(`keyword "${n}" failed to compile`);
		return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : {
			ref: r,
			code: (0, t.stringify)(r)
		});
	}
	function d(e, t, n = !1) {
		return !t.length || t.some((t) => t === "array" ? Array.isArray(e) : t === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == t || n && e === void 0);
	}
	e.validSchemaType = d;
	function f({ schema: e, opts: t, self: n, errSchemaPath: r }, i, a) {
		/* istanbul ignore if */
		if (Array.isArray(i.keyword) ? !i.keyword.includes(a) : i.keyword !== a) throw Error("ajv implementation error");
		let o = i.dependencies;
		if (o?.some((t) => !Object.prototype.hasOwnProperty.call(e, t))) throw Error(`parent schema must have dependencies of ${a}: ${o.join(",")}`);
		if (i.validateSchema && !i.validateSchema(e[a])) {
			let e = `keyword "${a}" value is invalid at path "${r}": ` + n.errorsText(i.validateSchema.errors);
			if (t.validateSchema === "log") n.logger.error(e);
			else throw Error(e);
		}
	}
	e.validateKeywordUsage = f;
})), ji = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
	var t = bi(), n = xi();
	function r(e, { keyword: r, schemaProp: i, schema: a, schemaPath: o, errSchemaPath: s, topSchemaRef: c }) {
		if (r !== void 0 && a !== void 0) throw Error("both \"keyword\" and \"schema\" passed, only one allowed");
		if (r !== void 0) {
			let a = e.schema[r];
			return i === void 0 ? {
				schema: a,
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}`
			} : {
				schema: a[i],
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}${(0, t.getProperty)(i)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}/${(0, n.escapeFragment)(i)}`
			};
		}
		if (a !== void 0) {
			if (o === void 0 || s === void 0 || c === void 0) throw Error("\"schemaPath\", \"errSchemaPath\" and \"topSchemaRef\" are required with \"schema\"");
			return {
				schema: a,
				schemaPath: o,
				topSchemaRef: c,
				errSchemaPath: s
			};
		}
		throw Error("either \"keyword\" or \"schema\" must be passed");
	}
	e.getSubschema = r;
	function i(e, r, { dataProp: i, dataPropType: a, data: o, dataTypes: s, propertyName: c }) {
		if (o !== void 0 && i !== void 0) throw Error("both \"data\" and \"dataProp\" passed, only one allowed");
		let { gen: l } = r;
		if (i !== void 0) {
			let { errorPath: o, dataPathArr: s, opts: c } = r;
			u(l.let("data", (0, t._)`${r.data}${(0, t.getProperty)(i)}`, !0)), e.errorPath = (0, t.str)`${o}${(0, n.getErrorPath)(i, a, c.jsPropertySyntax)}`, e.parentDataProperty = (0, t._)`${i}`, e.dataPathArr = [...s, e.parentDataProperty];
		}
		o !== void 0 && (u(o instanceof t.Name ? o : l.let("data", o, !0)), c !== void 0 && (e.propertyName = c)), s && (e.dataTypes = s);
		function u(t) {
			e.data = t, e.dataLevel = r.dataLevel + 1, e.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), e.parentData = r.data, e.dataNames = [...r.dataNames, t];
		}
	}
	e.extendSubschemaData = i;
	function a(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: i, allErrors: a }) {
		r !== void 0 && (e.compositeRule = r), i !== void 0 && (e.createErrors = i), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = n;
	}
	e.extendSubschemaMode = a;
})), Mi = /* @__PURE__ */ Z(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})), Ni = /* @__PURE__ */ Z(((e, t) => {
	var n = t.exports = function(e, t, n) {
		typeof t == "function" && (n = t, t = {}), n = t.cb || n;
		var i = typeof n == "function" ? n : n.pre || function() {}, a = n.post || function() {};
		r(t, i, a, e, "", e);
	};
	n.keywords = {
		additionalItems: !0,
		items: !0,
		contains: !0,
		additionalProperties: !0,
		propertyNames: !0,
		not: !0,
		if: !0,
		then: !0,
		else: !0
	}, n.arrayKeywords = {
		items: !0,
		allOf: !0,
		anyOf: !0,
		oneOf: !0
	}, n.propsKeywords = {
		$defs: !0,
		definitions: !0,
		properties: !0,
		patternProperties: !0,
		dependencies: !0
	}, n.skipKeywords = {
		default: !0,
		enum: !0,
		const: !0,
		required: !0,
		maximum: !0,
		minimum: !0,
		exclusiveMaximum: !0,
		exclusiveMinimum: !0,
		multipleOf: !0,
		maxLength: !0,
		minLength: !0,
		pattern: !0,
		format: !0,
		maxItems: !0,
		minItems: !0,
		uniqueItems: !0,
		maxProperties: !0,
		minProperties: !0
	};
	function r(e, t, a, o, s, c, l, u, d, f) {
		if (o && typeof o == "object" && !Array.isArray(o)) {
			for (var p in t(o, s, c, l, u, d, f), o) {
				var m = o[p];
				if (Array.isArray(m)) {
					if (p in n.arrayKeywords) for (var h = 0; h < m.length; h++) r(e, t, a, m[h], s + "/" + p + "/" + h, c, s, p, o, h);
				} else if (p in n.propsKeywords) {
					if (m && typeof m == "object") for (var g in m) r(e, t, a, m[g], s + "/" + p + "/" + i(g), c, s, p, o, g);
				} else (p in n.keywords || e.allKeys && !(p in n.skipKeywords)) && r(e, t, a, m, s + "/" + p, c, s, p, o);
			}
			a(o, s, c, l, u, d, f);
		}
	}
	function i(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
})), Pi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
	var t = xi(), n = Mi(), r = Ni(), i = /* @__PURE__ */ new Set([
		"type",
		"format",
		"pattern",
		"maxLength",
		"minLength",
		"maxProperties",
		"minProperties",
		"maxItems",
		"minItems",
		"maximum",
		"minimum",
		"uniqueItems",
		"multipleOf",
		"required",
		"enum",
		"const"
	]);
	function a(e, t = !0) {
		return typeof e == "boolean" ? !0 : t === !0 ? !s(e) : t ? c(e) <= t : !1;
	}
	e.inlineRef = a;
	var o = /* @__PURE__ */ new Set([
		"$ref",
		"$recursiveRef",
		"$recursiveAnchor",
		"$dynamicRef",
		"$dynamicAnchor"
	]);
	function s(e) {
		for (let t in e) {
			if (o.has(t)) return !0;
			let n = e[t];
			if (Array.isArray(n) && n.some(s) || typeof n == "object" && s(n)) return !0;
		}
		return !1;
	}
	function c(e) {
		let n = 0;
		for (let r in e) if (r === "$ref" || (n++, !i.has(r) && (typeof e[r] == "object" && (0, t.eachItem)(e[r], (e) => n += c(e)), n === Infinity))) return Infinity;
		return n;
	}
	function l(e, t = "", n) {
		return n !== !1 && (t = f(t)), u(e, e.parse(t));
	}
	e.getFullPath = l;
	function u(e, t) {
		return e.serialize(t).split("#")[0] + "#";
	}
	e._getFullPath = u;
	var d = /#\/?$/;
	function f(e) {
		return e ? e.replace(d, "") : "";
	}
	e.normalizeId = f;
	function p(e, t, n) {
		return n = f(n), e.resolve(t, n);
	}
	e.resolveUrl = p;
	var m = /^[a-z_][-a-z0-9._]*$/i;
	function h(e, t) {
		if (typeof e == "boolean") return {};
		let { schemaId: i, uriResolver: a } = this.opts, o = f(e[i] || t), s = { "": o }, c = l(a, o, !1), u = {}, d = /* @__PURE__ */ new Set();
		return r(e, { allKeys: !0 }, (e, t, n, r) => {
			if (r === void 0) return;
			let a = c + t, o = s[r];
			typeof e[i] == "string" && (o = l.call(this, e[i])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), s[t] = o;
			function l(t) {
				let n = this.opts.uriResolver.resolve;
				if (t = f(o ? n(o, t) : t), d.has(t)) throw h(t);
				d.add(t);
				let r = this.refs[t];
				return typeof r == "string" && (r = this.refs[r]), typeof r == "object" ? p(e, r.schema, t) : t !== f(a) && (t[0] === "#" ? (p(e, u[t], t), u[t] = e) : this.refs[t] = a), t;
			}
			function g(e) {
				if (typeof e == "string") {
					if (!m.test(e)) throw Error(`invalid anchor "${e}"`);
					l.call(this, `#${e}`);
				}
			}
		}), u;
		function p(e, t, r) {
			if (t !== void 0 && !n(e, t)) throw h(r);
		}
		function h(e) {
			return /* @__PURE__ */ Error(`reference "${e}" resolves to more than one schema`);
		}
	}
	e.getSchemaRefs = h;
})), Fi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
	var t = wi(), n = Di(), r = Ei(), i = Di(), a = Oi(), o = Ai(), s = ji(), c = bi(), l = Si(), u = Pi(), d = xi(), f = Ci();
	function p(e) {
		if (S(e) && (w(e), x(e))) {
			_(e);
			return;
		}
		m(e, () => (0, t.topBoolOrEmptySchema)(e));
	}
	e.validateFunctionCode = p;
	function m({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: i }, a) {
		i.code.es5 ? e.func(t, (0, c._)`${l.default.data}, ${l.default.valCxt}`, r.$async, () => {
			e.code((0, c._)`"use strict"; ${y(n, i)}`), g(e, i), e.code(a);
		}) : e.func(t, (0, c._)`${l.default.data}, ${h(i)}`, r.$async, () => e.code(y(n, i)).code(a));
	}
	function h(e) {
		return (0, c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef ? (0, c._)`, ${l.default.dynamicAnchors}={}` : c.nil}}={}`;
	}
	function g(e, t) {
		e.if(l.default.valCxt, () => {
			e.var(l.default.instancePath, (0, c._)`${l.default.valCxt}.${l.default.instancePath}`), e.var(l.default.parentData, (0, c._)`${l.default.valCxt}.${l.default.parentData}`), e.var(l.default.parentDataProperty, (0, c._)`${l.default.valCxt}.${l.default.parentDataProperty}`), e.var(l.default.rootData, (0, c._)`${l.default.valCxt}.${l.default.rootData}`), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
		}, () => {
			e.var(l.default.instancePath, (0, c._)`""`), e.var(l.default.parentData, (0, c._)`undefined`), e.var(l.default.parentDataProperty, (0, c._)`undefined`), e.var(l.default.rootData, l.default.data), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`{}`);
		});
	}
	function _(e) {
		let { schema: t, opts: n, gen: r } = e;
		m(e, () => {
			n.$comment && t.$comment && A(e), D(e), r.let(l.default.vErrors, null), r.let(l.default.errors, 0), n.unevaluated && v(e), T(e), j(e);
		});
	}
	function v(e) {
		let { gen: t, validateName: n } = e;
		e.evaluated = t.const("evaluated", (0, c._)`${n}.evaluated`), t.if((0, c._)`${e.evaluated}.dynamicProps`, () => t.assign((0, c._)`${e.evaluated}.props`, (0, c._)`undefined`)), t.if((0, c._)`${e.evaluated}.dynamicItems`, () => t.assign((0, c._)`${e.evaluated}.items`, (0, c._)`undefined`));
	}
	function y(e, t) {
		let n = typeof e == "object" && e[t.schemaId];
		return n && (t.code.source || t.code.process) ? (0, c._)`/*# sourceURL=${n} */` : c.nil;
	}
	function b(e, n) {
		if (S(e) && (w(e), x(e))) {
			C(e, n);
			return;
		}
		(0, t.boolOrEmptySchema)(e, n);
	}
	function x({ schema: e, self: t }) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t.RULES.all[n]) return !0;
		return !1;
	}
	function S(e) {
		return typeof e.schema != "boolean";
	}
	function C(e, t) {
		let { schema: n, gen: r, opts: i } = e;
		i.$comment && n.$comment && A(e), O(e), k(e);
		let a = r.const("_errs", l.default.errors);
		T(e, a), r.var(t, (0, c._)`${a} === ${l.default.errors}`);
	}
	function w(e) {
		(0, d.checkUnknownRules)(e), E(e);
	}
	function T(e, t) {
		if (e.opts.jtd) return N(e, [], !1, t);
		let r = (0, n.getSchemaTypes)(e.schema);
		N(e, r, !(0, n.coerceAndCheckDataType)(e, r), t);
	}
	function E(e) {
		let { schema: t, errSchemaPath: n, opts: r, self: i } = e;
		t.$ref && r.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
	}
	function D(e) {
		let { schema: t, opts: n } = e;
		t.default !== void 0 && n.useDefaults && n.strictSchema && (0, d.checkStrictMode)(e, "default is ignored in the schema root");
	}
	function O(e) {
		let t = e.schema[e.opts.schemaId];
		t && (e.baseId = (0, u.resolveUrl)(e.opts.uriResolver, e.baseId, t));
	}
	function k(e) {
		if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
	}
	function A({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: i }) {
		let a = n.$comment;
		if (i.$comment === !0) e.code((0, c._)`${l.default.self}.logger.log(${a})`);
		else if (typeof i.$comment == "function") {
			let n = (0, c.str)`${r}/$comment`, i = e.scopeValue("root", { ref: t.root });
			e.code((0, c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`);
		}
	}
	function j(e) {
		let { gen: t, schemaEnv: n, validateName: r, ValidationError: i, opts: a } = e;
		n.$async ? t.if((0, c._)`${l.default.errors} === 0`, () => t.return(l.default.data), () => t.throw((0, c._)`new ${i}(${l.default.vErrors})`)) : (t.assign((0, c._)`${r}.errors`, l.default.vErrors), a.unevaluated && M(e), t.return((0, c._)`${l.default.errors} === 0`));
	}
	function M({ gen: e, evaluated: t, props: n, items: r }) {
		n instanceof c.Name && e.assign((0, c._)`${t}.props`, n), r instanceof c.Name && e.assign((0, c._)`${t}.items`, r);
	}
	function N(e, t, n, a) {
		let { gen: o, schema: s, data: u, allErrors: f, opts: p, self: m } = e, { RULES: h } = m;
		if (s.$ref && (p.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(s, h))) {
			o.block(() => te(e, "$ref", h.all.$ref.definition));
			return;
		}
		p.jtd || F(e, t), o.block(() => {
			for (let e of h.rules) g(e);
			g(h.post);
		});
		function g(d) {
			(0, r.shouldUseGroup)(s, d) && (d.type ? (o.if((0, i.checkDataType)(d.type, u, p.strictNumbers)), P(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : P(e, d), f || o.if((0, c._)`${l.default.errors} === ${a || 0}`));
		}
	}
	function P(e, t) {
		let { gen: n, schema: i, opts: { useDefaults: o } } = e;
		o && (0, a.assignDefaults)(e, t.type), n.block(() => {
			for (let n of t.rules) (0, r.shouldUseRule)(i, n) && te(e, n.keyword, n.definition, t.type);
		});
	}
	function F(e, t) {
		!e.schemaEnv.meta && e.opts.strictTypes && (I(e, t), e.opts.allowUnionTypes || L(e, t), ee(e, e.dataTypes));
	}
	function I(e, t) {
		if (t.length) {
			if (!e.dataTypes.length) {
				e.dataTypes = t;
				return;
			}
			t.forEach((t) => {
				z(e.dataTypes, t) || V(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
			}), B(e, t);
		}
	}
	function L(e, t) {
		t.length > 1 && !(t.length === 2 && t.includes("null")) && V(e, "use allowUnionTypes to allow union type keyword");
	}
	function ee(e, t) {
		let n = e.self.RULES.all;
		for (let i in n) {
			let a = n[i];
			if (typeof a == "object" && (0, r.shouldUseRule)(e.schema, a)) {
				let { type: n } = a.definition;
				n.length && !n.some((e) => R(t, e)) && V(e, `missing type "${n.join(",")}" for keyword "${i}"`);
			}
		}
	}
	function R(e, t) {
		return e.includes(t) || t === "number" && e.includes("integer");
	}
	function z(e, t) {
		return e.includes(t) || t === "integer" && e.includes("number");
	}
	function B(e, t) {
		let n = [];
		for (let r of e.dataTypes) z(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
		e.dataTypes = n;
	}
	function V(e, t) {
		let n = e.schemaEnv.baseId + e.errSchemaPath;
		t += ` at "${n}" (strictTypes)`, (0, d.checkStrictMode)(e, t, e.opts.strictTypes);
	}
	var H = class {
		constructor(e, t, n) {
			if ((0, o.validateKeywordUsage)(e, t, n), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = n, this.data = e.data, this.schema = e.schema[n], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(e, this.schema, n, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", W(this.$data, e));
			else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
			("code" in t ? t.trackErrors : t.errors !== !1) && (this.errsCount = e.gen.const("_errs", l.default.errors));
		}
		result(e, t, n) {
			this.failResult((0, c.not)(e), t, n);
		}
		failResult(e, t, n) {
			this.gen.if(e), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		pass(e, t) {
			this.failResult((0, c.not)(e), void 0, t);
		}
		fail(e) {
			if (e === void 0) {
				this.error(), this.allErrors || this.gen.if(!1);
				return;
			}
			this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		fail$data(e) {
			if (!this.$data) return this.fail(e);
			let { schemaCode: t } = this;
			this.fail((0, c._)`${t} !== undefined && (${(0, c.or)(this.invalid$data(), e)})`);
		}
		error(e, t, n) {
			if (t) {
				this.setParams(t), this._error(e, n), this.setParams({});
				return;
			}
			this._error(e, n);
		}
		_error(e, t) {
			(e ? f.reportExtraError : f.reportError)(this, this.def.error, t);
		}
		$dataError() {
			(0, f.reportError)(this, this.def.$dataError || f.keyword$DataError);
		}
		reset() {
			if (this.errsCount === void 0) throw Error("add \"trackErrors\" to keyword definition");
			(0, f.resetErrorsCount)(this.gen, this.errsCount);
		}
		ok(e) {
			this.allErrors || this.gen.if(e);
		}
		setParams(e, t) {
			t ? Object.assign(this.params, e) : this.params = e;
		}
		block$data(e, t, n = c.nil) {
			this.gen.block(() => {
				this.check$data(e, n), t();
			});
		}
		check$data(e = c.nil, t = c.nil) {
			if (!this.$data) return;
			let { gen: n, schemaCode: r, schemaType: i, def: a } = this;
			n.if((0, c.or)((0, c._)`${r} === undefined`, t)), e !== c.nil && n.assign(e, !0), (i.length || a.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), e !== c.nil && n.assign(e, !1)), n.else();
		}
		invalid$data() {
			let { gen: e, schemaCode: t, schemaType: n, def: r, it: a } = this;
			return (0, c.or)(o(), s());
			function o() {
				if (n.length) {
					/* istanbul ignore if */
					if (!(t instanceof c.Name)) throw Error("ajv implementation error");
					let e = Array.isArray(n) ? n : [n];
					return (0, c._)`${(0, i.checkDataTypes)(e, t, a.opts.strictNumbers, i.DataType.Wrong)}`;
				}
				return c.nil;
			}
			function s() {
				if (r.validateSchema) {
					let n = e.scopeValue("validate$data", { ref: r.validateSchema });
					return (0, c._)`!${n}(${t})`;
				}
				return c.nil;
			}
		}
		subschema(e, t) {
			let n = (0, s.getSubschema)(this.it, e);
			(0, s.extendSubschemaData)(n, this.it, e), (0, s.extendSubschemaMode)(n, e);
			let r = {
				...this.it,
				...n,
				items: void 0,
				props: void 0
			};
			return b(r, t), r;
		}
		mergeEvaluated(e, t) {
			let { it: n, gen: r } = this;
			n.opts.unevaluated && (n.props !== !0 && e.props !== void 0 && (n.props = d.mergeEvaluated.props(r, e.props, n.props, t)), n.items !== !0 && e.items !== void 0 && (n.items = d.mergeEvaluated.items(r, e.items, n.items, t)));
		}
		mergeValidEvaluated(e, t) {
			let { it: n, gen: r } = this;
			if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0)) return r.if(t, () => this.mergeEvaluated(e, c.Name)), !0;
		}
	};
	e.KeywordCxt = H;
	function te(e, t, n, r) {
		let i = new H(e, n, t);
		"code" in n ? n.code(i, r) : i.$data && n.validate ? (0, o.funcKeywordCode)(i, n) : "macro" in n ? (0, o.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, o.funcKeywordCode)(i, n);
	}
	var U = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function W(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
		let i, a;
		if (e === "") return l.default.rootData;
		if (e[0] === "/") {
			if (!U.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
			i = e, a = l.default.rootData;
		} else {
			let o = ne.exec(e);
			if (!o) throw Error(`Invalid JSON-pointer: ${e}`);
			let s = +o[1];
			if (i = o[2], i === "#") {
				if (s >= t) throw Error(u("property/index", s));
				return r[t - s];
			}
			if (s > t) throw Error(u("data", s));
			if (a = n[t - s], !i) return a;
		}
		let o = a, s = i.split("/");
		for (let e of s) e && (a = (0, c._)`${a}${(0, c.getProperty)((0, d.unescapeJsonPointer)(e))}`, o = (0, c._)`${o} && ${a}`);
		return o;
		function u(e, n) {
			return `Cannot access ${e} ${n} levels up, current level is ${t}`;
		}
	}
	e.getData = W;
})), Ii = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = class extends Error {
		constructor(e) {
			super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
		}
	};
})), Li = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Pi();
	e.default = class extends Error {
		constructor(e, n, r, i) {
			super(i || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, t.resolveUrl)(e, n, r), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(e, this.missingRef));
		}
	};
})), Ri = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
	var t = bi(), n = Ii(), r = Si(), i = Pi(), a = xi(), o = Fi(), s = class {
		constructor(e) {
			this.refs = {}, this.dynamicAnchors = {};
			let t;
			typeof e.schema == "object" && (t = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = e.baseId ?? (0, i.normalizeId)(t?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = t?.$async, this.refs = {};
		}
	};
	e.SchemaEnv = s;
	function c(e) {
		let a = d.call(this, e);
		if (a) return a;
		let s = (0, i.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: c, lines: l } = this.opts.code, { ownProperties: u } = this.opts, f = new t.CodeGen(this.scope, {
			es5: c,
			lines: l,
			ownProperties: u
		}), p;
		e.$async && (p = f.scopeValue("Error", {
			ref: n.default,
			code: (0, t._)`require("ajv/dist/runtime/validation_error").default`
		}));
		let m = f.scopeName("validate");
		e.validateName = m;
		let h = {
			gen: f,
			allErrors: this.opts.allErrors,
			data: r.default.data,
			parentData: r.default.parentData,
			parentDataProperty: r.default.parentDataProperty,
			dataNames: [r.default.data],
			dataPathArr: [t.nil],
			dataLevel: 0,
			dataTypes: [],
			definedProperties: /* @__PURE__ */ new Set(),
			topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? {
				ref: e.schema,
				code: (0, t.stringify)(e.schema)
			} : { ref: e.schema }),
			validateName: m,
			ValidationError: p,
			schema: e.schema,
			schemaEnv: e,
			rootId: s,
			baseId: e.baseId || s,
			schemaPath: t.nil,
			errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
			errorPath: (0, t._)`""`,
			opts: this.opts,
			self: this
		}, g;
		try {
			this._compilations.add(e), (0, o.validateFunctionCode)(h), f.optimize(this.opts.code.optimize);
			let n = f.toString();
			g = `${f.scopeRefs(r.default.scope)}return ${n}`, this.opts.code.process && (g = this.opts.code.process(g, e));
			let i = Function(`${r.default.self}`, `${r.default.scope}`, g)(this, this.scope.get());
			if (this.scope.value(m, { ref: i }), i.errors = null, i.schema = e.schema, i.schemaEnv = e, e.$async && (i.$async = !0), this.opts.code.source === !0 && (i.source = {
				validateName: m,
				validateCode: n,
				scopeValues: f._values
			}), this.opts.unevaluated) {
				let { props: e, items: n } = h;
				i.evaluated = {
					props: e instanceof t.Name ? void 0 : e,
					items: n instanceof t.Name ? void 0 : n,
					dynamicProps: e instanceof t.Name,
					dynamicItems: n instanceof t.Name
				}, i.source && (i.source.evaluated = (0, t.stringify)(i.evaluated));
			}
			return e.validate = i, e;
		} catch (t) {
			throw delete e.validate, delete e.validateName, g && this.logger.error("Error compiling schema, function code:", g), t;
		} finally {
			this._compilations.delete(e);
		}
	}
	e.compileSchema = c;
	function l(e, t, n) {
		n = (0, i.resolveUrl)(this.opts.uriResolver, t, n);
		let r = e.refs[n];
		if (r) return r;
		let a = p.call(this, e, n);
		if (a === void 0) {
			let r = e.localRefs?.[n], { schemaId: i } = this.opts;
			r && (a = new s({
				schema: r,
				schemaId: i,
				root: e,
				baseId: t
			}));
		}
		if (a !== void 0) return e.refs[n] = u.call(this, a);
	}
	e.resolveRef = l;
	function u(e) {
		return (0, i.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : c.call(this, e);
	}
	function d(e) {
		for (let t of this._compilations) if (f(t, e)) return t;
	}
	e.getCompilingSchema = d;
	function f(e, t) {
		return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
	}
	function p(e, t) {
		let n;
		for (; typeof (n = this.refs[t]) == "string";) t = n;
		return n || this.schemas[t] || m.call(this, e, t);
	}
	function m(e, t) {
		let n = this.opts.uriResolver.parse(t), r = (0, i._getFullPath)(this.opts.uriResolver, n), a = (0, i.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
		if (Object.keys(e.schema).length > 0 && r === a) return g.call(this, n, e);
		let o = (0, i.normalizeId)(r), l = this.refs[o] || this.schemas[o];
		if (typeof l == "string") {
			let t = m.call(this, e, l);
			return typeof t?.schema == "object" ? g.call(this, n, t) : void 0;
		}
		if (typeof l?.schema == "object") {
			if (l.validate || c.call(this, l), o === (0, i.normalizeId)(t)) {
				let { schema: t } = l, { schemaId: n } = this.opts, r = t[n];
				return r && (a = (0, i.resolveUrl)(this.opts.uriResolver, a, r)), new s({
					schema: t,
					schemaId: n,
					root: e,
					baseId: a
				});
			}
			return g.call(this, n, l);
		}
	}
	e.resolveSchema = m;
	var h = /* @__PURE__ */ new Set([
		"properties",
		"patternProperties",
		"enum",
		"dependencies",
		"definitions"
	]);
	function g(e, { baseId: t, schema: n, root: r }) {
		if (e.fragment?.[0] !== "/") return;
		for (let r of e.fragment.slice(1).split("/")) {
			if (typeof n == "boolean") return;
			let e = n[(0, a.unescapeFragment)(r)];
			if (e === void 0) return;
			n = e;
			let o = typeof n == "object" && n[this.opts.schemaId];
			!h.has(r) && o && (t = (0, i.resolveUrl)(this.opts.uriResolver, t, o));
		}
		let o;
		if (typeof n != "boolean" && n.$ref && !(0, a.schemaHasRulesButRef)(n, this.RULES)) {
			let e = (0, i.resolveUrl)(this.opts.uriResolver, t, n.$ref);
			o = m.call(this, r, e);
		}
		let { schemaId: c } = this.opts;
		if (o ||= new s({
			schema: n,
			schemaId: c,
			root: r,
			baseId: t
		}), o.schema !== o.root.schema) return o;
	}
})), zi = /* @__PURE__ */ dt({
	$id: () => Bi,
	additionalProperties: () => !1,
	default: () => Gi,
	description: () => Vi,
	properties: () => Wi,
	required: () => Ui,
	type: () => Hi
}), Bi, Vi, Hi, Ui, Wi, Gi, Ki = ut((() => {
	Bi = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Vi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Hi = "object", Ui = ["$data"], Wi = { $data: {
		type: "string",
		anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
	} }, Gi = {
		$id: Bi,
		description: Vi,
		type: Hi,
		required: Ui,
		properties: Wi,
		additionalProperties: !1
	};
})), qi = /* @__PURE__ */ Z(((e, t) => {
	var n = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), i = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), a = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
	function s(e) {
		let t = "", n = 0, r = 0;
		for (r = 0; r < e.length; r++) if (n = e[r].charCodeAt(0), n !== 48) {
			if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
			break;
		}
		for (r += 1; r < e.length; r++) {
			if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
		}
		return t;
	}
	var c = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
	function l(e) {
		return e.length = 0, !0;
	}
	function u(e, t, n) {
		if (e.length) {
			let r = s(e);
			if (r !== "") t.push(r);
			else return n.error = !0, !1;
			e.length = 0;
		}
		return !0;
	}
	function d(e) {
		let t = 0, n = {
			error: !1,
			address: "",
			zone: ""
		}, r = [], i = [], a = !1, o = !1, c = u;
		for (let s = 0; s < e.length; s++) {
			let u = e[s];
			if (u !== "[" && u !== "]") {
				if (u === ":") {
					if (a === !0 && (o = !0), !c(i, r, n)) break;
					if (++t > 7) {
						n.error = !0;
						break;
					}
					s > 0 && e[s - 1] === ":" && (a = !0), r.push(":");
					continue;
				}
				if (u === "%") {
					if (!c(i, r, n)) break;
					c = l;
				} else {
					i.push(u);
					continue;
				}
			}
		}
		return i.length && (c === l ? n.zone = i.join("") : o ? r.push(i.join("")) : r.push(s(i))), n.address = r.join(""), n;
	}
	function f(e) {
		if (p(e, ":") < 2) return {
			host: e,
			isIPV6: !1
		};
		let t = d(e);
		if (t.error) return {
			host: e,
			isIPV6: !1
		};
		{
			let e = t.address, n = t.address;
			return t.zone && (e += "%" + t.zone, n += "%25" + t.zone), {
				host: e,
				isIPV6: !0,
				escapedHost: n
			};
		}
	}
	function p(e, t) {
		let n = 0;
		for (let r = 0; r < e.length; r++) e[r] === t && n++;
		return n;
	}
	function m(e) {
		let t = e, n = [], r = -1, i = 0;
		for (; i = t.length;) {
			if (i === 1) {
				if (t === ".") break;
				if (t === "/") {
					n.push("/");
					break;
				}
				n.push(t);
				break;
			}
			if (i === 2) {
				if (t[0] === ".") {
					if (t[1] === ".") break;
					if (t[1] === "/") {
						t = t.slice(2);
						continue;
					}
				} else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
					n.push("/");
					break;
				}
			} else if (i === 3 && t === "/..") {
				n.length !== 0 && n.pop(), n.push("/");
				break;
			}
			if (t[0] === ".") {
				if (t[1] === ".") {
					if (t[2] === "/") {
						t = t.slice(3);
						continue;
					}
				} else if (t[1] === "/") {
					t = t.slice(2);
					continue;
				}
			} else if (t[0] === "/" && t[1] === ".") {
				if (t[2] === "/") {
					t = t.slice(2);
					continue;
				}
				if (t[2] === "." && t[3] === "/") {
					t = t.slice(3), n.length !== 0 && n.pop();
					continue;
				}
			}
			if ((r = t.indexOf("/", 1)) === -1) {
				n.push(t);
				break;
			}
			n.push(t.slice(0, r)), t = t.slice(r);
		}
		return n.join("");
	}
	var h = {
		"@": "%40",
		"/": "%2F",
		"?": "%3F",
		"#": "%23",
		":": "%3A"
	}, g = /[@/?#:]/g, _ = /[@/?#]/g;
	function v(e, t) {
		let n = t ? _ : g;
		return n.lastIndex = 0, e.replace(n, (e) => h[e]);
	}
	function y(e, t = !1) {
		if (e.indexOf("%") === -1) return e;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			if (e[r] === "%" && r + 2 < e.length) {
				let o = e.slice(r + 1, r + 3);
				if (i(o)) {
					let e = o.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					t && a(i) ? n += i : n += "%" + e, r += 2;
					continue;
				}
			}
			n += e[r];
		}
		return n;
	}
	function b(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			if (e[n] === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (i(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					i !== "." && a(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			o(e[n]) ? t += e[n] : t += escape(e[n]);
		}
		return t;
	}
	function x(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			if (e[n] === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (i(r)) {
					t += "%" + r.toUpperCase(), n += 2;
					continue;
				}
			}
			t += escape(e[n]);
		}
		return t;
	}
	function S(e) {
		let t = [];
		if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
			let n = unescape(e.host);
			if (!r(n)) {
				let e = f(n);
				n = e.isIPV6 === !0 ? `[${e.escapedHost}]` : v(n, !1);
			}
			t.push(n);
		}
		return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
	}
	t.exports = {
		nonSimpleDomain: c,
		recomposeAuthority: S,
		reescapeHostDelimiters: v,
		normalizePercentEncoding: y,
		normalizePathEncoding: b,
		escapePreservingEscapes: x,
		removeDotSegments: m,
		isIPv4: r,
		isUUID: n,
		normalizeIPv6: f,
		stringArrayToHexStripped: s
	};
})), Ji = /* @__PURE__ */ Z(((e, t) => {
	var { isUUID: n } = qi(), r = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, i = [
		"http",
		"https",
		"ws",
		"wss",
		"urn",
		"urn:uuid"
	];
	function a(e) {
		return i.indexOf(e) !== -1;
	}
	function o(e) {
		return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
	}
	function s(e) {
		return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
	}
	function c(e) {
		let t = String(e.scheme).toLowerCase() === "https";
		return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path ||= "/", e;
	}
	function l(e) {
		return e.secure = o(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
	}
	function u(e) {
		if ((e.port === (o(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
			let [t, n] = e.resourceName.split("?");
			e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
		}
		return e.fragment = void 0, e;
	}
	function d(e, t) {
		if (!e.path) return e.error = "URN can not be parsed", e;
		let n = e.path.match(r);
		if (n) {
			let r = t.scheme || e.scheme || "urn";
			e.nid = n[1].toLowerCase(), e.nss = n[2];
			let i = y(`${r}:${t.nid || e.nid}`);
			e.path = void 0, i && (e = i.parse(e, t));
		} else e.error = e.error || "URN can not be parsed.";
		return e;
	}
	function f(e, t) {
		if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
		let n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), i = y(`${n}:${t.nid || r}`);
		i && (e = i.serialize(e, t));
		let a = e, o = e.nss;
		return a.path = `${r || t.nid}:${o}`, t.skipEscape = !0, a;
	}
	function p(e, t) {
		let r = e;
		return r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !n(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
	}
	function m(e) {
		let t = e;
		return t.nss = (e.uuid || "").toLowerCase(), t;
	}
	var h = {
		scheme: "http",
		domainHost: !0,
		parse: s,
		serialize: c
	}, g = {
		scheme: "https",
		domainHost: h.domainHost,
		parse: s,
		serialize: c
	}, _ = {
		scheme: "ws",
		domainHost: !0,
		parse: l,
		serialize: u
	}, v = {
		http: h,
		https: g,
		ws: _,
		wss: {
			scheme: "wss",
			domainHost: _.domainHost,
			parse: _.parse,
			serialize: _.serialize
		},
		urn: {
			scheme: "urn",
			parse: d,
			serialize: f,
			skipNormalize: !0
		},
		"urn:uuid": {
			scheme: "urn:uuid",
			parse: p,
			serialize: m,
			skipNormalize: !0
		}
	};
	Object.setPrototypeOf(v, null);
	function y(e) {
		return e && (v[e] || v[e.toLowerCase()]) || void 0;
	}
	t.exports = {
		wsIsSecure: o,
		SCHEMES: v,
		isValidSchemeName: a,
		getSchemeHandler: y
	};
})), Yi = /* @__PURE__ */ Z(((e, t) => {
	var { normalizeIPv6: n, removeDotSegments: r, recomposeAuthority: i, normalizePercentEncoding: a, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: c, isIPv4: l, nonSimpleDomain: u } = qi(), { SCHEMES: d, getSchemeHandler: f } = Ji();
	function p(e, t) {
		return typeof e == "string" ? e = w(e, t) : typeof e == "object" && (e = C(_(e, t), t)), e;
	}
	function m(e, t, n) {
		let r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, { parsed: i, malformedAuthorityOrPort: a } = S(e, r), { parsed: o, malformedAuthorityOrPort: s } = S(t, r);
		if (a || s) throw Error(i.error || o.error || "URI is malformed.");
		let c = h(i, o, r, !0);
		return r.skipEscape = !0, _(c, r);
	}
	function h(e, t, n, i) {
		let a = {};
		return i || (e = C(_(e, n), n), t = C(_(t, n), n)), n ||= {}, !n.tolerant && t.scheme ? (a.scheme = t.scheme, a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.path ? (t.path[0] === "/" ? a.path = r(t.path) : (a.path = (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? "/" + t.path : e.path ? e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : t.path, a.path = r(a.path)), a.query = t.query) : (a.path = e.path, a.query = t.query === void 0 ? e.query : t.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = t.fragment, a;
	}
	function g(e, t, n) {
		let r = E(e, n), i = E(t, n);
		return r !== void 0 && i !== void 0 && r.toLowerCase() === i.toLowerCase();
	}
	function _(e, t) {
		let n = {
			host: e.host,
			scheme: e.scheme,
			userinfo: e.userinfo,
			port: e.port,
			path: e.path,
			query: e.query,
			nid: e.nid,
			nss: e.nss,
			uuid: e.uuid,
			fragment: e.fragment,
			reference: e.reference,
			resourceName: e.resourceName,
			secure: e.secure,
			error: ""
		}, o = Object.assign({}, t), c = [], l = f(o.scheme || n.scheme);
		l && l.serialize && l.serialize(n, o), n.path !== void 0 && (o.skipEscape ? n.path = a(n.path) : (n.path = s(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), o.reference !== "suffix" && n.scheme && c.push(n.scheme, ":");
		let u = i(n);
		if (u !== void 0 && (o.reference !== "suffix" && c.push("//"), c.push(u), n.path && n.path[0] !== "/" && c.push("/")), n.path !== void 0) {
			let e = n.path;
			!o.absolutePath && (!l || !l.absolutePath) && (e = r(e)), u === void 0 && e[0] === "/" && e[1] === "/" && (e = "/%2F" + e.slice(2)), c.push(e);
		}
		return n.query !== void 0 && c.push("?", n.query), n.fragment !== void 0 && c.push("#", n.fragment), c.join("");
	}
	var v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, b = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
	function x(e, t) {
		if (t[2] !== void 0 && e.path && e.path[0] !== "/") return "URI path must start with \"/\" when authority is present.";
		if (typeof e.port == "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
	}
	function S(e, t) {
		let r = Object.assign({}, t), i = {
			scheme: void 0,
			userinfo: void 0,
			host: "",
			port: void 0,
			path: "",
			query: void 0,
			fragment: void 0
		}, a = !1, s = !1;
		r.reference === "suffix" && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
		let d = e.match(y);
		d !== null && d[1].indexOf("\\") !== -1 && (i.error = "URI authority must not contain a literal backslash.", a = !0);
		let p = e.match(b);
		if (p !== null) {
			let e = p[1], t = e.replace(/[\t\n\r]/g, "");
			t.length >= 2 && (t.slice(0, 2) === "//" ? e.length !== t.length && (i.error = i.error || "URI authority introducer must not contain whitespace.", a = !0) : (i.error = i.error || "URI authority must not contain a literal backslash.", a = !0));
		}
		let m = e.match(v);
		if (m) {
			i.scheme = m[1], i.userinfo = m[3], i.host = m[4], i.port = parseInt(m[5], 10), i.path = m[6] || "", i.query = m[7], i.fragment = m[8], isNaN(i.port) && (i.port = m[5]);
			let t = x(i, m);
			if (t !== void 0 && (i.error = i.error || t, a = !0), i.host) {
				if (l(i.host) === !1) {
					let e = n(i.host);
					i.host = e.host.toLowerCase(), s = e.isIPV6;
				} else s = !0;
			}
			i.reference = i.scheme === void 0 && i.userinfo === void 0 && i.host === void 0 && i.port === void 0 && i.query === void 0 && !i.path ? "same-document" : i.scheme === void 0 ? "relative" : i.fragment === void 0 ? "absolute" : "uri", r.reference && r.reference !== "suffix" && r.reference !== i.reference && (i.error = i.error || "URI is not a " + r.reference + " reference.");
			let d = f(r.scheme || i.scheme);
			if (!r.unicodeSupport && (!d || !d.unicodeSupport) && i.host && (r.domainHost || d && d.domainHost) && s === !1 && u(i.host)) try {
				i.host = new URL("http://" + i.host).hostname;
			} catch (e) {
				i.error = i.error || "Host's domain name can not be converted to ASCII: " + e;
			}
			if ((!d || d && !d.skipNormalize) && (e.indexOf("%") !== -1 && (i.scheme !== void 0 && (i.scheme = unescape(i.scheme)), i.host !== void 0 && (i.host = c(unescape(i.host), s))), i.path &&= o(i.path), i.fragment)) try {
				i.fragment = encodeURI(decodeURIComponent(i.fragment));
			} catch {
				i.error = i.error || "URI malformed";
			}
			d && d.parse && d.parse(i, r);
		} else i.error = i.error || "URI can not be parsed.";
		return {
			parsed: i,
			malformedAuthorityOrPort: a
		};
	}
	function C(e, t) {
		return S(e, t).parsed;
	}
	function w(e, t) {
		return T(e, t).normalized;
	}
	function T(e, t) {
		let { parsed: n, malformedAuthorityOrPort: r } = S(e, t);
		return {
			normalized: r ? e : _(n, t),
			malformedAuthorityOrPort: r
		};
	}
	function E(e, t) {
		if (typeof e == "string") {
			let { normalized: n, malformedAuthorityOrPort: r } = T(e, t);
			return r ? void 0 : n;
		}
		if (typeof e == "object") return _(e, t);
	}
	var D = {
		SCHEMES: d,
		normalize: p,
		resolve: m,
		resolveComponent: h,
		equal: g,
		serialize: _,
		parse: C
	};
	t.exports = D, t.exports.default = D, t.exports.fastUri = D;
})), Xi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Yi();
	t.code = "require(\"ajv/dist/runtime/uri\").default", e.default = t;
})), Zi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
	var t = Fi();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return t.KeywordCxt;
		}
	});
	var n = bi();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return n._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return n.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return n.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return n.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return n.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return n.CodeGen;
		}
	});
	var r = Ii(), i = Li(), a = Ti(), o = Ri(), s = bi(), c = Pi(), l = Di(), u = xi(), d = (Ki(), mt(zi).default), f = Xi(), p = (e, t) => new RegExp(e, t);
	p.code = "new RegExp";
	var m = [
		"removeAdditional",
		"useDefaults",
		"coerceTypes"
	], h = /* @__PURE__ */ new Set([
		"validate",
		"serialize",
		"parse",
		"wrapper",
		"root",
		"schema",
		"keyword",
		"pattern",
		"formats",
		"validate$data",
		"func",
		"obj",
		"Error"
	]), g = {
		errorDataPath: "",
		format: "`validateFormats: false` can be used instead.",
		nullable: "\"nullable\" keyword is supported by default.",
		jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
		extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
		missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
		processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
		sourceCode: "Use option `code: {source: true}`",
		strictDefaults: "It is default now, see option `strict`.",
		strictKeywords: "It is default now, see option `strict`.",
		uniqueItems: "\"uniqueItems\" keyword is always validated.",
		unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
		cache: "Map is used as cache, schema object as key.",
		serialize: "Map is used as cache, schema object as key.",
		ajvErrors: "It is default now."
	}, _ = {
		ignoreKeywordsWithRef: "",
		jsPropertySyntax: "",
		unicode: "\"minLength\"/\"maxLength\" account for unicode characters by default."
	}, v = 200;
	function y(e) {
		let t = e.strict, n = e.code?.optimize, r = n === !0 || n === void 0 ? 1 : n || 0, i = e.code?.regExp ?? p, a = e.uriResolver ?? f.default;
		return {
			strictSchema: e.strictSchema ?? t ?? !0,
			strictNumbers: e.strictNumbers ?? t ?? !0,
			strictTypes: e.strictTypes ?? t ?? "log",
			strictTuples: e.strictTuples ?? t ?? "log",
			strictRequired: e.strictRequired ?? t ?? !1,
			code: e.code ? {
				...e.code,
				optimize: r,
				regExp: i
			} : {
				optimize: r,
				regExp: i
			},
			loopRequired: e.loopRequired ?? v,
			loopEnum: e.loopEnum ?? v,
			meta: e.meta ?? !0,
			messages: e.messages ?? !0,
			inlineRefs: e.inlineRefs ?? !0,
			schemaId: e.schemaId ?? "$id",
			addUsedSchema: e.addUsedSchema ?? !0,
			validateSchema: e.validateSchema ?? !0,
			validateFormats: e.validateFormats ?? !0,
			unicodeRegExp: e.unicodeRegExp ?? !0,
			int32range: e.int32range ?? !0,
			uriResolver: a
		};
	}
	var b = class {
		constructor(e = {}) {
			this.schemas = {}, this.refs = {}, this.formats = Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e = this.opts = {
				...e,
				...y(e)
			};
			let { es5: t, lines: n } = this.opts.code;
			this.scope = new s.ValueScope({
				scope: {},
				prefixes: h,
				es5: t,
				lines: n
			}), this.logger = O(e.logger);
			let r = e.validateFormats;
			e.validateFormats = !1, this.RULES = (0, a.getRules)(), x.call(this, g, e, "NOT SUPPORTED"), x.call(this, _, e, "DEPRECATED", "warn"), this._metaOpts = E.call(this), e.formats && w.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && T.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), C.call(this), e.validateFormats = r;
		}
		_addVocabularies() {
			this.addKeyword("$async");
		}
		_addDefaultMetaSchema() {
			let { $data: e, meta: t, schemaId: n } = this.opts, r = d;
			n === "id" && (r = { ...d }, r.id = r.$id, delete r.$id), t && e && this.addMetaSchema(r, r[n], !1);
		}
		defaultMeta() {
			let { meta: e, schemaId: t } = this.opts;
			return this.opts.defaultMeta = typeof e == "object" ? e[t] || e : void 0;
		}
		validate(e, t) {
			let n;
			if (typeof e == "string") {
				if (n = this.getSchema(e), !n) throw Error(`no schema with key or ref "${e}"`);
			} else n = this.compile(e);
			let r = n(t);
			return "$async" in n || (this.errors = n.errors), r;
		}
		compile(e, t) {
			let n = this._addSchema(e, t);
			return n.validate || this._compileSchemaEnv(n);
		}
		compileAsync(e, t) {
			if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
			let { loadSchema: n } = this.opts;
			return r.call(this, e, t);
			async function r(e, t) {
				await a.call(this, e.$schema);
				let n = this._addSchema(e, t);
				return n.validate || o.call(this, n);
			}
			async function a(e) {
				e && !this.getSchema(e) && await r.call(this, { $ref: e }, !0);
			}
			async function o(e) {
				try {
					return this._compileSchemaEnv(e);
				} catch (t) {
					if (!(t instanceof i.default)) throw t;
					return s.call(this, t), await c.call(this, t.missingSchema), o.call(this, e);
				}
			}
			function s({ missingSchema: e, missingRef: t }) {
				if (this.refs[e]) throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
			}
			async function c(e) {
				let n = await l.call(this, e);
				this.refs[e] || await a.call(this, n.$schema), this.refs[e] || this.addSchema(n, e, t);
			}
			async function l(e) {
				let t = this._loading[e];
				if (t) return t;
				try {
					return await (this._loading[e] = n(e));
				} finally {
					delete this._loading[e];
				}
			}
		}
		addSchema(e, t, n, r = this.opts.validateSchema) {
			if (Array.isArray(e)) {
				for (let t of e) this.addSchema(t, void 0, n, r);
				return this;
			}
			let i;
			if (typeof e == "object") {
				let { schemaId: t } = this.opts;
				if (i = e[t], i !== void 0 && typeof i != "string") throw Error(`schema ${t} must be string`);
			}
			return t = (0, c.normalizeId)(t || i), this._checkUnique(t), this.schemas[t] = this._addSchema(e, n, t, r, !0), this;
		}
		addMetaSchema(e, t, n = this.opts.validateSchema) {
			return this.addSchema(e, t, !0, n), this;
		}
		validateSchema(e, t) {
			if (typeof e == "boolean") return !0;
			let n;
			if (n = e.$schema, n !== void 0 && typeof n != "string") throw Error("$schema must be a string");
			if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
			let r = this.validate(n, e);
			if (!r && t) {
				let e = "schema is invalid: " + this.errorsText();
				if (this.opts.validateSchema === "log") this.logger.error(e);
				else throw Error(e);
			}
			return r;
		}
		getSchema(e) {
			let t;
			for (; typeof (t = S.call(this, e)) == "string";) e = t;
			if (t === void 0) {
				let { schemaId: n } = this.opts, r = new o.SchemaEnv({
					schema: {},
					schemaId: n
				});
				if (t = o.resolveSchema.call(this, r, e), !t) return;
				this.refs[e] = t;
			}
			return t.validate || this._compileSchemaEnv(t);
		}
		removeSchema(e) {
			if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
			switch (typeof e) {
				case "undefined": return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
				case "string": {
					let t = S.call(this, e);
					return typeof t == "object" && this._cache.delete(t.schema), delete this.schemas[e], delete this.refs[e], this;
				}
				case "object": {
					let t = e;
					this._cache.delete(t);
					let n = e[this.opts.schemaId];
					return n && (n = (0, c.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), this;
				}
				default: throw Error("ajv.removeSchema: invalid parameter");
			}
		}
		addVocabulary(e) {
			for (let t of e) this.addKeyword(t);
			return this;
		}
		addKeyword(e, t) {
			let n;
			if (typeof e == "string") n = e, typeof t == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = n);
			else if (typeof e == "object" && t === void 0) {
				if (t = e, n = t.keyword, Array.isArray(n) && !n.length) throw Error("addKeywords: keyword must be string or non-empty array");
			} else throw Error("invalid addKeywords parameters");
			if (A.call(this, n, t), !t) return (0, u.eachItem)(n, (e) => j.call(this, e)), this;
			N.call(this, t);
			let r = {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			};
			return (0, u.eachItem)(n, r.type.length === 0 ? (e) => j.call(this, e, r) : (e) => r.type.forEach((t) => j.call(this, e, r, t))), this;
		}
		getKeyword(e) {
			let t = this.RULES.all[e];
			return typeof t == "object" ? t.definition : !!t;
		}
		removeKeyword(e) {
			let { RULES: t } = this;
			delete t.keywords[e], delete t.all[e];
			for (let n of t.rules) {
				let t = n.rules.findIndex((t) => t.keyword === e);
				t >= 0 && n.rules.splice(t, 1);
			}
			return this;
		}
		addFormat(e, t) {
			return typeof t == "string" && (t = new RegExp(t)), this.formats[e] = t, this;
		}
		errorsText(e = this.errors, { separator: t = ", ", dataVar: n = "data" } = {}) {
			return !e || e.length === 0 ? "No errors" : e.map((e) => `${n}${e.instancePath} ${e.message}`).reduce((e, n) => e + t + n);
		}
		$dataMetaSchema(e, t) {
			let n = this.RULES.all;
			e = JSON.parse(JSON.stringify(e));
			for (let r of t) {
				let t = r.split("/").slice(1), i = e;
				for (let e of t) i = i[e];
				for (let e in n) {
					let t = n[e];
					if (typeof t != "object") continue;
					let { $data: r } = t.definition, a = i[e];
					r && a && (i[e] = F(a));
				}
			}
			return e;
		}
		_removeAllSchemas(e, t) {
			for (let n in e) {
				let r = e[n];
				(!t || t.test(n)) && (typeof r == "string" ? delete e[n] : r && !r.meta && (this._cache.delete(r.schema), delete e[n]));
			}
		}
		_addSchema(e, t, n, r = this.opts.validateSchema, i = this.opts.addUsedSchema) {
			let a, { schemaId: s } = this.opts;
			if (typeof e == "object") a = e[s];
			else if (this.opts.jtd) throw Error("schema must be object");
			else if (typeof e != "boolean") throw Error("schema must be object or boolean");
			let l = this._cache.get(e);
			if (l !== void 0) return l;
			n = (0, c.normalizeId)(a || n);
			let u = c.getSchemaRefs.call(this, e, n);
			return l = new o.SchemaEnv({
				schema: e,
				schemaId: s,
				meta: t,
				baseId: n,
				localRefs: u
			}), this._cache.set(l.schema, l), i && !n.startsWith("#") && (n && this._checkUnique(n), this.refs[n] = l), r && this.validateSchema(e, !0), l;
		}
		_checkUnique(e) {
			if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
		}
		_compileSchemaEnv(e) {
			/* istanbul ignore if */
			if (e.meta ? this._compileMetaSchema(e) : o.compileSchema.call(this, e), !e.validate) throw Error("ajv implementation error");
			return e.validate;
		}
		_compileMetaSchema(e) {
			let t = this.opts;
			this.opts = this._metaOpts;
			try {
				o.compileSchema.call(this, e);
			} finally {
				this.opts = t;
			}
		}
	};
	b.ValidationError = r.default, b.MissingRefError = i.default, e.default = b;
	function x(e, t, n, r = "error") {
		for (let i in e) {
			let a = i;
			a in t && this.logger[r](`${n}: option ${i}. ${e[a]}`);
		}
	}
	function S(e) {
		return e = (0, c.normalizeId)(e), this.schemas[e] || this.refs[e];
	}
	function C() {
		let e = this.opts.schemas;
		if (e) {
			if (Array.isArray(e)) this.addSchema(e);
			else for (let t in e) this.addSchema(e[t], t);
		}
	}
	function w() {
		for (let e in this.opts.formats) {
			let t = this.opts.formats[e];
			t && this.addFormat(e, t);
		}
	}
	function T(e) {
		if (Array.isArray(e)) {
			this.addVocabulary(e);
			return;
		}
		this.logger.warn("keywords option as map is deprecated, pass array");
		for (let t in e) {
			let n = e[t];
			n.keyword ||= t, this.addKeyword(n);
		}
	}
	function E() {
		let e = { ...this.opts };
		for (let t of m) delete e[t];
		return e;
	}
	var D = {
		log() {},
		warn() {},
		error() {}
	};
	function O(e) {
		if (e === !1) return D;
		if (e === void 0) return console;
		if (e.log && e.warn && e.error) return e;
		throw Error("logger must implement log, warn and error methods");
	}
	var k = /^[a-z_$][a-z0-9_$:-]*$/i;
	function A(e, t) {
		let { RULES: n } = this;
		if ((0, u.eachItem)(e, (e) => {
			if (n.keywords[e]) throw Error(`Keyword ${e} is already defined`);
			if (!k.test(e)) throw Error(`Keyword ${e} has invalid name`);
		}), t && t.$data && !("code" in t || "validate" in t)) throw Error("$data keyword must have \"code\" or \"validate\" function");
	}
	function j(e, t, n) {
		var r;
		let i = t?.post;
		if (n && i) throw Error("keyword with \"post\" flag cannot have \"type\"");
		let { RULES: a } = this, o = i ? a.post : a.rules.find(({ type: e }) => e === n);
		if (o || (o = {
			type: n,
			rules: []
		}, a.rules.push(o)), a.keywords[e] = !0, !t) return;
		let s = {
			keyword: e,
			definition: {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			}
		};
		t.before ? M.call(this, o, s, t.before) : o.rules.push(s), a.all[e] = s, (r = t.implements) == null || r.forEach((e) => this.addKeyword(e));
	}
	function M(e, t, n) {
		let r = e.rules.findIndex((e) => e.keyword === n);
		r >= 0 ? e.rules.splice(r, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${n} is not defined`));
	}
	function N(e) {
		let { metaSchema: t } = e;
		t !== void 0 && (e.$data && this.opts.$data && (t = F(t)), e.validateSchema = this.compile(t, !0));
	}
	var P = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
	function F(e) {
		return { anyOf: [e, P] };
	}
})), Qi = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "id",
		code() {
			throw Error("NOT SUPPORTED: keyword \"id\", use \"$id\" for schema ID");
		}
	};
})), $i = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.callRef = e.getValidate = void 0;
	var t = Li(), n = ki(), r = bi(), i = Si(), a = Ri(), o = xi(), s = {
		keyword: "$ref",
		schemaType: "string",
		code(e) {
			let { gen: n, schema: i, it: o } = e, { baseId: s, schemaEnv: u, validateName: d, opts: f, self: p } = o, { root: m } = u;
			if ((i === "#" || i === "#/") && s === m.baseId) return g();
			let h = a.resolveRef.call(p, m, s, i);
			if (h === void 0) throw new t.default(o.opts.uriResolver, s, i);
			return h instanceof a.SchemaEnv ? _(h) : v(h);
			function g() {
				if (u === m) return l(e, d, u, u.$async);
				let t = n.scopeValue("root", { ref: m });
				return l(e, (0, r._)`${t}.validate`, m, m.$async);
			}
			function _(t) {
				l(e, c(e, t), t, t.$async);
			}
			function v(t) {
				let a = n.scopeValue("schema", f.code.source === !0 ? {
					ref: t,
					code: (0, r.stringify)(t)
				} : { ref: t }), o = n.name("valid"), s = e.subschema({
					schema: t,
					dataTypes: [],
					schemaPath: r.nil,
					topSchemaRef: a,
					errSchemaPath: i
				}, o);
				e.mergeEvaluated(s), e.ok(o);
			}
		}
	};
	function c(e, t) {
		let { gen: n } = e;
		return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, r._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
	}
	e.getValidate = c;
	function l(e, t, a, s) {
		let { gen: c, it: l } = e, { allErrors: u, schemaEnv: d, opts: f } = l, p = f.passContext ? i.default.this : r.nil;
		s ? m() : h();
		function m() {
			if (!d.$async) throw Error("async schema referenced by sync schema");
			let i = c.let("valid");
			c.try(() => {
				c.code((0, r._)`await ${(0, n.callValidateCode)(e, t, p)}`), _(t), u || c.assign(i, !0);
			}, (e) => {
				c.if((0, r._)`!(${e} instanceof ${l.ValidationError})`, () => c.throw(e)), g(e), u || c.assign(i, !1);
			}), e.ok(i);
		}
		function h() {
			e.result((0, n.callValidateCode)(e, t, p), () => _(t), () => g(t));
		}
		function g(e) {
			let t = (0, r._)`${e}.errors`;
			c.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), c.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
		}
		function _(e) {
			if (!l.opts.unevaluated) return;
			let t = a?.validate?.evaluated;
			if (l.props !== !0) {
				if (t && !t.dynamicProps) t.props !== void 0 && (l.props = o.mergeEvaluated.props(c, t.props, l.props));
				else {
					let t = c.var("props", (0, r._)`${e}.evaluated.props`);
					l.props = o.mergeEvaluated.props(c, t, l.props, r.Name);
				}
			}
			if (l.items !== !0) {
				if (t && !t.dynamicItems) t.items !== void 0 && (l.items = o.mergeEvaluated.items(c, t.items, l.items));
				else {
					let t = c.var("items", (0, r._)`${e}.evaluated.items`);
					l.items = o.mergeEvaluated.items(c, t, l.items, r.Name);
				}
			}
		}
	}
	e.callRef = l, e.default = s;
})), ea = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Qi(), n = $i();
	e.default = [
		"$schema",
		"$id",
		"$defs",
		"$vocabulary",
		{ keyword: "$comment" },
		"definitions",
		t.default,
		n.default
	];
})), ta = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = t.operators, r = {
		maximum: {
			okStr: "<=",
			ok: n.LTE,
			fail: n.GT
		},
		minimum: {
			okStr: ">=",
			ok: n.GTE,
			fail: n.LT
		},
		exclusiveMaximum: {
			okStr: "<",
			ok: n.LT,
			fail: n.GTE
		},
		exclusiveMinimum: {
			okStr: ">",
			ok: n.GT,
			fail: n.LTE
		}
	};
	e.default = {
		keyword: Object.keys(r),
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: n }) => (0, t.str)`must be ${r[e].okStr} ${n}`,
			params: ({ keyword: e, schemaCode: n }) => (0, t._)`{comparison: ${r[e].okStr}, limit: ${n}}`
		},
		code(e) {
			let { keyword: n, data: i, schemaCode: a } = e;
			e.fail$data((0, t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`);
		}
	};
})), na = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi();
	e.default = {
		keyword: "multipleOf",
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must be multiple of ${e}`,
			params: ({ schemaCode: e }) => (0, t._)`{multipleOf: ${e}}`
		},
		code(e) {
			let { gen: n, data: r, schemaCode: i, it: a } = e, o = a.opts.multipleOfPrecision, s = n.let("res"), c = o ? (0, t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}` : (0, t._)`${s} !== parseInt(${s})`;
			e.fail$data((0, t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`);
		}
	};
})), ra = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e) {
		let t = e.length, n = 0, r = 0, i;
		for (; r < t;) n++, i = e.charCodeAt(r++), i >= 55296 && i <= 56319 && r < t && (i = e.charCodeAt(r), (i & 64512) == 56320 && r++);
		return n;
	}
	e.default = t, t.code = "require(\"ajv/dist/runtime/ucs2length\").default";
})), ia = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi(), r = ra();
	e.default = {
		keyword: ["maxLength", "minLength"],
		type: "string",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxLength" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} characters`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: i, data: a, schemaCode: o, it: s } = e, c = i === "maxLength" ? t.operators.GT : t.operators.LT, l = s.opts.unicode === !1 ? (0, t._)`${a}.length` : (0, t._)`${(0, n.useFunc)(e.gen, r.default)}(${a})`;
			e.fail$data((0, t._)`${l} ${c} ${o}`);
		}
	};
})), aa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ki(), n = xi(), r = bi();
	e.default = {
		keyword: "pattern",
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, r.str)`must match pattern "${e}"`,
			params: ({ schemaCode: e }) => (0, r._)`{pattern: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e, u = l.opts.unicodeRegExp ? "u" : "";
			if (o) {
				let { regExp: t } = l.opts.code, o = t.code === "new RegExp" ? (0, r._)`new RegExp` : (0, n.useFunc)(i, t), s = i.let("valid");
				i.try(() => i.assign(s, (0, r._)`${o}(${c}, ${u}).test(${a})`), () => i.assign(s, !1)), e.fail$data((0, r._)`!${s}`);
			} else {
				let n = (0, t.usePattern)(e, s);
				e.fail$data((0, r._)`!${n}.test(${a})`);
			}
		}
	};
})), oa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi();
	e.default = {
		keyword: ["maxProperties", "minProperties"],
		type: "object",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxProperties" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} properties`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxProperties" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`Object.keys(${r}).length ${a} ${i}`);
		}
	};
})), sa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ki(), n = bi(), r = xi();
	e.default = {
		keyword: "required",
		type: "object",
		schemaType: "array",
		$data: !0,
		error: {
			message: ({ params: { missingProperty: e } }) => (0, n.str)`must have required property '${e}'`,
			params: ({ params: { missingProperty: e } }) => (0, n._)`{missingProperty: ${e}}`
		},
		code(e) {
			let { gen: i, schema: a, schemaCode: o, data: s, $data: c, it: l } = e, { opts: u } = l;
			if (!c && a.length === 0) return;
			let d = a.length >= u.loopRequired;
			if (l.allErrors ? f() : p(), u.strictRequired) {
				let t = e.parentSchema.properties, { definedProperties: n } = e.it;
				for (let e of a) if (t?.[e] === void 0 && !n.has(e)) {
					let t = `required property "${e}" is not defined at "${l.schemaEnv.baseId + l.errSchemaPath}" (strictRequired)`;
					(0, r.checkStrictMode)(l, t, l.opts.strictRequired);
				}
			}
			function f() {
				if (d || c) e.block$data(n.nil, m);
				else for (let n of a) (0, t.checkReportMissingProp)(e, n);
			}
			function p() {
				let n = i.let("missing");
				if (d || c) {
					let t = i.let("valid", !0);
					e.block$data(t, () => h(n, t)), e.ok(t);
				} else i.if((0, t.checkMissingProp)(e, a, n)), (0, t.reportMissingProp)(e, n), i.else();
			}
			function m() {
				i.forOf("prop", o, (n) => {
					e.setParams({ missingProperty: n }), i.if((0, t.noPropertyInData)(i, s, n, u.ownProperties), () => e.error());
				});
			}
			function h(r, a) {
				e.setParams({ missingProperty: r }), i.forOf(r, o, () => {
					i.assign(a, (0, t.propertyInData)(i, s, r, u.ownProperties)), i.if((0, n.not)(a), () => {
						e.error(), i.break();
					});
				}, n.nil);
			}
		}
	};
})), ca = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi();
	e.default = {
		keyword: ["maxItems", "minItems"],
		type: "array",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxItems" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} items`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxItems" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`${r}.length ${a} ${i}`);
		}
	};
})), la = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Mi();
	t.code = "require(\"ajv/dist/runtime/equal\").default", e.default = t;
})), ua = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Di(), n = bi(), r = xi(), i = la();
	e.default = {
		keyword: "uniqueItems",
		type: "array",
		schemaType: "boolean",
		$data: !0,
		error: {
			message: ({ params: { i: e, j: t } }) => (0, n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
			params: ({ params: { i: e, j: t } }) => (0, n._)`{i: ${e}, j: ${t}}`
		},
		code(e) {
			let { gen: a, data: o, $data: s, schema: c, parentSchema: l, schemaCode: u, it: d } = e;
			if (!s && !c) return;
			let f = a.let("valid"), p = l.items ? (0, t.getSchemaTypes)(l.items) : [];
			e.block$data(f, m, (0, n._)`${u} === false`), e.ok(f);
			function m() {
				let t = a.let("i", (0, n._)`${o}.length`), r = a.let("j");
				e.setParams({
					i: t,
					j: r
				}), a.assign(f, !0), a.if((0, n._)`${t} > 1`, () => (h() ? g : _)(t, r));
			}
			function h() {
				return p.length > 0 && !p.some((e) => e === "object" || e === "array");
			}
			function g(r, i) {
				let s = a.name("item"), c = (0, t.checkDataTypes)(p, s, d.opts.strictNumbers, t.DataType.Wrong), l = a.const("indices", (0, n._)`{}`);
				a.for((0, n._)`;${r}--;`, () => {
					a.let(s, (0, n._)`${o}[${r}]`), a.if(c, (0, n._)`continue`), p.length > 1 && a.if((0, n._)`typeof ${s} == "string"`, (0, n._)`${s} += "_"`), a.if((0, n._)`typeof ${l}[${s}] == "number"`, () => {
						a.assign(i, (0, n._)`${l}[${s}]`), e.error(), a.assign(f, !1).break();
					}).code((0, n._)`${l}[${s}] = ${r}`);
				});
			}
			function _(t, s) {
				let c = (0, r.useFunc)(a, i.default), l = a.name("outer");
				a.label(l).for((0, n._)`;${t}--;`, () => a.for((0, n._)`${s} = ${t}; ${s}--;`, () => a.if((0, n._)`${c}(${o}[${t}], ${o}[${s}])`, () => {
					e.error(), a.assign(f, !1).break(l);
				})));
			}
		}
	};
})), da = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi(), r = la();
	e.default = {
		keyword: "const",
		$data: !0,
		error: {
			message: "must be equal to constant",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValue: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schemaCode: s, schema: c } = e;
			o || c && typeof c == "object" ? e.fail$data((0, t._)`!${(0, n.useFunc)(i, r.default)}(${a}, ${s})`) : e.fail((0, t._)`${c} !== ${a}`);
		}
	};
})), fa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi(), r = la();
	e.default = {
		keyword: "enum",
		schemaType: "array",
		$data: !0,
		error: {
			message: "must be equal to one of the allowed values",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValues: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e;
			if (!o && s.length === 0) throw Error("enum must have non-empty array");
			let u = s.length >= l.opts.loopEnum, d, f = () => d ??= (0, n.useFunc)(i, r.default), p;
			if (u || o) p = i.let("valid"), e.block$data(p, m);
			else {
				/* istanbul ignore if */
				if (!Array.isArray(s)) throw Error("ajv implementation error");
				let e = i.const("vSchema", c);
				p = (0, t.or)(...s.map((t, n) => h(e, n)));
			}
			e.pass(p);
			function m() {
				i.assign(p, !1), i.forOf("v", c, (e) => i.if((0, t._)`${f()}(${a}, ${e})`, () => i.assign(p, !0).break()));
			}
			function h(e, n) {
				let r = s[n];
				return typeof r == "object" && r ? (0, t._)`${f()}(${a}, ${e}[${n}])` : (0, t._)`${a} === ${r}`;
			}
		}
	};
})), pa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ta(), n = na(), r = ia(), i = aa(), a = oa(), o = sa(), s = ca(), c = ua(), l = da(), u = fa();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default,
		a.default,
		o.default,
		s.default,
		c.default,
		{
			keyword: "type",
			schemaType: ["string", "array"]
		},
		{
			keyword: "nullable",
			schemaType: "boolean"
		},
		l.default,
		u.default
	];
})), ma = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateAdditionalItems = void 0;
	var t = bi(), n = xi(), r = {
		keyword: "additionalItems",
		type: "array",
		schemaType: ["boolean", "object"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { parentSchema: t, it: r } = e, { items: a } = t;
			if (!Array.isArray(a)) {
				(0, n.checkStrictMode)(r, "\"additionalItems\" is ignored when \"items\" is not an array of schemas");
				return;
			}
			i(e, a);
		}
	};
	function i(e, r) {
		let { gen: i, schema: a, data: o, keyword: s, it: c } = e;
		c.items = !0;
		let l = i.const("len", (0, t._)`${o}.length`);
		if (a === !1) e.setParams({ len: r.length }), e.pass((0, t._)`${l} <= ${r.length}`);
		else if (typeof a == "object" && !(0, n.alwaysValidSchema)(c, a)) {
			let n = i.var("valid", (0, t._)`${l} <= ${r.length}`);
			i.if((0, t.not)(n), () => u(n)), e.ok(n);
		}
		function u(a) {
			i.forRange("i", r.length, l, (r) => {
				e.subschema({
					keyword: s,
					dataProp: r,
					dataPropType: n.Type.Num
				}, a), c.allErrors || i.if((0, t.not)(a), () => i.break());
			});
		}
	}
	e.validateAdditionalItems = i, e.default = r;
})), ha = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTuple = void 0;
	var t = bi(), n = xi(), r = ki(), i = {
		keyword: "items",
		type: "array",
		schemaType: [
			"object",
			"array",
			"boolean"
		],
		before: "uniqueItems",
		code(e) {
			let { schema: t, it: i } = e;
			if (Array.isArray(t)) return a(e, "additionalItems", t);
			i.items = !0, !(0, n.alwaysValidSchema)(i, t) && e.ok((0, r.validateArray)(e));
		}
	};
	function a(e, r, i = e.schema) {
		let { gen: a, parentSchema: o, data: s, keyword: c, it: l } = e;
		f(o), l.opts.unevaluated && i.length && l.items !== !0 && (l.items = n.mergeEvaluated.items(a, i.length, l.items));
		let u = a.name("valid"), d = a.const("len", (0, t._)`${s}.length`);
		i.forEach((r, i) => {
			(0, n.alwaysValidSchema)(l, r) || (a.if((0, t._)`${d} > ${i}`, () => e.subschema({
				keyword: c,
				schemaProp: i,
				dataProp: i
			}, u)), e.ok(u));
		});
		function f(e) {
			let { opts: t, errSchemaPath: a } = l, o = i.length, s = o === e.minItems && (o === e.maxItems || e[r] === !1);
			if (t.strictTuples && !s) {
				let e = `"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;
				(0, n.checkStrictMode)(l, e, t.strictTuples);
			}
		}
	}
	e.validateTuple = a, e.default = i;
})), ga = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ha();
	e.default = {
		keyword: "prefixItems",
		type: "array",
		schemaType: ["array"],
		before: "uniqueItems",
		code: (e) => (0, t.validateTuple)(e, "items")
	};
})), _a = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi(), r = ki(), i = ma();
	e.default = {
		keyword: "items",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { schema: t, parentSchema: a, it: o } = e, { prefixItems: s } = a;
			o.items = !0, !(0, n.alwaysValidSchema)(o, t) && (s ? (0, i.validateAdditionalItems)(e, s) : e.ok((0, r.validateArray)(e)));
		}
	};
})), va = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi();
	e.default = {
		keyword: "contains",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		trackErrors: !0,
		error: {
			message: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t.str)`must contain at least ${e} valid item(s)` : (0, t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,
			params: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t._)`{minContains: ${e}}` : (0, t._)`{minContains: ${e}, maxContains: ${n}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, data: o, it: s } = e, c, l, { minContains: u, maxContains: d } = a;
			s.opts.next ? (c = u === void 0 ? 1 : u, l = d) : c = 1;
			let f = r.const("len", (0, t._)`${o}.length`);
			if (e.setParams({
				min: c,
				max: l
			}), l === void 0 && c === 0) {
				(0, n.checkStrictMode)(s, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
				return;
			}
			if (l !== void 0 && c > l) {
				(0, n.checkStrictMode)(s, "\"minContains\" > \"maxContains\" is always invalid"), e.fail();
				return;
			}
			if ((0, n.alwaysValidSchema)(s, i)) {
				let n = (0, t._)`${f} >= ${c}`;
				l !== void 0 && (n = (0, t._)`${n} && ${f} <= ${l}`), e.pass(n);
				return;
			}
			s.items = !0;
			let p = r.name("valid");
			l === void 0 && c === 1 ? h(p, () => r.if(p, () => r.break())) : c === 0 ? (r.let(p, !0), l !== void 0 && r.if((0, t._)`${o}.length > 0`, m)) : (r.let(p, !1), m()), e.result(p, () => e.reset());
			function m() {
				let e = r.name("_valid"), t = r.let("count", 0);
				h(e, () => r.if(e, () => g(t)));
			}
			function h(t, i) {
				r.forRange("i", 0, f, (r) => {
					e.subschema({
						keyword: "contains",
						dataProp: r,
						dataPropType: n.Type.Num,
						compositeRule: !0
					}, t), i();
				});
			}
			function g(e) {
				r.code((0, t._)`${e}++`), l === void 0 ? r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0).break()) : (r.if((0, t._)`${e} > ${l}`, () => r.assign(p, !1).break()), c === 1 ? r.assign(p, !0) : r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0)));
			}
		}
	};
})), ya = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
	var t = bi(), n = xi(), r = ki();
	e.error = {
		message: ({ params: { property: e, depsCount: n, deps: r } }) => {
			let i = n === 1 ? "property" : "properties";
			return (0, t.str)`must have ${i} ${r} when property ${e} is present`;
		},
		params: ({ params: { property: e, depsCount: n, deps: r, missingProperty: i } }) => (0, t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`
	};
	var i = {
		keyword: "dependencies",
		type: "object",
		schemaType: "object",
		error: e.error,
		code(e) {
			let [t, n] = a(e);
			o(e, t), s(e, n);
		}
	};
	function a({ schema: e }) {
		let t = {}, n = {};
		for (let r in e) {
			if (r === "__proto__") continue;
			let i = Array.isArray(e[r]) ? t : n;
			i[r] = e[r];
		}
		return [t, n];
	}
	function o(e, n = e.schema) {
		let { gen: i, data: a, it: o } = e;
		if (Object.keys(n).length === 0) return;
		let s = i.let("missing");
		for (let c in n) {
			let l = n[c];
			if (l.length === 0) continue;
			let u = (0, r.propertyInData)(i, a, c, o.opts.ownProperties);
			e.setParams({
				property: c,
				depsCount: l.length,
				deps: l.join(", ")
			}), o.allErrors ? i.if(u, () => {
				for (let t of l) (0, r.checkReportMissingProp)(e, t);
			}) : (i.if((0, t._)`${u} && (${(0, r.checkMissingProp)(e, l, s)})`), (0, r.reportMissingProp)(e, s), i.else());
		}
	}
	e.validatePropertyDeps = o;
	function s(e, t = e.schema) {
		let { gen: i, data: a, keyword: o, it: s } = e, c = i.name("valid");
		for (let l in t) (0, n.alwaysValidSchema)(s, t[l]) || (i.if((0, r.propertyInData)(i, a, l, s.opts.ownProperties), () => {
			let t = e.subschema({
				keyword: o,
				schemaProp: l
			}, c);
			e.mergeValidEvaluated(t, c);
		}, () => i.var(c, !0)), e.ok(c));
	}
	e.validateSchemaDeps = s, e.default = i;
})), ba = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi();
	e.default = {
		keyword: "propertyNames",
		type: "object",
		schemaType: ["object", "boolean"],
		error: {
			message: "property name must be valid",
			params: ({ params: e }) => (0, t._)`{propertyName: ${e.propertyName}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e;
			if ((0, n.alwaysValidSchema)(o, i)) return;
			let s = r.name("valid");
			r.forIn("key", a, (n) => {
				e.setParams({ propertyName: n }), e.subschema({
					keyword: "propertyNames",
					data: n,
					dataTypes: ["string"],
					propertyName: n,
					compositeRule: !0
				}, s), r.if((0, t.not)(s), () => {
					e.error(!0), o.allErrors || r.break();
				});
			}), e.ok(s);
		}
	};
})), xa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ki(), n = bi(), r = Si(), i = xi();
	e.default = {
		keyword: "additionalProperties",
		type: ["object"],
		schemaType: ["boolean", "object"],
		allowUndefined: !0,
		trackErrors: !0,
		error: {
			message: "must NOT have additional properties",
			params: ({ params: e }) => (0, n._)`{additionalProperty: ${e.additionalProperty}}`
		},
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, errsCount: l, it: u } = e;
			/* istanbul ignore if */
			if (!l) throw Error("ajv implementation error");
			let { allErrors: d, opts: f } = u;
			if (u.props = !0, f.removeAdditional !== "all" && (0, i.alwaysValidSchema)(u, o)) return;
			let p = (0, t.allSchemaProperties)(s.properties), m = (0, t.allSchemaProperties)(s.patternProperties);
			h(), e.ok((0, n._)`${l} === ${r.default.errors}`);
			function h() {
				a.forIn("key", c, (e) => {
					!p.length && !m.length ? v(e) : a.if(g(e), () => v(e));
				});
			}
			function g(r) {
				let o;
				if (p.length > 8) {
					let e = (0, i.schemaRefOrVal)(u, s.properties, "properties");
					o = (0, t.isOwnProperty)(a, e, r);
				} else o = p.length ? (0, n.or)(...p.map((e) => (0, n._)`${r} === ${e}`)) : n.nil;
				return m.length && (o = (0, n.or)(o, ...m.map((i) => (0, n._)`${(0, t.usePattern)(e, i)}.test(${r})`))), (0, n.not)(o);
			}
			function _(e) {
				a.code((0, n._)`delete ${c}[${e}]`);
			}
			function v(t) {
				if (f.removeAdditional === "all" || f.removeAdditional && o === !1) {
					_(t);
					return;
				}
				if (o === !1) {
					e.setParams({ additionalProperty: t }), e.error(), d || a.break();
					return;
				}
				if (typeof o == "object" && !(0, i.alwaysValidSchema)(u, o)) {
					let r = a.name("valid");
					f.removeAdditional === "failing" ? (y(t, r, !1), a.if((0, n.not)(r), () => {
						e.reset(), _(t);
					})) : (y(t, r), d || a.if((0, n.not)(r), () => a.break()));
				}
			}
			function y(t, n, r) {
				let a = {
					keyword: "additionalProperties",
					dataProp: t,
					dataPropType: i.Type.Str
				};
				r === !1 && Object.assign(a, {
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}), e.subschema(a, n);
			}
		}
	};
})), Sa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Fi(), n = ki(), r = xi(), i = xa();
	e.default = {
		keyword: "properties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, it: l } = e;
			l.opts.removeAdditional === "all" && s.additionalProperties === void 0 && i.default.code(new t.KeywordCxt(l, i.default, "additionalProperties"));
			let u = (0, n.allSchemaProperties)(o);
			for (let e of u) l.definedProperties.add(e);
			l.opts.unevaluated && u.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(u), l.props));
			let d = u.filter((e) => !(0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0) return;
			let f = a.name("valid");
			for (let t of d) p(t) ? m(t) : (a.if((0, n.propertyInData)(a, c, t, l.opts.ownProperties)), m(t), l.allErrors || a.else().var(f, !0), a.endIf()), e.it.definedProperties.add(t), e.ok(f);
			function p(e) {
				return l.opts.useDefaults && !l.compositeRule && o[e].default !== void 0;
			}
			function m(t) {
				e.subschema({
					keyword: "properties",
					schemaProp: t,
					dataProp: t
				}, f);
			}
		}
	};
})), Ca = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ki(), n = bi(), r = xi(), i = xi();
	e.default = {
		keyword: "patternProperties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, data: s, parentSchema: c, it: l } = e, { opts: u } = l, d = (0, t.allSchemaProperties)(o), f = d.filter((e) => (0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0 || f.length === d.length && (!l.opts.unevaluated || l.props === !0)) return;
			let p = u.strictSchema && !u.allowMatchingProperties && c.properties, m = a.name("valid");
			l.props !== !0 && !(l.props instanceof n.Name) && (l.props = (0, i.evaluatedPropsToName)(a, l.props));
			let { props: h } = l;
			g();
			function g() {
				for (let e of d) p && _(e), l.allErrors ? v(e) : (a.var(m, !0), v(e), a.if(m));
			}
			function _(e) {
				for (let t in p) new RegExp(e).test(t) && (0, r.checkStrictMode)(l, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
			}
			function v(r) {
				a.forIn("key", s, (o) => {
					a.if((0, n._)`${(0, t.usePattern)(e, r)}.test(${o})`, () => {
						let t = f.includes(r);
						t || e.subschema({
							keyword: "patternProperties",
							schemaProp: r,
							dataProp: o,
							dataPropType: i.Type.Str
						}, m), l.opts.unevaluated && h !== !0 ? a.assign((0, n._)`${h}[${o}]`, !0) : !t && !l.allErrors && a.if((0, n.not)(m), () => a.break());
					});
				});
			}
		}
	};
})), wa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = xi();
	e.default = {
		keyword: "not",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			if ((0, t.alwaysValidSchema)(i, r)) {
				e.fail();
				return;
			}
			let a = n.name("valid");
			e.subschema({
				keyword: "not",
				compositeRule: !0,
				createErrors: !1,
				allErrors: !1
			}, a), e.failResult(a, () => e.reset(), () => e.error());
		},
		error: { message: "must NOT be valid" }
	};
})), Ta = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "anyOf",
		schemaType: "array",
		trackErrors: !0,
		code: ki().validateUnion,
		error: { message: "must match a schema in anyOf" }
	};
})), Ea = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi();
	e.default = {
		keyword: "oneOf",
		schemaType: "array",
		trackErrors: !0,
		error: {
			message: "must match exactly one schema in oneOf",
			params: ({ params: e }) => (0, t._)`{passingSchemas: ${e.passing}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, it: o } = e;
			/* istanbul ignore if */
			if (!Array.isArray(i)) throw Error("ajv implementation error");
			if (o.opts.discriminator && a.discriminator) return;
			let s = i, c = r.let("valid", !1), l = r.let("passing", null), u = r.name("_valid");
			e.setParams({ passing: l }), r.block(d), e.result(c, () => e.reset(), () => e.error(!0));
			function d() {
				s.forEach((i, a) => {
					let s;
					(0, n.alwaysValidSchema)(o, i) ? r.var(u, !0) : s = e.subschema({
						keyword: "oneOf",
						schemaProp: a,
						compositeRule: !0
					}, u), a > 0 && r.if((0, t._)`${u} && ${c}`).assign(c, !1).assign(l, (0, t._)`[${l}, ${a}]`).else(), r.if(u, () => {
						r.assign(c, !0), r.assign(l, a), s && e.mergeEvaluated(s, t.Name);
					});
				});
			}
		}
	};
})), Da = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = xi();
	e.default = {
		keyword: "allOf",
		schemaType: "array",
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			/* istanbul ignore if */
			if (!Array.isArray(r)) throw Error("ajv implementation error");
			let a = n.name("valid");
			r.forEach((n, r) => {
				if ((0, t.alwaysValidSchema)(i, n)) return;
				let o = e.subschema({
					keyword: "allOf",
					schemaProp: r
				}, a);
				e.ok(a), e.mergeEvaluated(o);
			});
		}
	};
})), Oa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = xi(), r = {
		keyword: "if",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		error: {
			message: ({ params: e }) => (0, t.str)`must match "${e.ifClause}" schema`,
			params: ({ params: e }) => (0, t._)`{failingKeyword: ${e.ifClause}}`
		},
		code(e) {
			let { gen: r, parentSchema: a, it: o } = e;
			a.then === void 0 && a.else === void 0 && (0, n.checkStrictMode)(o, "\"if\" without \"then\" and \"else\" is ignored");
			let s = i(o, "then"), c = i(o, "else");
			if (!s && !c) return;
			let l = r.let("valid", !0), u = r.name("_valid");
			if (d(), e.reset(), s && c) {
				let t = r.let("ifClause");
				e.setParams({ ifClause: t }), r.if(u, f("then", t), f("else", t));
			} else s ? r.if(u, f("then")) : r.if((0, t.not)(u), f("else"));
			e.pass(l, () => e.error(!0));
			function d() {
				let t = e.subschema({
					keyword: "if",
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}, u);
				e.mergeEvaluated(t);
			}
			function f(n, i) {
				return () => {
					let a = e.subschema({ keyword: n }, u);
					r.assign(l, u), e.mergeValidEvaluated(a, l), i ? r.assign(i, (0, t._)`${n}`) : e.setParams({ ifClause: n });
				};
			}
		}
	};
	function i(e, t) {
		let r = e.schema[t];
		return r !== void 0 && !(0, n.alwaysValidSchema)(e, r);
	}
	e.default = r;
})), ka = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = xi();
	e.default = {
		keyword: ["then", "else"],
		schemaType: ["object", "boolean"],
		code({ keyword: e, parentSchema: n, it: r }) {
			n.if === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "if" is ignored`);
		}
	};
})), Aa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ma(), n = ga(), r = ha(), i = _a(), a = va(), o = ya(), s = ba(), c = xa(), l = Sa(), u = Ca(), d = wa(), f = Ta(), p = Ea(), m = Da(), h = Oa(), g = ka();
	function _(e = !1) {
		let _ = [
			d.default,
			f.default,
			p.default,
			m.default,
			h.default,
			g.default,
			s.default,
			c.default,
			o.default,
			l.default,
			u.default
		];
		return e ? _.push(n.default, i.default) : _.push(t.default, r.default), _.push(a.default), _;
	}
	e.default = _;
})), ja = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi();
	e.default = {
		keyword: "format",
		type: ["number", "string"],
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must match format "${e}"`,
			params: ({ schemaCode: e }) => (0, t._)`{format: ${e}}`
		},
		code(e, n) {
			let { gen: r, data: i, $data: a, schema: o, schemaCode: s, it: c } = e, { opts: l, errSchemaPath: u, schemaEnv: d, self: f } = c;
			if (!l.validateFormats) return;
			a ? p() : m();
			function p() {
				let a = r.scopeValue("formats", {
					ref: f.formats,
					code: l.code.formats
				}), o = r.const("fDef", (0, t._)`${a}[${s}]`), c = r.let("fType"), u = r.let("format");
				r.if((0, t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`, () => r.assign(c, (0, t._)`${o}.type || "string"`).assign(u, (0, t._)`${o}.validate`), () => r.assign(c, (0, t._)`"string"`).assign(u, o)), e.fail$data((0, t.or)(p(), m()));
				function p() {
					return l.strictSchema === !1 ? t.nil : (0, t._)`${s} && !${u}`;
				}
				function m() {
					let e = d.$async ? (0, t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))` : (0, t._)`${u}(${i})`, r = (0, t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;
					return (0, t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`;
				}
			}
			function m() {
				let a = f.formats[o];
				if (!a) {
					m();
					return;
				}
				if (a === !0) return;
				let [s, c, p] = h(a);
				s === n && e.pass(g());
				function m() {
					if (l.strictSchema === !1) {
						f.logger.warn(e());
						return;
					}
					throw Error(e());
					function e() {
						return `unknown format "${o}" ignored in schema at path "${u}"`;
					}
				}
				function h(e) {
					let n = e instanceof RegExp ? (0, t.regexpCode)(e) : l.code.formats ? (0, t._)`${l.code.formats}${(0, t.getProperty)(o)}` : void 0, i = r.scopeValue("formats", {
						key: o,
						ref: e,
						code: n
					});
					return typeof e == "object" && !(e instanceof RegExp) ? [
						e.type || "string",
						e.validate,
						(0, t._)`${i}.validate`
					] : [
						"string",
						e,
						i
					];
				}
				function g() {
					if (typeof a == "object" && !(a instanceof RegExp) && a.async) {
						if (!d.$async) throw Error("async format in sync schema");
						return (0, t._)`await ${p}(${i})`;
					}
					return typeof c == "function" ? (0, t._)`${p}(${i})` : (0, t._)`${p}.test(${i})`;
				}
			}
		}
	};
})), Ma = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [ja().default];
})), Na = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	], e.contentVocabulary = [
		"contentMediaType",
		"contentEncoding",
		"contentSchema"
	];
})), Pa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ea(), n = pa(), r = Aa(), i = Ma(), a = Na();
	e.default = [
		t.default,
		n.default,
		(0, r.default)(),
		i.default,
		a.metadataVocabulary,
		a.contentVocabulary
	];
})), Fa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0;
	var t;
	(function(e) {
		e.Tag = "tag", e.Mapping = "mapping";
	})(t || (e.DiscrError = t = {}));
})), Ia = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bi(), n = Fa(), r = Ri(), i = Li(), a = xi();
	e.default = {
		keyword: "discriminator",
		type: "object",
		schemaType: "object",
		error: {
			message: ({ params: { discrError: e, tagName: t } }) => e === n.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
			params: ({ params: { discrError: e, tag: n, tagName: r } }) => (0, t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`
		},
		code(e) {
			let { gen: o, data: s, schema: c, parentSchema: l, it: u } = e, { oneOf: d } = l;
			if (!u.opts.discriminator) throw Error("discriminator: requires discriminator option");
			let f = c.propertyName;
			if (typeof f != "string") throw Error("discriminator: requires propertyName");
			if (c.mapping) throw Error("discriminator: mapping is not supported");
			if (!d) throw Error("discriminator: requires oneOf keyword");
			let p = o.let("valid", !1), m = o.const("tag", (0, t._)`${s}${(0, t.getProperty)(f)}`);
			o.if((0, t._)`typeof ${m} == "string"`, () => h(), () => e.error(!1, {
				discrError: n.DiscrError.Tag,
				tag: m,
				tagName: f
			})), e.ok(p);
			function h() {
				let r = _();
				o.if(!1);
				for (let e in r) o.elseIf((0, t._)`${m} === ${e}`), o.assign(p, g(r[e]));
				o.else(), e.error(!1, {
					discrError: n.DiscrError.Mapping,
					tag: m,
					tagName: f
				}), o.endIf();
			}
			function g(n) {
				let r = o.name("valid"), i = e.subschema({
					keyword: "oneOf",
					schemaProp: n
				}, r);
				return e.mergeEvaluated(i, t.Name), r;
			}
			function _() {
				let e = {}, t = o(l), n = !0;
				for (let e = 0; e < d.length; e++) {
					let c = d[e];
					if (c?.$ref && !(0, a.schemaHasRulesButRef)(c, u.self.RULES)) {
						let e = c.$ref;
						if (c = r.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof r.SchemaEnv && (c = c.schema), c === void 0) throw new i.default(u.opts.uriResolver, u.baseId, e);
					}
					let l = c?.properties?.[f];
					if (typeof l != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);
					n &&= t || o(c), s(l, e);
				}
				if (!n) throw Error(`discriminator: "${f}" must be required`);
				return e;
				function o({ required: e }) {
					return Array.isArray(e) && e.includes(f);
				}
				function s(e, t) {
					if (e.const) c(e.const, t);
					else if (e.enum) for (let n of e.enum) c(n, t);
					else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`);
				}
				function c(t, n) {
					if (typeof t != "string" || t in e) throw Error(`discriminator: "${f}" values must be unique strings`);
					e[t] = n;
				}
			}
		}
	};
})), La = /* @__PURE__ */ dt({
	$id: () => za,
	$schema: () => Ra,
	default: () => Wa,
	definitions: () => Va,
	properties: () => Ua,
	title: () => Ba,
	type: () => Ha
}), Ra, za, Ba, Va, Ha, Ua, Wa, Ga = ut((() => {
	Ra = "http://json-schema.org/draft-07/schema#", za = "http://json-schema.org/draft-07/schema#", Ba = "Core schema meta-schema", Va = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: { $ref: "#" }
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, Ha = ["object", "boolean"], Ua = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: { type: "string" },
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		readOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/definitions/nonNegativeInteger" },
		minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: { $ref: "#" },
		items: {
			anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
			default: !0
		},
		maxItems: { $ref: "#/definitions/nonNegativeInteger" },
		minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		contains: { $ref: "#" },
		maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
		minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		required: { $ref: "#/definitions/stringArray" },
		additionalProperties: { $ref: "#" },
		definitions: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		properties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependencies: {
			type: "object",
			additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
		},
		propertyNames: { $ref: "#" },
		const: !0,
		enum: {
			type: "array",
			items: !0,
			minItems: 1,
			uniqueItems: !0
		},
		type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/definitions/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		format: { type: "string" },
		contentMediaType: { type: "string" },
		contentEncoding: { type: "string" },
		if: { $ref: "#" },
		then: { $ref: "#" },
		else: { $ref: "#" },
		allOf: { $ref: "#/definitions/schemaArray" },
		anyOf: { $ref: "#/definitions/schemaArray" },
		oneOf: { $ref: "#/definitions/schemaArray" },
		not: { $ref: "#" }
	}, Wa = {
		$schema: Ra,
		$id: za,
		title: Ba,
		definitions: Va,
		type: Ha,
		properties: Ua,
		default: !0
	};
})), Ka = /* @__PURE__ */ Z(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
	var n = Zi(), r = Pa(), i = Ia(), a = (Ga(), mt(La).default), o = ["/properties"], s = "http://json-schema.org/draft-07/schema", c = class extends n.default {
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			if (super._addDefaultMetaSchema(), !this.opts.meta) return;
			let e = this.opts.$data ? this.$dataMetaSchema(a, o) : a;
			this.addMetaSchema(e, s, !1), this.refs["http://json-schema.org/schema"] = s;
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
		}
	};
	e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = c;
	var l = Fi();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return l.KeywordCxt;
		}
	});
	var u = bi();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return u._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return u.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return u.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return u.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return u.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return u.CodeGen;
		}
	});
	var d = Ii();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return d.default;
		}
	});
	var f = Li();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return f.default;
		}
	});
})), qa = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
	function t(e, t) {
		return {
			validate: e,
			compare: t
		};
	}
	e.fullFormats = {
		date: t(a, o),
		time: t(c, l),
		"date-time": t(d, f),
		duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
		uri: h,
		"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
		"uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
		url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
		email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
		hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
		ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
		ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
		regex: w,
		uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
		"json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
		"json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
		"relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
		byte: _,
		int32: {
			type: "number",
			validate: b
		},
		int64: {
			type: "number",
			validate: x
		},
		float: {
			type: "number",
			validate: S
		},
		double: {
			type: "number",
			validate: S
		},
		password: !0,
		binary: !0
	}, e.fastFormats = {
		...e.fullFormats,
		date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
		time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
		"date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
		uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
		"uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
		email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
	}, e.formatNames = Object.keys(e.fullFormats);
	function n(e) {
		return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
	}
	var r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, i = [
		0,
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];
	function a(e) {
		let t = r.exec(e);
		if (!t) return !1;
		let a = +t[1], o = +t[2], s = +t[3];
		return o >= 1 && o <= 12 && s >= 1 && s <= (o === 2 && n(a) ? 29 : i[o]);
	}
	function o(e, t) {
		if (e && t) return e > t ? 1 : e < t ? -1 : 0;
	}
	var s = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
	function c(e, t) {
		let n = s.exec(e);
		if (!n) return !1;
		let r = +n[1], i = +n[2], a = +n[3], o = n[5];
		return (r <= 23 && i <= 59 && a <= 59 || r === 23 && i === 59 && a === 60) && (!t || o !== "");
	}
	function l(e, t) {
		if (!(e && t)) return;
		let n = s.exec(e), r = s.exec(t);
		if (n && r) return e = n[1] + n[2] + n[3] + (n[4] || ""), t = r[1] + r[2] + r[3] + (r[4] || ""), e > t ? 1 : e < t ? -1 : 0;
	}
	var u = /t|\s/i;
	function d(e) {
		let t = e.split(u);
		return t.length === 2 && a(t[0]) && c(t[1], !0);
	}
	function f(e, t) {
		if (!(e && t)) return;
		let [n, r] = e.split(u), [i, a] = t.split(u), s = o(n, i);
		if (s !== void 0) return s || l(r, a);
	}
	var p = /\/|:/, m = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function h(e) {
		return p.test(e) && m.test(e);
	}
	var g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function _(e) {
		return g.lastIndex = 0, g.test(e);
	}
	var v = -(2 ** 31), y = 2 ** 31 - 1;
	function b(e) {
		return Number.isInteger(e) && e <= y && e >= v;
	}
	function x(e) {
		return Number.isInteger(e);
	}
	function S() {
		return !0;
	}
	var C = /[^\\]\\Z/;
	function w(e) {
		if (C.test(e)) return !1;
		try {
			return new RegExp(e), !0;
		} catch {
			return !1;
		}
	}
})), Ja = /* @__PURE__ */ Z(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
	var t = Ka(), n = bi(), r = n.operators, i = {
		formatMaximum: {
			okStr: "<=",
			ok: r.LTE,
			fail: r.GT
		},
		formatMinimum: {
			okStr: ">=",
			ok: r.GTE,
			fail: r.LT
		},
		formatExclusiveMaximum: {
			okStr: "<",
			ok: r.LT,
			fail: r.GTE
		},
		formatExclusiveMinimum: {
			okStr: ">",
			ok: r.GT,
			fail: r.LTE
		}
	};
	e.formatLimitDefinition = {
		keyword: Object.keys(i),
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: t }) => n.str`should be ${i[e].okStr} ${t}`,
			params: ({ keyword: e, schemaCode: t }) => n._`{comparison: ${i[e].okStr}, limit: ${t}}`
		},
		code(e) {
			let { gen: r, data: a, schemaCode: o, keyword: s, it: c } = e, { opts: l, self: u } = c;
			if (!l.validateFormats) return;
			let d = new t.KeywordCxt(c, u.RULES.all.format.definition, "format");
			d.$data ? f() : p();
			function f() {
				let t = r.scopeValue("formats", {
					ref: u.formats,
					code: l.code.formats
				}), i = r.const("fmt", n._`${t}[${d.schemaCode}]`);
				e.fail$data(n.or(n._`typeof ${i} != "object"`, n._`${i} instanceof RegExp`, n._`typeof ${i}.compare != "function"`, m(i)));
			}
			function p() {
				let t = d.schema, i = u.formats[t];
				if (!i || i === !0) return;
				if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function") throw Error(`"${s}": format "${t}" does not define "compare" function`);
				let a = r.scopeValue("formats", {
					key: t,
					ref: i,
					code: l.code.formats ? n._`${l.code.formats}${n.getProperty(t)}` : void 0
				});
				e.fail$data(m(a));
			}
			function m(e) {
				return n._`${e}.compare(${a}, ${o}) ${i[s].fail} 0`;
			}
		},
		dependencies: ["format"]
	}, e.default = (t) => (t.addKeyword(e.formatLimitDefinition), t);
})), Ya = /* @__PURE__ */ Z(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = qa(), r = Ja(), i = bi(), a = new i.Name("fullFormats"), o = new i.Name("fastFormats"), s = (e, t = { keywords: !0 }) => {
		if (Array.isArray(t)) return c(e, t, n.fullFormats, a), e;
		let [i, s] = t.mode === "fast" ? [n.fastFormats, o] : [n.fullFormats, a];
		return c(e, t.formats || n.formatNames, i, s), t.keywords && r.default(e), e;
	};
	s.get = (e, t = "full") => {
		let r = (t === "fast" ? n.fastFormats : n.fullFormats)[e];
		if (!r) throw Error(`Unknown format "${e}"`);
		return r;
	};
	function c(e, t, n, r) {
		var a;
		(a = e.opts.code).formats ?? (a.formats = i._`require("ajv-formats/dist/formats").${r}`);
		for (let r of t) e.addFormat(r, n[r]);
	}
	t.exports = e = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
})), Xa = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return function(t, n, r) {
			for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
				var c = o[e ? s : ++i];
				if (n(a[c], c, a) === !1) break;
			}
			return t;
		};
	}
	t.exports = n;
})), Za = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Xa()();
})), Qa = /* @__PURE__ */ Z(((e, t) => {
	var n = Za(), r = Nn();
	function i(e, t) {
		return e && n(e, t, r);
	}
	t.exports = i;
})), $a = /* @__PURE__ */ Z(((e, t) => {
	var n = $t();
	function r(e, t) {
		return function(r, i) {
			if (r == null) return r;
			if (!n(r)) return e(r, i);
			for (var a = r.length, o = t ? a : -1, s = Object(r); (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;);
			return r;
		};
	}
	t.exports = r;
})), eo = /* @__PURE__ */ Z(((e, t) => {
	var n = Qa();
	t.exports = $a()(n);
})), to = /* @__PURE__ */ Z(((e, t) => {
	var n = eo();
	function r(e, t) {
		var r = [];
		return n(e, function(e, n, i) {
			t(e, n, i) && r.push(e);
		}), r;
	}
	t.exports = r;
})), no = /* @__PURE__ */ Z(((e, t) => {
	var n = Br(), r = to(), i = ai(), a = Zt();
	function o(e, t) {
		return (a(e) ? n : r)(e, i(t, 3));
	}
	t.exports = o;
})), ro = /* @__PURE__ */ Z(((e, t) => {
	var n = Kr();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), io = /* @__PURE__ */ Z(((e, t) => {
	var n = Vt();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), ao = /* @__PURE__ */ Z(((e, t) => {
	var n = io();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), oo = /* @__PURE__ */ Z(((e, t) => {
	var n = ao(), r = Fn();
	function i(e, t, i) {
		(i !== void 0 && !r(e[t], i) || i === void 0 && !(t in e)) && n(e, t, i);
	}
	t.exports = i;
})), so = /* @__PURE__ */ Z(((e, t) => {
	var n = kt(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r ? n.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
	function s(e, t) {
		if (t) return e.slice();
		var n = e.length, r = o ? o(n) : new e.constructor(n);
		return e.copy(r), r;
	}
	t.exports = s;
})), co = /* @__PURE__ */ Z(((e, t) => {
	var n = Pr();
	function r(e) {
		var t = new e.constructor(e.byteLength);
		return new n(t).set(new n(e)), t;
	}
	t.exports = r;
})), lo = /* @__PURE__ */ Z(((e, t) => {
	var n = co();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.length);
	}
	t.exports = r;
})), uo = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	t.exports = n;
})), fo = /* @__PURE__ */ Z(((e, t) => {
	var n = Pt(), r = Object.create;
	t.exports = function() {
		function e() {}
		return function(t) {
			if (!n(t)) return {};
			if (r) return r(t);
			e.prototype = t;
			var i = new e();
			return e.prototype = void 0, i;
		};
	}();
})), po = /* @__PURE__ */ Z(((e, t) => {
	t.exports = Tt()(Object.getPrototypeOf, Object);
})), mo = /* @__PURE__ */ Z(((e, t) => {
	var n = fo(), r = po(), i = wt();
	function a(e) {
		return typeof e.constructor == "function" && !i(e) ? n(r(e)) : {};
	}
	t.exports = a;
})), ho = /* @__PURE__ */ Z(((e, t) => {
	var n = $t(), r = Jt();
	function i(e) {
		return r(e) && n(e);
	}
	t.exports = i;
})), go = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = po(), i = Jt(), a = "[object Object]", o = Function.prototype, s = Object.prototype, c = o.toString, l = s.hasOwnProperty, u = c.call(Object);
	function d(e) {
		if (!i(e) || n(e) != a) return !1;
		var t = r(e);
		if (t === null) return !0;
		var o = l.call(t, "constructor") && t.constructor;
		return typeof o == "function" && o instanceof o && c.call(o) == u;
	}
	t.exports = d;
})), _o = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
	}
	t.exports = n;
})), vo = /* @__PURE__ */ Z(((e, t) => {
	var n = ao(), r = Fn(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), yo = /* @__PURE__ */ Z(((e, t) => {
	var n = vo(), r = ao();
	function i(e, t, i, a) {
		var o = !i;
		i ||= {};
		for (var s = -1, c = t.length; ++s < c;) {
			var l = t[s], u = a ? a(i[l], e[l], l, i, e) : void 0;
			u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u);
		}
		return i;
	}
	t.exports = i;
})), bo = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), xo = /* @__PURE__ */ Z(((e, t) => {
	var n = Pt(), r = wt(), i = bo(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) (s != "constructor" || !t && a.call(e, s)) && o.push(s);
		return o;
	}
	t.exports = o;
})), So = /* @__PURE__ */ Z(((e, t) => {
	var n = Mn(), r = xo(), i = $t();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), Co = /* @__PURE__ */ Z(((e, t) => {
	var n = yo(), r = So();
	function i(e) {
		return n(e, r(e));
	}
	t.exports = i;
})), wo = /* @__PURE__ */ Z(((e, t) => {
	var n = oo(), r = so(), i = lo(), a = uo(), o = mo(), s = Xt(), c = Zt(), l = ho(), u = tn(), d = Ft(), f = Pt(), p = go(), m = on(), h = _o(), g = Co();
	function _(e, t, _, v, y, b, x) {
		var S = h(e, _), C = h(t, _), w = x.get(C);
		if (w) {
			n(e, _, w);
			return;
		}
		var T = b ? b(S, C, _ + "", e, t, x) : void 0, E = T === void 0;
		if (E) {
			var D = c(C), O = !D && u(C), k = !D && !O && m(C);
			T = C, D || O || k ? c(S) ? T = S : l(S) ? T = a(S) : O ? (E = !1, T = r(C, !0)) : k ? (E = !1, T = i(C, !0)) : T = [] : p(C) || s(C) ? (T = S, s(S) ? T = g(S) : (!f(S) || d(S)) && (T = o(C))) : E = !1;
		}
		E && (x.set(C, T), y(T, C, v, b, x), x.delete(C)), n(e, _, T);
	}
	t.exports = _;
})), To = /* @__PURE__ */ Z(((e, t) => {
	var n = Dr(), r = oo(), i = Za(), a = wo(), o = Pt(), s = So(), c = _o();
	function l(e, t, u, d, f) {
		e !== t && i(t, function(i, s) {
			if (f ||= new n(), o(i)) a(e, t, s, u, l, d, f);
			else {
				var p = d ? d(c(e, s), i, s + "", e, t, f) : void 0;
				p === void 0 && (p = i), r(e, s, p);
			}
		}, s);
	}
	t.exports = l;
})), Eo = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		switch (n.length) {
			case 0: return e.call(t);
			case 1: return e.call(t, n[0]);
			case 2: return e.call(t, n[0], n[1]);
			case 3: return e.call(t, n[0], n[1], n[2]);
		}
		return e.apply(t, n);
	}
	t.exports = n;
})), Do = /* @__PURE__ */ Z(((e, t) => {
	var n = Eo(), r = Math.max;
	function i(e, t, i) {
		return t = r(t === void 0 ? e.length - 1 : t, 0), function() {
			for (var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s); ++o < s;) c[o] = a[t + o];
			o = -1;
			for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
			return l[t] = i(c), n(e, this, l);
		};
	}
	t.exports = i;
})), Oo = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})), ko = /* @__PURE__ */ Z(((e, t) => {
	var n = Oo(), r = io(), i = ti();
	t.exports = r ? function(e, t) {
		return r(e, "toString", {
			configurable: !0,
			enumerable: !1,
			value: n(t),
			writable: !0
		});
	} : i;
})), Ao = /* @__PURE__ */ Z(((e, t) => {
	var n = Date.now;
	function r(e) {
		var t = 0, r = 0;
		return function() {
			var i = n(), a = 16 - (i - r);
			if (r = i, a > 0) {
				if (++t >= 800) return arguments[0];
			} else t = 0;
			return e.apply(void 0, arguments);
		};
	}
	t.exports = r;
})), jo = /* @__PURE__ */ Z(((e, t) => {
	var n = ko();
	t.exports = Ao()(n);
})), Mo = /* @__PURE__ */ Z(((e, t) => {
	var n = ti(), r = Do(), i = jo();
	function a(e, t) {
		return i(r(e, t, n), e + "");
	}
	t.exports = a;
})), No = /* @__PURE__ */ Z(((e, t) => {
	var n = Mo(), r = In();
	function i(e) {
		return n(function(t, n) {
			var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
			for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && r(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++i < a;) {
				var c = n[i];
				c && e(t, c, i, o);
			}
			return t;
		});
	}
	t.exports = i;
})), Po = /* @__PURE__ */ Z(((e, t) => {
	var n = To();
	t.exports = No()(function(e, t, r) {
		n(e, t, r);
	});
})), Fo = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), Io = /* @__PURE__ */ Z(((e, t) => {
	var n = yo(), r = Nn();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Lo = /* @__PURE__ */ Z(((e, t) => {
	var n = yo(), r = So();
	function i(e, t) {
		return e && n(t, r(t), e);
	}
	t.exports = i;
})), Ro = /* @__PURE__ */ Z(((e, t) => {
	var n = yo(), r = Hr();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), zo = /* @__PURE__ */ Z(((e, t) => {
	var n = Rr(), r = po(), i = Hr(), a = Vr();
	t.exports = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) n(t, i(e)), e = r(e);
		return t;
	} : a;
})), Bo = /* @__PURE__ */ Z(((e, t) => {
	var n = yo(), r = zo();
	function i(e, t) {
		return n(e, r(e), t);
	}
	t.exports = i;
})), Vo = /* @__PURE__ */ Z(((e, t) => {
	var n = zr(), r = zo(), i = So();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), Ho = /* @__PURE__ */ Z(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e) {
		var t = e.length, r = new e.constructor(t);
		return t && typeof e[0] == "string" && n.call(e, "index") && (r.index = e.index, r.input = e.input), r;
	}
	t.exports = r;
})), Uo = /* @__PURE__ */ Z(((e, t) => {
	var n = co();
	function r(e, t) {
		var r = t ? n(e.buffer) : e.buffer;
		return new e.constructor(r, e.byteOffset, e.byteLength);
	}
	t.exports = r;
})), Wo = /* @__PURE__ */ Z(((e, t) => {
	var n = /\w*$/;
	function r(e) {
		var t = new e.constructor(e.source, n.exec(e));
		return t.lastIndex = e.lastIndex, t;
	}
	t.exports = r;
})), Go = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = n ? n.prototype : void 0, i = r ? r.valueOf : void 0;
	function a(e) {
		return i ? Object(i.call(e)) : {};
	}
	t.exports = a;
})), Ko = /* @__PURE__ */ Z(((e, t) => {
	var n = co(), r = Uo(), i = Wo(), a = Go(), o = lo(), s = "[object Boolean]", c = "[object Date]", l = "[object Map]", u = "[object Number]", d = "[object RegExp]", f = "[object Set]", p = "[object String]", m = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", _ = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", x = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", w = "[object Uint16Array]", T = "[object Uint32Array]";
	function E(e, t, E) {
		var D = e.constructor;
		switch (t) {
			case h: return n(e);
			case s:
			case c: return new D(+e);
			case g: return r(e, E);
			case _:
			case v:
			case y:
			case b:
			case x:
			case S:
			case C:
			case w:
			case T: return o(e, E);
			case l: return new D();
			case u:
			case p: return new D(e);
			case d: return i(e);
			case f: return new D();
			case m: return a(e);
		}
	}
	t.exports = E;
})), qo = /* @__PURE__ */ Z(((e, t) => {
	var n = qt(), r = Jt(), i = "[object Map]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), Jo = /* @__PURE__ */ Z(((e, t) => {
	var n = qo(), r = rn(), i = an(), a = i && i.isMap;
	t.exports = a ? r(a) : n;
})), Yo = /* @__PURE__ */ Z(((e, t) => {
	var n = qt(), r = Jt(), i = "[object Set]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), Xo = /* @__PURE__ */ Z(((e, t) => {
	var n = Yo(), r = rn(), i = an(), a = i && i.isSet;
	t.exports = a ? r(a) : n;
})), Zo = /* @__PURE__ */ Z(((e, t) => {
	var n = Dr(), r = Fo(), i = vo(), a = Io(), o = Lo(), s = so(), c = uo(), l = Ro(), u = Bo(), d = Ur(), f = Vo(), p = qt(), m = Ho(), h = Ko(), g = mo(), _ = Zt(), v = tn(), y = Jo(), b = Pt(), x = Xo(), S = Nn(), C = So(), w = 1, T = 2, E = 4, D = "[object Arguments]", O = "[object Array]", k = "[object Boolean]", A = "[object Date]", j = "[object Error]", M = "[object Function]", N = "[object GeneratorFunction]", P = "[object Map]", F = "[object Number]", I = "[object Object]", L = "[object RegExp]", ee = "[object Set]", R = "[object String]", z = "[object Symbol]", B = "[object WeakMap]", V = "[object ArrayBuffer]", H = "[object DataView]", te = "[object Float32Array]", U = "[object Float64Array]", ne = "[object Int8Array]", W = "[object Int16Array]", G = "[object Int32Array]", re = "[object Uint8Array]", ie = "[object Uint8ClampedArray]", K = "[object Uint16Array]", ae = "[object Uint32Array]", oe = {};
	oe[D] = oe[O] = oe[V] = oe[H] = oe[k] = oe[A] = oe[te] = oe[U] = oe[ne] = oe[W] = oe[G] = oe[P] = oe[F] = oe[I] = oe[L] = oe[ee] = oe[R] = oe[z] = oe[re] = oe[ie] = oe[K] = oe[ae] = !0, oe[j] = oe[M] = oe[B] = !1;
	function q(e, t, O, k, A, j) {
		var P, F = t & w, L = t & T, ee = t & E;
		if (O && (P = A ? O(e, k, A, j) : O(e)), P !== void 0) return P;
		if (!b(e)) return e;
		var R = _(e);
		if (R) {
			if (P = m(e), !F) return c(e, P);
		} else {
			var z = p(e), B = z == M || z == N;
			if (v(e)) return s(e, F);
			if (z == I || z == D || B && !A) {
				if (P = L || B ? {} : g(e), !F) return L ? u(e, o(P, e)) : l(e, a(P, e));
			} else {
				if (!oe[z]) return A ? e : {};
				P = h(e, z, F);
			}
		}
		j ||= new n();
		var V = j.get(e);
		if (V) return V;
		j.set(e, P), x(e) ? e.forEach(function(n) {
			P.add(q(n, t, O, n, e, j));
		}) : y(e) && e.forEach(function(n, r) {
			P.set(r, q(n, t, O, r, e, j));
		});
		var H = R ? void 0 : (ee ? L ? f : d : L ? C : S)(e);
		return r(H || e, function(n, r) {
			H && (r = n, n = e[r]), i(P, r, q(n, t, O, r, e, j));
		}), P;
	}
	t.exports = q;
})), Qo = /* @__PURE__ */ Z(((e, t) => {
	var n = Zo(), r = 1, i = 4;
	function a(e) {
		return n(e, r | i);
	}
	t.exports = a;
})), $o = /* @__PURE__ */ Z(((e) => {
	e.aliasToReal = {
		each: "forEach",
		eachRight: "forEachRight",
		entries: "toPairs",
		entriesIn: "toPairsIn",
		extend: "assignIn",
		extendAll: "assignInAll",
		extendAllWith: "assignInAllWith",
		extendWith: "assignInWith",
		first: "head",
		conforms: "conformsTo",
		matches: "isMatch",
		property: "get",
		__: "placeholder",
		F: "stubFalse",
		T: "stubTrue",
		all: "every",
		allPass: "overEvery",
		always: "constant",
		any: "some",
		anyPass: "overSome",
		apply: "spread",
		assoc: "set",
		assocPath: "set",
		complement: "negate",
		compose: "flowRight",
		contains: "includes",
		dissoc: "unset",
		dissocPath: "unset",
		dropLast: "dropRight",
		dropLastWhile: "dropRightWhile",
		equals: "isEqual",
		identical: "eq",
		indexBy: "keyBy",
		init: "initial",
		invertObj: "invert",
		juxt: "over",
		omitAll: "omit",
		nAry: "ary",
		path: "get",
		pathEq: "matchesProperty",
		pathOr: "getOr",
		paths: "at",
		pickAll: "pick",
		pipe: "flow",
		pluck: "map",
		prop: "get",
		propEq: "matchesProperty",
		propOr: "getOr",
		props: "at",
		symmetricDifference: "xor",
		symmetricDifferenceBy: "xorBy",
		symmetricDifferenceWith: "xorWith",
		takeLast: "takeRight",
		takeLastWhile: "takeRightWhile",
		unapply: "rest",
		unnest: "flatten",
		useWith: "overArgs",
		where: "conformsTo",
		whereEq: "isMatch",
		zipObj: "zipObject"
	}, e.aryMethod = {
		1: /* @__PURE__ */ "assignAll.assignInAll.attempt.castArray.ceil.create.curry.curryRight.defaultsAll.defaultsDeepAll.floor.flow.flowRight.fromPairs.invert.iteratee.memoize.method.mergeAll.methodOf.mixin.nthArg.over.overEvery.overSome.rest.reverse.round.runInContext.spread.template.trim.trimEnd.trimStart.uniqueId.words.zipAll".split("."),
		2: /* @__PURE__ */ "add.after.ary.assign.assignAllWith.assignIn.assignInAllWith.at.before.bind.bindAll.bindKey.chunk.cloneDeepWith.cloneWith.concat.conformsTo.countBy.curryN.curryRightN.debounce.defaults.defaultsDeep.defaultTo.delay.difference.divide.drop.dropRight.dropRightWhile.dropWhile.endsWith.eq.every.filter.find.findIndex.findKey.findLast.findLastIndex.findLastKey.flatMap.flatMapDeep.flattenDepth.forEach.forEachRight.forIn.forInRight.forOwn.forOwnRight.get.groupBy.gt.gte.has.hasIn.includes.indexOf.intersection.invertBy.invoke.invokeMap.isEqual.isMatch.join.keyBy.lastIndexOf.lt.lte.map.mapKeys.mapValues.matchesProperty.maxBy.meanBy.merge.mergeAllWith.minBy.multiply.nth.omit.omitBy.overArgs.pad.padEnd.padStart.parseInt.partial.partialRight.partition.pick.pickBy.propertyOf.pull.pullAll.pullAt.random.range.rangeRight.rearg.reject.remove.repeat.restFrom.result.sampleSize.some.sortBy.sortedIndex.sortedIndexOf.sortedLastIndex.sortedLastIndexOf.sortedUniqBy.split.spreadFrom.startsWith.subtract.sumBy.take.takeRight.takeRightWhile.takeWhile.tap.throttle.thru.times.trimChars.trimCharsEnd.trimCharsStart.truncate.union.uniqBy.uniqWith.unset.unzipWith.without.wrap.xor.zip.zipObject.zipObjectDeep".split("."),
		3: /* @__PURE__ */ "assignInWith.assignWith.clamp.differenceBy.differenceWith.findFrom.findIndexFrom.findLastFrom.findLastIndexFrom.getOr.includesFrom.indexOfFrom.inRange.intersectionBy.intersectionWith.invokeArgs.invokeArgsMap.isEqualWith.isMatchWith.flatMapDepth.lastIndexOfFrom.mergeWith.orderBy.padChars.padCharsEnd.padCharsStart.pullAllBy.pullAllWith.rangeStep.rangeStepRight.reduce.reduceRight.replace.set.slice.sortedIndexBy.sortedLastIndexBy.transform.unionBy.unionWith.update.xorBy.xorWith.zipWith".split("."),
		4: [
			"fill",
			"setWith",
			"updateWith"
		]
	}, e.aryRearg = {
		2: [1, 0],
		3: [
			2,
			0,
			1
		],
		4: [
			3,
			2,
			0,
			1
		]
	}, e.iterateeAry = {
		dropRightWhile: 1,
		dropWhile: 1,
		every: 1,
		filter: 1,
		find: 1,
		findFrom: 1,
		findIndex: 1,
		findIndexFrom: 1,
		findKey: 1,
		findLast: 1,
		findLastFrom: 1,
		findLastIndex: 1,
		findLastIndexFrom: 1,
		findLastKey: 1,
		flatMap: 1,
		flatMapDeep: 1,
		flatMapDepth: 1,
		forEach: 1,
		forEachRight: 1,
		forIn: 1,
		forInRight: 1,
		forOwn: 1,
		forOwnRight: 1,
		map: 1,
		mapKeys: 1,
		mapValues: 1,
		partition: 1,
		reduce: 2,
		reduceRight: 2,
		reject: 1,
		remove: 1,
		some: 1,
		takeRightWhile: 1,
		takeWhile: 1,
		times: 1,
		transform: 2
	}, e.iterateeRearg = {
		mapKeys: [1],
		reduceRight: [1, 0]
	}, e.methodRearg = {
		assignInAllWith: [1, 0],
		assignInWith: [
			1,
			2,
			0
		],
		assignAllWith: [1, 0],
		assignWith: [
			1,
			2,
			0
		],
		differenceBy: [
			1,
			2,
			0
		],
		differenceWith: [
			1,
			2,
			0
		],
		getOr: [
			2,
			1,
			0
		],
		intersectionBy: [
			1,
			2,
			0
		],
		intersectionWith: [
			1,
			2,
			0
		],
		isEqualWith: [
			1,
			2,
			0
		],
		isMatchWith: [
			2,
			1,
			0
		],
		mergeAllWith: [1, 0],
		mergeWith: [
			1,
			2,
			0
		],
		padChars: [
			2,
			1,
			0
		],
		padCharsEnd: [
			2,
			1,
			0
		],
		padCharsStart: [
			2,
			1,
			0
		],
		pullAllBy: [
			2,
			1,
			0
		],
		pullAllWith: [
			2,
			1,
			0
		],
		rangeStep: [
			1,
			2,
			0
		],
		rangeStepRight: [
			1,
			2,
			0
		],
		setWith: [
			3,
			1,
			2,
			0
		],
		sortedIndexBy: [
			2,
			1,
			0
		],
		sortedLastIndexBy: [
			2,
			1,
			0
		],
		unionBy: [
			1,
			2,
			0
		],
		unionWith: [
			1,
			2,
			0
		],
		updateWith: [
			3,
			1,
			2,
			0
		],
		xorBy: [
			1,
			2,
			0
		],
		xorWith: [
			1,
			2,
			0
		],
		zipWith: [
			1,
			2,
			0
		]
	}, e.methodSpread = {
		assignAll: { start: 0 },
		assignAllWith: { start: 0 },
		assignInAll: { start: 0 },
		assignInAllWith: { start: 0 },
		defaultsAll: { start: 0 },
		defaultsDeepAll: { start: 0 },
		invokeArgs: { start: 2 },
		invokeArgsMap: { start: 2 },
		mergeAll: { start: 0 },
		mergeAllWith: { start: 0 },
		partial: { start: 1 },
		partialRight: { start: 1 },
		without: { start: 1 },
		zipAll: { start: 0 }
	}, e.mutate = {
		array: {
			fill: !0,
			pull: !0,
			pullAll: !0,
			pullAllBy: !0,
			pullAllWith: !0,
			pullAt: !0,
			remove: !0,
			reverse: !0
		},
		object: {
			assign: !0,
			assignAll: !0,
			assignAllWith: !0,
			assignIn: !0,
			assignInAll: !0,
			assignInAllWith: !0,
			assignInWith: !0,
			assignWith: !0,
			defaults: !0,
			defaultsAll: !0,
			defaultsDeep: !0,
			defaultsDeepAll: !0,
			merge: !0,
			mergeAll: !0,
			mergeAllWith: !0,
			mergeWith: !0
		},
		set: {
			set: !0,
			setWith: !0,
			unset: !0,
			update: !0,
			updateWith: !0
		}
	}, e.realToAlias = function() {
		var t = Object.prototype.hasOwnProperty, n = e.aliasToReal, r = {};
		for (var i in n) {
			var a = n[i];
			t.call(r, a) ? r[a].push(i) : r[a] = [i];
		}
		return r;
	}(), e.remap = {
		assignAll: "assign",
		assignAllWith: "assignWith",
		assignInAll: "assignIn",
		assignInAllWith: "assignInWith",
		curryN: "curry",
		curryRightN: "curryRight",
		defaultsAll: "defaults",
		defaultsDeepAll: "defaultsDeep",
		findFrom: "find",
		findIndexFrom: "findIndex",
		findLastFrom: "findLast",
		findLastIndexFrom: "findLastIndex",
		getOr: "get",
		includesFrom: "includes",
		indexOfFrom: "indexOf",
		invokeArgs: "invoke",
		invokeArgsMap: "invokeMap",
		lastIndexOfFrom: "lastIndexOf",
		mergeAll: "merge",
		mergeAllWith: "mergeWith",
		padChars: "pad",
		padCharsEnd: "padEnd",
		padCharsStart: "padStart",
		propertyOf: "get",
		rangeStep: "range",
		rangeStepRight: "rangeRight",
		restFrom: "rest",
		spreadFrom: "spread",
		trimChars: "trim",
		trimCharsEnd: "trimEnd",
		trimCharsStart: "trimStart",
		zipAll: "zip"
	}, e.skipFixed = {
		castArray: !0,
		flow: !0,
		flowRight: !0,
		iteratee: !0,
		mixin: !0,
		rearg: !0,
		runInContext: !0
	}, e.skipRearg = {
		add: !0,
		assign: !0,
		assignIn: !0,
		bind: !0,
		bindKey: !0,
		concat: !0,
		difference: !0,
		divide: !0,
		eq: !0,
		gt: !0,
		gte: !0,
		isEqual: !0,
		lt: !0,
		lte: !0,
		matchesProperty: !0,
		merge: !0,
		multiply: !0,
		overArgs: !0,
		partial: !0,
		partialRight: !0,
		propertyOf: !0,
		random: !0,
		range: !0,
		rangeRight: !0,
		subtract: !0,
		zip: !0,
		zipObject: !0,
		zipObjectDeep: !0
	};
})), es = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {};
})), ts = /* @__PURE__ */ Z(((e, t) => {
	var n = $o(), r = es(), i = Array.prototype.push;
	function a(e, t) {
		return t == 2 ? function(t, n) {
			return e.apply(void 0, arguments);
		} : function(t) {
			return e.apply(void 0, arguments);
		};
	}
	function o(e, t) {
		return t == 2 ? function(t, n) {
			return e(t, n);
		} : function(t) {
			return e(t);
		};
	}
	function s(e) {
		for (var t = e ? e.length : 0, n = Array(t); t--;) n[t] = e[t];
		return n;
	}
	function c(e) {
		return function(t) {
			return e({}, t);
		};
	}
	function l(e, t) {
		return function() {
			for (var n = arguments.length, r = n - 1, a = Array(n); n--;) a[n] = arguments[n];
			var o = a[t], s = a.slice(0, t);
			return o && i.apply(s, o), t != r && i.apply(s, a.slice(t + 1)), e.apply(this, s);
		};
	}
	function u(e, t) {
		return function() {
			var n = arguments.length;
			if (n) {
				for (var r = Array(n); n--;) r[n] = arguments[n];
				var i = r[0] = t.apply(void 0, r);
				return e.apply(void 0, r), i;
			}
		};
	}
	function d(e, t, i, f) {
		var p = typeof t == "function", m = t === Object(t);
		if (m && (f = i, i = t, t = void 0), i == null) throw TypeError();
		f ||= {};
		var h = {
			cap: "cap" in f ? f.cap : !0,
			curry: "curry" in f ? f.curry : !0,
			fixed: "fixed" in f ? f.fixed : !0,
			immutable: "immutable" in f ? f.immutable : !0,
			rearg: "rearg" in f ? f.rearg : !0
		}, g = p ? i : r, _ = "curry" in f && f.curry, v = "fixed" in f && f.fixed, y = "rearg" in f && f.rearg, b = p ? i.runInContext() : void 0, x = p ? i : {
			ary: e.ary,
			assign: e.assign,
			clone: e.clone,
			curry: e.curry,
			forEach: e.forEach,
			isArray: e.isArray,
			isError: e.isError,
			isFunction: e.isFunction,
			isWeakMap: e.isWeakMap,
			iteratee: e.iteratee,
			keys: e.keys,
			rearg: e.rearg,
			toInteger: e.toInteger,
			toPath: e.toPath
		}, S = x.ary, C = x.assign, w = x.clone, T = x.curry, E = x.forEach, D = x.isArray, O = x.isError, k = x.isFunction, A = x.isWeakMap, j = x.keys, M = x.rearg, N = x.toInteger, P = x.toPath, F = j(n.aryMethod), I = {
			castArray: function(e) {
				return function() {
					var t = arguments[0];
					return D(t) ? e(s(t)) : e.apply(void 0, arguments);
				};
			},
			iteratee: function(e) {
				return function() {
					var t = arguments[0], n = arguments[1], r = e(t, n), i = r.length;
					return h.cap && typeof n == "number" ? (n = n > 2 ? n - 2 : 1, i && i <= n ? r : o(r, n)) : r;
				};
			},
			mixin: function(e) {
				return function(t) {
					var n = this;
					if (!k(n)) return e(n, Object(t));
					var r = [];
					return E(j(t), function(e) {
						k(t[e]) && r.push([e, n.prototype[e]]);
					}), e(n, Object(t)), E(r, function(e) {
						var t = e[1];
						k(t) ? n.prototype[e[0]] = t : delete n.prototype[e[0]];
					}), n;
				};
			},
			nthArg: function(e) {
				return function(t) {
					var n = t < 0 ? 1 : N(t) + 1;
					return T(e(t), n);
				};
			},
			rearg: function(e) {
				return function(t, n) {
					var r = n ? n.length : 0;
					return T(e(t, n), r);
				};
			},
			runInContext: function(t) {
				return function(n) {
					return d(e, t(n), f);
				};
			}
		};
		function L(e, t) {
			if (h.cap) {
				var r = n.iterateeRearg[e];
				if (r) return U(t, r);
				var i = !p && n.iterateeAry[e];
				if (i) return te(t, i);
			}
			return t;
		}
		function ee(e, t, n) {
			return _ || h.curry && n > 1 ? T(t, n) : t;
		}
		function R(e, t, r) {
			if (h.fixed && (v || !n.skipFixed[e])) {
				var i = n.methodSpread[e], a = i && i.start;
				return a === void 0 ? S(t, r) : l(t, a);
			}
			return t;
		}
		function z(e, t, r) {
			return h.rearg && r > 1 && (y || !n.skipRearg[e]) ? M(t, n.methodRearg[e] || n.aryRearg[r]) : t;
		}
		function B(e, t) {
			t = P(t);
			for (var n = -1, r = t.length, i = r - 1, a = w(Object(e)), o = a; o != null && ++n < r;) {
				var s = t[n], c = o[s];
				c != null && !(k(c) || O(c) || A(c)) && (o[s] = w(n == i ? c : Object(c))), o = o[s];
			}
			return a;
		}
		function V(e) {
			return G.runInContext.convert(e)(void 0);
		}
		function H(e, t) {
			var r = n.aliasToReal[e] || e, i = n.remap[r] || r, a = f;
			return function(e) {
				return d(p ? b : x, r, p ? b[i] : t, C(C({}, a), e));
			};
		}
		function te(e, t) {
			return ne(e, function(e) {
				return typeof e == "function" ? o(e, t) : e;
			});
		}
		function U(e, t) {
			return ne(e, function(e) {
				var n = t.length;
				return a(M(o(e, n), t), n);
			});
		}
		function ne(e, t) {
			return function() {
				var n = arguments.length;
				if (!n) return e();
				for (var r = Array(n); n--;) r[n] = arguments[n];
				var i = h.rearg ? 0 : n - 1;
				return r[i] = t(r[i]), e.apply(void 0, r);
			};
		}
		function W(e, t, r) {
			var i, a = n.aliasToReal[e] || e, o = t, l = I[a];
			return l ? o = l(t) : h.immutable && (n.mutate.array[a] ? o = u(t, s) : n.mutate.object[a] ? o = u(t, c(t)) : n.mutate.set[a] && (o = u(t, B))), E(F, function(e) {
				return E(n.aryMethod[e], function(t) {
					if (a == t) {
						var r = n.methodSpread[a];
						return i = r && r.afterRearg ? R(a, z(a, o, e), e) : z(a, R(a, o, e), e), i = L(a, i), i = ee(a, i, e), !1;
					}
				}), !i;
			}), i ||= o, i == t && (i = _ ? T(i, 1) : function() {
				return t.apply(this, arguments);
			}), i.convert = H(a, t), i.placeholder = t.placeholder = r, i;
		}
		if (!m) return W(t, i, g);
		var G = i, re = [];
		return E(F, function(e) {
			E(n.aryMethod[e], function(e) {
				var t = G[n.remap[e] || e];
				t && re.push([e, W(e, t, G)]);
			});
		}), E(j(G), function(e) {
			var t = G[e];
			if (typeof t == "function") {
				for (var n = re.length; n--;) if (re[n][0] == e) return;
				t.convert = H(e, t), re.push([e, t]);
			}
		}), E(re, function(e) {
			G[e[0]] = e[1];
		}), G.convert = V, G.placeholder = G, E(j(G), function(e) {
			E(n.realToAlias[e] || [], function(t) {
				G[t] = G[e];
			});
		}), G;
	}
	t.exports = d;
})), ns = /* @__PURE__ */ Z(((e, t) => {
	var n = Kt();
	t.exports = n && new n();
})), rs = /* @__PURE__ */ Z(((e, t) => {
	var n = ti(), r = ns();
	t.exports = r ? function(e, t) {
		return r.set(e, t), e;
	} : n;
})), is = /* @__PURE__ */ Z(((e, t) => {
	var n = fo(), r = Pt();
	function i(e) {
		return function() {
			var t = arguments;
			switch (t.length) {
				case 0: return new e();
				case 1: return new e(t[0]);
				case 2: return new e(t[0], t[1]);
				case 3: return new e(t[0], t[1], t[2]);
				case 4: return new e(t[0], t[1], t[2], t[3]);
				case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
				case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
				case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
			}
			var i = n(e.prototype), a = e.apply(i, t);
			return r(a) ? a : i;
		};
	}
	t.exports = i;
})), as = /* @__PURE__ */ Z(((e, t) => {
	var n = is(), r = kt(), i = 1;
	function a(e, t, a) {
		var o = t & i, s = n(e);
		function c() {
			return (this && this !== r && this instanceof c ? s : e).apply(o ? a : this, arguments);
		}
		return c;
	}
	t.exports = a;
})), os = /* @__PURE__ */ Z(((e, t) => {
	var n = Math.max;
	function r(e, t, r, i) {
		for (var a = -1, o = e.length, s = r.length, c = -1, l = t.length, u = n(o - s, 0), d = Array(l + u), f = !i; ++c < l;) d[c] = t[c];
		for (; ++a < s;) (f || a < o) && (d[r[a]] = e[a]);
		for (; u--;) d[c++] = e[a++];
		return d;
	}
	t.exports = r;
})), ss = /* @__PURE__ */ Z(((e, t) => {
	var n = Math.max;
	function r(e, t, r, i) {
		for (var a = -1, o = e.length, s = -1, c = r.length, l = -1, u = t.length, d = n(o - c, 0), f = Array(d + u), p = !i; ++a < d;) f[a] = e[a];
		for (var m = a; ++l < u;) f[m + l] = t[l];
		for (; ++s < c;) (p || a < o) && (f[m + r[s]] = e[a++]);
		return f;
	}
	t.exports = r;
})), cs = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
		return r;
	}
	t.exports = n;
})), ls = /* @__PURE__ */ Z(((e, t) => {
	function n() {}
	t.exports = n;
})), us = /* @__PURE__ */ Z(((e, t) => {
	var n = fo(), r = ls(), i = 4294967295;
	function a(e) {
		this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = i, this.__views__ = [];
	}
	a.prototype = n(r.prototype), a.prototype.constructor = a, t.exports = a;
})), ds = /* @__PURE__ */ Z(((e, t) => {
	function n() {}
	t.exports = n;
})), fs = /* @__PURE__ */ Z(((e, t) => {
	var n = ns(), r = ds();
	t.exports = n ? function(e) {
		return n.get(e);
	} : r;
})), ps = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {};
})), ms = /* @__PURE__ */ Z(((e, t) => {
	var n = ps(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		for (var t = e.name + "", i = n[t], a = r.call(n, t) ? i.length : 0; a--;) {
			var o = i[a], s = o.func;
			if (s == null || s == e) return o.name;
		}
		return t;
	}
	t.exports = i;
})), hs = /* @__PURE__ */ Z(((e, t) => {
	var n = fo(), r = ls();
	function i(e, t) {
		this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
	}
	i.prototype = n(r.prototype), i.prototype.constructor = i, t.exports = i;
})), gs = /* @__PURE__ */ Z(((e, t) => {
	var n = us(), r = hs(), i = uo();
	function a(e) {
		if (e instanceof n) return e.clone();
		var t = new r(e.__wrapped__, e.__chain__);
		return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
	}
	t.exports = a;
})), _s = /* @__PURE__ */ Z(((e, t) => {
	var n = us(), r = hs(), i = ls(), a = Zt(), o = Jt(), s = gs(), c = Object.prototype.hasOwnProperty;
	function l(e) {
		if (o(e) && !a(e) && !(e instanceof n)) {
			if (e instanceof r) return e;
			if (c.call(e, "__wrapped__")) return s(e);
		}
		return new r(e);
	}
	l.prototype = i.prototype, l.prototype.constructor = l, t.exports = l;
})), vs = /* @__PURE__ */ Z(((e, t) => {
	var n = us(), r = fs(), i = ms(), a = _s();
	function o(e) {
		var t = i(e), o = a[t];
		if (typeof o != "function" || !(t in n.prototype)) return !1;
		if (e === o) return !0;
		var s = r(o);
		return !!s && e === s[0];
	}
	t.exports = o;
})), ys = /* @__PURE__ */ Z(((e, t) => {
	var n = rs();
	t.exports = Ao()(n);
})), bs = /* @__PURE__ */ Z(((e, t) => {
	var n = /\{\n\/\* \[wrapped with (.+)\] \*/, r = /,? & /;
	function i(e) {
		var t = e.match(n);
		return t ? t[1].split(r) : [];
	}
	t.exports = i;
})), xs = /* @__PURE__ */ Z(((e, t) => {
	var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	function r(e, t) {
		var r = t.length;
		if (!r) return e;
		var i = r - 1;
		return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n");
	}
	t.exports = r;
})), Ss = /* @__PURE__ */ Z(((e, t) => {
	var n = pi();
	function r(e, t) {
		return !!(e != null && e.length) && n(e, t, 0) > -1;
	}
	t.exports = r;
})), Cs = /* @__PURE__ */ Z(((e, t) => {
	var n = Fo(), r = Ss(), i = [
		["ary", 128],
		["bind", 1],
		["bindKey", 2],
		["curry", 8],
		["curryRight", 16],
		["flip", 512],
		["partial", 32],
		["partialRight", 64],
		["rearg", 256]
	];
	function a(e, t) {
		return n(i, function(n) {
			var i = "_." + n[0];
			t & n[1] && !r(e, i) && e.push(i);
		}), e.sort();
	}
	t.exports = a;
})), ws = /* @__PURE__ */ Z(((e, t) => {
	var n = bs(), r = xs(), i = jo(), a = Cs();
	function o(e, t, o) {
		var s = t + "";
		return i(e, r(s, a(n(s), o)));
	}
	t.exports = o;
})), Ts = /* @__PURE__ */ Z(((e, t) => {
	var n = vs(), r = ys(), i = ws(), a = 1, o = 2, s = 4, c = 8, l = 32, u = 64;
	function d(e, t, d, f, p, m, h, g, _, v) {
		var y = t & c, b = y ? h : void 0, x = y ? void 0 : h, S = y ? m : void 0, C = y ? void 0 : m;
		t |= y ? l : u, t &= ~(y ? u : l), t & s || (t &= ~(a | o));
		var w = [
			e,
			t,
			p,
			S,
			b,
			C,
			x,
			g,
			_,
			v
		], T = d.apply(void 0, w);
		return n(e) && r(T, w), T.placeholder = f, i(T, e, t);
	}
	t.exports = d;
})), Es = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e.placeholder;
	}
	t.exports = n;
})), Ds = /* @__PURE__ */ Z(((e, t) => {
	var n = uo(), r = jn(), i = Math.min;
	function a(e, t) {
		for (var a = e.length, o = i(t.length, a), s = n(e); o--;) {
			var c = t[o];
			e[o] = r(c, a) ? s[c] : void 0;
		}
		return e;
	}
	t.exports = a;
})), Os = /* @__PURE__ */ Z(((e, t) => {
	var n = "__lodash_placeholder__";
	function r(e, t) {
		for (var r = -1, i = e.length, a = 0, o = []; ++r < i;) {
			var s = e[r];
			(s === t || s === n) && (e[r] = n, o[a++] = r);
		}
		return o;
	}
	t.exports = r;
})), ks = /* @__PURE__ */ Z(((e, t) => {
	var n = os(), r = ss(), i = cs(), a = is(), o = Ts(), s = Es(), c = Ds(), l = Os(), u = kt(), d = 1, f = 2, p = 8, m = 16, h = 128, g = 512;
	function _(e, t, v, y, b, x, S, C, w, T) {
		var E = t & h, D = t & d, O = t & f, k = t & (p | m), A = t & g, j = O ? void 0 : a(e);
		function M() {
			for (var d = arguments.length, f = Array(d), p = d; p--;) f[p] = arguments[p];
			if (k) var m = s(M), h = i(f, m);
			if (y && (f = n(f, y, b, k)), x && (f = r(f, x, S, k)), d -= h, k && d < T) {
				var g = l(f, m);
				return o(e, t, _, M.placeholder, v, f, g, C, w, T - d);
			}
			var N = D ? v : this, P = O ? N[e] : e;
			return d = f.length, C ? f = c(f, C) : A && d > 1 && f.reverse(), E && w < d && (f.length = w), this && this !== u && this instanceof M && (P = j || a(P)), P.apply(N, f);
		}
		return M;
	}
	t.exports = _;
})), As = /* @__PURE__ */ Z(((e, t) => {
	var n = Eo(), r = is(), i = ks(), a = Ts(), o = Es(), s = Os(), c = kt();
	function l(e, t, l) {
		var u = r(e);
		function d() {
			for (var r = arguments.length, f = Array(r), p = r, m = o(d); p--;) f[p] = arguments[p];
			var h = r < 3 && f[0] !== m && f[r - 1] !== m ? [] : s(f, m);
			return r -= h.length, r < l ? a(e, t, i, d.placeholder, void 0, f, h, void 0, void 0, l - r) : n(this && this !== c && this instanceof d ? u : e, this, f);
		}
		return d;
	}
	t.exports = l;
})), js = /* @__PURE__ */ Z(((e, t) => {
	var n = Eo(), r = is(), i = kt(), a = 1;
	function o(e, t, o, s) {
		var c = t & a, l = r(e);
		function u() {
			for (var t = -1, r = arguments.length, a = -1, d = s.length, f = Array(d + r), p = this && this !== i && this instanceof u ? l : e; ++a < d;) f[a] = s[a];
			for (; r--;) f[a++] = arguments[++t];
			return n(p, c ? o : this, f);
		}
		return u;
	}
	t.exports = o;
})), Ms = /* @__PURE__ */ Z(((e, t) => {
	var n = os(), r = ss(), i = Os(), a = "__lodash_placeholder__", o = 1, s = 2, c = 4, l = 8, u = 128, d = 256, f = Math.min;
	function p(e, t) {
		var p = e[1], m = t[1], h = p | m, g = h < (o | s | u), _ = m == u && p == l || m == u && p == d && e[7].length <= t[8] || m == (u | d) && t[7].length <= t[8] && p == l;
		if (!(g || _)) return e;
		m & o && (e[2] = t[2], h |= p & o ? 0 : c);
		var v = t[3];
		if (v) {
			var y = e[3];
			e[3] = y ? n(y, v, t[4]) : v, e[4] = y ? i(e[3], a) : t[4];
		}
		return v = t[5], v && (y = e[5], e[5] = y ? r(y, v, t[6]) : v, e[6] = y ? i(e[5], a) : t[6]), v = t[7], v && (e[7] = v), m & u && (e[8] = e[8] == null ? t[8] : f(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = h, e;
	}
	t.exports = p;
})), Ns = /* @__PURE__ */ Z(((e, t) => {
	var n = rs(), r = as(), i = As(), a = ks(), o = js(), s = fs(), c = Ms(), l = ys(), u = ws(), d = ci(), f = "Expected a function", p = 1, m = 2, h = 8, g = 16, _ = 32, v = 64, y = Math.max;
	function b(e, t, b, x, S, C, w, T) {
		var E = t & m;
		if (!E && typeof e != "function") throw TypeError(f);
		var D = x ? x.length : 0;
		if (D || (t &= ~(_ | v), x = S = void 0), w = w === void 0 ? w : y(d(w), 0), T = T === void 0 ? T : d(T), D -= S ? S.length : 0, t & v) {
			var O = x, k = S;
			x = S = void 0;
		}
		var A = E ? void 0 : s(e), j = [
			e,
			t,
			b,
			x,
			S,
			O,
			k,
			C,
			w,
			T
		];
		if (A && c(j, A), e = j[0], t = j[1], b = j[2], x = j[3], S = j[4], T = j[9] = j[9] === void 0 ? E ? 0 : e.length : y(j[9] - D, 0), !T && t & (h | g) && (t &= ~(h | g)), !t || t == p) var M = r(e, t, b);
		else M = t == h || t == g ? i(e, t, T) : (t == _ || t == (p | _)) && !S.length ? o(e, t, b, x) : a.apply(void 0, j);
		return u((A ? n : l)(M, j), e, t);
	}
	t.exports = b;
})), Ps = /* @__PURE__ */ Z(((e, t) => {
	var n = Ns(), r = 128;
	function i(e, t, i) {
		return t = i ? void 0 : t, t = e && t == null ? e.length : t, n(e, r, void 0, void 0, void 0, void 0, t);
	}
	t.exports = i;
})), Fs = /* @__PURE__ */ Z(((e, t) => {
	var n = Zo(), r = 4;
	function i(e) {
		return n(e, r);
	}
	t.exports = i;
})), Is = /* @__PURE__ */ Z(((e, t) => {
	var n = Ns(), r = 8;
	function i(e, t, a) {
		t = a ? void 0 : t;
		var o = n(e, r, void 0, void 0, void 0, void 0, void 0, t);
		return o.placeholder = i.placeholder, o;
	}
	i.placeholder = {}, t.exports = i;
})), Ls = /* @__PURE__ */ Z(((e, t) => {
	var n = Nt(), r = Jt(), i = go(), a = "[object DOMException]", o = "[object Error]";
	function s(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == o || t == a || typeof e.message == "string" && typeof e.name == "string" && !i(e);
	}
	t.exports = s;
})), Rs = /* @__PURE__ */ Z(((e, t) => {
	var n = qt(), r = Jt(), i = "[object WeakMap]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), zs = /* @__PURE__ */ Z(((e, t) => {
	var n = Zo(), r = ai(), i = 1;
	function a(e) {
		return r(typeof e == "function" ? e : n(e, i));
	}
	t.exports = a;
})), Bs = /* @__PURE__ */ Z(((e, t) => {
	var n = At(), r = Xt(), i = Zt(), a = n ? n.isConcatSpreadable : void 0;
	function o(e) {
		return i(e) || r(e) || !!(a && e && e[a]);
	}
	t.exports = o;
})), Vs = /* @__PURE__ */ Z(((e, t) => {
	var n = Rr(), r = Bs();
	function i(e, t, a, o, s) {
		var c = -1, l = e.length;
		for (a ||= r, s ||= []; ++c < l;) {
			var u = e[c];
			t > 0 && a(u) ? t > 1 ? i(u, t - 1, a, o, s) : n(s, u) : o || (s[s.length] = u);
		}
		return s;
	}
	t.exports = i;
})), Hs = /* @__PURE__ */ Z(((e, t) => {
	var n = Vs();
	function r(e) {
		return e != null && e.length ? n(e, 1) : [];
	}
	t.exports = r;
})), Us = /* @__PURE__ */ Z(((e, t) => {
	var n = Hs(), r = Do(), i = jo();
	function a(e) {
		return i(r(e, void 0, n), e + "");
	}
	t.exports = a;
})), Ws = /* @__PURE__ */ Z(((e, t) => {
	var n = Ns(), r = Us(), i = 256;
	t.exports = r(function(e, t) {
		return n(e, i, void 0, void 0, void 0, t);
	});
})), Gs = /* @__PURE__ */ Z(((e, t) => {
	var n = dn(), r = uo(), i = Zt(), a = fn(), o = mr(), s = gr(), c = mn();
	function l(e) {
		return i(e) ? n(e, s) : a(e) ? [e] : r(o(c(e)));
	}
	t.exports = l;
})), Ks = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		ary: Ps(),
		assign: Io(),
		clone: Fs(),
		curry: Is(),
		forEach: Fo(),
		isArray: Zt(),
		isError: Ls(),
		isFunction: Ft(),
		isWeakMap: Rs(),
		iteratee: zs(),
		keys: Dt(),
		rearg: Ws(),
		toInteger: ci(),
		toPath: Gs()
	};
})), qs = /* @__PURE__ */ Z(((e, t) => {
	var n = ts(), r = Ks();
	function i(e, t, i) {
		return n(r, e, t, i);
	}
	t.exports = i;
})), Js = /* @__PURE__ */ Z(((e, t) => {
	var n = vo(), r = hr(), i = jn(), a = Pt(), o = gr();
	function s(e, t, s, c) {
		if (!a(e)) return e;
		t = r(t, e);
		for (var l = -1, u = t.length, d = u - 1, f = e; f != null && ++l < u;) {
			var p = o(t[l]), m = s;
			if (p === "__proto__" || p === "constructor" || p === "prototype") return e;
			if (l != d) {
				var h = f[p];
				m = c ? c(h, p, f) : void 0, m === void 0 && (m = a(h) ? h : i(t[l + 1]) ? [] : {});
			}
			n(f, p, m), f = f[p];
		}
		return e;
	}
	t.exports = s;
})), Ys = /* @__PURE__ */ Z(((e, t) => {
	var n = Js();
	function r(e, t, r) {
		return e == null ? e : n(e, t, r);
	}
	t.exports = r;
})), Xs = /* @__PURE__ */ Z(((e, t) => {
	var n = qs()("set", Ys());
	n.placeholder = es(), t.exports = n;
})), Zs = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = e == null ? 0 : e.length;
		return t ? e[t - 1] : void 0;
	}
	t.exports = n;
})), Qs = /* @__PURE__ */ Z(((e, t) => {
	var n = _r(), r = xn();
	function i(e, t) {
		return t.length < 2 ? e : n(e, r(t, 0, -1));
	}
	t.exports = i;
})), $s = /* @__PURE__ */ Z(((e, t) => {
	var n = hr(), r = Zs(), i = Qs(), a = gr(), o = Object.prototype.hasOwnProperty;
	function s(e, t) {
		t = n(t, e);
		var s = -1, c = t.length;
		if (!c) return !0;
		for (; ++s < c;) {
			var l = a(t[s]);
			if (l === "__proto__" && !o.call(e, "__proto__") || (l === "constructor" || l === "prototype") && s < c - 1) return !1;
		}
		var u = i(e, t);
		return u == null || delete u[a(r(t))];
	}
	t.exports = s;
})), ec = /* @__PURE__ */ Z(((e, t) => {
	var n = $s();
	function r(e, t) {
		return e == null || n(e, t);
	}
	t.exports = r;
})), tc = /* @__PURE__ */ Z(((e, t) => {
	var n = qs()("unset", ec());
	n.placeholder = es(), t.exports = n;
})), nc = /* @__PURE__ */ Z(((e, t) => {
	var n = fn();
	function r(e, t, r) {
		for (var i = -1, a = e.length; ++i < a;) {
			var o = e[i], s = t(o);
			if (s != null && (c === void 0 ? s === s && !n(s) : r(s, c))) var c = s, l = o;
		}
		return l;
	}
	t.exports = r;
})), rc = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e > t;
	}
	t.exports = n;
})), ic = /* @__PURE__ */ Z(((e, t) => {
	var n = nc(), r = rc(), i = ai();
	function a(e, t) {
		return e && e.length ? n(e, i(t, 2), r) : void 0;
	}
	t.exports = a;
})), ac = /* @__PURE__ */ Z(((e, t) => {
	var n = $s(), r = jn(), i = Array.prototype.splice;
	function a(e, t) {
		for (var a = e ? t.length : 0, o = a - 1; a--;) {
			var s = t[a];
			if (a == o || s !== c) {
				var c = s;
				r(s) ? i.call(e, s, 1) : n(e, s);
			}
		}
		return e;
	}
	t.exports = a;
})), oc = /* @__PURE__ */ Z(((e, t) => {
	var n = ai(), r = ac();
	function i(e, t) {
		var i = [];
		if (!(e && e.length)) return i;
		var a = -1, o = [], s = e.length;
		for (t = n(t, 3); ++a < s;) {
			var c = e[a];
			t(c, a, e) && (i.push(c), o.push(a));
		}
		return r(e, o), i;
	}
	t.exports = i;
})), sc = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
	}
	t.exports = n;
})), cc = /* @__PURE__ */ Z(((e, t) => {
	var n = sc(), r = pn(), i = ci(), a = mn();
	function o(e, t, o) {
		e = a(e), t = r(t);
		var s = e.length;
		o = o === void 0 ? s : n(i(o), 0, s);
		var c = o;
		return o -= t.length, o >= 0 && e.slice(o, c) == t;
	}
	t.exports = o;
})), lc = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n, r, i) {
		return i(e, function(e, i, a) {
			n = r ? (r = !1, e) : t(n, e, i, a);
		}), n;
	}
	t.exports = n;
})), uc = /* @__PURE__ */ Z(((e, t) => {
	var n = cn(), r = eo(), i = ai(), a = lc(), o = Zt();
	function s(e, t, s) {
		var c = o(e) ? n : a, l = arguments.length < 3;
		return c(e, i(t, 4), s, l, r);
	}
	t.exports = s;
})), dc = /* @__PURE__ */ Z(((e, t) => {
	var n = dn();
	function r(e, t) {
		return n(t, function(t) {
			return [t, e[t]];
		});
	}
	t.exports = r;
})), fc = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = [e, e];
		}), n;
	}
	t.exports = n;
})), pc = /* @__PURE__ */ Z(((e, t) => {
	var n = dc(), r = qt(), i = Fr(), a = fc(), o = "[object Map]", s = "[object Set]";
	function c(e) {
		return function(t) {
			var c = r(t);
			return c == o ? i(t) : c == s ? a(t) : n(t, e(t));
		};
	}
	t.exports = c;
})), mc = /* @__PURE__ */ Z(((e, t) => {
	t.exports = pc()(Nn());
})), hc = /* @__PURE__ */ Z(((e, t) => {
	function n(e) {
		return e === void 0;
	}
	t.exports = n;
})), gc = /* @__PURE__ */ pt(sn());
kn(), Nn(), Hn();
var _c = /* @__PURE__ */ pt(vr());
xr();
var vc = /* @__PURE__ */ pt(ui()), yc = /* @__PURE__ */ pt(_i());
Ya(), no(), ro(), Po(), Qo(), Xs(), tc(), Ft(), ic(), oc(), cc(), Zs(), uc(), mc(), hc();
var bc = (e) => e?.replace(/~1/g, "/").replace(/~0/, "~"), xc = (e) => e === "#" || e === void 0 || e === "", Sc = (e, t, n) => Cc(e, t, {
	rootSchema: n,
	resolutionMap: /* @__PURE__ */ new Map()
}), Cc = (e, t, n) => {
	let r;
	if (e && typeof e.$ref == "string") {
		let i = wc(n.rootSchema, e.$ref, n);
		i !== void 0 && (r = wc(i, t, n));
	}
	return r === void 0 && (r = wc(e, t, n)), r;
}, wc = (e, t, n) => {
	let r = n.resolutionMap.get(e);
	if (r || (r = /* @__PURE__ */ new Set(), n.resolutionMap.set(e, r)), r.has(t)) return;
	r.add(t);
	let i = Tc(e, t?.split("/").map(bc), n);
	return r.delete(t), i;
}, Tc = (e, t, n) => {
	if (!t || t.length === 0) return e;
	if ((0, gc.default)(e)) return;
	let r = Ec(e, t, n);
	if (r !== void 0) return r;
	let i = [].concat(e.oneOf ?? [], e.allOf ?? [], e.anyOf ?? [], e.then ?? [], e.else ?? []);
	for (let e of i) {
		let r = e;
		e && typeof e.$ref == "string" && (r = Cc(n.rootSchema, e.$ref, n));
		let i = Tc(r, t, n);
		if (i) return i;
	}
}, Ec = (e, t, n) => {
	if (!t || t.length === 0) return e;
	if ((0, gc.default)(e)) return;
	let r = Dc(e, t);
	return r.schema && typeof r.schema.$ref == "string" && (r.schema = Cc(n.rootSchema, r.schema.$ref, n)), Tc(r.schema, r.remainingPathSegments, n);
}, Dc = (e, t) => {
	if (!t || t.length === 0) return {
		schema: e,
		remainingPathSegments: []
	};
	if ((0, gc.default)(e)) return {
		schema: void 0,
		remainingPathSegments: t
	};
	let [n, ...r] = t;
	return xc(n) ? Dc(e, r) : {
		schema: (0, _c.default)(e, n),
		remainingPathSegments: r,
		resolvedSegment: n
	};
}, Oc;
(function(e) {
	e.HIDE = "HIDE", e.SHOW = "SHOW", e.ENABLE = "ENABLE", e.DISABLE = "DISABLE", e.READONLY = "READONLY", e.WRITABLE = "WRITABLE";
})(Oc ||= {});
var kc = (e, t) => (0, yc.default)(Ac(e), t), Ac = (e) => {
	if ((0, gc.default)(e)) return [];
	if (!(0, gc.default)(e.type) && typeof e.type == "string") return [e.type];
	if (Array.isArray(e.type)) return e.type;
	if (!(0, gc.default)(e.properties) || !(0, gc.default)(e.additionalProperties)) return ["object"];
	if (!(0, gc.default)(e.items)) return ["array"];
	if (!(0, gc.default)(e.enum)) {
		let t = /* @__PURE__ */ new Set();
		return e.enum.forEach((e) => {
			typeof e == "string" ? t.add("string") : Ac(e).forEach((e) => t.add(e));
		}), Array.from(t);
	}
	if (!(0, gc.default)(e.allOf)) {
		let t = (0, vc.default)(e.allOf, (e) => Ac(e).length !== 0);
		if (t) return Ac(t);
	}
	return [];
}, jc;
(function(e) {
	e.addTooltip = "addTooltip", e.addAriaLabel = "addAriaLabel", e.removeTooltip = "removeTooltip", e.upAriaLabel = "upAriaLabel", e.downAriaLabel = "downAriaLabel", e.noSelection = "noSelection", e.removeAriaLabel = "removeAriaLabel", e.noDataMessage = "noDataMessage", e.deleteDialogTitle = "deleteDialogTitle", e.deleteDialogMessage = "deleteDialogMessage", e.deleteDialogAccept = "deleteDialogAccept", e.deleteDialogDecline = "deleteDialogDecline", e.up = "up", e.down = "down";
})(jc ||= {}), jc.addTooltip, jc.addAriaLabel, jc.removeTooltip, jc.removeAriaLabel, jc.upAriaLabel, jc.up, jc.down, jc.downAriaLabel, jc.noDataMessage, jc.noSelection, jc.deleteDialogTitle, jc.deleteDialogMessage, jc.deleteDialogAccept, jc.deleteDialogDecline;
var Mc;
(function(e) {
	e.clearDialogTitle = "clearDialogTitle", e.clearDialogMessage = "clearDialogMessage", e.clearDialogAccept = "clearDialogAccept", e.clearDialogDecline = "clearDialogDecline";
})(Mc ||= {}), Mc.clearDialogTitle, Mc.clearDialogMessage, Mc.clearDialogAccept, Mc.clearDialogDecline;
var Nc = (e) => !(0, gc.default)(e) && e.scope !== void 0, Pc = (e) => (t, n, r) => {
	if ((0, gc.default)(t) || !Nc(t) || (0, gc.default)(n)) return !1;
	let i = t.scope;
	if ((0, gc.default)(i)) return !1;
	let a = n;
	return kc(n, "object") && (a = Sc(n, i, r?.rootSchema)), a !== void 0 && e(a, r?.rootSchema);
}, Fc = (e) => Pc((t) => !(0, gc.default)(t) && kc(t, e)), Ic = (e) => Pc((t) => !(0, gc.default)(t) && t.format === e && kc(t, "string"));
Fc("boolean"), Fc("object"), Fc("integer"), Fc("number"), Fc("string"), Ic("date"), Ic("time"), Ic("date-time"), Fc("number"), Fc("integer"), Fc("integer");
//#endregion
//#region src/domain/conditionCompiler.ts
function Lc(e) {
	let t = { scope: e.fieldPath };
	switch (e.operator) {
		case "eq": return {
			...t,
			schema: { const: e.value },
			failWhenUndefined: !0
		};
		case "neq": return {
			...t,
			schema: { not: { const: e.value } },
			failWhenUndefined: !0
		};
		case "contains": return {
			...t,
			schema: { contains: { const: e.value } },
			failWhenUndefined: !0
		};
		case "gt": return {
			...t,
			schema: { exclusiveMinimum: e.value },
			failWhenUndefined: !0
		};
		case "gte": return {
			...t,
			schema: { minimum: e.value },
			failWhenUndefined: !0
		};
		case "lt": return {
			...t,
			schema: { exclusiveMaximum: e.value },
			failWhenUndefined: !0
		};
		case "lte": return {
			...t,
			schema: { maximum: e.value },
			failWhenUndefined: !0
		};
		case "isEmpty": return {
			...t,
			schema: { maxLength: 0 }
		};
		case "isNotEmpty": return {
			...t,
			schema: { minLength: 1 },
			failWhenUndefined: !0
		};
		default: return {
			...t,
			schema: {}
		};
	}
}
function Rc(e) {
	return {
		type: e.logic,
		conditions: e.conditions.map((e) => St(e) ? Rc(e) : Lc(e))
	};
}
function zc(e) {
	if (e && e.conditions.length !== 0) return {
		effect: Oc.SHOW,
		condition: Rc(e)
	};
}
//#endregion
//#region src/domain/schemaCompiler.ts
function Bc(e) {
	switch (e.type) {
		case "shortText":
		case "longText": {
			let t = e.minLength === void 0 ? e.required ? 1 : void 0 : e.required ? Math.max(e.minLength, 1) : e.minLength;
			return {
				type: "string",
				...t === void 0 ? {} : { minLength: t },
				...e.maxLength === void 0 ? {} : { maxLength: e.maxLength },
				...e.pattern ? { pattern: e.pattern } : {}
			};
		}
		case "singleChoice": return {
			type: "string",
			enum: e.choices ?? []
		};
		case "multipleChoice": return {
			type: "array",
			items: {
				type: "string",
				enum: e.choices ?? []
			},
			uniqueItems: !0
		};
		case "rating": return {
			type: "integer",
			minimum: e.min ?? 1,
			maximum: e.max ?? 5
		};
		case "nps": return {
			type: "integer",
			minimum: e.min ?? 0,
			maximum: e.max ?? 10
		};
		case "number": return {
			type: "number",
			...e.min === void 0 ? {} : { minimum: e.min },
			...e.max === void 0 ? {} : { maximum: e.max }
		};
		case "boolean": return { type: "boolean" };
		case "date": return {
			type: "string",
			format: "date"
		};
		case "turnstile": return { type: "string" };
		default: return { type: "string" };
	}
}
var Vc = {
	rating: "rating",
	nps: "nps",
	turnstile: "turnstile"
};
function Hc(e) {
	let t = zc(e.visibilityRule);
	if (e.type === "label") return {
		type: "Label",
		text: e.label,
		...t ? { rule: t } : {}
	};
	let n = `#/properties/${e.id}`, r = Vc[e.type], i = {};
	return e.description && (i.description = e.description), r && (i.renderer = r), e.type === "longText" && (i.multi = !0), e.disqualifyingOptions && Object.keys(e.disqualifyingOptions).length > 0 && (i.disqualifyingOptions = e.disqualifyingOptions), {
		type: "Control",
		scope: n,
		label: e.label,
		...Object.keys(i).length > 0 ? { options: i } : {},
		...t ? { rule: t } : {}
	};
}
function Uc(e) {
	let t = {}, n = [];
	for (let r of e.questions) r.type !== "label" && (t[r.id] = Bc(r), (r.required || r.type === "turnstile") && n.push(r.id));
	return {
		schema: {
			type: "object",
			properties: t,
			...n.length > 0 ? { required: n } : {}
		},
		uischema: {
			type: "VerticalLayout",
			elements: e.questions.map(Hc)
		}
	};
}
//#endregion
//#region src/domain/branchInvariant.ts
function Wc(e) {
	if (e.defaultNextPageId !== "end" || e.branch.length !== 1) return e;
	let [t] = e.branch;
	return t.action === "block" ? e : {
		...e,
		defaultNextPageId: t.goToPageId,
		branch: []
	};
}
function Gc(e) {
	return e.defaultNextPageId === "end" && e.branch.length >= 2;
}
//#endregion
//#region ../../node_modules/uuid/dist/stringify.js
var Kc = [];
for (let e = 0; e < 256; ++e) Kc.push((e + 256).toString(16).slice(1));
function qc(e, t = 0) {
	return (Kc[e[t + 0]] + Kc[e[t + 1]] + Kc[e[t + 2]] + Kc[e[t + 3]] + "-" + Kc[e[t + 4]] + Kc[e[t + 5]] + "-" + Kc[e[t + 6]] + Kc[e[t + 7]] + "-" + Kc[e[t + 8]] + Kc[e[t + 9]] + "-" + Kc[e[t + 10]] + Kc[e[t + 11]] + Kc[e[t + 12]] + Kc[e[t + 13]] + Kc[e[t + 14]] + Kc[e[t + 15]]).toLowerCase();
}
//#endregion
//#region ../../node_modules/uuid/dist/rng.js
var Jc = /* @__PURE__ */ new Uint8Array(16);
function Yc() {
	return crypto.getRandomValues(Jc);
}
//#endregion
//#region ../../node_modules/uuid/dist/v4.js
function Xc(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : Zc(e, t, n);
}
function Zc(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? Yc();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return qc(r);
}
//#endregion
//#region src/lib/id.ts
function Qc(e) {
	return `${e}_${Xc()}`;
}
function $c(e, t) {
	let n = t.replace(/[^a-zA-Z0-9]/g, ""), r = 1, i = `${n}${r}`;
	for (; e.has(i);) r += 1, i = `${n}${r}`;
	return i;
}
var el = 60;
function tl(e) {
	return e.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, el).replace(/-+$/g, "");
}
function nl(e, t, n) {
	let r = tl(e);
	if (!r) return n;
	if (!t.has(r)) return r;
	let i = 2, a = `${r}-${i}`;
	for (; t.has(a);) i += 1, a = `${r}-${i}`;
	return a;
}
function rl(e) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "");
}
//#endregion
//#region ../../node_modules/zustand/esm/react.mjs
var il = (e) => e;
function al(e, n = il) {
	let r = t.useSyncExternalStore(e.subscribe, t.useCallback(() => n(e.getState()), [e, n]), t.useCallback(() => n(e.getInitialState()), [e, n]));
	return t.useDebugValue(r), r;
}
var ol = (e) => {
	let t = xt(e), n = (e) => al(t, e);
	return Object.assign(n, t), n;
}, sl = ((e) => e ? ol(e) : ol);
//#endregion
//#region src/lib/createStoreContext.ts
function cl(e) {
	let t = n(null);
	function r(n) {
		let r = o(t);
		if (!r) throw Error(`${e}: no store found in context. Make sure this is rendered inside its Provider.`);
		return al(r, n);
	}
	function i() {
		let n = o(t);
		if (!n) throw Error(`${e}: no store found in context. Make sure this is rendered inside its Provider.`);
		return n;
	}
	return {
		Context: t,
		useBoundStore: r,
		useStoreApi: i
	};
}
//#endregion
//#region src/builder/questionTypes.ts
var ll = [
	{
		type: "shortText",
		paletteLabel: "Short Text",
		defaultLabel: "Short text question"
	},
	{
		type: "longText",
		paletteLabel: "Long Text",
		defaultLabel: "Long text question"
	},
	{
		type: "singleChoice",
		paletteLabel: "Single Choice",
		defaultLabel: "Single choice question"
	},
	{
		type: "multipleChoice",
		paletteLabel: "Multiple Choice",
		defaultLabel: "Multiple choice question"
	},
	{
		type: "rating",
		paletteLabel: "Rating",
		defaultLabel: "Rating question"
	},
	{
		type: "nps",
		paletteLabel: "NPS",
		defaultLabel: "How likely are you to recommend us?"
	},
	{
		type: "number",
		paletteLabel: "Number",
		defaultLabel: "Number question"
	},
	{
		type: "boolean",
		paletteLabel: "Yes / No",
		defaultLabel: "Yes/no question"
	},
	{
		type: "date",
		paletteLabel: "Date",
		defaultLabel: "Date question"
	},
	{
		type: "label",
		paletteLabel: "Label",
		defaultLabel: "Display text"
	},
	{
		type: "turnstile",
		paletteLabel: "Turnstile",
		defaultLabel: "Verification"
	}
];
function ul(e) {
	let t = ll.find((t) => t.type === e);
	if (!t) throw Error(`Unknown question type: ${e}`);
	return t;
}
//#endregion
//#region src/builder/store/builderStore.ts
function dl(e) {
	let { schema: t, uischema: n } = Uc(e);
	return {
		...e,
		schema: t,
		uischema: n
	};
}
function fl(e) {
	return dl({
		id: Qc("page"),
		title: e,
		questions: [],
		schema: {
			type: "object",
			properties: {}
		},
		uischema: {
			type: "VerticalLayout",
			elements: []
		},
		branch: [],
		defaultNextPageId: "end"
	});
}
function pl(e = "Untitled survey") {
	let t = fl("Page 1");
	return {
		id: Qc("survey"),
		title: e,
		schemaVersion: 1,
		version: 1,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		startPageId: t.id,
		pages: [t],
		scoring: { enabled: !1 },
		scoringMap: {}
	};
}
var ml = 50;
function hl(e, t) {
	return e.pages.find((e) => e.questions.some((e) => e.id === t));
}
function gl(e) {
	return new Set(e.pages.flatMap((e) => e.questions.map((e) => e.id)));
}
function _l(e, t, n) {
	return {
		...e,
		conditions: e.conditions.map((e) => St(e) ? _l(e, t, n) : e.fieldPath === t ? {
			...e,
			fieldPath: n
		} : e)
	};
}
function vl(e, t = pl()) {
	let { flowLayoutStore: n, snackbarStore: r } = e;
	function i(e) {
		Gc(e) && r.getState().showWarning(`"${e.title}" has ${e.branch.length} conditions but no fallback -- a respondent who matches none of them would have nowhere to go.`);
	}
	let a = !1, o = t, s = xt((e, o) => ({
		survey: t,
		selectedPageId: t.pages[0]?.id ?? null,
		selectedQuestionId: null,
		freshQuestionId: null,
		viewMode: "builder",
		history: {
			past: [],
			future: []
		},
		loadSurvey: (t) => {
			a = !0, e({
				survey: t,
				selectedPageId: t.pages[0]?.id ?? null,
				selectedQuestionId: null,
				freshQuestionId: null,
				history: {
					past: [],
					future: []
				}
			}), a = !1;
		},
		setSurveyTitle: (t) => e((e) => ({ survey: {
			...e.survey,
			title: t,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		setSurveyType: (t) => e((e) => ({ survey: {
			...e.survey,
			type: t,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		setViewMode: (t) => e({ viewMode: t }),
		addPage: () => e((e) => {
			let t = fl(`Page ${e.survey.pages.length + 1}`), n = [...e.survey.pages, t];
			return {
				survey: {
					...e.survey,
					pages: n,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedPageId: t.id,
				selectedQuestionId: null
			};
		}),
		removePage: (t) => e((e) => {
			if (e.survey.pages.length <= 1) return e;
			let r = e.survey.pages.filter((e) => e.id !== t).map((e) => ({
				...e,
				defaultNextPageId: e.defaultNextPageId === t ? "end" : e.defaultNextPageId,
				branch: e.branch.filter((e) => e.goToPageId !== t)
			})), i = e.survey.startPageId === t ? r[0].id : e.survey.startPageId;
			return n.getState().clearOverride(t), {
				survey: {
					...e.survey,
					pages: r,
					startPageId: i,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedPageId: e.selectedPageId === t ? r[0].id : e.selectedPageId
			};
		}),
		reorderPage: (t, n) => e((e) => {
			let r = [...e.survey.pages], [i] = r.splice(t, 1);
			return r.splice(n, 0, i), { survey: {
				...e.survey,
				pages: r,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} };
		}),
		duplicatePage: (t) => e((e) => {
			let n = e.survey.pages.find((e) => e.id === t);
			if (!n) return e;
			let r = gl(e.survey), i = { ...e.survey.scoringMap ?? {} }, a = n.questions.map((t) => {
				let n = $c(r, t.type);
				r.add(n);
				let a = e.survey.scoringMap?.[`#/properties/${t.id}`];
				return a && (i[`#/properties/${n}`] = a), {
					...t,
					id: n,
					slug: n
				};
			}), o = dl({
				...n,
				id: Qc("page"),
				title: `${n.title} (copy)`,
				questions: a,
				branch: [],
				defaultNextPageId: "end"
			}), s = e.survey.pages.findIndex((e) => e.id === t), c = [...e.survey.pages];
			return c.splice(s + 1, 0, o), {
				survey: {
					...e.survey,
					pages: c,
					scoringMap: i,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedPageId: o.id,
				selectedQuestionId: null
			};
		}),
		setStartPage: (t) => e((e) => ({ survey: {
			...e.survey,
			startPageId: t,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		selectPage: (t) => e({
			selectedPageId: t,
			selectedQuestionId: null
		}),
		clearSelectedPage: () => e({
			selectedPageId: null,
			selectedQuestionId: null
		}),
		setPageTitle: (t, n) => e((e) => ({ survey: {
			...e.survey,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			pages: e.survey.pages.map((e) => e.id === t ? {
				...e,
				title: n
			} : e)
		} })),
		setPageShowTitle: (t, n) => e((e) => ({ survey: {
			...e.survey,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			pages: e.survey.pages.map((e) => e.id === t ? {
				...e,
				showTitle: n
			} : e)
		} })),
		setPageBlocksSubmission: (t, n) => e((e) => ({ survey: {
			...e.survey,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			pages: e.survey.pages.map((e) => e.id === t ? {
				...e,
				blocksSubmission: n,
				defaultNextPageId: n ? "end" : e.defaultNextPageId
			} : e)
		} })),
		setDefaultNextPage: (t, n) => e((e) => {
			let r = e.survey.pages.find((e) => e.id === t);
			if (!r) return e;
			let a = Wc({
				...r,
				defaultNextPageId: n
			});
			return i(a), { survey: {
				...e.survey,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				pages: e.survey.pages.map((e) => e.id === t ? a : e)
			} };
		}),
		setBranchRules: (t, n) => e((e) => {
			let r = e.survey.pages.find((e) => e.id === t);
			if (!r) return e;
			let a = {
				...r,
				branch: n
			};
			return i(a), { survey: {
				...e.survey,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				pages: e.survey.pages.map((e) => e.id === t ? a : e)
			} };
		}),
		addBranchRule: (e, t) => {
			let n = o().survey.pages.find((t) => t.id === e);
			n && o().setBranchRules(e, [...n.branch, t]);
		},
		updateBranchRule: (e, t, n) => {
			let r = o().survey.pages.find((t) => t.id === e);
			r && o().setBranchRules(e, r.branch.map((e) => e.id === t ? {
				...e,
				...n
			} : e));
		},
		removeBranchRule: (t, n) => {
			let r = o().survey.pages.find((e) => e.id === t);
			if (!r) return;
			let a = r.branch.filter((e) => e.id !== n), s = Wc({
				...r,
				branch: a
			});
			i(s), e((e) => ({ survey: {
				...e.survey,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				pages: e.survey.pages.map((e) => e.id === t ? s : e)
			} }));
		},
		reorderBranchRule: (t, n, r) => e((e) => ({ survey: {
			...e.survey,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			pages: e.survey.pages.map((e) => {
				if (e.id !== t) return e;
				let i = [...e.branch], [a] = i.splice(n, 1);
				return i.splice(r, 0, a), {
					...e,
					branch: i
				};
			})
		} })),
		addQuestion: (t, n, r) => e((e) => {
			let i = ul(n), a = $c(gl(e.survey), n), o = {
				id: a,
				slug: a,
				title: i.defaultLabel,
				type: n,
				label: i.defaultLabel,
				...n === "singleChoice" || n === "multipleChoice" ? { choices: ["Option 1", "Option 2"] } : {}
			}, s = e.survey.pages.map((e) => {
				if (e.id !== t) return e;
				let n = [...e.questions], i = r === void 0 ? n.length : r;
				return n.splice(i, 0, o), dl({
					...e,
					questions: n
				});
			});
			return {
				survey: {
					...e.survey,
					pages: s,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedQuestionId: a,
				selectedPageId: t,
				freshQuestionId: a
			};
		}),
		duplicateQuestion: (t) => e((e) => {
			let n = hl(e.survey, t), r = n?.questions.find((e) => e.id === t);
			if (!n || !r) return e;
			let i = $c(gl(e.survey), r.type), a = {
				...r,
				id: i,
				slug: i,
				title: `${r.title} (copy)`,
				label: `${r.label} (copy)`
			}, o = e.survey.pages.map((e) => {
				if (e.id !== n.id) return e;
				let r = e.questions.findIndex((e) => e.id === t), i = [...e.questions];
				return i.splice(r + 1, 0, a), dl({
					...e,
					questions: i
				});
			});
			return {
				survey: {
					...e.survey,
					pages: o,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedQuestionId: i,
				selectedPageId: n.id,
				freshQuestionId: i
			};
		}),
		removeQuestion: (t) => e((e) => {
			let n = e.survey.pages.map((e) => e.questions.some((e) => e.id === t) ? dl({
				...e,
				questions: e.questions.filter((e) => e.id !== t)
			}) : e), { [t]: r, ...i } = e.survey.scoringMap ?? {};
			return {
				survey: {
					...e.survey,
					pages: n,
					scoringMap: i,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedQuestionId: e.selectedQuestionId === t ? null : e.selectedQuestionId,
				freshQuestionId: e.freshQuestionId === t ? null : e.freshQuestionId
			};
		}),
		reorderQuestion: (t, n, r) => e((e) => {
			let i = e.survey.pages.map((e) => {
				if (e.id !== t) return e;
				let i = [...e.questions], [a] = i.splice(n, 1);
				return i.splice(r, 0, a), dl({
					...e,
					questions: i
				});
			});
			return { survey: {
				...e.survey,
				pages: i,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} };
		}),
		selectQuestion: (t) => e({ selectedQuestionId: t }),
		updateQuestion: (t, n) => e((e) => {
			let r = e.survey.pages.map((e) => {
				if (!e.questions.some((e) => e.id === t)) return e;
				let r = e.questions.map((e) => e.id === t ? {
					...e,
					...n
				} : e);
				return dl({
					...e,
					questions: r
				});
			});
			return { survey: {
				...e.survey,
				pages: r,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} };
		}),
		finalizeQuestionId: (t) => e((e) => {
			if (e.freshQuestionId !== t) return {};
			let n = hl(e.survey, t), r = n?.questions.find((e) => e.id === t);
			if (!n || !r) return { freshQuestionId: null };
			let i = gl(e.survey);
			i.delete(t);
			let a = nl(r.title, i, t);
			if (a === t) return { freshQuestionId: null };
			let o = e.survey.pages.map((e) => {
				if (e.id !== n.id) return e;
				let r = e.questions.map((e) => e.id === t ? {
					...e,
					id: a,
					slug: a
				} : e);
				return dl({
					...e,
					questions: r
				});
			});
			return {
				survey: {
					...e.survey,
					pages: o,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedQuestionId: e.selectedQuestionId === t ? a : e.selectedQuestionId,
				freshQuestionId: null
			};
		}),
		renameQuestionId: (t, n) => {
			let i = o(), a = hl(i.survey, t), s = a?.questions.find((e) => e.id === t);
			if (!a || !s) return !1;
			let c = rl(n).trim();
			if (!c) return r.getState().showError("Slug cannot be empty."), !1;
			if (c === t) return !0;
			let l = gl(i.survey);
			if (l.delete(t), l.has(c)) return r.getState().showError(`"${c}" is already used by another question.`), !1;
			let u = `#/properties/${t}`, d = `#/properties/${c}`, f = i.survey.pages.map((e) => {
				let n = e.questions.map((e) => {
					let n = e.id === t ? {
						...e,
						id: c,
						slug: c
					} : e;
					return n.visibilityRule ? {
						...n,
						visibilityRule: _l(n.visibilityRule, u, d)
					} : n;
				}), r = e.branch.map((e) => ({
					...e,
					when: _l(e.when, u, d)
				}));
				return dl({
					...e,
					questions: n,
					branch: r
				});
			}), p = { ...i.survey.scoringMap ?? {} };
			return p[u] && (p[d] = p[u], delete p[u]), e({
				survey: {
					...i.survey,
					pages: f,
					scoringMap: p,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				selectedQuestionId: i.selectedQuestionId === t ? c : i.selectedQuestionId,
				freshQuestionId: i.freshQuestionId === t ? c : i.freshQuestionId
			}), !0;
		},
		setVisibilityRule: (e, t) => {
			o().updateQuestion(e, { visibilityRule: t });
		},
		setScoringEnabled: (t) => e((e) => ({ survey: {
			...e.survey,
			scoring: {
				...e.survey.scoring ?? {},
				enabled: t
			},
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		setScoringForQuestion: (t, n) => e((e) => {
			let r = { ...e.survey.scoringMap ?? {} }, i = `#/properties/${t}`;
			return n ? r[i] = n : delete r[i], { survey: {
				...e.survey,
				scoringMap: r,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} };
		}),
		setPassThreshold: (t) => e((e) => ({ survey: {
			...e.survey,
			scoring: {
				...e.survey.scoring ?? { enabled: !1 },
				passThreshold: t
			},
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		setScoringCategories: (t) => e((e) => ({ survey: {
			...e.survey,
			scoring: {
				...e.survey.scoring ?? { enabled: !1 },
				categories: t
			},
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} })),
		undo: () => {
			let { survey: t, history: n } = o();
			if (n.past.length === 0) return;
			let r = n.past.at(-1);
			a = !0, e({
				survey: r,
				history: {
					past: n.past.slice(0, -1),
					future: [t, ...n.future].slice(0, ml)
				}
			}), a = !1;
		},
		redo: () => {
			let { survey: t, history: n } = o();
			if (n.future.length === 0) return;
			let r = n.future[0];
			a = !0, e({
				survey: r,
				history: {
					past: [...n.past, t].slice(-50),
					future: n.future.slice(1)
				}
			}), a = !1;
		}
	}));
	return s.subscribe((e) => {
		if (a) {
			o = e.survey;
			return;
		}
		if (e.survey === o) return;
		let t = o;
		o = e.survey, s.setState((e) => ({ history: {
			past: [...e.history.past, t].slice(-50),
			future: []
		} }));
	}), s;
}
var { Context: yl, useBoundStore: Q, useStoreApi: bl } = cl("useBuilderStore"), xl = /* @__PURE__ */ pt((/* @__PURE__ */ Z(((e, t) => {
	((n, r) => {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(e, function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r ||= Array.prototype.slice.call(t, 0, i))[i] = t[i]);
			return e.concat(r || Array.prototype.slice.call(t));
		}
		var r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, i = Object.keys, a = Array.isArray;
		function o(e, t) {
			return typeof t == "object" && i(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		typeof Promise > "u" || r.Promise || (r.Promise = Promise);
		var s = Object.getPrototypeOf, c = {}.hasOwnProperty;
		function l(e, t) {
			return c.call(e, t);
		}
		function u(e, t) {
			typeof t == "function" && (t = t(s(e))), (typeof Reflect > "u" ? i : Reflect.ownKeys)(t).forEach(function(n) {
				f(e, n, t[n]);
			});
		}
		var d = Object.defineProperty;
		function f(e, t, n, r) {
			d(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r));
		}
		function p(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, h = [].slice;
		function g(e, t, n) {
			return h.call(e, t, n);
		}
		function _(e, t) {
			return t(e);
		}
		function v(e) {
			if (!e) throw Error("Assertion Failed");
		}
		function y(e) {
			r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function b(e, t) {
			if (typeof t == "string" && l(e, t)) return e[t];
			if (!t) return e;
			if (typeof t != "string") {
				for (var n = [], r = 0, i = t.length; r < i; ++r) {
					var a = b(e, t[r]);
					n.push(a);
				}
				return n;
			}
			var o, s = t.indexOf(".");
			return s === -1 || (o = e[t.substr(0, s)]) == null ? void 0 : b(o, t.substr(s + 1));
		}
		function x(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) {
				if (typeof t != "string" && "length" in t) {
					v(typeof n != "string" && "length" in n);
					for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
				} else {
					var o = t.indexOf(".");
					if (o !== -1) {
						var s = t.substr(0, o), o = t.substr(o + 1);
						if (o === "") n === void 0 ? a(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n;
						else {
							var c = e[s];
							if (!c || !l(e, s)) {
								if (n === void 0) return;
								c = e[s] = {};
							}
							x(c, o, n);
						}
					} else n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
				}
			}
		}
		function S(e) {
			var t, n = {};
			for (t in e) l(e, t) && (n[t] = e[t]);
			return n;
		}
		var C = [].concat;
		function w(e) {
			return C.apply([], e);
		}
		var T = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(w([
			8,
			16,
			32,
			64
		].map(function(e) {
			return [
				"Int",
				"Uint",
				"Float"
			].map(function(t) {
				return t + e + "Array";
			});
		}))).filter(function(e) {
			return r[e];
		}), E = new Set(T.map(function(e) {
			return r[e];
		})), D = null;
		function O(e) {
			return D = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = D.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], D.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (E.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), D.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), D = null, e;
		}
		var k = {}.toString;
		function A(e) {
			return k.call(e).slice(8, -1);
		}
		var j = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", M = typeof j == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[j]) && t.apply(e);
		} : function() {
			return null;
		};
		function N(e, t) {
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var P = {};
		function F(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === P && typeof e == "string") return [e];
				if (i = M(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var I = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, T = [
			"Unknown",
			"Constraint",
			"Data",
			"TransactionInactive",
			"ReadOnly",
			"Version",
			"NotFound",
			"InvalidState",
			"InvalidAccess",
			"Abort",
			"Timeout",
			"QuotaExceeded",
			"Syntax",
			"DataClone"
		], L = [
			"Modify",
			"Bulk",
			"OpenFailed",
			"VersionChange",
			"Schema",
			"Upgrade",
			"InvalidTable",
			"MissingAPI",
			"NoSuchDatabase",
			"InvalidArgument",
			"SubTransaction",
			"Unsupported",
			"Internal",
			"DatabaseClosed",
			"PrematureCommit",
			"ForeignAwait"
		].concat(T), ee = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function R(e, t) {
			this.name = e, this.message = t;
		}
		function z(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function B(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = z(e, t);
		}
		function V(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = z(e, this.failures);
		}
		p(R).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(B).from(R), p(V).from(R);
		var H = L.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), te = R, U = L.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = ee[t] || n, this.inner = null);
			}
			return p(r).from(te), e[t] = r, e;
		}, {}), ne = (U.Syntax = SyntaxError, U.Type = TypeError, U.Range = RangeError, T.reduce(function(e, t) {
			return e[t + "Error"] = U[t], e;
		}, {}));
		T = L.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = U[t]), e;
		}, {});
		function W() {}
		function G(e) {
			return e;
		}
		function re(e, t) {
			return e == null || e === G ? t : function(n) {
				return t(e(n));
			};
		}
		function ie(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function K(e, t) {
			return e === W ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? ie(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? ie(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function ae(e, t) {
			return e === W ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? ie(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? ie(r, this.onerror) : r);
			};
		}
		function oe(e, t) {
			return e === W ? t : function(n) {
				var r = e.apply(this, arguments), n = (o(n, r), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return n && (this.onsuccess = this.onsuccess ? ie(n, this.onsuccess) : n), i && (this.onerror = this.onerror ? ie(i, this.onerror) : i), r === void 0 ? a === void 0 ? void 0 : a : o(r, a);
			};
		}
		function q(e, t) {
			return e === W ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function se(e, t) {
			return e === W ? t : function() {
				var n = e.apply(this, arguments);
				if (n && typeof n.then == "function") {
					for (var r = this, i = arguments.length, a = Array(i); i--;) a[i] = arguments[i];
					return n.then(function() {
						return t.apply(r, a);
					});
				}
				return t.apply(this, arguments);
			};
		}
		T.ModifyError = B, T.DexieError = R, T.BulkError = V;
		var ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function le(e) {
			ce = e;
		}
		var ue = {}, J = 100, de = typeof Promise > "u" ? [] : (L = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			de = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(de),
			L
		] : [
			L,
			s(L),
			L
		]), L = de[0], fe = de[1], fe = fe && fe.then, pe = L && L.constructor, me = !!de[2], he = function(e, t) {
			Se.push([e, t]), _e &&= (queueMicrotask(je), !1);
		}, ge = !0, _e = !0, ve = [], ye = [], be = G, xe = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: W,
			pgp: !1,
			env: {},
			finalize: W
		}, Y = xe, Se = [], Ce = 0, we = [];
		function X(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = Y;
			if (typeof e != "function") {
				if (e !== ue) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && De(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && Me();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof X ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, Oe(t)), r && Ne();
						}
					}, De.bind(null, t));
				} catch (e) {
					De(t, e);
				}
			}(this, e);
		}
		var Te = {
			get: function() {
				var e = Y, t = Ve;
				function n(n, r) {
					var i = this, a = !e.global && (e !== Y || t !== Ve), o = a && !Ge(), s = new X(function(t, s) {
						ke(i, new Ee(Ze(n, e, a, o), Ze(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = ue, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === ue ? Te : {
					get: function() {
						return e;
					},
					set: Te.set
				});
			}
		};
		function Ee(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function De(e, t) {
			var n, r;
			ye.push(t), e._state === null && (n = e._lib && Me(), t = be(t), e._state = !1, e._value = t, r = e, ve.some(function(e) {
				return e._value === r._value;
			}) || ve.push(r), Oe(e), n) && Ne();
		}
		function Oe(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) ke(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), Ce === 0 && (++Ce, he(function() {
				--Ce == 0 && Pe();
			}, []));
		}
		function ke(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Ce, he(Ae, [
					n,
					e,
					t
				]);
			}
		}
		function Ae(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && ye.length && (ye = []), r = ce && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || ye.indexOf(i) !== -1 || ((e) => {
					for (var t = ve.length; t;) if (ve[--t]._value === e._value) return ve.splice(t, 1);
				})(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--Ce == 0 && Pe(), --n.psd.ref || n.psd.finalize();
			}
		}
		function je() {
			Xe(xe, function() {
				Me() && Ne();
			});
		}
		function Me() {
			var e = ge;
			return _e = ge = !1, e;
		}
		function Ne() {
			var e, t, n;
			do
				for (; 0 < Se.length;) for (e = Se, Se = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Se.length);
			_e = ge = !0;
		}
		function Pe() {
			for (var e = ve, t = (ve = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), we.slice(0)), n = t.length; n;) t[--n]();
		}
		function Fe(e) {
			return new X(ue, !1, e);
		}
		function Ie(e, t) {
			var n = Y;
			return function() {
				var r = Me(), i = Y;
				try {
					return Je(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					Je(i, !1), r && Ne();
				}
			};
		}
		u(X.prototype, {
			then: Te,
			_then: function(e, t) {
				ke(this, new Ee(null, null, e, t, Y));
			},
			catch: function(e) {
				var t, n;
				return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : Fe)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Fe)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return X.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return X.resolve(e()).then(function() {
						return Fe(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < 1 / 0 ? new X(function(r, i) {
					var a = setTimeout(function() {
						return i(new U.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(X.prototype, Symbol.toStringTag, "Dexie.Promise"), xe.env = Ye(), u(X, {
			all: function() {
				var e = F.apply(null, arguments).map(Ke);
				return new X(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return X.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof X ? e : e && typeof e.then == "function" ? new X(function(t, n) {
					e.then(t, n);
				}) : new X(ue, !0, e);
			},
			reject: Fe,
			race: function() {
				var e = F.apply(null, arguments).map(Ke);
				return new X(function(t, n) {
					e.map(function(e) {
						return X.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return Y;
				},
				set: function(e) {
					return Y = e;
				}
			},
			totalEchoes: { get: function() {
				return Ve;
			} },
			newPSD: Ue,
			usePSD: Xe,
			scheduler: {
				get: function() {
					return he;
				},
				set: function(e) {
					he = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return be;
				},
				set: function(e) {
					be = e;
				}
			},
			follow: function(e, t) {
				return new X(function(n, r) {
					return Ue(function(t, n) {
						var r = Y;
						r.unhandleds = [], r.onunhandled = n, r.finalize = ie(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, we.push(function t() {
								e(), we.splice(we.indexOf(t), 1);
							}), ++Ce, he(function() {
								--Ce == 0 && Pe();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), pe && (pe.allSettled && f(X, "allSettled", function() {
			var e = F.apply(null, arguments).map(Ke);
			return new X(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return X.resolve(e).then(function(e) {
						return r[i] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return r[i] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(r);
					});
				});
			});
		}), pe.any && typeof AggregateError < "u" && f(X, "any", function() {
			var e = F.apply(null, arguments).map(Ke);
			return new X(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return X.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), pe.withResolvers) && (X.withResolvers = pe.withResolvers);
		var Le = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Re = 0, ze = [], Be = 0, Ve = 0, He = 0;
		function Ue(e, t, n, r) {
			var i = Y, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++He, xe.env, a.env = me ? {
				Promise: X,
				PromiseProp: {
					value: X,
					configurable: !0,
					writable: !0
				},
				all: X.all,
				race: X.race,
				allSettled: X.allSettled,
				any: X.any,
				resolve: X.resolve,
				reject: X.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, Xe(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function We() {
			return Le.id ||= ++Re, ++Le.awaits, Le.echoes += J, Le.id;
		}
		function Ge() {
			return !!Le.awaits && (--Le.awaits == 0 && (Le.id = 0), Le.echoes = Le.awaits * J, !0);
		}
		function Ke(e) {
			return Le.echoes && e && e.constructor === pe ? (We(), e.then(function(e) {
				return Ge(), e;
			}, function(e) {
				return Ge(), $e(e);
			})) : e;
		}
		function qe() {
			var e = ze[ze.length - 1];
			ze.pop(), Je(e, !1);
		}
		function Je(e, t) {
			var n, i, a = Y;
			(t ? !Le.echoes || Be++ && e === Y : !Be || --Be && e === Y) || queueMicrotask(t ? function(e) {
				++Ve, Le.echoes && --Le.echoes != 0 || (Le.echoes = Le.awaits = Le.id = 0), ze.push(Y), Je(e, !0);
			}.bind(null, e) : qe), e !== Y && (Y = e, a === xe && (xe.env = Ye()), me) && (n = xe.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
		}
		function Ye() {
			var e = r.Promise;
			return me ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function Xe(e, t, n, r, i) {
			var a = Y;
			try {
				return Je(e, !0), t(n, r, i);
			} finally {
				Je(a, !1);
			}
		}
		function Ze(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = Y;
				n && We(), Je(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					Je(i, !1), r && queueMicrotask(Ge);
				}
			} : e;
		}
		function Qe(e) {
			Promise === pe && Le.echoes === 0 ? Be === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + fe).indexOf("[native code]") === -1 && (We = Ge = W);
		var $e = X.reject, et = "￿", tt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", nt = "String expected.", rt = "__dbnames", it = "readonly", at = "readwrite";
		function ot(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var st = {
			type: 3,
			lower: -1 / 0,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function ct(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = O(t))[e], t;
			};
		}
		function lt() {
			throw U.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function ut(e, t) {
			try {
				var n = Z(e), r = Z(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = dt(e), a = dt(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = ut(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function Z(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = A(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function dt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function ft(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		mt.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (t.add !== void 0) {
				var r = t.add;
				if (a(r)) return n(n([], a(e) ? e : [], !0), r, !0).sort();
				if (typeof r == "number") return (Number(e) || 0) + r;
				if (typeof r == "bigint") try {
					return BigInt(e) + r;
				} catch {
					return BigInt(0) + r;
				}
				throw TypeError(`Invalid term ${r}`);
			}
			if (t.remove !== void 0) {
				var i = t.remove;
				if (a(i)) return a(e) ? e.filter(function(e) {
					return !i.includes(e);
				}).sort() : [];
				if (typeof i == "number") return Number(e) - i;
				if (typeof i == "bigint") try {
					return BigInt(e) - i;
				} catch {
					return BigInt(0) - i;
				}
				throw TypeError(`Invalid subtrahend ${i}`);
			}
			return r = (r = t.replacePrefix)?.[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
		};
		var pt = mt;
		function mt(e) {
			this["@@propmod"] = e;
		}
		function ht(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof pt ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		_t.prototype._trans = function(e, t, n) {
			var r = this._tx || Y.trans, i = this.name, a = ce && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new U.NotFound("Table " + i + " not part of transaction");
			}
			var s = Me();
			try {
				var c = r && r.db._novip === this.db._novip ? r === Y.trans ? r._promise(e, o, n) : Ue(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: Y.transless || Y
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || Y.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === H.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : $e(a);
						}
						return a._promise(n, function(e, t) {
							return Ue(function() {
								return Y.trans = a, i(e, t, a);
							});
						}).then(function(e) {
							if (n === "readwrite") try {
								a.idbtrans.commit();
							} catch {}
							return n === "readonly" ? e : a._completion.then(function() {
								return e;
							});
						});
					}
					if (t._state.openComplete) return $e(new U.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return $e(new U.DatabaseClosed());
						t.open().catch(W);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), $e(e);
				})), c;
			} finally {
				s && Ne();
			}
		}, _t.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? $e(new U.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, _t.prototype.where = function(e) {
			if (typeof e == "string") return new this.db.WhereClause(this, e);
			if (a(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
			var t = i(e);
			if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
			var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (n && this.db._maxKey !== et) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && ce && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return ut(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? ot(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
		}, _t.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, _t.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, _t.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, _t.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, _t.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, _t.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, _t.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, _t.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, _t.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, _t.prototype.mapToClass = function(t) {
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof lt && (t = ((t) => {
				var i = s, a = t;
				if (typeof a != "function" && a !== null) throw TypeError("Class extends value " + String(a) + " is not a constructor or null");
				function o() {
					this.constructor = i;
				}
				function s() {
					return t !== null && t.apply(this, arguments) || this;
				}
				return e(i, a), i.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o()), Object.defineProperty(s.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), s.prototype.table = function() {
					return r;
				}, s;
			})(t)), /* @__PURE__ */ new Set()), a = t.prototype; a; a = s(a)) Object.getOwnPropertyNames(a).forEach(function(e) {
				return i.add(e);
			});
			function o(e) {
				if (!e) return e;
				var n, r = Object.create(t.prototype);
				for (n in e) if (!i.has(n)) try {
					r[n] = e[n];
				} catch {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
		}, _t.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, _t.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = ct(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? X.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, _t.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return ht(o, t), r && x(o, r, e), n.core.mutate({
						trans: i,
						type: "put",
						values: [o],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? X.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, _t.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? $e(new U.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, _t.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = ct(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? X.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, _t.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return ft(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? X.reject(e.failures[0]) : void 0;
				});
			});
		}, _t.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: st
				}).then(function(t) {
					return ft(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? X.reject(e.failures[0]) : void 0;
			});
		}, _t.prototype.bulkGet = function(e) {
			var t = this;
			return this._trans("readonly", function(n) {
				return t.core.getMany({
					keys: e,
					trans: n
				}).then(function(e) {
					return e.map(function(e) {
						return t.hook.reading.fire(e);
					});
				});
			});
		}, _t.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new U.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(ct(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new V(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, _t.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new U.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(ct(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new V(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
				});
			});
		}, _t.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, r = e.map(function(e) {
				return e.key;
			}), i = e.map(function(e) {
				return e.changes;
			}), a = [];
			return this._trans("readwrite", function(o) {
				return n.getMany({
					trans: o,
					keys: r,
					cache: "clone"
				}).then(function(s) {
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (ut(p, r) !== 0) throw new U.Constraint("Cannot update primary key in bulkUpdate()");
								} else x(o, f, p);
							}
							a.push(n), c.push(r), l.push(o);
						}
					}), c.length);
					return n.mutate({
						trans: o,
						type: "put",
						keys: c,
						values: l,
						updates: {
							keys: r,
							changeSpecs: i
						}
					}).then(function(e) {
						var n = e.numFailures, r = e.failures;
						if (n === 0) return u;
						for (var i = 0, o = Object.keys(r); i < o.length; i++) {
							var s, c = o[i], l = a[Number(c)];
							l != null && (s = r[c], delete r[c], r[l] = s);
						}
						throw new V(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, _t.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return ft(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new V(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var gt = _t;
		function _t() {}
		function vt(e) {
			function t(t, r) {
				if (r) {
					for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
					return n[t].subscribe.apply(null, a), e;
				}
				if (typeof t == "string") return n[t];
			}
			var n = {};
			t.addEventType = s;
			for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
			return t;
			function s(e, r, o) {
				var c, l;
				if (typeof e != "object") return r ||= q, l = {
					subscribers: [],
					fire: o ||= W,
					subscribe: function(e) {
						l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
					},
					unsubscribe: function(e) {
						l.subscribers = l.subscribers.filter(function(t) {
							return t !== e;
						}), l.fire = l.subscribers.reduce(r, o);
					}
				}, n[e] = t[e] = l;
				i(c = e).forEach(function(e) {
					var t = c[e];
					if (a(t)) s(e, c[e][0], c[e][1]);
					else {
						if (t !== "asap") throw new U.InvalidArgument("Invalid event config");
						var n = s(e, G, function() {
							for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
							n.subscribers.forEach(function(e) {
								y(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function yt(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function bt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function xt(e, t) {
			e.filter = ot(e.filter, t);
		}
		function St(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return ot(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function Ct(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new U.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function wt(e, t, n) {
			var r = Ct(e, t.schema);
			return t.openCursor({
				trans: n,
				values: !e.keysOnly,
				reverse: e.dir === "prev",
				unique: !!e.unique,
				query: {
					index: r,
					range: e.range
				}
			});
		}
		function Tt(e, t, n, r) {
			var i, a, o = e.replayFilter ? ot(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), Et(wt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : Et(wt(e, r, n), ot(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Et(e, t, n, r) {
			var i = Ie(r ? function(e, t, i) {
				return n(r(e), t, i);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = W;
					}, function(t) {
						e.fail(t), n = W;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		Ot.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, $e.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, Ot.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, $e.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, Ot.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = ot(t.algorithm, e);
		}, Ot.prototype._iterate = function(e, t) {
			return Tt(this._ctx, e, t, this._ctx.table.core);
		}, Ot.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, Ot.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, Ot.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return Tt(t, e, n, t.table.core);
			});
		}, Ot.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return bt(r, !0) ? i.count({
					trans: e,
					query: {
						index: Ct(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, Tt(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
			}).then(e);
		}, Ot.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return ut(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.slice().sort(s);
			}).then(t);
		}, Ot.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return bt(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = Ct(a, a.table.core.schema), a.table.core.query({
					trans: e,
					limit: a.limit,
					values: !0,
					direction: a.dir === "prev" ? "prev" : void 0,
					query: {
						index: r,
						range: a.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (i = [], Tt(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, Ot.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, bt(t) ? St(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : St(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, Ot.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), St(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, Ot.prototype.until = function(e, t) {
			return xt(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, Ot.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, Ot.prototype.last = function(e) {
			return this.reverse().first(e);
		}, Ot.prototype.filter = function(e) {
			var t;
			return xt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = ot(t.isMatch, e), this;
		}, Ot.prototype.and = function(e) {
			return this.filter(e);
		}, Ot.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, Ot.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, Ot.prototype.desc = function() {
			return this.reverse();
		}, Ot.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, Ot.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, Ot.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, Ot.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, Ot.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (bt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = Ct(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					direction: t.dir === "prev" ? "prev" : void 0,
					query: {
						index: n,
						range: t.range
					}
				});
			}).then(function(e) {
				return e.result;
			}).then(e);
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.primaryKey);
			}).then(function() {
				return n;
			}).then(e);
		}, Ot.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, Ot.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, Ot.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, Ot.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, xt(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, Ot.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				function a(e, t) {
					var n = t.failures;
					p += e - t.numFailures;
					for (var r = 0, a = i(n); r < a.length; r++) {
						var o = a[r];
						f.push(n[o]);
					}
				}
				var o = typeof e == "function" ? e : function(t) {
					return ht(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === kt;
				return t.clone().primaryKeys().then(function(t) {
					function i(f) {
						var p = Math.min(d, t.length - f), m = t.slice(f, f + p);
						return (h ? Promise.resolve([]) : s.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(g) {
							var _ = [], v = [], y = l ? [] : null, b = h ? m : [];
							if (!h) for (var x = 0; x < p; ++x) {
								var S = g[x], C = {
									value: O(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || ut(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
							}
							return Promise.resolve(0 < _.length && s.mutate({
								trans: r,
								type: "add",
								values: _
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								a(_.length, e);
							})).then(function() {
								return (0 < v.length || c && typeof e == "object") && s.mutate({
									trans: r,
									type: "put",
									keys: y,
									values: v,
									criteria: c,
									changeSpec: typeof e != "function" && e,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return a(v.length, e);
								});
							}).then(function() {
								return (0 < b.length || c && h) && s.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: c,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return ft(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = bt(n) && n.limit === 1 / 0 && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new B("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, Ot.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !bt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(kt) : this._write(function(n) {
				var r = e.table.core.schema.primaryKey, i = t;
				return e.table.core.count({
					trans: n,
					query: {
						index: r,
						range: i
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: n,
						type: "deleteRange",
						range: i
					}).then(function(e) {
						var n = e.failures, e = e.numFailures;
						if (e) throw new B("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var Dt = Ot;
		function Ot() {}
		var kt = function(e, t) {
			return t.value = null;
		};
		function At(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function jt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function Mt(e, t, n) {
			return e = e instanceof Lt ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function Nt(e) {
			return new e.Collection(e, function() {
				return It("");
			}).limit(0);
		}
		function Pt(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return Mt(e, nt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? At : jt;
				var t = n.map(function(e) {
					return {
						lower: a(e),
						upper: i(e)
					};
				}).sort(function(e, t) {
					return o(e.lower, t.lower);
				});
				s = t.map(function(e) {
					return e.upper;
				}), c = t.map(function(e) {
					return e.lower;
				}), u = (l = e) === "next" ? "" : r;
			}
			f("next");
			var e = new e.Collection(e, function() {
				return Ft(s[0], c[d - 1] + r);
			}), p = (e._ondirectionchange = function(e) {
				f(e);
			}, 0);
			return e._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i == "string") {
					var f = a(i);
					if (t(f, c, p)) return !0;
					for (var m = null, h = p; h < d; ++h) {
						var g = ((e, t, n, r, i, a) => {
							for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
								var l = t[c];
								if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
								i(e[c], l) < 0 && (s = c);
							}
							return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
						})(i, f, s[h], c[h], o, l);
						g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
					}
					n(m === null ? r : function() {
						e.continue(m + u);
					});
				}
				return !1;
			}), e;
		}
		function Ft(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function It(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(Rt.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), Rt.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Nt(this) : new this.Collection(this, function() {
					return Ft(e, t, !n, !r);
				});
			} catch {
				return Mt(this, tt);
			}
		}, Rt.prototype.equals = function(e) {
			return e == null ? Mt(this, tt) : new this.Collection(this, function() {
				return It(e);
			});
		}, Rt.prototype.above = function(e) {
			return e == null ? Mt(this, tt) : new this.Collection(this, function() {
				return Ft(e, void 0, !0);
			});
		}, Rt.prototype.aboveOrEqual = function(e) {
			return e == null ? Mt(this, tt) : new this.Collection(this, function() {
				return Ft(e, void 0, !1);
			});
		}, Rt.prototype.below = function(e) {
			return e == null ? Mt(this, tt) : new this.Collection(this, function() {
				return Ft(void 0, e, !1, !0);
			});
		}, Rt.prototype.belowOrEqual = function(e) {
			return e == null ? Mt(this, tt) : new this.Collection(this, function() {
				return Ft(void 0, e);
			});
		}, Rt.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + et, !0, !0) : Mt(this, nt);
		}, Rt.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : Pt(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], et);
		}, Rt.prototype.equalsIgnoreCase = function(e) {
			return Pt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, Rt.prototype.anyOfIgnoreCase = function() {
			var e = F.apply(P, arguments);
			return e.length === 0 ? Nt(this) : Pt(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, Rt.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = F.apply(P, arguments);
			return e.length === 0 ? Nt(this) : Pt(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, et);
		}, Rt.prototype.anyOf = function() {
			var e, t, n = this, r = F.apply(P, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return Mt(this, tt);
			}
			return r.length === 0 ? Nt(this) : ((e = new this.Collection(this, function() {
				return Ft(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = e === "next" ? n._ascending : n._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return n(a), !1;
				return i(o, r[t]) === 0 || (n(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, Rt.prototype.notEqual = function(e) {
			return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Rt.prototype.noneOf = function() {
			var e = F.apply(P, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return Mt(this, tt);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Rt.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return Nt(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return Mt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", U.InvalidArgument);
			var c = !t || !1 !== t.includeLowers, l = t && !0 === t.includeUppers, u, d = i;
			function f(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(u = e.reduce(function(e, t) {
					for (var n = 0, i = e.length; n < i; ++n) {
						var a = e[n];
						if (r(t[0], a[1]) < 0 && 0 < r(t[1], a[0])) {
							a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
							break;
						}
					}
					return n === i && e.push(t), e;
				}, [])).sort(f);
			} catch {
				return Mt(this, tt);
			}
			var p = 0, m = l ? function(e) {
				return 0 < i(e, u[p][1]);
			} : function(e) {
				return 0 <= i(e, u[p][1]);
			}, h = c ? function(e) {
				return 0 < a(e, u[p][0]);
			} : function(e) {
				return 0 <= a(e, u[p][0]);
			}, g = m, t = new this.Collection(this, function() {
				return Ft(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return t._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, t._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), t;
		}, Rt.prototype.startsWithAnyOf = function() {
			var e = F.apply(P, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? Nt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + et];
			})) : Mt(this, "startsWithAnyOf() only works with strings");
		};
		var Lt = Rt;
		function Rt() {}
		function zt(e) {
			return Ie(function(t) {
				return Bt(t), e(t.target.error), !1;
			});
		}
		function Bt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Vt = "storagemutated", Ht = "x-storagemutated-1", Ut = vt(null, Vt), Wt = (Gt.prototype._lock = function() {
			return v(!Y.global), ++this._reculock, this._reculock !== 1 || Y.global || (Y.lockOwnerFor = this), this;
		}, Gt.prototype._unlock = function() {
			if (v(!Y.global), --this._reculock == 0) for (Y.global || (Y.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					Xe(e[1], e[0]);
				} catch {}
			}
			return this;
		}, Gt.prototype._locked = function() {
			return this._reculock && Y.lockOwnerFor !== this;
		}, Gt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new U.DatabaseClosed(r);
					case "MissingAPIError": throw new U.MissingAPI(r.message, r);
					default: throw new U.OpenFailed(r);
				}
				if (!this.active) throw new U.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ie(function(n) {
					Bt(n), t._reject(e.error);
				}), e.onabort = Ie(function(n) {
					Bt(n), t.active && t._reject(new U.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = Ie(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Ut.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Gt.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? $e(new U.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new X(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, Y]);
			}) : n ? Ue(function() {
				var e = new X(function(e, n) {
					i._lock();
					var r = t(e, n, i);
					r && r.then && r.then(e, n);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new X(function(e, n) {
				var r = t(e, n, i);
				r && r.then && r.then(e, n);
			}))._lib = !0, r) : $e(new U.TransactionInactive());
		}, Gt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Gt.prototype.waitFor = function(e) {
			var t, n = this._root(), r = X.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-1 / 0).onsuccess = e);
			}()), n._waitingFor);
			return new X(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(Ie(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(Ie(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, Gt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new U.Abort()));
		}, Gt.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new U.NotFound("Table " + e + " not part of transaction");
		}, Gt);
		function Gt() {}
		function Kt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + qt(t),
				type: s
			};
		}
		function qt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Jt(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return t = r(t, n), t && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var r;
		}
		var Yt = function(e) {
			try {
				return e.only([[]]), Yt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Yt = function() {
					return et;
				}, et;
			}
		};
		function Xt(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function Zt(e) {
			return [].slice.call(e);
		}
		var Qt = 0;
		function $t(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function en(e, t, n) {
			function r(e) {
				if (e.type === 3) return null;
				if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
				var n = e.lower, r = e.upper, i = e.lowerOpen, e = e.upperOpen;
				return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!e) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!e);
			}
			function i(e) {
				var t, n, i = e.name;
				return {
					name: i,
					schema: e,
					mutate: function(e) {
						var t = e.trans, n = e.type, a = e.keys, o = e.values, s = e.range;
						return new Promise(function(e, c) {
							e = Ie(e);
							var l = t.objectStore(i), u = l.keyPath == null, d = n === "put" || n === "add";
							if (!d && n !== "delete" && n !== "deleteRange") throw Error("Invalid operation type: " + n);
							var f, p = (a || o || { length: 1 }).length;
							if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
							if (p === 0) return e({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});
							function m(e) {
								++_, Bt(e);
							}
							var h = [], g = [], _ = 0;
							if (n === "deleteRange") {
								if (s.type === 4) return e({
									numFailures: _,
									failures: g,
									results: [],
									lastResult: void 0
								});
								s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
							} else {
								var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
								if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[n](v[b], y[b]) : l[n](v[b])), f.onerror = m;
								else for (b = 0; b < p; ++b) h.push(f = l[n](v[b])), f.onerror = m;
							}
							function x(t) {
								t = t.target.result, h.forEach(function(e, t) {
									return e.error != null && (g[t] = e.error);
								}), e({
									numFailures: _,
									failures: g,
									results: n === "delete" ? a : h.map(function(e) {
										return e.result;
									}),
									lastResult: t
								});
							}
							f.onerror = function(e) {
								m(e), x(e);
							}, f.onsuccess = x;
						});
					},
					getMany: function(e) {
						var t = e.trans, n = e.keys;
						return new Promise(function(e, r) {
							e = Ie(e);
							for (var a, o = t.objectStore(i), s = n.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = zt(r), p = 0; p < s; ++p) n[p] != null && ((a = o.get(n[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, n = e.key;
						return new Promise(function(e, r) {
							e = Ie(e);
							var a = t.objectStore(i).get(n);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = zt(r);
						});
					},
					query: (t = c, n = l, function(e) {
						return new Promise(function(a, o) {
							a = Ie(a);
							var s, c, l, u, d = e.trans, f = e.values, p = e.limit, m = e.query, h = (h = e.direction) ?? "next", g = p === 1 / 0 ? void 0 : p, _ = m.index, m = m.range, d = d.objectStore(i), d = _.isPrimaryKey ? d : d.index(_.name), _ = r(m);
							if (p === 0) return a({ result: [] });
							n ? (m = {
								query: _,
								count: g,
								direction: h
							}, (s = f ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = zt(o)) : t && h === "next" ? ((s = f ? d.getAll(_, g) : d.getAllKeys(_, g)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = zt(o)) : (c = 0, l = !f && "openKeyCursor" in d ? d.openKeyCursor(_, h) : d.openCursor(_, h), u = [], l.onsuccess = function() {
								var e = l.result;
								return !e || (u.push(f ? e.value : e.primaryKey), ++c === p) ? a({ result: u }) : void e.continue();
							}, l.onerror = zt(o));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, n = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = Ie(e);
							var l = a.index, u = a.range, d = t.objectStore(i), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !n && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = zt(c), f.onsuccess = Ie(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++Qt, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = Ie(c), s.next = function() {
									var e = this, t = 1;
									return this.start(function() {
										return t-- ? e.continue() : e.stop();
									}).then(function() {
										return e;
									});
								}, s.start = function(e) {
									function t() {
										if (f.result) try {
											e();
										} catch (e) {
											s.fail(e);
										}
										else s.done = !0, s.start = function() {
											throw Error("Cursor behind last entry");
										}, s.stop();
									}
									var n = new Promise(function(e, t) {
										e = Ie(e), f.onerror = zt(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = Ie(function(e) {
										f.onsuccess = t, t();
									}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
								}, e(s)) : e(null);
							}, c);
						});
					},
					count: function(e) {
						var t = e.query, n = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = n.objectStore(i), s = a.isPrimaryKey ? s : s.index(a.name), c = r(o), c = c ? s.count(c) : s.count();
							c.onsuccess = Ie(function(t) {
								return e(t.target.result);
							}), c.onerror = zt(t);
						});
					}
				};
			}
			o = n, s = Zt((n = e).objectStoreNames), u = 0 < s.length ? o.objectStore(s[0]) : {};
			var o, n = {
				schema: {
					name: n.name,
					tables: s.map(function(e) {
						return o.objectStore(e);
					}).map(function(e) {
						var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, r = {
							name: e.name,
							primaryKey: {
								name: null,
								isPrimaryKey: !0,
								outbound: t == null,
								compound: r,
								keyPath: t,
								autoIncrement: n,
								unique: !0,
								extractKey: Xt(t)
							},
							indexes: Zt(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Xt(e)
								};
								return i[$t(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[$t(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[$t(t)] = r.primaryKey), r;
					})
				},
				hasGetAll: 0 < s.length && "getAll" in u && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
				hasIdb3Features: "getAllRecords" in u
			}, s = n.schema, c = n.hasGetAll, l = n.hasIdb3Features, u = s.tables.map(i), d = {};
			return u.forEach(function(e) {
				return d[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (d[e]) return d[e];
					throw Error(`Table '${e}' not found`);
				},
				MIN_KEY: -1 / 0,
				MAX_KEY: Yt(t),
				schema: s
			};
		}
		function tn(e, n, r, i) {
			return r = r.IDBKeyRange, n = en(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function nn(e, t) {
			var n = t.db, n = tn(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function rn(e, t, n, r) {
			n.forEach(function(n) {
				var i = r[n];
				t.forEach(function(t) {
					var r = function e(t, n) {
						return m(t, n) || (t = s(t)) && e(t, n);
					}(t, n);
					(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							d(this, n, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[n] = new e.Table(n, i));
				});
			});
		}
		function an(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function on(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function sn(e, t, n, r) {
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Jt("$meta", hn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = Y.transless || Y;
			Ue(function() {
				if (Y.trans = o, Y.transless = c, t !== 0) return nn(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : X.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = pn(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? X.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (mn(r, l, c), mn(r, d, c), u = r._dbSchema = d, ln(l, d)), p = (f.add.forEach(function(e) {
								un(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new U.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return fn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), fn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return nn(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), an(r, [r.Transaction.prototype]), rn(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = I(p)) && We(), d = X.follow(function() {
								var e;
								(o = p(s)) && n && (e = Ge.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? X.resolve(o) : d.then(function() {
								return o;
							});
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), an(r, [r.Transaction.prototype]), rn(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? X.resolve(l.shift()(s.idbtrans)).then(e) : X.resolve();
					}().then(function() {
						dn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					un(n, e, a[e].primKey, a[e].indexes);
				}), nn(e, n), X.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function cn(e, t) {
			dn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = pn(0, e.idbdb, t);
			mn(e, e._dbSchema, t);
			for (var r = 0, i = ln(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						ce && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), fn(n, t);
					});
				})(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function ln(e, t) {
			var n, r = {
				del: [],
				add: [],
				change: []
			};
			for (n in e) t[n] || r.del.push(n);
			for (n in t) {
				var i = e[n], a = t[n];
				if (i) {
					var o = {
						name: n,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, r.change.push(o);
					else {
						var s = i.idxByName, c = a.idxByName, l = void 0;
						for (l in s) c[l] || o.del.push(l);
						for (l in c) {
							var u = s[l], d = c[l];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
					}
				} else r.add.push([n, a]);
			}
			return r;
		}
		function un(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			r.forEach(function(e) {
				return fn(i, e);
			});
		}
		function dn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (ce && console.debug("Dexie: Creating missing table", n), un(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function fn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function pn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Kt(qt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Kt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Jt(e, i, a);
			}), r;
		}
		function mn(e, t, n) {
			for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
				var o = i[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l, u = s.indexNames[c], d = s.index(u).keyPath, d = typeof d == "string" ? d : "[" + g(d).join("+") + "]";
					t[o] && (l = t[o].idxByName[d]) && (l.name = u, delete t[o].idxByName[d], t[o].idxByName[u] = l);
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function hn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return Kt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		_n.prototype._createTableSchema = Jt, _n.prototype._parseIndexSyntax = hn, _n.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new U.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new U.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new U.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new U.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, _n.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, an(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), rn(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, _n.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = se(this._cfg.contentUpgrade || W, e), this;
		};
		var gn = _n;
		function _n() {}
		var vn = (() => {
			var e, t, n;
			return typeof FinalizationRegistry < "u" && typeof WeakRef < "u" ? (e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(t) {
				e.delete(t);
			}), {
				toArray: function() {
					return Array.from(e).map(function(e) {
						return e.deref();
					}).filter(function(e) {
						return e !== void 0;
					});
				},
				add: function(n) {
					var r = new WeakRef(n._novip);
					e.add(r), t.register(n._novip, r, r), e.size > n._options.maxConnections && (r = e.values().next().value, e.delete(r), t.unregister(r));
				},
				remove: function(n) {
					if (n) for (var r = e.values(), i = r.next(); !i.done;) {
						var a = i.value;
						if (a.deref() === n._novip) return e.delete(a), void t.unregister(a);
						i = r.next();
					}
				}
			}) : (n = [], {
				toArray: function() {
					return n;
				},
				add: function(e) {
					n.push(e._novip);
				},
				remove: function(e) {
					e && (e = n.indexOf(e._novip)) !== -1 && n.splice(e, 1);
				}
			});
		})();
		function yn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new ir(rt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function bn(e) {
			return e && typeof e.databases == "function";
		}
		function xn(e) {
			return Ue(function() {
				return Y.letThrough = !0, e();
			});
		}
		function Sn(e) {
			return !("from" in e);
		}
		var Cn = function(e, t) {
			var n;
			if (!this) return n = new Cn(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function wn(e, t, n) {
			var r = ut(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Sn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (ut(n, e.from) < 0) return r ? wn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				if (0 < ut(t, e.to)) return i ? wn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				ut(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < ut(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && Tn(e, r), i && t && Tn(e, i);
			}
		}
		function Tn(e, t) {
			Sn(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				wn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function En(e, t) {
			var n = Dn(t), r = n.next();
			if (!r.done) for (var i = r.value, a = Dn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (ut(s.from, i.to) <= 0 && 0 <= ut(s.to, i.from)) return !0;
				ut(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function Dn(e) {
			var t = Sn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && ut(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || ut(e, t.n.to) <= 0) return {
						value: t.n,
						done: !1
					};
					case 2: if (t.n.r) {
						t.s = 3, t = {
							up: t,
							n: t.n.r,
							s: 0
						};
						continue;
					}
					case 3: t = t.up;
				}
				return { done: !0 };
			} };
		}
		function On(e) {
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = kn(r)), e.d = kn(e);
		}
		function kn(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function An(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? Tn(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || E.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function jn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && En(t[n], e[n]);
			});
		}
		u(Cn.prototype, ((L = {
			add: function(e) {
				return Tn(this, e), this;
			},
			addKey: function(e) {
				return wn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return wn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = Dn(this).next(e).value;
				return t && ut(t.from, e) <= 0 && 0 <= ut(t.to, e);
			}
		})[j] = function() {
			return Dn(this);
		}, L));
		var Mn = {}, Nn = {}, Pn = !1;
		function Fn(e) {
			An(Nn, e), Pn || (Pn = !0, setTimeout(function() {
				Pn = !1, In(Nn, !(Nn = {}));
			}, 0));
		}
		function In(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(Mn); r < i.length; r++) Ln(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = Mn[`idb://${o}/${a}`]) && Ln(s, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Ln(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					jn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
						return n.add(e);
					}) : r && l.push(f);
				}
				r && i.push([c, l]);
			}
			if (r) for (var p = 0, m = i; p < m.length; p++) {
				var h = m[p], c = h[0], l = h[1];
				e.queries.query[c] = l;
			}
		}
		function Rn(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? $e(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new U.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new X(function(r, l) {
					if (s(), !n) throw new U.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new U.MissingAPI();
					p.onerror = zt(l), p.onblocked = Ie(e._fireOnBlocked), p.onupgradeneeded = Ie(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Bt, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = Ie(function() {
							l(new U.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = zt(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && cn(e, d), sn(e, i / 10, d, l));
					}, l), p.onsuccess = Ie(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = pn(0, _, m), l._storeNames = g(_.objectStoreNames, 0), rn(l, [l._allTables], i(m), m);
							else if (mn(e, e._dbSchema, b), s = b, ((s = ln(pn(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							nn(e, b);
						} catch {}
						vn.add(e), v.onversionchange = Ie(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = Ie(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, bn(_ = y.indexedDB) || h === rt || yn(_, y.IDBKeyRange).put({ name: h }).catch(W)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return X.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return X.race([r, (typeof navigator > "u" ? X.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], X.resolve(xn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(se, W), t.onReadyBeingFired = [], X.resolve(xn(function() {
						return r(e.vip);
					})).then(n);
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					d && d.abort();
				} catch {}
				return r === t.openCanceller && e._close(), $e(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Cn(-1 / 0, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Cn(-1 / 0, [[[]]]);
				}), Ut(Vt).fire(t), In(t, !0)), e;
			});
		}
		function zn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = i(t), r = i(function(t) {
				return e.throw(t);
			});
			function i(e) {
				return function(t) {
					var t = e(t), i = t.value;
					return t.done ? i : i && typeof i.then == "function" ? i.then(n, r) : a(i) ? Promise.all(i).then(n, r) : n(i);
				};
			}
			return i(t)();
		}
		function Bn(e, t, n) {
			for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		var Vn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var r = e.table(n), n = r.schema, i = {}, a = [];
					function o(e, n, r) {
						var s = $t(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Xt(e),
							unique: !u && r.unique
						});
						return c.push(s), s.isPrimaryKey || a.push(s), 1 < l && o(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), s;
					}
					var s = o(n.primaryKey.keyPath, 0, n.primaryKey);
					i[":id"] = [s];
					for (var c = 0, l = n.indexes; c < l.length; c++) {
						var u = l[c];
						o(u.keyPath, 0, u);
					}
					function d(n) {
						var r, i = n.query.index;
						return i.isVirtual ? t(t({}, n), { query: {
							index: i.lowLevelIndex,
							range: (r = n.query.range, i = i.keyTail, {
								type: r.type === 1 ? 2 : r.type,
								lower: Bn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Bn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, n), {
							primaryKey: s,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = i[$t(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, i = n.keyTail, a = n.keyLength;
							return n.isVirtual ? r.openCursor(d(t)).then(function(e) {
								return e && o(e);
							}) : r.openCursor(t);
							function o(n) {
								return Object.create(n, {
									continue: { value: function(r) {
										r == null ? t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Bn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Bn(t, e.MAX_KEY, i), r);
									} },
									primaryKey: { get: function() {
										return n.primaryKey;
									} },
									key: { get: function() {
										var e = n.key;
										return a === 1 ? e[0] : e.slice(0, a);
									} },
									value: { get: function() {
										return n.value;
									} }
								});
							}
						}
					});
				} });
			}
		};
		function Hn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = A(a)) === A(o) ? s === "Object" ? Hn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
			}), i(t).forEach(function(i) {
				l(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Un(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Wn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), a = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = Y.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === W) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === W && d.fire === W) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === W) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === W) break;
								return o._promise("readwrite", function() {
									return function e(n, r, o) {
										return i.query({
											trans: n,
											values: !1,
											query: {
												index: a,
												range: r
											},
											limit: o
										}).then(function(i) {
											var a = i.result;
											return f({
												type: "delete",
												keys: a,
												trans: n
											}).then(function(i) {
												return 0 < i.numFailures ? Promise.reject(i.failures[0]) : a.length < o ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, r), {
													lower: a[a.length - 1],
													lowerOpen: !0
												}), o);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return i.mutate(e);
						function f(e) {
							var r, o, s, f = Y.trans, p = e.keys || Un(a, e);
							if (p) return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values, !0)), e.keys && (e.keys = n([], e.keys, !0)), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
								trans: o.trans,
								keys: s,
								cache: "immutable"
							})).then(function(t) {
								var n = p.map(function(n, r) {
									var i, o, s, p = t[r], m = {
										onerror: null,
										onsuccess: null
									};
									return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Hn(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
										l(s, e) ? s[e] = o[e] : x(s, e, o[e]);
									}))), m;
								});
								return i.mutate(e).then(function(r) {
									for (var i = r.failures, a = r.results, o = r.numFailures, r = r.lastResult, s = 0; s < p.length; ++s) {
										var c = (a || p)[s], l = n[s];
										c == null ? l.onerror && l.onerror(i[s]) : l.onsuccess && l.onsuccess(e.type === "put" && t[s] ? e.values[s] : c);
									}
									return {
										failures: i,
										results: a,
										numFailures: o,
										lastResult: r
									};
								}).catch(function(e) {
									return n.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
							throw Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Gn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) ut(t.keys[i], e[a]) === 0 && (r.push(n ? O(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Kn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var r = e.table(n);
					return t(t({}, r), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = Gn(e.keys, e.trans._cache, e.cache === "clone")) ? X.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? O(t) : t
								}, t;
							}) : r.getMany(e);
						},
						mutate: function(e) {
							return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function qn(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function Jn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Yn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, r = new Cn(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (Y.subscr && n !== "readonly") throw new U.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${Y.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new Cn((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new Cn());
							}
							var s, d, f, p = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Un(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], y = y[1], x = t.trans._cache;
							return a(b) ? (g.addKeys(b), (v = v === "delete" || b.length === y.length ? Gn(b, x) : null) || _.addKeys(b), (v || y) && (s = i, d = v, f = y, l.indexes.forEach(function(e) {
								var t = s(e.name || "");
								function n(t) {
									return t == null ? null : e.extractKey(t);
								}
								function r(n) {
									e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || f).forEach(function(e, t) {
									var i = d && n(d[t]), t = f && n(f[t]);
									ut(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
								});
							}))) : b ? (y = {
								from: (x = b.lower) ?? e.MIN_KEY,
								to: (v = b.upper) ?? e.MAX_KEY
							}, _.add(y), g.add(y)) : (g.add(r), _.add(r), l.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), c.mutate(t).then(function(e) {
								return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), m && m.forEach(function(n) {
									for (var r = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
									i(n.name).addKeys(r);
								})), p.mutatedParts = An(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new Cn(e.key)];
							},
							getMany: function(e) {
								return [u, new Cn().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = Y.subscr, s = !!a, l = qn(Y, c) && Jn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new Cn());
									}, d = a(""), m = a(":dels"), s = g[e](i), h = s[0], s = s[1];
									if ((e === "query" && h.isPrimaryKey && !i.values ? m : a(h.name || "")).add(s), !h.isPrimaryKey) {
										if (e !== "count") return u = e === "query" && p && i.values && c.query(t(t({}, i), { values: !1 })), c[e].apply(this, arguments).then(function(t) {
											if (e === "query") {
												if (p && i.values) return u.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = i.values ? t.result.map(f) : t.result;
												(i.values ? d : m).addKeys(n);
											} else {
												var r, a;
												if (e === "openCursor") return a = i.values, (r = t) && Object.create(r, {
													key: { get: function() {
														return m.addKey(r.primaryKey), r.key;
													} },
													primaryKey: { get: function() {
														var e = r.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return a && d.addKey(r.primaryKey), r.value;
													} }
												});
											}
											return t;
										});
										m.add(r);
									}
								}
								return c[e].apply(this, arguments);
							};
						}), h;
					}
				});
			}
		};
		function Xn(e, n, r) {
			var i;
			return r.numFailures === 0 ? n : n.type === "deleteRange" || (i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, r.numFailures === i) ? null : (i = t({}, n), a(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && a(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Zn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < ut(n, r.lower) : 0 <= ut(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? ut(n, r.upper) < 0 : ut(n, r.upper) <= 0));
			var n, r;
		}
		function Qn(e, t, n, r, i, o) {
			var s, c, l, u, d, f, p;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new Cn(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Zn(e, l);
					}) : Zn(f, l)) && (o.addKey(m), i.push(p));
				}
				switch (n.type) {
					case "add":
						var h = new Cn().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e), r = e.concat(t.values ? i.filter(function(e) {
							return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var g = new Cn().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new Cn().addKeys(n.keys);
						r = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var v = n.range;
						r = e.filter(function(e) {
							return !Zn(u(e), v);
						});
				}
				return r;
			}, e)) === e) ? e : (p = function(e, t) {
				return ut(f(e), f(t)) || ut(u(e), u(t));
			}, r.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return p(t, e);
			} : p), t.limit && t.limit < 1 / 0 && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function $n(e, t) {
			return ut(e.lower, t.lower) === 0 && ut(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function er(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = ut(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = ut(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return e;
			})(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function tr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && N(i, r);
				}, 3e3));
			});
		}
		var nr = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, r, i) {
						var a, o, s = e.transaction(t, r, i);
						return r === "readwrite" && (i = (a = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = Mn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) jn((x = _[g]).obsSet, s.mutatedParts) && (N(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, w = (b = y[v]).slice(); C < w.length; C++) (x = w[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Qn(x.res, x.req, p, f, x, S), x.dirty ? (N(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = X.resolve({ result: S }))) : (x.dirty && N(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})));
											}
										}
									}
									o.forEach(function(e) {
										return e();
									});
								}
							};
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = Y.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = Mn[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Un(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Fn(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (N(o.optimisticOps, e), (t = Xn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Fn(e.mutatedParts);
								}), s.catch(function() {
									N(o.optimisticOps, e), e.mutatedParts && Fn(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Xn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? O(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Fn(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return qn(Y, i) && Jn("query", e) ? (t = (o = Y.trans)?.db._options.cache === "immutable", a = (o = Y).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = Mn[`idb://${e}/${t}`];
									if (!i) return [];
									if (!(e = i.queries[n])) return [
										null,
										!1,
										i,
										null
									];
									var a = e[(r.query ? r.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										i,
										null
									];
									switch (n) {
										case "query":
											var o = (s = r.direction) ?? "next", s = a.find(function(e) {
												return e.req.limit === r.limit && e.req.values === r.values && (e.req.direction ?? "next") === o && $n(e.req.query.range, r.query.range);
											});
											return s ? [
												s,
												!0,
												i,
												a
											] : [
												a.find(function(e) {
													return ("limit" in e.req ? e.req.limit : 1 / 0) >= r.limit && (e.req.direction ?? "next") === o && (!r.values || e.req.values) && er(e.req.query.range, r.query.range);
												}),
												!1,
												i,
												a
											];
										case "count": return s = a.find(function(e) {
											return $n(e.req.query.range, r.query.range);
										}), [
											s,
											!!s,
											i,
											a
										];
									}
								})(n, r, "query", e), u = l[0], s = l[2], c = l[3], u && l[1] ? u.obsSet = e.obsSet : (l = i.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									}
									return e;
								}).catch(function(e) {
									return c && u && N(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= Mn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), tr(u, c, a, o), u.promise.then(function(n) {
									return n = Qn(n.result, e, s?.optimisticOps, i, u, t), { result: t ? n : O(n) };
								})) : i.query(e);
							}
						});
					}
				});
			}
		};
		function rr(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		ar.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new U.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new U.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(on), n.stores({}), this._state.autoSchema = !1), n;
		}, ar.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || Y.letThrough || this._vip) ? e() : new X(function(e, n) {
				if (t._state.openComplete) return n(new U.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new U.DatabaseClosed());
					t.open().catch(W);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, ar.prototype.use = function(e) {
			var t = e.stack, n = e.create, r = e.level, e = e.name, i = (e && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return i.push({
				stack: t,
				create: n,
				level: r ?? 10,
				name: e
			}), i.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, ar.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, ar.prototype.open = function() {
			var e = this;
			return Xe(xe, function() {
				return Rn(e);
			});
		}, ar.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (vn.remove(this), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new X(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new X(function(t, n) {
				e.cancelOpen = n;
			}));
		}, ar.prototype.close = function(e) {
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new U.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new U.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, ar.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new X(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = Ie(function() {
						var e = t._deps, n = t.name, r;
						bn(r = e.indexedDB) || n === rt || yn(r, e.IDBKeyRange).delete(n).catch(W), i();
					}), n.onerror = zt(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new U.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, ar.prototype.backendDB = function() {
			return this.idbdb;
		}, ar.prototype.isOpen = function() {
			return this.idbdb !== null;
		}, ar.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && e.name === "DatabaseClosed";
		}, ar.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null;
		}, ar.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty(ar.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), ar.prototype.transaction = function() {
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new U.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					w(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, ar.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = Y.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === it) r = it;
				else {
					if (e != "rw" && e != at) throw new U.InvalidArgument("Invalid transaction mode: " + e);
					r = at;
				}
				if (o) {
					if (o.mode === it && r === at) {
						if (!s) throw new U.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new U.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : $e(e);
			}
			var c = function e(t, n, r, i, a) {
				return X.resolve().then(function() {
					var o = Y.transless || Y, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === H.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : $e(i);
					}
					var c, l = I(a), o = (l && We(), X.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = Ge.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = zn(c)));
					}, o));
					return (c && typeof c.then == "function" ? X.resolve(c).then(function(e) {
						return s.active ? e : $e(new U.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), $e(e);
					});
				});
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : Y.trans ? Xe(Y.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, ar.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new U.InvalidTable(`Table ${e} does not exist`);
		};
		var ir = ar;
		function ar(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, ar.dependencies), l = (this._options = n = t({
				addons: ar.addons,
				autoOpen: !0,
				indexedDB: l.indexedDB,
				IDBKeyRange: l.IDBKeyRange,
				cache: "cloned",
				maxConnections: 1e3
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, n.addons), u = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: W,
				dbReadyPromise: null,
				cancelOpen: W,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new X(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new X(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = vt(this, "populate", "blocked", "versionchange", "close", { ready: [se, W] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					ar.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || X.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, yt(Dt.prototype, function(e, t) {
				this.db = r;
				var n = st, i = null;
				if (t) try {
					n = t();
				} catch (e) {
					i = e;
				}
				var t = e._ctx, e = t.table, a = e.hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
					range: n,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: 1 / 0,
					error: i,
					or: t.or,
					valueMapper: a === G ? null : a
				};
			})), this.Table = (i = this, yt(gt.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : vt(null, {
					creating: [K, W],
					reading: [re, G],
					updating: [oe, W],
					deleting: [ae, W]
				});
			})), this.Transaction = (a = this, yt(Wt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = vt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new X(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), $e(e);
				});
			})), this.Version = (o = this, yt(gn.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, yt(Lt.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = ut, this._descending = function(e, t) {
					return ut(t, e);
				}, this._max = function(e, t) {
					return 0 < ut(e, t) ? e : t;
				}, this._min = function(e, t) {
					return ut(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new U.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Yt(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), vn.toArray().filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Kn), this.use(nr), this.use(Yn), this.use(Vn), this.use(Wn), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return rr(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof gt ? rr(r, d) : t === "tables" ? r.map(function(e) {
					return rr(e, d);
				}) : t === "_createTransaction" ? function() {
					return rr(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var or, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", sr = (cr.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, cr.prototype[fe] = function() {
			return this;
		}, cr);
		function cr(e) {
			this._subscribe = e;
		}
		try {
			or = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			or = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function lr(e) {
			var t, n = !1, r = new sr(function(r) {
				var i = I(e), a, o = !1, s = {}, c = {}, l = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), u && Ut.storagemutated.unsubscribe(p));
					}
				}, u = (r.start && r.start(l), !1), d = function() {
					return Qe(m);
				};
				function f() {
					return jn(c, s);
				}
				var p = function(e) {
					An(s, e), f() && d();
				}, m = function() {
					var l, m, h;
					!o && or.indexedDB && (s = {}, l = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = Me();
						try {
							i && We();
							var r = Ue(e, t);
							return r = i ? r.finally(Ge) : r;
						} finally {
							n && Ne();
						}
					})(m = {
						subscr: l,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u ||= (Ut.storagemutated.subscribe(p), !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (f() || (c = l, f()) ? d() : (s = {}, Qe(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || Qe(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(d, 0), l;
			});
			return r.hasValue = function() {
				return n;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var ur = ir;
		function dr(e) {
			var t = pr;
			try {
				pr = !0, Ut.storagemutated.fire(e), In(e, !0);
			} finally {
				pr = t;
			}
		}
		u(ur, t(t({}, T), {
			delete: function(e) {
				return new ur(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new ur(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = ur.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (bn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== rt;
						});
					}) : yn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return $e(new U.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return Y.trans ? Xe(Y.transless || xe, e) : e();
			},
			vip: xn,
			async: function(e) {
				return function() {
					try {
						var t = zn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : X.resolve(t);
					} catch (e) {
						return $e(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = zn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : X.resolve(r);
				} catch (e) {
					return $e(e);
				}
			},
			currentTransaction: { get: function() {
				return Y.trans || null;
			} },
			waitFor: function(e, t) {
				return e = X.resolve(typeof e == "function" ? ur.ignoreTransaction(e) : e).timeout(t || 6e4), Y.trans ? Y.trans.waitFor(e) : e;
			},
			Promise: X,
			debug: {
				get: function() {
					return ce;
				},
				set: function(e) {
					le(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: vt,
			on: Ut,
			liveQuery: lr,
			extendObservabilitySet: An,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: O,
			getObjectDiff: Hn,
			cmp: ut,
			asap: y,
			minKey: -1 / 0,
			addons: [],
			connections: { get: vn.toArray },
			errnames: H,
			dependencies: or,
			cache: Mn,
			semVer: "4.4.4",
			version: "4.4.4".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), ur.maxKey = Yt(ur.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ut(Vt, function(e) {
			pr ||= (e = new CustomEvent(Ht, { detail: e }), pr = !0, dispatchEvent(e), !1);
		}), addEventListener(Ht, function(e) {
			e = e.detail, pr || dr(e);
		}));
		var fr, pr = !1, mr = function() {};
		return typeof BroadcastChannel < "u" && ((mr = function() {
			(fr = new BroadcastChannel(Ht)).onmessage = function(e) {
				return e.data && dr(e.data);
			};
		})(), typeof fr.unref == "function" && fr.unref(), Ut(Vt, function(e) {
			pr || fr.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!ir.disableBfCache && e.persisted) {
				ce && console.debug("Dexie: handling persisted pagehide"), fr?.close();
				for (var t = 0, n = vn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!ir.disableBfCache && e.persisted && (ce && console.debug("Dexie: handling persisted pageshow"), mr(), dr({ all: new Cn(-1 / 0, [[]]) }));
		})), X.rejectionMapper = function(e, t) {
			return !e || e instanceof R || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ne[e.name] ? e : (t = new ne[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, le(ce), t(ir, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: ir,
			Entity: lt,
			PropModification: pt,
			RangeSet: Cn,
			add: function(e) {
				return new pt({ add: e });
			},
			cmp: ut,
			default: ir,
			liveQuery: lr,
			mergeRanges: Tn,
			rangesOverlap: En,
			remove: function(e) {
				return new pt({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new pt({ replacePrefix: [e, t] });
			}
		}), { default: ir }), ir;
	});
})))(), 1), Sl = Symbol.for("Dexie"), Cl = globalThis[Sl] || (globalThis[Sl] = xl.default);
if (xl.default.semVer !== Cl.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${xl.default.semVer} and ${Cl.semVer}`);
var { liveQuery: wl, mergeRanges: Tl, rangesOverlap: El, RangeSet: Dl, cmp: Ol, Entity: kl, PropModification: Al, replacePrefix: jl, add: Ml, remove: Nl, DexieYProvider: Pl } = Cl, Fl = new Cl("survey-builder-kit");
Fl.version(1).stores({
	flowLayouts: "surveyId",
	builderDrafts: "instanceId, surveyId, savedAt"
});
//#endregion
//#region src/storage/flowLayoutRepository.ts
var Il = {
	get(e) {
		return Fl.flowLayouts.get(e);
	},
	savePosition(e, t, n) {
		return Fl.transaction("rw", Fl.flowLayouts, async () => {
			let r = {
				...(await Fl.flowLayouts.get(e))?.positions ?? {},
				[t]: n
			};
			return Fl.flowLayouts.put({
				surveyId: e,
				positions: r
			});
		});
	},
	removePosition(e, t) {
		return Fl.transaction("rw", Fl.flowLayouts, async () => {
			let n = await Fl.flowLayouts.get(e);
			if (!n) return;
			let { [t]: r, ...i } = n.positions;
			return Fl.flowLayouts.put({
				surveyId: e,
				positions: i
			});
		});
	}
};
//#endregion
//#region src/builder/store/flowLayoutStore.ts
function Ll() {
	let e = 0;
	return xt((t, n) => ({
		surveyId: null,
		overrides: {},
		loadForSurvey: async (n) => {
			let r = ++e, i = await Il.get(n);
			r === e && t({
				surveyId: n,
				overrides: i?.positions ?? {}
			});
		},
		setOverride: (e, r) => {
			let { surveyId: i } = n();
			t((t) => ({ overrides: {
				...t.overrides,
				[e]: r
			} })), i && Il.savePosition(i, e, r);
		},
		clearOverride: (e) => {
			let { surveyId: r } = n();
			t((t) => {
				let { [e]: n, ...r } = t.overrides;
				return { overrides: r };
			}), r && Il.removePosition(r, e);
		}
	}));
}
var { Context: Rl, useBoundStore: zl, useStoreApi: Bl } = cl("useFlowLayoutStore");
//#endregion
//#region src/builder/store/snackbarStore.ts
function Vl() {
	return xt((e) => ({
		message: null,
		severity: "info",
		showError: (t) => e({
			message: t,
			severity: "error"
		}),
		showWarning: (t) => e({
			message: t,
			severity: "warning"
		}),
		showInfo: (t) => e({
			message: t,
			severity: "info"
		}),
		clear: () => e({ message: null })
	}));
}
var { Context: Hl, useBoundStore: Ul, useStoreApi: Wl } = cl("useSnackbarStore");
//#endregion
//#region src/builder/store/BuilderStoreProvider.tsx
function Gl({ initialSurvey: e, children: t }) {
	let n = d(null);
	if (!n.current) {
		let t = Ll(), r = Vl();
		n.current = {
			builder: vl({
				flowLayoutStore: t,
				snackbarStore: r
			}, e ?? pl()),
			flowLayout: t,
			snackbar: r
		};
	}
	let { builder: r, flowLayout: i, snackbar: a } = n.current;
	return /* @__PURE__ */ x(Hl.Provider, {
		value: a,
		children: /* @__PURE__ */ x(Rl.Provider, {
			value: i,
			children: /* @__PURE__ */ x(yl.Provider, {
				value: r,
				children: t
			})
		})
	});
}
//#endregion
//#region src/storage/builderDraftRepository.ts
var Kl = {
	get(e) {
		return Fl.builderDrafts.get(e).then((e) => e?.survey);
	},
	save(e, t) {
		return Fl.builderDrafts.put({
			instanceId: e,
			surveyId: t.id,
			survey: t,
			savedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	},
	remove(e) {
		return Fl.builderDrafts.delete(e);
	}
};
//#endregion
//#region src/builder/useDraftAutosave.ts
function ql(e) {
	let [t, n] = f("saved"), r = d(null), i = d(!1), a = d(null);
	return a.current === null && (a.current = Xc()), s(() => {
		if (!i.current) {
			i.current = !0;
			return;
		}
		return n("unsaved"), r.current && clearTimeout(r.current), r.current = setTimeout(async () => {
			n("saving");
			try {
				await Kl.save(a.current, e), n("saved");
			} catch {
				n("error");
			}
		}, 500), () => {
			r.current && clearTimeout(r.current);
		};
	}, [e]), t;
}
//#endregion
//#region src/storage/fileIO.ts
function Jl(e, t) {
	let n = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e, i.click(), URL.revokeObjectURL(r);
}
//#endregion
//#region src/domain/conditionEvaluator.ts
function Yl(e, t) {
	let n = t.split("/").pop();
	return n ? e[n] : void 0;
}
function Xl(e, t) {
	let n = Yl(t, e.fieldPath);
	switch (e.operator) {
		case "eq": return n === e.value;
		case "neq": return n !== e.value;
		case "contains": return Array.isArray(n) || typeof n == "string" && typeof e.value == "string" ? n.includes(e.value) : !1;
		case "gt": return typeof n == "number" && typeof e.value == "number" && n > e.value;
		case "gte": return typeof n == "number" && typeof e.value == "number" && n >= e.value;
		case "lt": return typeof n == "number" && typeof e.value == "number" && n < e.value;
		case "lte": return typeof n == "number" && typeof e.value == "number" && n <= e.value;
		case "isEmpty": return n == null || n === "" || Array.isArray(n) && n.length === 0;
		case "isNotEmpty": return !(n == null || n === "" || Array.isArray(n) && n.length === 0);
		default: return !1;
	}
}
function Zl(e, t) {
	if (e.conditions.length === 0) return !0;
	let n = e.conditions.map((e) => St(e) ? Zl(e, t) : Xl(e, t));
	return e.logic === "AND" ? n.every(Boolean) : n.some(Boolean);
}
//#endregion
//#region src/domain/branchingEngine.ts
function Ql(e, t) {
	for (let n of e.branch) if (n.action !== "block" && Zl(n.when, t)) return n.goToPageId;
	return e.defaultNextPageId;
}
function $l(e, t) {
	return e.branch.some((e) => e.action === "block" && Zl(e.when, t));
}
//#endregion
//#region src/runtime/components/runner/controls/ShortTextControl.tsx
function eu({ value: e, onChange: t, onAdvance: n, autoFocus: r }) {
	return /* @__PURE__ */ x(q, {
		fullWidth: !0,
		autoFocus: r,
		placeholder: "Type your answer here...",
		value: typeof e == "string" ? e : "",
		onChange: (e) => t(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && (e.preventDefault(), n());
		},
		slotProps: { htmlInput: { style: {
			fontSize: 18,
			padding: "14px 16px"
		} } }
	});
}
//#endregion
//#region src/runtime/components/runner/controls/LongTextControl.tsx
function tu({ value: e, onChange: t, onAdvance: n, autoFocus: r }) {
	return /* @__PURE__ */ x(q, {
		fullWidth: !0,
		multiline: !0,
		minRows: 3,
		maxRows: 8,
		autoFocus: r,
		placeholder: "Type your answer here...",
		value: typeof e == "string" ? e : "",
		onChange: (e) => t(e.target.value),
		onKeyDown: (e) => {
			e.key === "Enter" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), n());
		},
		slotProps: { htmlInput: { style: { fontSize: 18 } } }
	});
}
//#endregion
//#region src/runtime/components/runner/controls/NumberControl.tsx
var nu = /^-?\d*\.?\d*$/;
function ru(e) {
	return e === "" || e === "-" || e === "." || e === "-." ? void 0 : Number(e);
}
function iu({ value: e, onChange: t, onAdvance: n, autoFocus: r }) {
	let [i, a] = f(() => typeof e == "number" ? String(e) : ""), o = d(typeof e == "number" ? e : void 0);
	return s(() => {
		let t = typeof e == "number" ? e : void 0;
		t !== o.current && (o.current = t, a(t === void 0 ? "" : String(t)));
	}, [e]), /* @__PURE__ */ x(q, {
		fullWidth: !0,
		type: "text",
		autoFocus: r,
		placeholder: "0",
		value: i,
		onChange: (e) => {
			let n = e.target.value;
			if (!nu.test(n)) return;
			a(n);
			let r = ru(n);
			o.current = r, t(r);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && (e.preventDefault(), n());
		},
		slotProps: { htmlInput: {
			inputMode: "numeric",
			style: {
				fontSize: 18,
				padding: "14px 16px",
				textAlign: "right"
			}
		} }
	});
}
//#endregion
//#region src/runtime/components/runner/controls/DateControl.tsx
var au = /* @__PURE__ */ pt((/* @__PURE__ */ Z(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).dayjs = r();
	})(e, (function() {
		var e = 1e3, t = 6e4, n = 36e5, r = "millisecond", i = "second", a = "minute", o = "hour", s = "day", c = "week", l = "month", u = "quarter", d = "year", f = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
		}, _ = function(e, t, n) {
			var r = String(e);
			return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
		}, v = {
			s: _,
			z: function(e) {
				var t = -e.utcOffset(), n = Math.abs(t), r = Math.floor(n / 60), i = n % 60;
				return (t <= 0 ? "+" : "-") + _(r, 2, "0") + ":" + _(i, 2, "0");
			},
			m: function e(t, n) {
				if (t.date() < n.date()) return -e(n, t);
				var r = 12 * (n.year() - t.year()) + (n.month() - t.month()), i = t.clone().add(r, l), a = n - i < 0, o = t.clone().add(r + (a ? -1 : 1), l);
				return +(-(r + (n - i) / (a ? i - o : o - i)) || 0);
			},
			a: function(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
			},
			p: function(e) {
				return {
					M: l,
					y: d,
					w: c,
					d: s,
					D: f,
					h: o,
					m: a,
					s: i,
					ms: r,
					Q: u
				}[e] || String(e || "").toLowerCase().replace(/s$/, "");
			},
			u: function(e) {
				return e === void 0;
			}
		}, y = "en", b = {};
		b[y] = g;
		var x = function(e) {
			return e instanceof T;
		}, S = function(e, t, n) {
			var r;
			if (!e) return y;
			if (typeof e == "string") b[e] && (r = e), t && (b[e] = t, r = e);
			else {
				var i = e.name;
				b[i] = e, r = i;
			}
			return !n && r && (y = r), r || !n && y;
		}, C = function(e, t) {
			if (x(e)) return e.clone();
			var n = typeof t == "object" ? t : {};
			return n.date = e, n.args = arguments, new T(n);
		}, w = v;
		w.l = S, w.i = x, w.w = function(e, t) {
			return C(e, {
				locale: t.$L,
				utc: t.$u,
				x: t.$x,
				$offset: t.$offset
			});
		};
		var T = function() {
			function g(e) {
				this.$L = S(e.locale, null, !0), this.parse(e);
			}
			var _ = g.prototype;
			return _.parse = function(e) {
				this.$d = function(e) {
					var t = e.date, n = e.utc;
					if (t === null) return /* @__PURE__ */ new Date(NaN);
					if (w.u(t)) return /* @__PURE__ */ new Date();
					if (t instanceof Date) return new Date(t);
					if (typeof t == "string" && !/Z$/i.test(t)) {
						var r = t.match(m);
						if (r) {
							var i = r[2] - 1 || 0, a = (r[7] || "0").substring(0, 3);
							return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
						}
					}
					return new Date(t);
				}(e), this.$x = e.x || {}, this.init();
			}, _.init = function() {
				var e = this.$d;
				this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
			}, _.$utils = function() {
				return w;
			}, _.isValid = function() {
				return this.$d.toString() !== p;
			}, _.isSame = function(e, t) {
				var n = C(e);
				return this.startOf(t) <= n && n <= this.endOf(t);
			}, _.isAfter = function(e, t) {
				return C(e) < this.startOf(t);
			}, _.isBefore = function(e, t) {
				return this.endOf(t) < C(e);
			}, _.$g = function(e, t, n) {
				return w.u(e) ? this[t] : this.set(n, e);
			}, _.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, _.valueOf = function() {
				return this.$d.getTime();
			}, _.startOf = function(e, t) {
				var n = this, r = !!w.u(t) || t, u = w.p(e), p = function(e, t) {
					var i = w.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
					return r ? i : i.endOf(s);
				}, m = function(e, t) {
					return w.w(n.toDate()[e].apply(n.toDate("s"), (r ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(t)), n);
				}, h = this.$W, g = this.$M, _ = this.$D, v = "set" + (this.$u ? "UTC" : "");
				switch (u) {
					case d: return r ? p(1, 0) : p(31, 11);
					case l: return r ? p(1, g) : p(0, g + 1);
					case c:
						var y = this.$locale().weekStart || 0, b = (h < y ? h + 7 : h) - y;
						return p(r ? _ - b : _ + (6 - b), g);
					case s:
					case f: return m(v + "Hours", 0);
					case o: return m(v + "Minutes", 1);
					case a: return m(v + "Seconds", 2);
					case i: return m(v + "Milliseconds", 3);
					default: return this.clone();
				}
			}, _.endOf = function(e) {
				return this.startOf(e, !1);
			}, _.$set = function(e, t) {
				var n, c = w.p(e), u = "set" + (this.$u ? "UTC" : ""), p = (n = {}, n[s] = u + "Date", n[f] = u + "Date", n[l] = u + "Month", n[d] = u + "FullYear", n[o] = u + "Hours", n[a] = u + "Minutes", n[i] = u + "Seconds", n[r] = u + "Milliseconds", n)[c], m = c === s ? this.$D + (t - this.$W) : t;
				if (c === l || c === d) {
					var h = this.clone().set(f, 1);
					h.$d[p](m), h.init(), this.$d = h.set(f, Math.min(this.$D, h.daysInMonth())).$d;
				} else p && this.$d[p](m);
				return this.init(), this;
			}, _.set = function(e, t) {
				return this.clone().$set(e, t);
			}, _.get = function(e) {
				return this[w.p(e)]();
			}, _.add = function(r, u) {
				var f, p = this;
				r = Number(r);
				var m = w.p(u), h = function(e) {
					var t = C(p);
					return w.w(t.date(t.date() + Math.round(e * r)), p);
				};
				if (m === l) return this.set(l, this.$M + r);
				if (m === d) return this.set(d, this.$y + r);
				if (m === s) return h(1);
				if (m === c) return h(7);
				var g = (f = {}, f[a] = t, f[o] = n, f[i] = e, f)[m] || 1, _ = this.$d.getTime() + r * g;
				return w.w(_, this);
			}, _.subtract = function(e, t) {
				return this.add(-1 * e, t);
			}, _.format = function(e) {
				var t = this, n = this.$locale();
				if (!this.isValid()) return n.invalidDate || p;
				var r = e || "YYYY-MM-DDTHH:mm:ssZ", i = w.z(this), a = this.$H, o = this.$m, s = this.$M, c = n.weekdays, l = n.months, u = function(e, n, i, a) {
					return e && (e[n] || e(t, r)) || i[n].substr(0, a);
				}, d = function(e) {
					return w.s(a % 12 || 12, e, "0");
				}, f = n.meridiem || function(e, t, n) {
					var r = e < 12 ? "AM" : "PM";
					return n ? r.toLowerCase() : r;
				}, m = {
					YY: String(this.$y).slice(-2),
					YYYY: this.$y,
					M: s + 1,
					MM: w.s(s + 1, 2, "0"),
					MMM: u(n.monthsShort, s, l, 3),
					MMMM: u(l, s),
					D: this.$D,
					DD: w.s(this.$D, 2, "0"),
					d: String(this.$W),
					dd: u(n.weekdaysMin, this.$W, c, 2),
					ddd: u(n.weekdaysShort, this.$W, c, 3),
					dddd: c[this.$W],
					H: String(a),
					HH: w.s(a, 2, "0"),
					h: d(1),
					hh: d(2),
					a: f(a, o, !0),
					A: f(a, o, !1),
					m: String(o),
					mm: w.s(o, 2, "0"),
					s: String(this.$s),
					ss: w.s(this.$s, 2, "0"),
					SSS: w.s(this.$ms, 3, "0"),
					Z: i
				};
				return r.replace(h, (function(e, t) {
					return t || m[e] || i.replace(":", "");
				}));
			}, _.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, _.diff = function(r, f, p) {
				var m, h = w.p(f), g = C(r), _ = (g.utcOffset() - this.utcOffset()) * t, v = this - g, y = w.m(this, g);
				return y = (m = {}, m[d] = y / 12, m[l] = y, m[u] = y / 3, m[c] = (v - _) / 6048e5, m[s] = (v - _) / 864e5, m[o] = v / n, m[a] = v / t, m[i] = v / e, m)[h] || v, p ? y : w.a(y);
			}, _.daysInMonth = function() {
				return this.endOf(l).$D;
			}, _.$locale = function() {
				return b[this.$L];
			}, _.locale = function(e, t) {
				if (!e) return this.$L;
				var n = this.clone(), r = S(e, t, !0);
				return r && (n.$L = r), n;
			}, _.clone = function() {
				return w.w(this.$d, this);
			}, _.toDate = function() {
				return new Date(this.valueOf());
			}, _.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, _.toISOString = function() {
				return this.$d.toISOString();
			}, _.toString = function() {
				return this.$d.toUTCString();
			}, g;
		}(), E = T.prototype;
		return C.prototype = E, [
			["$ms", r],
			["$s", i],
			["$m", a],
			["$H", o],
			["$W", s],
			["$M", l],
			["$y", d],
			["$D", f]
		].forEach((function(e) {
			E[e[1]] = function(t) {
				return this.$g(t, e[0], e[1]);
			};
		})), C.extend = function(e, t) {
			return e.$i ||= (e(t, T, C), !0), C;
		}, C.locale = S, C.isDayjs = x, C.unix = function(e) {
			return C(1e3 * e);
		}, C.en = b[y], C.Ls = b, C.p = {}, C;
	}));
})))(), 1), ou = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], su = (/* @__PURE__ */ new Date()).getFullYear(), cu = Array.from({ length: 121 }, (e, t) => su - t), lu = {
	day: void 0,
	month: void 0,
	year: void 0
};
function uu(e, t) {
	return e ? (0, au.default)(`${t ?? 2e3}-${String(e).padStart(2, "0")}-01`).daysInMonth() : 31;
}
function du(e) {
	if (typeof e == "string" && e && (0, au.default)(e).isValid()) {
		let t = (0, au.default)(e);
		return {
			day: t.date(),
			month: t.month() + 1,
			year: t.year()
		};
	}
	return lu;
}
function fu(e) {
	if (e.day && e.month && e.year) return (0, au.default)(`${e.year}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`).format("YYYY-MM-DD");
}
var pu = { "& .MuiSelect-select": {
	fontSize: 16,
	py: 1.5
} }, mu = {
	display: "block",
	mb: .5,
	color: "text.secondary",
	letterSpacing: .5,
	fontWeight: 600,
	textTransform: "uppercase"
};
function hu({ value: e, onChange: t }) {
	let [n, r] = f(() => du(e)), i = d(fu(n));
	s(() => {
		if ((typeof e == "string" ? e : void 0) === i.current) return;
		let t = du(e);
		i.current = fu(t), r(t);
	}, [e]);
	let { day: a, month: o, year: c } = n, u = l(() => {
		let e = uu(o, c);
		return Array.from({ length: e }, (e, t) => t + 1);
	}, [o, c]), p = (e) => {
		let a = {
			...n,
			...e
		};
		a.day && a.month && (a.day = Math.min(a.day, uu(a.month, a.year))), r(a);
		let o = fu(a);
		i.current = o, t(o);
	};
	return /* @__PURE__ */ S(K, {
		direction: "row",
		spacing: 2,
		children: [
			/* @__PURE__ */ S(D, {
				sx: { flex: 1 },
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					sx: mu,
					children: "Day"
				}), /* @__PURE__ */ x(G, {
					fullWidth: !0,
					displayEmpty: !0,
					value: a ?? "",
					onChange: (e) => p({ day: e.target.value === "" ? void 0 : Number(e.target.value) }),
					sx: pu,
					renderValue: (e) => e === "" ? "Day" : e,
					children: u.map((e) => /* @__PURE__ */ x(U, {
						value: e,
						children: e
					}, e))
				})]
			}),
			/* @__PURE__ */ S(D, {
				sx: { flex: 1 },
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					sx: mu,
					children: "Month"
				}), /* @__PURE__ */ x(G, {
					fullWidth: !0,
					displayEmpty: !0,
					value: o ?? "",
					onChange: (e) => p({ month: e.target.value === "" ? void 0 : Number(e.target.value) }),
					sx: pu,
					renderValue: (e) => e === "" ? "Month" : ou[Number(e) - 1],
					children: ou.map((e, t) => /* @__PURE__ */ x(U, {
						value: t + 1,
						children: e
					}, e))
				})]
			}),
			/* @__PURE__ */ S(D, {
				sx: { flex: 1 },
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					sx: mu,
					children: "Year"
				}), /* @__PURE__ */ x(G, {
					fullWidth: !0,
					displayEmpty: !0,
					value: c ?? "",
					onChange: (e) => p({ year: e.target.value === "" ? void 0 : Number(e.target.value) }),
					sx: pu,
					renderValue: (e) => e === "" ? "Year" : e,
					children: cu.map((e) => /* @__PURE__ */ x(U, {
						value: e,
						children: e
					}, e))
				})]
			})
		]
	});
}
//#endregion
//#region src/runtime/components/runner/controls/OptionCard.tsx
var gu = r(function({ label: e, badge: t, selected: n, indicatorShape: r, onClick: i, tabIndex: a }, o) {
	return /* @__PURE__ */ S(D, {
		ref: o,
		role: r === "circle" ? "radio" : "checkbox",
		"aria-checked": n,
		tabIndex: a ?? 0,
		onClick: i,
		onKeyDown: (e) => {
			(e.key === " " || e.key === "Enter") && (e.preventDefault(), i());
		},
		sx: {
			display: "flex",
			alignItems: "center",
			gap: 1.5,
			px: 2.5,
			py: 2,
			mb: 1.5,
			borderRadius: "10px",
			border: "1px solid",
			borderColor: n ? "primary.main" : "divider",
			bgcolor: n ? "primary.light" : "background.paper",
			cursor: "pointer",
			transition: "border-color .15s ease, background-color .15s ease",
			outline: "none",
			"&:hover": { borderColor: "primary.main" },
			"&:focus-visible": { boxShadow: (e) => `0 0 0 2px ${e.palette.primary.main}` }
		},
		children: [
			/* @__PURE__ */ x(D, {
				sx: {
					width: 24,
					height: 24,
					flexShrink: 0,
					borderRadius: r === "circle" ? "50%" : "6px",
					bgcolor: n ? "primary.main" : "action.disabledBackground",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: n && /* @__PURE__ */ x(De, { sx: {
					fontSize: 16,
					color: "primary.contrastText"
				} })
			}),
			/* @__PURE__ */ x(J, {
				sx: {
					flex: 1,
					fontSize: 16,
					fontWeight: 500
				},
				children: e
			}),
			t && /* @__PURE__ */ x(D, {
				sx: {
					px: 1,
					py: .25,
					borderRadius: "6px",
					border: "1px solid",
					borderColor: n ? "primary.main" : "divider",
					fontSize: 12,
					fontWeight: 600,
					color: n ? "primary.main" : "text.secondary",
					lineHeight: 1.6
				},
				children: t
			})
		]
	});
}), _u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function vu({ question: e, value: t, onChange: n }) {
	let r = e.choices ?? [], i = d(null), a = (e) => {
		n(e);
	};
	return s(() => {
		let e = (e) => {
			let t = _u.indexOf(e.key.toUpperCase()), n = /^[1-9]$/.test(e.key) ? Number(e.key) - 1 : -1, o = n >= 0 ? n : t;
			if (o >= 0 && o < r.length) {
				e.preventDefault(), a(r[o]);
				return;
			}
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();
				let t = i.current?.querySelectorAll("[role=\"radio\"]");
				if (!t || t.length === 0) return;
				let n = Array.from(t).findIndex((e) => e === document.activeElement);
				t[n === -1 ? 0 : (n + (e.key === "ArrowDown" ? 1 : -1) + t.length) % t.length]?.focus();
			}
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [r.join("|"), t]), /* @__PURE__ */ x(D, {
		ref: i,
		role: "radiogroup",
		children: r.map((e, n) => /* @__PURE__ */ x(gu, {
			label: e,
			badge: _u[n] ?? String(n + 1),
			selected: t === e,
			indicatorShape: "circle",
			onClick: () => a(e)
		}, e))
	});
}
//#endregion
//#region src/runtime/components/runner/controls/SingleChoiceManyControl.tsx
function yu({ question: e, value: t, onChange: n, onAdvance: r, autoFocus: i }) {
	let a = e.choices ?? [], o = (t) => t in (e.disqualifyingOptions ?? {});
	return /* @__PURE__ */ x(E, {
		options: a,
		value: typeof t == "string" ? t : null,
		onChange: (e, t) => {
			n(t ?? void 0);
		},
		autoHighlight: !0,
		renderOption: (e, n) => {
			let { key: r, ...i } = e;
			return /* @__PURE__ */ S("li", {
				...i,
				children: [n === t && /* @__PURE__ */ x(De, { sx: {
					fontSize: 18,
					mr: 1,
					color: "primary.main"
				} }), n]
			}, r);
		},
		renderInput: (e) => /* @__PURE__ */ x(q, {
			...e,
			autoFocus: i,
			placeholder: "Search options...",
			onKeyDown: (e) => {
				e.key === "Enter" && t && typeof t == "string" && !o(t) && (e.preventDefault(), r());
			},
			slotProps: { htmlInput: {
				...e.inputProps,
				style: {
					fontSize: 18,
					padding: "10px 8px"
				}
			} }
		})
	});
}
//#endregion
//#region src/runtime/components/runner/controls/MultiChoiceControl.tsx
function bu({ question: e, value: t, onChange: n }) {
	let r = e.choices ?? [], i = Array.isArray(t) ? t : [], a = (e) => {
		n(i.includes(e) ? i.filter((t) => t !== e) : [...i, e]);
	};
	return /* @__PURE__ */ x(D, {
		role: "group",
		"aria-label": e.label,
		children: r.map((e) => /* @__PURE__ */ x(gu, {
			label: e,
			selected: i.includes(e),
			indicatorShape: "square",
			onClick: () => a(e)
		}, e))
	});
}
//#endregion
//#region src/runtime/components/runner/controls/BooleanControl.tsx
function xu({ value: e, onChange: t, autoFocus: n }) {
	let r = (e) => {
		t(e);
	}, i = (e) => ({
		flex: 1,
		py: 3,
		borderRadius: "10px",
		border: "1px solid",
		borderColor: e ? "primary.main" : "divider",
		bgcolor: e ? "primary.light" : "background.paper",
		cursor: "pointer",
		textAlign: "center",
		transition: "border-color .15s ease, background-color .15s ease",
		outline: "none",
		"&:hover": { borderColor: "primary.main" },
		"&:focus-visible": { boxShadow: (e) => `0 0 0 2px ${e.palette.primary.main}` }
	});
	return /* @__PURE__ */ x(D, {
		role: "radiogroup",
		sx: {
			display: "flex",
			gap: 2
		},
		onKeyDown: (e) => {
			(e.key === "ArrowLeft" || e.key === "ArrowRight") && (e.preventDefault(), e.currentTarget.querySelectorAll("[role=\"radio\"]")[e.key === "ArrowLeft" ? 0 : 1]?.focus());
		},
		children: [!0, !1].map((t, a) => /* @__PURE__ */ x(D, {
			role: "radio",
			"aria-checked": e === t,
			tabIndex: 0,
			autoFocus: n && a === 0,
			onClick: () => r(t),
			onKeyDown: (e) => {
				(e.key === " " || e.key === "Enter") && (e.preventDefault(), r(t));
			},
			sx: i(e === t),
			children: /* @__PURE__ */ S(D, {
				sx: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 1
				},
				children: [e === t && /* @__PURE__ */ x(De, { sx: {
					fontSize: 20,
					color: "primary.main"
				} }), /* @__PURE__ */ x(J, {
					sx: {
						fontSize: 18,
						fontWeight: 600
					},
					children: t ? "Yes" : "No"
				})]
			})
		}, String(t)))
	});
}
//#endregion
//#region src/runtime/components/runner/controls/RatingScaleControl.tsx
function Su({ question: e, value: t, onChange: n, autoFocus: r }) {
	let i = e.type === "nps", a = e.min ?? +!i, o = e.max ?? (i ? 10 : 5), s = Array.from({ length: o - a + 1 }, (e, t) => a + t), c = (e) => {
		n(e);
	};
	return /* @__PURE__ */ S(D, { children: [/* @__PURE__ */ x(K, {
		direction: "row",
		spacing: 1,
		role: "radiogroup",
		flexWrap: "wrap",
		onKeyDown: (e) => {
			if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
			e.preventDefault();
			let t = e.currentTarget.querySelectorAll("[role=\"radio\"]"), n = Array.from(t).findIndex((e) => e === document.activeElement);
			t[n === -1 ? 0 : (n + (e.key === "ArrowRight" ? 1 : -1) + t.length) % t.length]?.focus();
		},
		children: s.map((e, n) => {
			let i = t === e;
			return /* @__PURE__ */ x(D, {
				role: "radio",
				"aria-checked": i,
				"aria-label": String(e),
				tabIndex: 0,
				autoFocus: r && n === 0,
				onClick: () => c(e),
				onKeyDown: (t) => {
					(t.key === " " || t.key === "Enter") && (t.preventDefault(), c(e));
				},
				sx: {
					width: 44,
					height: 44,
					borderRadius: "50%",
					border: "1px solid",
					borderColor: i ? "primary.main" : "divider",
					bgcolor: i ? "primary.main" : "background.paper",
					color: i ? "primary.contrastText" : "text.primary",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 16,
					fontWeight: 600,
					cursor: "pointer",
					outline: "none",
					transition: "border-color .15s ease, background-color .15s ease",
					"&:hover": { borderColor: "primary.main" },
					"&:focus-visible": { boxShadow: (e) => `0 0 0 2px ${e.palette.primary.main}` }
				},
				children: e
			}, e);
		})
	}), /* @__PURE__ */ S(K, {
		direction: "row",
		justifyContent: "space-between",
		sx: {
			mt: 1,
			px: .5
		},
		children: [/* @__PURE__ */ x(J, {
			variant: "caption",
			color: "text.secondary",
			children: a
		}), /* @__PURE__ */ x(J, {
			variant: "caption",
			color: "text.secondary",
			children: o
		})]
	})] });
}
//#endregion
//#region src/runtime/components/runner/controls/LabelInfoControl.tsx
function Cu({ question: e }) {
	let t = de().custom.warningBanner;
	return /* @__PURE__ */ S(D, {
		sx: {
			p: 3,
			borderRadius: 2,
			bgcolor: t.bg,
			border: "1px solid",
			borderColor: t.border,
			display: "flex",
			gap: 2,
			alignItems: "flex-start"
		},
		children: [/* @__PURE__ */ x(D, {
			sx: {
				flexShrink: 0,
				width: 44,
				height: 44,
				borderRadius: 1.5,
				bgcolor: t.iconBg,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: /* @__PURE__ */ x(Oe, { sx: {
				fontSize: 26,
				color: t.icon
			} })
		}), /* @__PURE__ */ S(D, {
			sx: { minWidth: 0 },
			children: [/* @__PURE__ */ x(J, {
				variant: "h6",
				sx: {
					color: t.textStrong,
					fontWeight: 700
				},
				children: e.label
			}), e.description && /* @__PURE__ */ x(J, {
				variant: "body1",
				sx: {
					color: e.descriptionColor || t.text,
					mt: .5
				},
				children: e.description
			})]
		})]
	});
}
//#endregion
//#region src/runtime/components/runner/turnstileLoader.ts
var wu = "https://challenges.cloudflare.com/turnstile/v0/api.js", Tu = null;
function Eu() {
	return window.turnstile ? Promise.resolve() : Tu || (Tu = new Promise((e, t) => {
		let n = document.querySelector(`script[src="${wu}"]`);
		if (n) {
			n.addEventListener("load", () => e()), n.addEventListener("error", () => t(/* @__PURE__ */ Error("Failed to load the Turnstile script.")));
			return;
		}
		let r = document.createElement("script");
		r.src = wu, r.async = !0, r.defer = !0, r.addEventListener("load", () => e()), r.addEventListener("error", () => t(/* @__PURE__ */ Error("Failed to load the Turnstile script."))), document.head.appendChild(r);
	}), Tu);
}
//#endregion
//#region src/runtime/components/runner/controls/TurnstileControl.tsx
function Du({ question: e, value: t, onChange: n }) {
	let r = e.turnstileSiteKey, i = d(null), a = d(null), [o, c] = f(null), l = typeof t == "string" && t.length > 0;
	return s(() => {
		if (l) return;
		if (!r) {
			c("Turnstile site key not configured.");
			return;
		}
		let e = !1;
		return c(null), Eu().then(() => {
			!e && i.current && window.turnstile && (a.current = window.turnstile.render(i.current, {
				sitekey: r,
				callback: (e) => n(e),
				"expired-callback": () => n(void 0),
				"error-callback": () => n(void 0)
			}));
		}).catch(() => {
			e || c("Could not load the verification widget.");
		}), () => {
			e = !0, a.current && window.turnstile && (window.turnstile.remove(a.current), a.current = null);
		};
	}, [r, l]), l ? /* @__PURE__ */ S(D, {
		sx: {
			display: "flex",
			alignItems: "center",
			gap: 1,
			color: "success.main"
		},
		children: [/* @__PURE__ */ x(ke, { fontSize: "small" }), /* @__PURE__ */ x(J, {
			sx: {
				fontSize: 15,
				fontWeight: 600
			},
			children: "Verified"
		})]
	}) : o ? /* @__PURE__ */ x(J, {
		role: "alert",
		sx: {
			color: "error.main",
			fontSize: 14.5
		},
		children: o
	}) : /* @__PURE__ */ x(D, { ref: i });
}
//#endregion
//#region src/runtime/components/runner/controls/UnsupportedControl.tsx
function Ou({ question: e }) {
	return /* @__PURE__ */ S(C, {
		severity: "error",
		variant: "outlined",
		children: [/* @__PURE__ */ x(w, { children: "Unsupported question type" }), /* @__PURE__ */ S(J, {
			variant: "body2",
			children: [
				"Question ",
				/* @__PURE__ */ x("code", { children: e.id }),
				" has type ",
				/* @__PURE__ */ x("code", { children: e.type }),
				", which this runner has no control for. This is a developer-facing error, not something a respondent should ever see."
			]
		})]
	});
}
function ku(e) {
	switch (e.type) {
		case "shortText": return eu;
		case "longText": return tu;
		case "number": return iu;
		case "date": return hu;
		case "singleChoice": return (e.choices?.length ?? 0) > 6 ? yu : vu;
		case "multipleChoice": return bu;
		case "boolean": return xu;
		case "rating":
		case "nps": return Su;
		case "label": return Cu;
		case "turnstile": return Du;
		default: return Ou;
	}
}
//#endregion
//#region src/domain/validationMessages.ts
function Au(e) {
	return e.keyword === "required" ? e.params.missingProperty : e.instancePath.replace(/^\//, "") || void 0;
}
function ju(e, t) {
	let n = e.label || "This field";
	switch (t.keyword) {
		case "required": return e.requiredMessage || `${n} is required.`;
		case "pattern": return e.patternMessage || `${n} is not in a valid format.`;
		case "minLength":
		case "maxLength": return e.lengthMessage || `${n} length is invalid.`;
		case "minimum":
		case "maximum": return e.rangeMessage || `${n} is out of the allowed range.`;
		default: return `${n} is invalid.`;
	}
}
function Mu(e, t) {
	let n = new Map(t.map((e) => [e.id, e])), r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = Au(t);
		if (!e) continue;
		let a = n.get(e);
		if (!a) continue;
		let o = ju(a, t), s = `${e}:${o}`;
		r.has(s) || (r.add(s), i.push({
			questionId: e,
			message: o
		}));
	}
	return i;
}
//#endregion
//#region src/domain/ageValidation.ts
function Nu(e, t = /* @__PURE__ */ new Date()) {
	let n = new Date(e);
	if (Number.isNaN(n.getTime())) return null;
	let r = t.getFullYear() - n.getFullYear(), i = t.getMonth() - n.getMonth();
	return (i < 0 || i === 0 && t.getDate() < n.getDate()) && --r, r;
}
function Pu(e, t, n = /* @__PURE__ */ new Date()) {
	if (e.type !== "date" || e.minYears === void 0 && e.maxYears === void 0 || typeof t != "string" || t === "") return null;
	let r = Nu(t, n);
	if (r === null) return null;
	let i = e.minYears !== void 0 && r < e.minYears, a = e.maxYears !== void 0 && r > e.maxYears;
	return !i && !a ? null : e.yearsMessage || `${e.label || "This field"} does not meet the required age.`;
}
//#endregion
//#region src/runtime/components/runner/singleQuestionSchema.ts
function Fu(e, t) {
	let n = e.schema.properties?.[t], r = e.schema.required?.includes(t) ?? !1;
	return {
		type: "object",
		properties: { [t]: n ?? {} },
		...r ? { required: [t] } : {}
	};
}
//#endregion
//#region src/runtime/components/runner/questionValidation.ts
var Iu = /* @__PURE__ */ pt(Ka(), 1), Lu = new Iu.default({
	allErrors: !0,
	strict: !1
});
function Ru(e, t, n) {
	if (t.type === "label") return [];
	let r = Fu(e, t.id), i = Lu.validate(r, { [t.id]: n[t.id] }) ? [] : Mu(Lu.errors ?? [], [t]).map((e) => e.message), a = Pu(t, n[t.id]);
	return a ? [...i, a] : i;
}
function zu(e, t) {
	let n = e.disqualifyingOptions;
	if (!n || Object.keys(n).length === 0) return [];
	let r = new Set(Array.isArray(t) ? t.map(String) : t == null ? [] : [String(t)]);
	return (e.choices ?? []).filter((e) => r.has(e) && e in n).map((e) => {
		let t = n[e];
		return typeof t == "string" ? { title: t } : t;
	});
}
function Bu(e, t) {
	return zu(e, t).length > 0 ? !1 : e.type === "multipleChoice" && e.required ? Array.isArray(t) && t.length > 0 : e.type !== "turnstile" || typeof t == "string" && t.length > 0;
}
//#endregion
//#region src/runtime/components/runner/DisqualifyingBanner.tsx
function Vu({ notices: e }) {
	let t = de().custom.warningBanner;
	return e.length === 0 ? null : /* @__PURE__ */ S(D, {
		role: "alert",
		sx: {
			mt: 2,
			p: 2,
			borderRadius: 1.5,
			bgcolor: t.bg,
			border: "1px solid",
			borderColor: t.border,
			display: "flex",
			gap: 1.5,
			animation: "sbkDisqualifyFadeIn 150ms ease",
			"@keyframes sbkDisqualifyFadeIn": {
				from: { opacity: 0 },
				to: { opacity: 1 }
			}
		},
		children: [/* @__PURE__ */ x(D, {
			sx: {
				flexShrink: 0,
				width: 28,
				height: 28,
				borderRadius: 1,
				bgcolor: t.iconBg,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: /* @__PURE__ */ x(Oe, { sx: {
				fontSize: 18,
				color: t.icon
			} })
		}), /* @__PURE__ */ x(K, {
			spacing: 1.5,
			sx: { minWidth: 0 },
			children: e.map((e, n) => /* @__PURE__ */ S(D, { children: [/* @__PURE__ */ x(J, {
				variant: "subtitle2",
				sx: {
					color: t.textStrong,
					fontWeight: 700
				},
				children: e.title
			}), e.body && /* @__PURE__ */ x(J, {
				variant: "body2",
				sx: {
					color: t.text,
					mt: .25
				},
				children: e.body
			})] }, n))
		})]
	});
}
//#endregion
//#region src/runtime/components/runner/QuestionStage.tsx
function Hu({ question: e, categoryLabel: t, value: n, onChange: r, onAdvance: i, onBack: a, onSkip: o, canGoBack: s, canSkip: c, canAttemptAdvance: l, isFinalQuestion: u, error: d, direction: f }) {
	let p = ku(e), m = e.type === "label", h = e.type === "longText" ? "⌘/Ctrl + ↵" : "↵", g = zu(e, n);
	return /* @__PURE__ */ S(D, {
		sx: {
			width: "100%",
			maxWidth: 620,
			mx: "auto",
			animation: `${f === "forward" ? "sbkRunnerSlideInForward" : "sbkRunnerSlideInBackward"} 220ms ease`,
			"@keyframes sbkRunnerSlideInForward": {
				from: {
					opacity: 0,
					transform: "translateX(12px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			"@keyframes sbkRunnerSlideInBackward": {
				from: {
					opacity: 0,
					transform: "translateX(-12px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			"@media (prefers-reduced-motion: reduce)": { animationName: "sbkRunnerFadeIn" },
			"@keyframes sbkRunnerFadeIn": {
				from: { opacity: 0 },
				to: { opacity: 1 }
			}
		},
		children: [
			!m && t && /* @__PURE__ */ x(K, {
				direction: "row",
				alignItems: "center",
				spacing: 1.5,
				sx: { mb: 1.5 },
				children: /* @__PURE__ */ x(J, {
					variant: "body2",
					color: "text.secondary",
					children: t
				})
			}),
			!m && /* @__PURE__ */ x(J, {
				sx: {
					fontSize: {
						xs: 26,
						sm: 34
					},
					fontWeight: 700,
					letterSpacing: "-0.01em",
					lineHeight: 1.2,
					mb: e.description ? 1 : 3
				},
				children: e.label
			}),
			!m && e.description && /* @__PURE__ */ x(J, {
				sx: {
					fontSize: 14.5,
					color: e.descriptionColor || "text.secondary",
					mb: 3
				},
				children: e.description
			}),
			/* @__PURE__ */ x(p, {
				question: e,
				value: n,
				onChange: r,
				onAdvance: i,
				autoFocus: !0
			}),
			/* @__PURE__ */ x(Vu, { notices: g }),
			d && /* @__PURE__ */ x(J, {
				role: "alert",
				sx: {
					mt: 1.5,
					color: "error.main",
					fontSize: 14,
					animation: "sbkRunnerErrorFadeIn 150ms ease",
					"@keyframes sbkRunnerErrorFadeIn": {
						from: { opacity: 0 },
						to: { opacity: 1 }
					}
				},
				children: d
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				justifyContent: "space-between",
				sx: { mt: 4 },
				children: [/* @__PURE__ */ x(O, {
					startIcon: /* @__PURE__ */ x(X, { fontSize: "small" }),
					onClick: a,
					disabled: !s,
					sx: {
						color: "text.secondary",
						visibility: s ? "visible" : "hidden"
					},
					children: "Back"
				}), /* @__PURE__ */ S(K, {
					direction: "row",
					alignItems: "center",
					spacing: 2,
					children: [
						c && /* @__PURE__ */ x(O, {
							onClick: o,
							sx: {
								color: "text.secondary",
								textTransform: "none"
							},
							children: "Skip"
						}),
						!m && l && /* @__PURE__ */ S(K, {
							direction: "row",
							alignItems: "center",
							spacing: .5,
							sx: {
								color: "text.secondary",
								fontSize: 13
							},
							children: [/* @__PURE__ */ x("span", { children: "press" }), /* @__PURE__ */ x(D, {
								component: "span",
								sx: {
									display: "inline-flex",
									alignItems: "center",
									px: .75,
									py: .25,
									border: "1px solid",
									borderColor: "divider",
									borderRadius: .75,
									fontSize: 12
								},
								children: e.type === "longText" ? h : /* @__PURE__ */ x(Ee, { sx: { fontSize: 14 } })
							})]
						}),
						/* @__PURE__ */ x(O, {
							variant: "contained",
							disableElevation: !0,
							endIcon: /* @__PURE__ */ x(Te, { fontSize: "small" }),
							onClick: i,
							disabled: !l,
							children: u ? "Submit" : "Continue"
						})
					]
				})]
			})
		]
	}, e.id);
}
//#endregion
//#region src/runtime/components/runner/MultiQuestionStage.tsx
function Uu({ questions: e, pageTitle: t, answers: n, onChangeQuestion: r, onAdvance: i, onBack: a, canGoBack: o, canAttemptAdvance: s, isFinalPage: c, errors: l, direction: u }) {
	let d = () => {};
	return /* @__PURE__ */ S(D, {
		sx: {
			width: "100%",
			maxWidth: 620,
			mx: "auto",
			animation: `${u === "forward" ? "sbkRunnerSlideInForward" : "sbkRunnerSlideInBackward"} 220ms ease`,
			"@keyframes sbkRunnerSlideInForward": {
				from: {
					opacity: 0,
					transform: "translateX(12px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			"@keyframes sbkRunnerSlideInBackward": {
				from: {
					opacity: 0,
					transform: "translateX(-12px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			"@media (prefers-reduced-motion: reduce)": { animationName: "sbkRunnerFadeIn" },
			"@keyframes sbkRunnerFadeIn": {
				from: { opacity: 0 },
				to: { opacity: 1 }
			}
		},
		children: [
			t && /* @__PURE__ */ x(J, {
				sx: {
					fontSize: {
						xs: 26,
						sm: 34
					},
					fontWeight: 700,
					letterSpacing: "-0.01em",
					lineHeight: 1.2,
					mb: 4
				},
				children: t
			}),
			/* @__PURE__ */ x(K, {
				spacing: 4,
				children: e.map((e) => {
					let t = ku(e), i = e.type === "label", a = l[e.id], o = zu(e, n[e.id]);
					return /* @__PURE__ */ S(D, { children: [
						!i && /* @__PURE__ */ x(J, {
							sx: {
								fontSize: 17,
								fontWeight: 600,
								mb: e.description ? .5 : 1.5
							},
							children: e.label
						}),
						!i && e.description && /* @__PURE__ */ x(J, {
							sx: {
								fontSize: 14,
								color: e.descriptionColor || "text.secondary",
								mb: 1.5
							},
							children: e.description
						}),
						/* @__PURE__ */ x(t, {
							question: e,
							value: n[e.id],
							onChange: (t) => r(e.id, t),
							onAdvance: d
						}),
						/* @__PURE__ */ x(Vu, { notices: o }),
						a && /* @__PURE__ */ x(J, {
							role: "alert",
							sx: {
								mt: 1,
								color: "error.main",
								fontSize: 14,
								animation: "sbkRunnerErrorFadeIn 150ms ease",
								"@keyframes sbkRunnerErrorFadeIn": {
									from: { opacity: 0 },
									to: { opacity: 1 }
								}
							},
							children: a
						})
					] }, e.id);
				})
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				justifyContent: "space-between",
				sx: { mt: 4 },
				children: [/* @__PURE__ */ x(O, {
					startIcon: /* @__PURE__ */ x(X, { fontSize: "small" }),
					onClick: a,
					disabled: !o,
					sx: {
						color: "text.secondary",
						visibility: o ? "visible" : "hidden"
					},
					children: "Back"
				}), /* @__PURE__ */ x(O, {
					variant: "contained",
					disableElevation: !0,
					endIcon: /* @__PURE__ */ x(Te, { fontSize: "small" }),
					onClick: i,
					disabled: !s,
					children: c ? "Submit" : "Continue"
				})]
			})
		]
	}, e.map((e) => e.id).join("|"));
}
//#endregion
//#region src/builder/components/PreviewDrawer.tsx
function Wu(e, t) {
	return e.filter((e) => !e.visibilityRule || Zl(e.visibilityRule, t));
}
function Gu({ open: e, onClose: t }) {
	let n = Q((e) => e.survey), r = Q((e) => e.selectedPageId), i = n.pages.find((e) => e.id === r), [a, o] = f({}), [c, l] = f(), [u, d] = f({});
	s(() => {
		o({}), l(void 0), d({});
	}, [i?.id]);
	let p = i ? Wu(i.questions, a) : [], m = p.length > 1, h = p[0], g = (e) => {
		if (e.blocksSubmission || $l(e, a)) return;
		if (m) {
			let t = {};
			for (let n of p) {
				if (!Bu(n, a[n.id])) {
					t[n.id] = "Select at least one option.";
					continue;
				}
				let r = Ru(e, n, a);
				r.length > 0 && (t[n.id] = r[0]);
			}
			d(t);
			return;
		}
		if (!h || !Bu(h, a[h.id])) return;
		let t = Ru(e, h, a);
		l(t[0]);
	};
	return /* @__PURE__ */ S(F, {
		anchor: "right",
		open: e,
		onClose: t,
		slotProps: { paper: { sx: {
			width: 420,
			display: "flex",
			flexDirection: "column"
		} } },
		children: [
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				justifyContent: "space-between",
				sx: {
					p: 2.5,
					pb: 1.5,
					flexShrink: 0
				},
				children: [/* @__PURE__ */ x(J, {
					variant: "subtitle1",
					children: "Live preview"
				}), /* @__PURE__ */ x(L, {
					size: "small",
					onClick: t,
					"aria-label": "Close preview",
					children: /* @__PURE__ */ x(Ce, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ S(J, {
				variant: "caption",
				color: "text.secondary",
				sx: {
					display: "block",
					px: 2.5,
					mb: 2,
					flexShrink: 0
				},
				children: [i?.title ?? "Current page", " — try answering to see conditional questions appear."]
			}),
			/* @__PURE__ */ x(D, {
				sx: {
					flex: 1,
					minHeight: 0,
					overflowY: "auto",
					px: 2.5,
					pb: 3
				},
				children: !i || i.questions.length === 0 ? /* @__PURE__ */ x(J, {
					variant: "body2",
					color: "text.secondary",
					children: "Add questions to see a preview."
				}) : p.length === 0 ? /* @__PURE__ */ x(J, {
					variant: "body2",
					color: "text.secondary",
					children: "No questions are visible with the current answers."
				}) : m ? /* @__PURE__ */ x(Uu, {
					questions: p,
					pageTitle: i.showTitle ? i.title : void 0,
					answers: a,
					onChangeQuestion: (e, t) => o({
						...a,
						[e]: t
					}),
					onAdvance: () => g(i),
					onBack: () => {},
					canGoBack: !1,
					canAttemptAdvance: !i.blocksSubmission && !$l(i, a) && p.every((e) => Bu(e, a[e.id])),
					isFinalPage: Ql(i, a) === "end",
					errors: u,
					direction: "forward"
				}, i.id) : /* @__PURE__ */ x(Hu, {
					question: h,
					categoryLabel: i.showTitle ? i.title : void 0,
					value: a[h.id],
					onChange: (e) => o({
						...a,
						[h.id]: e
					}),
					onAdvance: () => g(i),
					onBack: () => {},
					onSkip: () => {},
					canGoBack: !1,
					canSkip: !1,
					canAttemptAdvance: !i.blocksSubmission && !$l(i, a) && Bu(h, a[h.id]),
					isFinalQuestion: Ql(i, a) === "end",
					error: c,
					direction: "forward"
				}, i.id)
			})
		]
	});
}
//#endregion
//#region src/types/response.ts
var Ku = 3;
//#endregion
//#region src/domain/scoringEngine.ts
function qu(e) {
	return Math.round(e * 100) / 100;
}
function Ju(e, t) {
	let n = t.split("/").pop();
	return n ? e[n] : void 0;
}
function Yu(e, t) {
	if (e.optionScores) return Array.isArray(t) ? t.reduce((t, n) => t + (e.optionScores[String(n)] ?? 0), 0) : t == null ? 0 : e.optionScores[String(t)] ?? 0;
	if (e.valueScore !== void 0) return typeof t == "boolean" ? t ? e.valueScore : 0 : t != null && t !== "" ? e.valueScore : 0;
	if (e.linearScore) {
		let { min: n, max: r, minPoints: i, maxPoints: a } = e.linearScore;
		return typeof t != "number" || r === n ? 0 : i + (Math.min(Math.max(t, n), r) - n) / (r - n) * (a - i);
	}
	return 0;
}
function Xu(e, t, n, r) {
	let i = /* @__PURE__ */ new Map(), a = 0;
	for (let [n, r] of Object.entries(e ?? {})) {
		let e = Yu(r, Ju(t, n));
		a += e, r.categoryId && i.set(r.categoryId, (i.get(r.categoryId) ?? 0) + e);
	}
	let o = (n ?? []).filter((e) => i.has(e.id)).map((e) => ({
		categoryId: e.id,
		label: e.label,
		points: qu(i.get(e.id))
	}));
	return {
		total: qu(a),
		byCategory: o,
		...r === void 0 ? {} : { passed: a >= r }
	};
}
//#endregion
//#region src/runtime/store/playerStore.ts
function Zu(e, t) {
	let n = e.pages.find((e) => e.id === t);
	if (!n) throw Error(`Unknown page id: ${t}`);
	return n;
}
function Qu() {
	return xt((e, t) => ({
		survey: null,
		currentPageId: null,
		answers: {},
		predefinedQuestionIds: /* @__PURE__ */ new Set(),
		visitedPageStack: [],
		finished: !1,
		score: null,
		loadSurvey: (t) => e({
			survey: t,
			currentPageId: t.startPageId,
			answers: {},
			predefinedQuestionIds: /* @__PURE__ */ new Set(),
			visitedPageStack: [t.startPageId],
			finished: !1,
			score: null
		}),
		setAnswers: (t) => e({ answers: t }),
		setPredefinedQuestionIds: (t) => e({ predefinedQuestionIds: t }),
		goNext: () => {
			let { survey: n, currentPageId: r, answers: i, visitedPageStack: a } = t();
			if (!n || !r) return;
			let o = Ql(Zu(n, r), i);
			if (o === "end") {
				e({
					finished: !0,
					score: n.scoring?.enabled ? Xu(n.scoringMap, i, n.scoring.categories, n.scoring.passThreshold) : null
				});
				return;
			}
			e({
				currentPageId: o,
				visitedPageStack: [...a, o]
			});
		},
		goBack: () => {
			let { visitedPageStack: n } = t();
			if (n.length <= 1) return;
			let r = n.slice(0, -1);
			e({
				visitedPageStack: r,
				currentPageId: r[r.length - 1],
				finished: !1
			});
		},
		restoreNavigation: (t, n) => e({
			currentPageId: t,
			visitedPageStack: n,
			finished: !1
		}),
		reset: () => {
			let { survey: n } = t();
			n && e({
				currentPageId: n.startPageId,
				answers: {},
				predefinedQuestionIds: /* @__PURE__ */ new Set(),
				visitedPageStack: [n.startPageId],
				finished: !1,
				score: null
			});
		}
	}));
}
var { Context: $u, useBoundStore: ed, useStoreApi: td } = cl("usePlayerStore");
//#endregion
//#region src/runtime/store/PlayerStoreProvider.tsx
function nd({ children: e }) {
	let t = d(null);
	return t.current ||= Qu(), /* @__PURE__ */ x($u.Provider, {
		value: t.current,
		children: e
	});
}
//#endregion
//#region ../../node_modules/lodash/_castFunction.js
var rd = /* @__PURE__ */ Z(((e, t) => {
	var n = ti();
	function r(e) {
		return typeof e == "function" ? e : n;
	}
	t.exports = r;
})), id = /* @__PURE__ */ Z(((e, t) => {
	var n = Fo(), r = eo(), i = rd(), a = Zt();
	function o(e, t) {
		return (a(e) ? n : r)(e, i(t));
	}
	t.exports = o;
})), ad = /* @__PURE__ */ Z(((e, t) => {
	t.exports = id();
})), od = /* @__PURE__ */ Z(((e, t) => {
	var n = eo(), r = $t();
	function i(e, t) {
		var i = -1, a = r(e) ? Array(e.length) : [];
		return n(e, function(e, n, r) {
			a[++i] = t(e, n, r);
		}), a;
	}
	t.exports = i;
})), sd = /* @__PURE__ */ Z(((e, t) => {
	var n = dn(), r = ai(), i = od(), a = Zt();
	function o(e, t) {
		return (a(e) ? n : i)(e, r(t, 3));
	}
	t.exports = o;
})), cd = /* @__PURE__ */ Z(((e, t) => {
	t.exports = ni()("length");
})), ld = /* @__PURE__ */ Z(((e, t) => {
	var n = "\\ud800-\\udfff", r = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", i = "\\ufe0e\\ufe0f", a = "[" + n + "]", o = "[" + r + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + o + "|" + s + ")", l = "[^" + n + "]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "\\u200d", p = c + "?", m = "[" + i + "]?", h = "(?:" + f + "(?:" + [
		l,
		u,
		d
	].join("|") + ")" + m + p + ")*", g = m + p + h, _ = "(?:" + [
		l + o + "?",
		o,
		u,
		d,
		a
	].join("|") + ")", v = RegExp(s + "(?=" + s + ")|" + _ + g, "g");
	function y(e) {
		for (var t = v.lastIndex = 0; v.test(e);) ++t;
		return t;
	}
	t.exports = y;
})), ud = /* @__PURE__ */ Z(((e, t) => {
	var n = cd(), r = Cn(), i = ld();
	function a(e) {
		return r(e) ? i(e) : n(e);
	}
	t.exports = a;
})), dd = /* @__PURE__ */ Z(((e, t) => {
	var n = Dt(), r = qt(), i = $t(), a = mi(), o = ud(), s = "[object Map]", c = "[object Set]";
	function l(e) {
		if (e == null) return 0;
		if (i(e)) return a(e) ? o(e) : e.length;
		var t = r(e);
		return t == s || t == c ? e.size : n(e).length;
	}
	t.exports = l;
})), fd = /* @__PURE__ */ Z(((e, t) => {
	var n = Fo(), r = fo(), i = Qa(), a = ai(), o = po(), s = Zt(), c = tn(), l = Ft(), u = Pt(), d = on();
	function f(e, t, f) {
		var p = s(e), m = p || c(e) || d(e);
		if (t = a(t, 4), f == null) {
			var h = e && e.constructor;
			f = m ? p ? new h() : [] : u(e) && l(h) ? r(o(e)) : {};
		}
		return (m ? n : i)(e, function(e, n, r) {
			return t(f, e, n, r);
		}), f;
	}
	t.exports = f;
})), pd = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
		return !1;
	}
	t.exports = n;
})), md = /* @__PURE__ */ Z(((e, t) => {
	var n = Gt(), r = ds(), i = Ir();
	t.exports = n && 1 / i(new n([, -0]))[1] == 1 / 0 ? function(e) {
		return new n(e);
	} : r;
})), hd = /* @__PURE__ */ Z(((e, t) => {
	var n = Ar(), r = Ss(), i = pd(), a = Mr(), o = md(), s = Ir(), c = 200;
	function l(e, t, l) {
		var u = -1, d = r, f = e.length, p = !0, m = [], h = m;
		if (l) p = !1, d = i;
		else if (f >= c) {
			var g = t ? null : o(e);
			if (g) return s(g);
			p = !1, d = a, h = new n();
		} else h = t ? [] : m;
		outer: for (; ++u < f;) {
			var _ = e[u], v = t ? t(_) : _;
			if (_ = l || _ !== 0 ? _ : 0, p && v === v) {
				for (var y = h.length; y--;) if (h[y] === v) continue outer;
				t && h.push(v), m.push(_);
			} else d(h, v, l) || (h !== m && h.push(v), m.push(_));
		}
		return m;
	}
	t.exports = l;
})), gd = /* @__PURE__ */ Z(((e, t) => {
	var n = Vs(), r = Mo(), i = hd(), a = ho();
	t.exports = r(function(e) {
		return i(n(e, 1, a, !0));
	});
})), _d = /* @__PURE__ */ Z(((e, t) => {
	var n;
	if (typeof ht == "function") try {
		n = {
			clone: Fs(),
			constant: Oo(),
			each: ad(),
			filter: no(),
			has: xr(),
			isArray: Zt(),
			isEmpty: sn(),
			isFunction: Ft(),
			isUndefined: hc(),
			keys: Nn(),
			map: sd(),
			reduce: uc(),
			size: dd(),
			transform: fd(),
			union: gd(),
			values: gi()
		};
	} catch {}
	n ||= window._, t.exports = n;
})), vd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = o;
	var r = "\0", i = "\0", a = "";
	function o(e) {
		this._isDirected = !n.has(e, "directed") || e.directed, this._isMultigraph = n.has(e, "multigraph") ? e.multigraph : !1, this._isCompound = n.has(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = n.constant(void 0), this._defaultEdgeLabelFn = n.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[i] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
	}
	o.prototype._nodeCount = 0, o.prototype._edgeCount = 0, o.prototype.isDirected = function() {
		return this._isDirected;
	}, o.prototype.isMultigraph = function() {
		return this._isMultigraph;
	}, o.prototype.isCompound = function() {
		return this._isCompound;
	}, o.prototype.setGraph = function(e) {
		return this._label = e, this;
	}, o.prototype.graph = function() {
		return this._label;
	}, o.prototype.setDefaultNodeLabel = function(e) {
		return n.isFunction(e) || (e = n.constant(e)), this._defaultNodeLabelFn = e, this;
	}, o.prototype.nodeCount = function() {
		return this._nodeCount;
	}, o.prototype.nodes = function() {
		return n.keys(this._nodes);
	}, o.prototype.sources = function() {
		var e = this;
		return n.filter(this.nodes(), function(t) {
			return n.isEmpty(e._in[t]);
		});
	}, o.prototype.sinks = function() {
		var e = this;
		return n.filter(this.nodes(), function(t) {
			return n.isEmpty(e._out[t]);
		});
	}, o.prototype.setNodes = function(e, t) {
		var r = arguments, i = this;
		return n.each(e, function(e) {
			r.length > 1 ? i.setNode(e, t) : i.setNode(e);
		}), this;
	}, o.prototype.setNode = function(e, t) {
		return n.has(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = i, this._children[e] = {}, this._children[i][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}, o.prototype.node = function(e) {
		return this._nodes[e];
	}, o.prototype.hasNode = function(e) {
		return n.has(this._nodes, e);
	}, o.prototype.removeNode = function(e) {
		var t = this;
		if (n.has(this._nodes, e)) {
			var r = function(e) {
				t.removeEdge(t._edgeObjs[e]);
			};
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], n.each(this.children(e), function(e) {
				t.setParent(e);
			}), delete this._children[e]), n.each(n.keys(this._in[e]), r), delete this._in[e], delete this._preds[e], n.each(n.keys(this._out[e]), r), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}, o.prototype.setParent = function(e, t) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (n.isUndefined(t)) t = i;
		else {
			t += "";
			for (var r = t; !n.isUndefined(r); r = this.parent(r)) if (r === e) throw Error("Setting " + t + " as parent of " + e + " would create a cycle");
			this.setNode(t);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this;
	}, o.prototype._removeFromParentsChildList = function(e) {
		delete this._children[this._parent[e]][e];
	}, o.prototype.parent = function(e) {
		if (this._isCompound) {
			var t = this._parent[e];
			if (t !== i) return t;
		}
	}, o.prototype.children = function(e) {
		if (n.isUndefined(e) && (e = i), this._isCompound) {
			var t = this._children[e];
			if (t) return n.keys(t);
		} else if (e === i) return this.nodes();
		else if (this.hasNode(e)) return [];
	}, o.prototype.predecessors = function(e) {
		var t = this._preds[e];
		if (t) return n.keys(t);
	}, o.prototype.successors = function(e) {
		var t = this._sucs[e];
		if (t) return n.keys(t);
	}, o.prototype.neighbors = function(e) {
		var t = this.predecessors(e);
		if (t) return n.union(t, this.successors(e));
	}, o.prototype.isLeaf = function(e) {
		return (this.isDirected() ? this.successors(e) : this.neighbors(e)).length === 0;
	}, o.prototype.filterNodes = function(e) {
		var t = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t.setGraph(this.graph());
		var r = this;
		n.each(this._nodes, function(n, r) {
			e(r) && t.setNode(r, n);
		}), n.each(this._edgeObjs, function(e) {
			t.hasNode(e.v) && t.hasNode(e.w) && t.setEdge(e, r.edge(e));
		});
		var i = {};
		function a(e) {
			var n = r.parent(e);
			return n === void 0 || t.hasNode(n) ? (i[e] = n, n) : n in i ? i[n] : a(n);
		}
		return this._isCompound && n.each(t.nodes(), function(e) {
			t.setParent(e, a(e));
		}), t;
	}, o.prototype.setDefaultEdgeLabel = function(e) {
		return n.isFunction(e) || (e = n.constant(e)), this._defaultEdgeLabelFn = e, this;
	}, o.prototype.edgeCount = function() {
		return this._edgeCount;
	}, o.prototype.edges = function() {
		return n.values(this._edgeObjs);
	}, o.prototype.setPath = function(e, t) {
		var r = this, i = arguments;
		return n.reduce(e, function(e, n) {
			return i.length > 1 ? r.setEdge(e, n, t) : r.setEdge(e, n), n;
		}), this;
	}, o.prototype.setEdge = function() {
		var e, t, r, i, a = !1, o = arguments[0];
		typeof o == "object" && o && "v" in o ? (e = o.v, t = o.w, r = o.name, arguments.length === 2 && (i = arguments[1], a = !0)) : (e = o, t = arguments[1], r = arguments[3], arguments.length > 2 && (i = arguments[2], a = !0)), e = "" + e, t = "" + t, n.isUndefined(r) || (r = "" + r);
		var c = l(this._isDirected, e, t, r);
		if (n.has(this._edgeLabels, c)) return a && (this._edgeLabels[c] = i), this;
		if (!n.isUndefined(r) && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(e), this.setNode(t), this._edgeLabels[c] = a ? i : this._defaultEdgeLabelFn(e, t, r);
		var d = u(this._isDirected, e, t, r);
		return e = d.v, t = d.w, Object.freeze(d), this._edgeObjs[c] = d, s(this._preds[t], e), s(this._sucs[e], t), this._in[t][c] = d, this._out[e][c] = d, this._edgeCount++, this;
	}, o.prototype.edge = function(e, t, n) {
		var r = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}, o.prototype.hasEdge = function(e, t, r) {
		var i = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, e, t, r);
		return n.has(this._edgeLabels, i);
	}, o.prototype.removeEdge = function(e, t, n) {
		var r = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, e, t, n), i = this._edgeObjs[r];
		return i && (e = i.v, t = i.w, delete this._edgeLabels[r], delete this._edgeObjs[r], c(this._preds[t], e), c(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--), this;
	}, o.prototype.inEdges = function(e, t) {
		var r = this._in[e];
		if (r) {
			var i = n.values(r);
			return t ? n.filter(i, function(e) {
				return e.v === t;
			}) : i;
		}
	}, o.prototype.outEdges = function(e, t) {
		var r = this._out[e];
		if (r) {
			var i = n.values(r);
			return t ? n.filter(i, function(e) {
				return e.w === t;
			}) : i;
		}
	}, o.prototype.nodeEdges = function(e, t) {
		var n = this.inEdges(e, t);
		if (n) return n.concat(this.outEdges(e, t));
	};
	function s(e, t) {
		e[t] ? e[t]++ : e[t] = 1;
	}
	function c(e, t) {
		--e[t] || delete e[t];
	}
	function l(e, t, i, o) {
		var s = "" + t, c = "" + i;
		if (!e && s > c) {
			var l = s;
			s = c, c = l;
		}
		return s + a + c + a + (n.isUndefined(o) ? r : o);
	}
	function u(e, t, n, r) {
		var i = "" + t, a = "" + n;
		if (!e && i > a) {
			var o = i;
			i = a, a = o;
		}
		var s = {
			v: i,
			w: a
		};
		return r && (s.name = r), s;
	}
	function d(e, t) {
		return l(e, t.v, t.w, t.name);
	}
})), yd = /* @__PURE__ */ Z(((e, t) => {
	t.exports = "2.1.8";
})), bd = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		Graph: vd(),
		version: yd()
	};
})), xd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d(), r = vd();
	t.exports = {
		write: i,
		read: s
	};
	function i(e) {
		var t = {
			options: {
				directed: e.isDirected(),
				multigraph: e.isMultigraph(),
				compound: e.isCompound()
			},
			nodes: a(e),
			edges: o(e)
		};
		return n.isUndefined(e.graph()) || (t.value = n.clone(e.graph())), t;
	}
	function a(e) {
		return n.map(e.nodes(), function(t) {
			var r = e.node(t), i = e.parent(t), a = { v: t };
			return n.isUndefined(r) || (a.value = r), n.isUndefined(i) || (a.parent = i), a;
		});
	}
	function o(e) {
		return n.map(e.edges(), function(t) {
			var r = e.edge(t), i = {
				v: t.v,
				w: t.w
			};
			return n.isUndefined(t.name) || (i.name = t.name), n.isUndefined(r) || (i.value = r), i;
		});
	}
	function s(e) {
		var t = new r(e.options).setGraph(e.value);
		return n.each(e.nodes, function(e) {
			t.setNode(e.v, e.value), e.parent && t.setParent(e.v, e.parent);
		}), n.each(e.edges, function(e) {
			t.setEdge({
				v: e.v,
				w: e.w,
				name: e.name
			}, e.value);
		}), t;
	}
})), Sd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = r;
	function r(e) {
		var t = {}, r = [], i;
		function a(r) {
			n.has(t, r) || (t[r] = !0, i.push(r), n.each(e.successors(r), a), n.each(e.predecessors(r), a));
		}
		return n.each(e.nodes(), function(e) {
			i = [], a(e), i.length && r.push(i);
		}), r;
	}
})), Cd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = r;
	function r() {
		this._arr = [], this._keyIndices = {};
	}
	r.prototype.size = function() {
		return this._arr.length;
	}, r.prototype.keys = function() {
		return this._arr.map(function(e) {
			return e.key;
		});
	}, r.prototype.has = function(e) {
		return n.has(this._keyIndices, e);
	}, r.prototype.priority = function(e) {
		var t = this._keyIndices[e];
		if (t !== void 0) return this._arr[t].priority;
	}, r.prototype.min = function() {
		if (this.size() === 0) throw Error("Queue underflow");
		return this._arr[0].key;
	}, r.prototype.add = function(e, t) {
		var r = this._keyIndices;
		if (e = String(e), !n.has(r, e)) {
			var i = this._arr, a = i.length;
			return r[e] = a, i.push({
				key: e,
				priority: t
			}), this._decrease(a), !0;
		}
		return !1;
	}, r.prototype.removeMin = function() {
		this._swap(0, this._arr.length - 1);
		var e = this._arr.pop();
		return delete this._keyIndices[e.key], this._heapify(0), e.key;
	}, r.prototype.decrease = function(e, t) {
		var n = this._keyIndices[e];
		if (t > this._arr[n].priority) throw Error("New priority is greater than current priority. Key: " + e + " Old: " + this._arr[n].priority + " New: " + t);
		this._arr[n].priority = t, this._decrease(n);
	}, r.prototype._heapify = function(e) {
		var t = this._arr, n = 2 * e, r = n + 1, i = e;
		n < t.length && (i = t[n].priority < t[i].priority ? n : i, r < t.length && (i = t[r].priority < t[i].priority ? r : i), i !== e && (this._swap(e, i), this._heapify(i)));
	}, r.prototype._decrease = function(e) {
		for (var t = this._arr, n = t[e].priority, r; e !== 0 && (r = e >> 1, !(t[r].priority < n));) this._swap(e, r), e = r;
	}, r.prototype._swap = function(e, t) {
		var n = this._arr, r = this._keyIndices, i = n[e], a = n[t];
		n[e] = a, n[t] = i, r[a.key] = e, r[i.key] = t;
	};
})), wd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d(), r = Cd();
	t.exports = a;
	var i = n.constant(1);
	function a(e, t, n, r) {
		return o(e, String(t), n || i, r || function(t) {
			return e.outEdges(t);
		});
	}
	function o(e, t, n, i) {
		var a = {}, o = new r(), s, c, l = function(e) {
			var t = e.v === s ? e.w : e.v, r = a[t], i = n(e), l = c.distance + i;
			if (i < 0) throw Error("dijkstra does not allow negative edge weights. Bad edge: " + e + " Weight: " + i);
			l < r.distance && (r.distance = l, r.predecessor = s, o.decrease(t, l));
		};
		for (e.nodes().forEach(function(e) {
			var n = e === t ? 0 : Infinity;
			a[e] = { distance: n }, o.add(e, n);
		}); o.size() > 0 && (s = o.removeMin(), c = a[s], c.distance !== Infinity);) i(s).forEach(l);
		return a;
	}
})), Td = /* @__PURE__ */ Z(((e, t) => {
	var n = wd(), r = _d();
	t.exports = i;
	function i(e, t, i) {
		return r.transform(e.nodes(), function(r, a) {
			r[a] = n(e, a, t, i);
		}, {});
	}
})), Ed = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = r;
	function r(e) {
		var t = 0, r = [], i = {}, a = [];
		function o(s) {
			var c = i[s] = {
				onStack: !0,
				lowlink: t,
				index: t++
			};
			if (r.push(s), e.successors(s).forEach(function(e) {
				n.has(i, e) ? i[e].onStack && (c.lowlink = Math.min(c.lowlink, i[e].index)) : (o(e), c.lowlink = Math.min(c.lowlink, i[e].lowlink));
			}), c.lowlink === c.index) {
				var l = [], u;
				do
					u = r.pop(), i[u].onStack = !1, l.push(u);
				while (s !== u);
				a.push(l);
			}
		}
		return e.nodes().forEach(function(e) {
			n.has(i, e) || o(e);
		}), a;
	}
})), Dd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d(), r = Ed();
	t.exports = i;
	function i(e) {
		return n.filter(r(e), function(t) {
			return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
		});
	}
})), Od = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = i;
	var r = n.constant(1);
	function i(e, t, n) {
		return a(e, t || r, n || function(t) {
			return e.outEdges(t);
		});
	}
	function a(e, t, n) {
		var r = {}, i = e.nodes();
		return i.forEach(function(e) {
			r[e] = {}, r[e][e] = { distance: 0 }, i.forEach(function(t) {
				e !== t && (r[e][t] = { distance: Infinity });
			}), n(e).forEach(function(n) {
				var i = n.v === e ? n.w : n.v, a = t(n);
				r[e][i] = {
					distance: a,
					predecessor: e
				};
			});
		}), i.forEach(function(e) {
			var t = r[e];
			i.forEach(function(n) {
				var a = r[n];
				i.forEach(function(n) {
					var r = a[e], i = t[n], o = a[n], s = r.distance + i.distance;
					s < o.distance && (o.distance = s, o.predecessor = i.predecessor);
				});
			});
		}), r;
	}
})), kd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = r, r.CycleException = i;
	function r(e) {
		var t = {}, r = {}, a = [];
		function o(s) {
			if (n.has(r, s)) throw new i();
			n.has(t, s) || (r[s] = !0, t[s] = !0, n.each(e.predecessors(s), o), delete r[s], a.push(s));
		}
		if (n.each(e.sinks(), o), n.size(t) !== e.nodeCount()) throw new i();
		return a;
	}
	function i() {}
	i.prototype = /* @__PURE__ */ Error();
})), Ad = /* @__PURE__ */ Z(((e, t) => {
	var n = kd();
	t.exports = r;
	function r(e) {
		try {
			n(e);
		} catch (e) {
			if (e instanceof n.CycleException) return !1;
			throw e;
		}
		return !0;
	}
})), jd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d();
	t.exports = r;
	function r(e, t, r) {
		n.isArray(t) || (t = [t]);
		var a = (e.isDirected() ? e.successors : e.neighbors).bind(e), o = [], s = {};
		return n.each(t, function(t) {
			if (!e.hasNode(t)) throw Error("Graph does not have node: " + t);
			i(e, t, r === "post", s, a, o);
		}), o;
	}
	function i(e, t, r, a, o, s) {
		n.has(a, t) || (a[t] = !0, r || s.push(t), n.each(o(t), function(t) {
			i(e, t, r, a, o, s);
		}), r && s.push(t));
	}
})), Md = /* @__PURE__ */ Z(((e, t) => {
	var n = jd();
	t.exports = r;
	function r(e, t) {
		return n(e, t, "post");
	}
})), Nd = /* @__PURE__ */ Z(((e, t) => {
	var n = jd();
	t.exports = r;
	function r(e, t) {
		return n(e, t, "pre");
	}
})), Pd = /* @__PURE__ */ Z(((e, t) => {
	var n = _d(), r = vd(), i = Cd();
	t.exports = a;
	function a(e, t) {
		var a = new r(), o = {}, s = new i(), c;
		function l(e) {
			var n = e.v === c ? e.w : e.v, r = s.priority(n);
			if (r !== void 0) {
				var i = t(e);
				i < r && (o[n] = c, s.decrease(n, i));
			}
		}
		if (e.nodeCount() === 0) return a;
		n.each(e.nodes(), function(e) {
			s.add(e, Infinity), a.setNode(e);
		}), s.decrease(e.nodes()[0], 0);
		for (var u = !1; s.size() > 0;) {
			if (c = s.removeMin(), n.has(o, c)) a.setEdge(c, o[c]);
			else if (u) throw Error("Input graph is not connected: " + e);
			else u = !0;
			e.nodeEdges(c).forEach(l);
		}
		return a;
	}
})), Fd = /* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		components: Sd(),
		dijkstra: wd(),
		dijkstraAll: Td(),
		findCycles: Dd(),
		floydWarshall: Od(),
		isAcyclic: Ad(),
		postorder: Md(),
		preorder: Nd(),
		prim: Pd(),
		tarjan: Ed(),
		topsort: kd()
	};
})), Id = /* @__PURE__ */ Z(((e, t) => {
	var n = bd();
	t.exports = {
		Graph: n.Graph,
		json: xd(),
		alg: Fd(),
		version: n.version
	};
})), Ld = /* @__PURE__ */ Z(((e, t) => {
	var n;
	if (typeof ht == "function") try {
		n = Id();
	} catch {}
	n ||= window.graphlib, t.exports = n;
})), Rd = /* @__PURE__ */ Z(((e, t) => {
	var n = Mo(), r = Fn(), i = In(), a = So(), o = Object.prototype, s = o.hasOwnProperty;
	t.exports = n(function(e, t) {
		e = Object(e);
		var n = -1, c = t.length, l = c > 2 ? t[2] : void 0;
		for (l && i(t[0], t[1], l) && (c = 1); ++n < c;) for (var u = t[n], d = a(u), f = -1, p = d.length; ++f < p;) {
			var m = d[f], h = e[m];
			(h === void 0 || r(h, o[m]) && !s.call(e, m)) && (e[m] = u[m]);
		}
		return e;
	});
})), zd = /* @__PURE__ */ Z(((e, t) => {
	var n = Za(), r = rd(), i = So();
	function a(e, t) {
		return e == null ? e : n(e, r(t), i);
	}
	t.exports = a;
})), Bd = /* @__PURE__ */ Z(((e, t) => {
	var n = ao(), r = Qa(), i = ai();
	function a(e, t) {
		var a = {};
		return t = i(t, 3), r(e, function(e, r, i) {
			n(a, r, t(e, r, i));
		}), a;
	}
	t.exports = a;
})), Vd = /* @__PURE__ */ Z(((e, t) => {
	var n = nc(), r = rc(), i = ti();
	function a(e) {
		return e && e.length ? n(e, i, r) : void 0;
	}
	t.exports = a;
})), Hd = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		return e < t;
	}
	t.exports = n;
})), Ud = /* @__PURE__ */ Z(((e, t) => {
	var n = nc(), r = Hd(), i = ti();
	function a(e) {
		return e && e.length ? n(e, i, r) : void 0;
	}
	t.exports = a;
})), Wd = /* @__PURE__ */ Z(((e, t) => {
	var n = nc(), r = ai(), i = Hd();
	function a(e, t) {
		return e && e.length ? n(e, r(t, 2), i) : void 0;
	}
	t.exports = a;
})), Gd = /* @__PURE__ */ Z(((e, t) => {
	var n = kt();
	t.exports = function() {
		return n.Date.now();
	};
})), Kd = /* @__PURE__ */ Z(((e, t) => {
	var n = _r(), r = Js(), i = hr();
	function a(e, t, a) {
		for (var o = -1, s = t.length, c = {}; ++o < s;) {
			var l = t[o], u = n(e, l);
			a(u, l) && r(c, i(l, e), u);
		}
		return c;
	}
	t.exports = a;
})), qd = /* @__PURE__ */ Z(((e, t) => {
	var n = Kd(), r = $r();
	function i(e, t) {
		return n(e, t, function(t, n) {
			return r(e, n);
		});
	}
	t.exports = i;
})), Jd = /* @__PURE__ */ Z(((e, t) => {
	var n = qd();
	t.exports = Us()(function(e, t) {
		return e == null ? {} : n(e, t);
	});
})), Yd = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t) {
		var n = e.length;
		for (e.sort(t); n--;) e[n] = e[n].value;
		return e;
	}
	t.exports = n;
})), Xd = /* @__PURE__ */ Z(((e, t) => {
	var n = fn();
	function r(e, t) {
		if (e !== t) {
			var r = e !== void 0, i = e === null, a = e === e, o = n(e), s = t !== void 0, c = t === null, l = t === t, u = n(t);
			if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
			if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
		}
		return 0;
	}
	t.exports = r;
})), Zd = /* @__PURE__ */ Z(((e, t) => {
	var n = Xd();
	function r(e, t, r) {
		for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length; ++i < s;) {
			var l = n(a[i], o[i]);
			if (l) return i >= c ? l : l * (r[i] == "desc" ? -1 : 1);
		}
		return e.index - t.index;
	}
	t.exports = r;
})), Qd = /* @__PURE__ */ Z(((e, t) => {
	var n = dn(), r = _r(), i = ai(), a = od(), o = Yd(), s = rn(), c = Zd(), l = ti(), u = Zt();
	function d(e, t, d) {
		t = t.length ? n(t, function(e) {
			return u(e) ? function(t) {
				return r(t, e.length === 1 ? e[0] : e);
			} : e;
		}) : [l];
		var f = -1;
		return t = n(t, s(i)), o(a(e, function(e, r, i) {
			return {
				criteria: n(t, function(t) {
					return t(e);
				}),
				index: ++f,
				value: e
			};
		}), function(e, t) {
			return c(e, t, d);
		});
	}
	t.exports = d;
})), $d = /* @__PURE__ */ Z(((e, t) => {
	var n = Vs(), r = Qd(), i = Mo(), a = In();
	t.exports = i(function(e, t) {
		if (e == null) return [];
		var i = t.length;
		return i > 1 && a(e, t[0], t[1]) ? t = [] : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]), r(e, n(t, 1), []);
	});
})), ef = /* @__PURE__ */ Z(((e, t) => {
	var n = mn(), r = 0;
	function i(e) {
		var t = ++r;
		return n(e) + t;
	}
	t.exports = i;
})), tf = /* @__PURE__ */ Z(((e, t) => {
	function n(e, t, n) {
		for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i;) {
			var s = r < a ? t[r] : void 0;
			n(o, e[r], s);
		}
		return o;
	}
	t.exports = n;
})), nf = /* @__PURE__ */ Z(((e, t) => {
	var n = vo(), r = tf();
	function i(e, t) {
		return r(e || [], t || [], n);
	}
	t.exports = i;
})), rf = /* @__PURE__ */ Z(((e, t) => {
	var n;
	if (typeof ht == "function") try {
		n = {
			cloneDeep: Qo(),
			constant: Oo(),
			defaults: Rd(),
			each: ad(),
			filter: no(),
			find: ui(),
			flatten: Hs(),
			forEach: id(),
			forIn: zd(),
			has: xr(),
			isUndefined: hc(),
			last: Zs(),
			map: sd(),
			mapValues: Bd(),
			max: Vd(),
			merge: Po(),
			min: Ud(),
			minBy: Wd(),
			now: Gd(),
			pick: Jd(),
			range: Hn(),
			reduce: uc(),
			sortBy: $d(),
			uniqueId: ef(),
			values: gi(),
			zipObject: nf()
		};
	} catch {}
	n ||= window._, t.exports = n;
})), af = /* @__PURE__ */ Z(((e, t) => {
	t.exports = n;
	function n() {
		var e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	n.prototype.dequeue = function() {
		var e = this._sentinel, t = e._prev;
		if (t !== e) return r(t), t;
	}, n.prototype.enqueue = function(e) {
		var t = this._sentinel;
		e._prev && e._next && r(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}, n.prototype.toString = function() {
		for (var e = [], t = this._sentinel, n = t._prev; n !== t;) e.push(JSON.stringify(n, i)), n = n._prev;
		return "[" + e.join(", ") + "]";
	};
	function r(e) {
		e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
	}
	function i(e, t) {
		if (e !== "_next" && e !== "_prev") return t;
	}
})), of = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = Ld().Graph, i = af();
	t.exports = o;
	var a = n.constant(1);
	function o(e, t) {
		if (e.nodeCount() <= 1) return [];
		var r = l(e, t || a), i = s(r.graph, r.buckets, r.zeroIdx);
		return n.flatten(n.map(i, function(t) {
			return e.outEdges(t.v, t.w);
		}), !0);
	}
	function s(e, t, n) {
		for (var r = [], i = t[t.length - 1], a = t[0], o; e.nodeCount();) {
			for (; o = a.dequeue();) c(e, t, n, o);
			for (; o = i.dequeue();) c(e, t, n, o);
			if (e.nodeCount()) {
				for (var s = t.length - 2; s > 0; --s) if (o = t[s].dequeue(), o) {
					r = r.concat(c(e, t, n, o, !0));
					break;
				}
			}
		}
		return r;
	}
	function c(e, t, r, i, a) {
		var o = a ? [] : void 0;
		return n.forEach(e.inEdges(i.v), function(n) {
			var i = e.edge(n), s = e.node(n.v);
			a && o.push({
				v: n.v,
				w: n.w
			}), s.out -= i, u(t, r, s);
		}), n.forEach(e.outEdges(i.v), function(n) {
			var i = e.edge(n), a = n.w, o = e.node(a);
			o.in -= i, u(t, r, o);
		}), e.removeNode(i.v), o;
	}
	function l(e, t) {
		var a = new r(), o = 0, s = 0;
		n.forEach(e.nodes(), function(e) {
			a.setNode(e, {
				v: e,
				in: 0,
				out: 0
			});
		}), n.forEach(e.edges(), function(e) {
			var n = a.edge(e.v, e.w) || 0, r = t(e), i = n + r;
			a.setEdge(e.v, e.w, i), s = Math.max(s, a.node(e.v).out += r), o = Math.max(o, a.node(e.w).in += r);
		});
		var c = n.range(s + o + 3).map(function() {
			return new i();
		}), l = o + 1;
		return n.forEach(a.nodes(), function(e) {
			u(c, l, a.node(e));
		}), {
			graph: a,
			buckets: c,
			zeroIdx: l
		};
	}
	function u(e, t, n) {
		n.out ? n.in ? e[n.out - n.in + t].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n);
	}
})), sf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = of();
	t.exports = {
		run: i,
		undo: o
	};
	function i(e) {
		var t = e.graph().acyclicer === "greedy" ? r(e, i(e)) : a(e);
		n.forEach(t, function(t) {
			var r = e.edge(t);
			e.removeEdge(t), r.forwardName = t.name, r.reversed = !0, e.setEdge(t.w, t.v, r, n.uniqueId("rev"));
		});
		function i(e) {
			return function(t) {
				return e.edge(t).weight;
			};
		}
	}
	function a(e) {
		var t = [], r = {}, i = {};
		function a(o) {
			n.has(i, o) || (i[o] = !0, r[o] = !0, n.forEach(e.outEdges(o), function(e) {
				n.has(r, e.w) ? t.push(e) : a(e.w);
			}), delete r[o]);
		}
		return n.forEach(e.nodes(), a), t;
	}
	function o(e) {
		n.forEach(e.edges(), function(t) {
			var n = e.edge(t);
			if (n.reversed) {
				e.removeEdge(t);
				var r = n.forwardName;
				delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
			}
		});
	}
})), cf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = Ld().Graph;
	t.exports = {
		addDummyNode: i,
		simplify: a,
		asNonCompoundGraph: o,
		successorWeights: s,
		predecessorWeights: c,
		intersectRect: l,
		buildLayerMatrix: u,
		normalizeRanks: d,
		removeEmptyRanks: f,
		addBorderNode: p,
		maxRank: m,
		partition: h,
		time: g,
		notime: _
	};
	function i(e, t, r, i) {
		var a;
		do
			a = n.uniqueId(i);
		while (e.hasNode(a));
		return r.dummy = t, e.setNode(a, r), a;
	}
	function a(e) {
		var t = new r().setGraph(e.graph());
		return n.forEach(e.nodes(), function(n) {
			t.setNode(n, e.node(n));
		}), n.forEach(e.edges(), function(n) {
			var r = t.edge(n.v, n.w) || {
				weight: 0,
				minlen: 1
			}, i = e.edge(n);
			t.setEdge(n.v, n.w, {
				weight: r.weight + i.weight,
				minlen: Math.max(r.minlen, i.minlen)
			});
		}), t;
	}
	function o(e) {
		var t = new r({ multigraph: e.isMultigraph() }).setGraph(e.graph());
		return n.forEach(e.nodes(), function(n) {
			e.children(n).length || t.setNode(n, e.node(n));
		}), n.forEach(e.edges(), function(n) {
			t.setEdge(n, e.edge(n));
		}), t;
	}
	function s(e) {
		var t = n.map(e.nodes(), function(t) {
			var r = {};
			return n.forEach(e.outEdges(t), function(t) {
				r[t.w] = (r[t.w] || 0) + e.edge(t).weight;
			}), r;
		});
		return n.zipObject(e.nodes(), t);
	}
	function c(e) {
		var t = n.map(e.nodes(), function(t) {
			var r = {};
			return n.forEach(e.inEdges(t), function(t) {
				r[t.v] = (r[t.v] || 0) + e.edge(t).weight;
			}), r;
		});
		return n.zipObject(e.nodes(), t);
	}
	function l(e, t) {
		var n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
		if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
		var c, l;
		return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
			x: n + c,
			y: r + l
		};
	}
	function u(e) {
		var t = n.map(n.range(m(e) + 1), function() {
			return [];
		});
		return n.forEach(e.nodes(), function(r) {
			var i = e.node(r), a = i.rank;
			n.isUndefined(a) || (t[a][i.order] = r);
		}), t;
	}
	function d(e) {
		var t = n.min(n.map(e.nodes(), function(t) {
			return e.node(t).rank;
		}));
		n.forEach(e.nodes(), function(r) {
			var i = e.node(r);
			n.has(i, "rank") && (i.rank -= t);
		});
	}
	function f(e) {
		var t = n.min(n.map(e.nodes(), function(t) {
			return e.node(t).rank;
		})), r = [];
		n.forEach(e.nodes(), function(n) {
			var i = e.node(n).rank - t;
			r[i] || (r[i] = []), r[i].push(n);
		});
		var i = 0, a = e.graph().nodeRankFactor;
		n.forEach(r, function(t, r) {
			n.isUndefined(t) && r % a !== 0 ? --i : i && n.forEach(t, function(t) {
				e.node(t).rank += i;
			});
		});
	}
	function p(e, t, n, r) {
		var a = {
			width: 0,
			height: 0
		};
		return arguments.length >= 4 && (a.rank = n, a.order = r), i(e, "border", a, t);
	}
	function m(e) {
		return n.max(n.map(e.nodes(), function(t) {
			var r = e.node(t).rank;
			if (!n.isUndefined(r)) return r;
		}));
	}
	function h(e, t) {
		var r = {
			lhs: [],
			rhs: []
		};
		return n.forEach(e, function(e) {
			t(e) ? r.lhs.push(e) : r.rhs.push(e);
		}), r;
	}
	function g(e, t) {
		var r = n.now();
		try {
			return t();
		} finally {
			console.log(e + " time: " + (n.now() - r) + "ms");
		}
	}
	function _(e, t) {
		return t();
	}
})), lf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf();
	t.exports = {
		run: i,
		undo: o
	};
	function i(e) {
		e.graph().dummyChains = [], n.forEach(e.edges(), function(t) {
			a(e, t);
		});
	}
	function a(e, t) {
		var n = t.v, i = e.node(n).rank, a = t.w, o = e.node(a).rank, s = t.name, c = e.edge(t), l = c.labelRank;
		if (o !== i + 1) {
			e.removeEdge(t);
			var u, d, f = 0;
			for (++i; i < o; ++f, ++i) c.points = [], d = {
				width: 0,
				height: 0,
				edgeLabel: c,
				edgeObj: t,
				rank: i
			}, u = r.addDummyNode(e, "edge", d, "_d"), i === l && (d.width = c.width, d.height = c.height, d.dummy = "edge-label", d.labelpos = c.labelpos), e.setEdge(n, u, { weight: c.weight }, s), f === 0 && e.graph().dummyChains.push(u), n = u;
			e.setEdge(n, a, { weight: c.weight }, s);
		}
	}
	function o(e) {
		n.forEach(e.graph().dummyChains, function(t) {
			var n = e.node(t), r = n.edgeLabel, i;
			for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
				x: n.x,
				y: n.y
			}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
		});
	}
})), uf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = {
		longestPath: r,
		slack: i
	};
	function r(e) {
		var t = {};
		function r(i) {
			var a = e.node(i);
			if (n.has(t, i)) return a.rank;
			t[i] = !0;
			var o = n.min(n.map(e.outEdges(i), function(t) {
				return r(t.w) - e.edge(t).minlen;
			}));
			return (o === Infinity || o == null) && (o = 0), a.rank = o;
		}
		n.forEach(e.sources(), r);
	}
	function i(e, t) {
		return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
	}
})), df = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = Ld().Graph, i = uf().slack;
	t.exports = a;
	function a(e) {
		var t = new r({ directed: !1 }), n = e.nodes()[0], a = e.nodeCount();
		t.setNode(n, {});
		for (var l, u; o(t, e) < a;) l = s(t, e), u = t.hasNode(l.v) ? i(e, l) : -i(e, l), c(t, e, u);
		return t;
	}
	function o(e, t) {
		function r(a) {
			n.forEach(t.nodeEdges(a), function(n) {
				var o = n.v, s = a === o ? n.w : o;
				!e.hasNode(s) && !i(t, n) && (e.setNode(s, {}), e.setEdge(a, s, {}), r(s));
			});
		}
		return n.forEach(e.nodes(), r), e.nodeCount();
	}
	function s(e, t) {
		return n.minBy(t.edges(), function(n) {
			if (e.hasNode(n.v) !== e.hasNode(n.w)) return i(t, n);
		});
	}
	function c(e, t, r) {
		n.forEach(e.nodes(), function(e) {
			t.node(e).rank += r;
		});
	}
})), ff = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = df(), i = uf().slack, a = uf().longestPath, o = Ld().alg.preorder, s = Ld().alg.postorder, c = cf().simplify;
	t.exports = l, l.initLowLimValues = p, l.initCutValues = u, l.calcCutValue = f, l.leaveEdge = h, l.enterEdge = g, l.exchangeEdges = _;
	function l(e) {
		e = c(e), a(e);
		var t = r(e);
		p(t), u(t, e);
		for (var n, i; n = h(t);) i = g(t, e, n), _(t, e, n, i);
	}
	function u(e, t) {
		var r = s(e, e.nodes());
		r = r.slice(0, r.length - 1), n.forEach(r, function(n) {
			d(e, t, n);
		});
	}
	function d(e, t, n) {
		var r = e.node(n).parent;
		e.edge(n, r).cutvalue = f(e, t, n);
	}
	function f(e, t, r) {
		var i = e.node(r).parent, a = !0, o = t.edge(r, i), s = 0;
		return o ||= (a = !1, t.edge(i, r)), s = o.weight, n.forEach(t.nodeEdges(r), function(n) {
			var o = n.v === r, c = o ? n.w : n.v;
			if (c !== i) {
				var l = o === a, u = t.edge(n).weight;
				if (s += l ? u : -u, y(e, r, c)) {
					var d = e.edge(r, c).cutvalue;
					s += l ? -d : d;
				}
			}
		}), s;
	}
	function p(e, t) {
		arguments.length < 2 && (t = e.nodes()[0]), m(e, {}, 1, t);
	}
	function m(e, t, r, i, a) {
		var o = r, s = e.node(i);
		return t[i] = !0, n.forEach(e.neighbors(i), function(a) {
			n.has(t, a) || (r = m(e, t, r, a, i));
		}), s.low = o, s.lim = r++, a ? s.parent = a : delete s.parent, r;
	}
	function h(e) {
		return n.find(e.edges(), function(t) {
			return e.edge(t).cutvalue < 0;
		});
	}
	function g(e, t, r) {
		var a = r.v, o = r.w;
		t.hasEdge(a, o) || (a = r.w, o = r.v);
		var s = e.node(a), c = e.node(o), l = s, u = !1;
		s.lim > c.lim && (l = c, u = !0);
		var d = n.filter(t.edges(), function(t) {
			return u === b(e, e.node(t.v), l) && u !== b(e, e.node(t.w), l);
		});
		return n.minBy(d, function(e) {
			return i(t, e);
		});
	}
	function _(e, t, n, r) {
		var i = n.v, a = n.w;
		e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), p(e), u(e, t), v(e, t);
	}
	function v(e, t) {
		var r = o(e, n.find(e.nodes(), function(e) {
			return !t.node(e).parent;
		}));
		r = r.slice(1), n.forEach(r, function(n) {
			var r = e.node(n).parent, i = t.edge(n, r), a = !1;
			i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
		});
	}
	function y(e, t, n) {
		return e.hasEdge(t, n);
	}
	function b(e, t, n) {
		return n.low <= t.lim && t.lim <= n.lim;
	}
})), pf = /* @__PURE__ */ Z(((e, t) => {
	var n = uf().longestPath, r = df(), i = ff();
	t.exports = a;
	function a(e) {
		switch (e.graph().ranker) {
			case "network-simplex":
				c(e);
				break;
			case "tight-tree":
				s(e);
				break;
			case "longest-path":
				o(e);
				break;
			default: c(e);
		}
	}
	var o = n;
	function s(e) {
		n(e), r(e);
	}
	function c(e) {
		i(e);
	}
})), mf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e) {
		var t = a(e);
		n.forEach(e.graph().dummyChains, function(n) {
			for (var r = e.node(n), a = r.edgeObj, o = i(e, t, a.v, a.w), s = o.path, c = o.lca, l = 0, u = s[l], d = !0; n !== a.w;) {
				if (r = e.node(n), d) {
					for (; (u = s[l]) !== c && e.node(u).maxRank < r.rank;) l++;
					u === c && (d = !1);
				}
				if (!d) {
					for (; l < s.length - 1 && e.node(u = s[l + 1]).minRank <= r.rank;) l++;
					u = s[l];
				}
				e.setParent(n, u), n = e.successors(n)[0];
			}
		});
	}
	function i(e, t, n, r) {
		var i = [], a = [], o = Math.min(t[n].low, t[r].low), s = Math.max(t[n].lim, t[r].lim), c = n, l;
		do
			c = e.parent(c), i.push(c);
		while (c && (t[c].low > o || s > t[c].lim));
		for (l = c, c = r; (c = e.parent(c)) !== l;) a.push(c);
		return {
			path: i.concat(a.reverse()),
			lca: l
		};
	}
	function a(e) {
		var t = {}, r = 0;
		function i(a) {
			var o = r;
			n.forEach(e.children(a), i), t[a] = {
				low: o,
				lim: r++
			};
		}
		return n.forEach(e.children(), i), t;
	}
})), hf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf();
	t.exports = {
		run: i,
		cleanup: c
	};
	function i(e) {
		var t = r.addDummyNode(e, "root", {}, "_root"), i = o(e), c = n.max(n.values(i)) - 1, l = 2 * c + 1;
		e.graph().nestingRoot = t, n.forEach(e.edges(), function(t) {
			e.edge(t).minlen *= l;
		});
		var u = s(e) + 1;
		n.forEach(e.children(), function(n) {
			a(e, t, l, u, c, i, n);
		}), e.graph().nodeRankFactor = l;
	}
	function a(e, t, i, o, s, c, l) {
		var u = e.children(l);
		if (!u.length) {
			l !== t && e.setEdge(t, l, {
				weight: 0,
				minlen: i
			});
			return;
		}
		var d = r.addBorderNode(e, "_bt"), f = r.addBorderNode(e, "_bb"), p = e.node(l);
		e.setParent(d, l), p.borderTop = d, e.setParent(f, l), p.borderBottom = f, n.forEach(u, function(n) {
			a(e, t, i, o, s, c, n);
			var r = e.node(n), u = r.borderTop ? r.borderTop : n, p = r.borderBottom ? r.borderBottom : n, m = r.borderTop ? o : 2 * o, h = u === p ? s - c[l] + 1 : 1;
			e.setEdge(d, u, {
				weight: m,
				minlen: h,
				nestingEdge: !0
			}), e.setEdge(p, f, {
				weight: m,
				minlen: h,
				nestingEdge: !0
			});
		}), e.parent(l) || e.setEdge(t, d, {
			weight: 0,
			minlen: s + c[l]
		});
	}
	function o(e) {
		var t = {};
		function r(i, a) {
			var o = e.children(i);
			o && o.length && n.forEach(o, function(e) {
				r(e, a + 1);
			}), t[i] = a;
		}
		return n.forEach(e.children(), function(e) {
			r(e, 1);
		}), t;
	}
	function s(e) {
		return n.reduce(e.edges(), function(t, n) {
			return t + e.edge(n).weight;
		}, 0);
	}
	function c(e) {
		var t = e.graph();
		e.removeNode(t.nestingRoot), delete t.nestingRoot, n.forEach(e.edges(), function(t) {
			e.edge(t).nestingEdge && e.removeEdge(t);
		});
	}
})), gf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf();
	t.exports = i;
	function i(e) {
		function t(r) {
			var i = e.children(r), o = e.node(r);
			if (i.length && n.forEach(i, t), n.has(o, "minRank")) {
				o.borderLeft = [], o.borderRight = [];
				for (var s = o.minRank, c = o.maxRank + 1; s < c; ++s) a(e, "borderLeft", "_bl", r, o, s), a(e, "borderRight", "_br", r, o, s);
			}
		}
		n.forEach(e.children(), t);
	}
	function a(e, t, n, i, a, o) {
		var s = {
			width: 0,
			height: 0,
			rank: o,
			borderType: t
		}, c = a[t][o - 1], l = r.addDummyNode(e, "border", s, n);
		a[t][o] = l, e.setParent(l, i), c && e.setEdge(c, l, { weight: 1 });
	}
})), _f = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = {
		adjust: r,
		undo: i
	};
	function r(e) {
		var t = e.graph().rankdir.toLowerCase();
		(t === "lr" || t === "rl") && a(e);
	}
	function i(e) {
		var t = e.graph().rankdir.toLowerCase();
		(t === "bt" || t === "rl") && s(e), (t === "lr" || t === "rl") && (l(e), a(e));
	}
	function a(e) {
		n.forEach(e.nodes(), function(t) {
			o(e.node(t));
		}), n.forEach(e.edges(), function(t) {
			o(e.edge(t));
		});
	}
	function o(e) {
		var t = e.width;
		e.width = e.height, e.height = t;
	}
	function s(e) {
		n.forEach(e.nodes(), function(t) {
			c(e.node(t));
		}), n.forEach(e.edges(), function(t) {
			var r = e.edge(t);
			n.forEach(r.points, c), n.has(r, "y") && c(r);
		});
	}
	function c(e) {
		e.y = -e.y;
	}
	function l(e) {
		n.forEach(e.nodes(), function(t) {
			u(e.node(t));
		}), n.forEach(e.edges(), function(t) {
			var r = e.edge(t);
			n.forEach(r.points, u), n.has(r, "x") && u(r);
		});
	}
	function u(e) {
		var t = e.x;
		e.x = e.y, e.y = t;
	}
})), vf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e) {
		var t = {}, r = n.filter(e.nodes(), function(t) {
			return !e.children(t).length;
		}), i = n.max(n.map(r, function(t) {
			return e.node(t).rank;
		})), a = n.map(n.range(i + 1), function() {
			return [];
		});
		function o(r) {
			n.has(t, r) || (t[r] = !0, a[e.node(r).rank].push(r), n.forEach(e.successors(r), o));
		}
		var s = n.sortBy(r, function(t) {
			return e.node(t).rank;
		});
		return n.forEach(s, o), a;
	}
})), yf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e, t) {
		for (var n = 0, r = 1; r < t.length; ++r) n += i(e, t[r - 1], t[r]);
		return n;
	}
	function i(e, t, r) {
		for (var i = n.zipObject(r, n.map(r, function(e, t) {
			return t;
		})), a = n.flatten(n.map(t, function(t) {
			return n.sortBy(n.map(e.outEdges(t), function(t) {
				return {
					pos: i[t.w],
					weight: e.edge(t).weight
				};
			}), "pos");
		}), !0), o = 1; o < r.length;) o <<= 1;
		var s = 2 * o - 1;
		--o;
		var c = n.map(Array(s), function() {
			return 0;
		}), l = 0;
		return n.forEach(a.forEach(function(e) {
			var t = e.pos + o;
			c[t] += e.weight;
			for (var n = 0; t > 0;) t % 2 && (n += c[t + 1]), t = t - 1 >> 1, c[t] += e.weight;
			l += e.weight * n;
		})), l;
	}
})), bf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e, t) {
		return n.map(t, function(t) {
			var r = e.inEdges(t);
			if (r.length) {
				var i = n.reduce(r, function(t, n) {
					var r = e.edge(n), i = e.node(n.v);
					return {
						sum: t.sum + r.weight * i.order,
						weight: t.weight + r.weight
					};
				}, {
					sum: 0,
					weight: 0
				});
				return {
					v: t,
					barycenter: i.sum / i.weight,
					weight: i.weight
				};
			}
			return { v: t };
		});
	}
})), xf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e, t) {
		var r = {};
		return n.forEach(e, function(e, t) {
			var i = r[e.v] = {
				indegree: 0,
				in: [],
				out: [],
				vs: [e.v],
				i: t
			};
			n.isUndefined(e.barycenter) || (i.barycenter = e.barycenter, i.weight = e.weight);
		}), n.forEach(t.edges(), function(e) {
			var t = r[e.v], i = r[e.w];
			!n.isUndefined(t) && !n.isUndefined(i) && (i.indegree++, t.out.push(r[e.w]));
		}), i(n.filter(r, function(e) {
			return !e.indegree;
		}));
	}
	function i(e) {
		var t = [];
		function r(e) {
			return function(t) {
				t.merged || (n.isUndefined(t.barycenter) || n.isUndefined(e.barycenter) || t.barycenter >= e.barycenter) && a(e, t);
			};
		}
		function i(t) {
			return function(n) {
				n.in.push(t), --n.indegree === 0 && e.push(n);
			};
		}
		for (; e.length;) {
			var o = e.pop();
			t.push(o), n.forEach(o.in.reverse(), r(o)), n.forEach(o.out, i(o));
		}
		return n.map(n.filter(t, function(e) {
			return !e.merged;
		}), function(e) {
			return n.pick(e, [
				"vs",
				"i",
				"barycenter",
				"weight"
			]);
		});
	}
	function a(e, t) {
		var n = 0, r = 0;
		e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
	}
})), Sf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf();
	t.exports = i;
	function i(e, t) {
		var i = r.partition(e, function(e) {
			return n.has(e, "barycenter");
		}), s = i.lhs, c = n.sortBy(i.rhs, function(e) {
			return -e.i;
		}), l = [], u = 0, d = 0, f = 0;
		s.sort(o(!!t)), f = a(l, c, f), n.forEach(s, function(e) {
			f += e.vs.length, l.push(e.vs), u += e.barycenter * e.weight, d += e.weight, f = a(l, c, f);
		});
		var p = { vs: n.flatten(l, !0) };
		return d && (p.barycenter = u / d, p.weight = d), p;
	}
	function a(e, t, r) {
		for (var i; t.length && (i = n.last(t)).i <= r;) t.pop(), e.push(i.vs), r++;
		return r;
	}
	function o(e) {
		return function(t, n) {
			return t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
		};
	}
})), Cf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = bf(), i = xf(), a = Sf();
	t.exports = o;
	function o(e, t, l, u) {
		var d = e.children(t), f = e.node(t), p = f ? f.borderLeft : void 0, m = f ? f.borderRight : void 0, h = {};
		p && (d = n.filter(d, function(e) {
			return e !== p && e !== m;
		}));
		var g = r(e, d);
		n.forEach(g, function(t) {
			if (e.children(t.v).length) {
				var r = o(e, t.v, l, u);
				h[t.v] = r, n.has(r, "barycenter") && c(t, r);
			}
		});
		var _ = i(g, l);
		s(_, h);
		var v = a(_, u);
		if (p && (v.vs = n.flatten([
			p,
			v.vs,
			m
		], !0), e.predecessors(p).length)) {
			var y = e.node(e.predecessors(p)[0]), b = e.node(e.predecessors(m)[0]);
			n.has(v, "barycenter") || (v.barycenter = 0, v.weight = 0), v.barycenter = (v.barycenter * v.weight + y.order + b.order) / (v.weight + 2), v.weight += 2;
		}
		return v;
	}
	function s(e, t) {
		n.forEach(e, function(e) {
			e.vs = n.flatten(e.vs.map(function(e) {
				return t[e] ? t[e].vs : e;
			}), !0);
		});
	}
	function c(e, t) {
		n.isUndefined(e.barycenter) ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
	}
})), wf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = Ld().Graph;
	t.exports = i;
	function i(e, t, i) {
		var o = a(e), s = new r({ compound: !0 }).setGraph({ root: o }).setDefaultNodeLabel(function(t) {
			return e.node(t);
		});
		return n.forEach(e.nodes(), function(r) {
			var a = e.node(r), c = e.parent(r);
			(a.rank === t || a.minRank <= t && t <= a.maxRank) && (s.setNode(r), s.setParent(r, c || o), n.forEach(e[i](r), function(t) {
				var i = t.v === r ? t.w : t.v, a = s.edge(i, r), o = n.isUndefined(a) ? 0 : a.weight;
				s.setEdge(i, r, { weight: e.edge(t).weight + o });
			}), n.has(a, "minRank") && s.setNode(r, {
				borderLeft: a.borderLeft[t],
				borderRight: a.borderRight[t]
			}));
		}), s;
	}
	function a(e) {
		for (var t; e.hasNode(t = n.uniqueId("_root")););
		return t;
	}
})), Tf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf();
	t.exports = r;
	function r(e, t, r) {
		var i = {}, a;
		n.forEach(r, function(n) {
			for (var r = e.parent(n), o, s; r;) {
				if (o = e.parent(r), o ? (s = i[o], i[o] = r) : (s = a, a = r), s && s !== r) {
					t.setEdge(s, r);
					return;
				}
				r = o;
			}
		});
	}
})), Ef = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = vf(), i = yf(), a = Cf(), o = wf(), s = Tf(), c = Ld().Graph, l = cf();
	t.exports = u;
	function u(e) {
		var t = l.maxRank(e), a = d(e, n.range(1, t + 1), "inEdges"), o = d(e, n.range(t - 1, -1, -1), "outEdges"), s = r(e);
		p(e, s);
		for (var c = Infinity, u, m = 0, h = 0; h < 4; ++m, ++h) {
			f(m % 2 ? a : o, m % 4 >= 2), s = l.buildLayerMatrix(e);
			var g = i(e, s);
			g < c && (h = 0, u = n.cloneDeep(s), c = g);
		}
		p(e, u);
	}
	function d(e, t, r) {
		return n.map(t, function(t) {
			return o(e, t, r);
		});
	}
	function f(e, t) {
		var r = new c();
		n.forEach(e, function(e) {
			var i = e.graph().root, o = a(e, i, r, t);
			n.forEach(o.vs, function(t, n) {
				e.node(t).order = n;
			}), s(e, r, o.vs);
		});
	}
	function p(e, t) {
		n.forEach(t, function(t) {
			n.forEach(t, function(t, n) {
				e.node(t).order = n;
			});
		});
	}
})), Df = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = Ld().Graph, i = cf();
	t.exports = {
		positionX: g,
		findType1Conflicts: a,
		findType2Conflicts: o,
		addConflict: c,
		hasConflict: l,
		verticalAlignment: u,
		horizontalCompaction: d,
		alignCoordinates: m,
		findSmallestWidthAlignment: p,
		balance: h
	};
	function a(e, t) {
		var r = {};
		function i(t, i) {
			var a = 0, o = 0, l = t.length, u = n.last(i);
			return n.forEach(i, function(t, d) {
				var f = s(e, t), p = f ? e.node(f).order : l;
				(f || t === u) && (n.forEach(i.slice(o, d + 1), function(t) {
					n.forEach(e.predecessors(t), function(n) {
						var i = e.node(n), o = i.order;
						(o < a || p < o) && !(i.dummy && e.node(t).dummy) && c(r, n, t);
					});
				}), o = d + 1, a = p);
			}), i;
		}
		return n.reduce(t, i), r;
	}
	function o(e, t) {
		var r = {};
		function i(t, i, a, o, s) {
			var l;
			n.forEach(n.range(i, a), function(i) {
				l = t[i], e.node(l).dummy && n.forEach(e.predecessors(l), function(t) {
					var n = e.node(t);
					n.dummy && (n.order < o || n.order > s) && c(r, t, l);
				});
			});
		}
		function a(t, r) {
			var a = -1, o, s = 0;
			return n.forEach(r, function(n, c) {
				if (e.node(n).dummy === "border") {
					var l = e.predecessors(n);
					l.length && (o = e.node(l[0]).order, i(r, s, c, a, o), s = c, a = o);
				}
				i(r, s, r.length, o, t.length);
			}), r;
		}
		return n.reduce(t, a), r;
	}
	function s(e, t) {
		if (e.node(t).dummy) return n.find(e.predecessors(t), function(t) {
			return e.node(t).dummy;
		});
	}
	function c(e, t, n) {
		if (t > n) {
			var r = t;
			t = n, n = r;
		}
		var i = e[t];
		i || (e[t] = i = {}), i[n] = !0;
	}
	function l(e, t, r) {
		if (t > r) {
			var i = t;
			t = r, r = i;
		}
		return n.has(e[t], r);
	}
	function u(e, t, r, i) {
		var a = {}, o = {}, s = {};
		return n.forEach(t, function(e) {
			n.forEach(e, function(e, t) {
				a[e] = e, o[e] = e, s[e] = t;
			});
		}), n.forEach(t, function(e) {
			var t = -1;
			n.forEach(e, function(e) {
				var c = i(e);
				if (c.length) {
					c = n.sortBy(c, function(e) {
						return s[e];
					});
					for (var u = (c.length - 1) / 2, d = Math.floor(u), f = Math.ceil(u); d <= f; ++d) {
						var p = c[d];
						o[e] === e && t < s[p] && !l(r, e, p) && (o[p] = e, o[e] = a[e] = a[p], t = s[p]);
					}
				}
			});
		}), {
			root: a,
			align: o
		};
	}
	function d(e, t, r, i, a) {
		var o = {}, s = f(e, t, r, a), c = a ? "borderLeft" : "borderRight";
		function l(e, t) {
			for (var n = s.nodes(), r = n.pop(), i = {}; r;) i[r] ? e(r) : (i[r] = !0, n.push(r), n = n.concat(t(r))), r = n.pop();
		}
		function u(e) {
			o[e] = s.inEdges(e).reduce(function(e, t) {
				return Math.max(e, o[t.v] + s.edge(t));
			}, 0);
		}
		function d(t) {
			var n = s.outEdges(t).reduce(function(e, t) {
				return Math.min(e, o[t.w] - s.edge(t));
			}, Infinity), r = e.node(t);
			n !== Infinity && r.borderType !== c && (o[t] = Math.max(o[t], n));
		}
		return l(u, s.predecessors.bind(s)), l(d, s.successors.bind(s)), n.forEach(i, function(e) {
			o[e] = o[r[e]];
		}), o;
	}
	function f(e, t, i, a) {
		var o = new r(), s = e.graph(), c = _(s.nodesep, s.edgesep, a);
		return n.forEach(t, function(t) {
			var r;
			n.forEach(t, function(t) {
				var n = i[t];
				if (o.setNode(n), r) {
					var a = i[r], s = o.edge(a, n);
					o.setEdge(a, n, Math.max(c(e, t, r), s || 0));
				}
				r = t;
			});
		}), o;
	}
	function p(e, t) {
		return n.minBy(n.values(t), function(t) {
			var r = -Infinity, i = Infinity;
			return n.forIn(t, function(t, n) {
				var a = v(e, n) / 2;
				r = Math.max(t + a, r), i = Math.min(t - a, i);
			}), r - i;
		});
	}
	function m(e, t) {
		var r = n.values(t), i = n.min(r), a = n.max(r);
		n.forEach(["u", "d"], function(r) {
			n.forEach(["l", "r"], function(o) {
				var s = r + o, c = e[s], l;
				if (c !== t) {
					var u = n.values(c);
					l = o === "l" ? i - n.min(u) : a - n.max(u), l && (e[s] = n.mapValues(c, function(e) {
						return e + l;
					}));
				}
			});
		});
	}
	function h(e, t) {
		return n.mapValues(e.ul, function(r, i) {
			if (t) return e[t.toLowerCase()][i];
			var a = n.sortBy(n.map(e, i));
			return (a[1] + a[2]) / 2;
		});
	}
	function g(e) {
		var t = i.buildLayerMatrix(e), r = n.merge(a(e, t), o(e, t)), s = {}, c;
		return n.forEach(["u", "d"], function(i) {
			c = i === "u" ? t : n.values(t).reverse(), n.forEach(["l", "r"], function(t) {
				t === "r" && (c = n.map(c, function(e) {
					return n.values(e).reverse();
				}));
				var a = (i === "u" ? e.predecessors : e.successors).bind(e), o = u(e, c, r, a), l = d(e, c, o.root, o.align, t === "r");
				t === "r" && (l = n.mapValues(l, function(e) {
					return -e;
				})), s[i + t] = l;
			});
		}), m(s, p(e, s)), h(s, e.graph().align);
	}
	function _(e, t, r) {
		return function(i, a, o) {
			var s = i.node(a), c = i.node(o), l = 0, u;
			if (l += s.width / 2, n.has(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
				case "l":
					u = -s.width / 2;
					break;
				case "r": u = s.width / 2;
			}
			if (u && (l += r ? u : -u), u = 0, l += (s.dummy ? t : e) / 2, l += (c.dummy ? t : e) / 2, l += c.width / 2, n.has(c, "labelpos")) switch (c.labelpos.toLowerCase()) {
				case "l":
					u = c.width / 2;
					break;
				case "r": u = -c.width / 2;
			}
			return u && (l += r ? u : -u), u = 0, l;
		};
	}
	function v(e, t) {
		return e.node(t).width;
	}
})), Of = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf(), i = Df().positionX;
	t.exports = a;
	function a(e) {
		e = r.asNonCompoundGraph(e), o(e), n.forEach(i(e), function(t, n) {
			e.node(n).x = t;
		});
	}
	function o(e) {
		var t = r.buildLayerMatrix(e), i = e.graph().ranksep, a = 0;
		n.forEach(t, function(t) {
			var r = n.max(n.map(t, function(t) {
				return e.node(t).height;
			}));
			n.forEach(t, function(t) {
				e.node(t).y = a + r / 2;
			}), a += r + i;
		});
	}
})), kf = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = sf(), i = lf(), a = pf(), o = cf().normalizeRanks, s = mf(), c = cf().removeEmptyRanks, l = hf(), u = gf(), d = _f(), f = Ef(), p = Of(), m = cf(), h = Ld().Graph;
	t.exports = g;
	function g(e, t) {
		var n = t && t.debugTiming ? m.time : m.notime;
		n("layout", function() {
			var t = n("  buildLayoutGraph", function() {
				return D(e);
			});
			n("  runLayout", function() {
				_(t, n);
			}), n("  updateInputGraph", function() {
				v(e, t);
			});
		});
	}
	function _(e, t) {
		t("    makeSpaceForEdgeLabels", function() {
			O(e);
		}), t("    removeSelfEdges", function() {
			L(e);
		}), t("    acyclic", function() {
			r.run(e);
		}), t("    nestingGraph.run", function() {
			l.run(e);
		}), t("    rank", function() {
			a(m.asNonCompoundGraph(e));
		}), t("    injectEdgeLabelProxies", function() {
			k(e);
		}), t("    removeEmptyRanks", function() {
			c(e);
		}), t("    nestingGraph.cleanup", function() {
			l.cleanup(e);
		}), t("    normalizeRanks", function() {
			o(e);
		}), t("    assignRankMinMax", function() {
			A(e);
		}), t("    removeEdgeLabelProxies", function() {
			j(e);
		}), t("    normalize.run", function() {
			i.run(e);
		}), t("    parentDummyChains", function() {
			s(e);
		}), t("    addBorderSegments", function() {
			u(e);
		}), t("    order", function() {
			f(e);
		}), t("    insertSelfEdges", function() {
			ee(e);
		}), t("    adjustCoordinateSystem", function() {
			d.adjust(e);
		}), t("    position", function() {
			p(e);
		}), t("    positionSelfEdges", function() {
			R(e);
		}), t("    removeBorderNodes", function() {
			I(e);
		}), t("    normalize.undo", function() {
			i.undo(e);
		}), t("    fixupEdgeLabelCoords", function() {
			P(e);
		}), t("    undoCoordinateSystem", function() {
			d.undo(e);
		}), t("    translateGraph", function() {
			M(e);
		}), t("    assignNodeIntersects", function() {
			N(e);
		}), t("    reversePoints", function() {
			F(e);
		}), t("    acyclic.undo", function() {
			r.undo(e);
		});
	}
	function v(e, t) {
		n.forEach(e.nodes(), function(n) {
			var r = e.node(n), i = t.node(n);
			r && (r.x = i.x, r.y = i.y, t.children(n).length && (r.width = i.width, r.height = i.height));
		}), n.forEach(e.edges(), function(r) {
			var i = e.edge(r), a = t.edge(r);
			i.points = a.points, n.has(a, "x") && (i.x = a.x, i.y = a.y);
		}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
	}
	var y = [
		"nodesep",
		"edgesep",
		"ranksep",
		"marginx",
		"marginy"
	], b = {
		ranksep: 50,
		edgesep: 20,
		nodesep: 50,
		rankdir: "tb"
	}, x = [
		"acyclicer",
		"ranker",
		"rankdir",
		"align"
	], S = ["width", "height"], C = {
		width: 0,
		height: 0
	}, w = [
		"minlen",
		"weight",
		"width",
		"height",
		"labeloffset"
	], T = {
		minlen: 1,
		weight: 1,
		width: 0,
		height: 0,
		labeloffset: 10,
		labelpos: "r"
	}, E = ["labelpos"];
	function D(e) {
		var t = new h({
			multigraph: !0,
			compound: !0
		}), r = B(e.graph());
		return t.setGraph(n.merge({}, b, z(r, y), n.pick(r, x))), n.forEach(e.nodes(), function(r) {
			var i = B(e.node(r));
			t.setNode(r, n.defaults(z(i, S), C)), t.setParent(r, e.parent(r));
		}), n.forEach(e.edges(), function(r) {
			var i = B(e.edge(r));
			t.setEdge(r, n.merge({}, T, z(i, w), n.pick(i, E)));
		}), t;
	}
	function O(e) {
		var t = e.graph();
		t.ranksep /= 2, n.forEach(e.edges(), function(n) {
			var r = e.edge(n);
			r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
		});
	}
	function k(e) {
		n.forEach(e.edges(), function(t) {
			var n = e.edge(t);
			if (n.width && n.height) {
				var r = e.node(t.v), i = {
					rank: (e.node(t.w).rank - r.rank) / 2 + r.rank,
					e: t
				};
				m.addDummyNode(e, "edge-proxy", i, "_ep");
			}
		});
	}
	function A(e) {
		var t = 0;
		n.forEach(e.nodes(), function(r) {
			var i = e.node(r);
			i.borderTop && (i.minRank = e.node(i.borderTop).rank, i.maxRank = e.node(i.borderBottom).rank, t = n.max(t, i.maxRank));
		}), e.graph().maxRank = t;
	}
	function j(e) {
		n.forEach(e.nodes(), function(t) {
			var n = e.node(t);
			n.dummy === "edge-proxy" && (e.edge(n.e).labelRank = n.rank, e.removeNode(t));
		});
	}
	function M(e) {
		var t = Infinity, r = 0, i = Infinity, a = 0, o = e.graph(), s = o.marginx || 0, c = o.marginy || 0;
		function l(e) {
			var n = e.x, o = e.y, s = e.width, c = e.height;
			t = Math.min(t, n - s / 2), r = Math.max(r, n + s / 2), i = Math.min(i, o - c / 2), a = Math.max(a, o + c / 2);
		}
		n.forEach(e.nodes(), function(t) {
			l(e.node(t));
		}), n.forEach(e.edges(), function(t) {
			var r = e.edge(t);
			n.has(r, "x") && l(r);
		}), t -= s, i -= c, n.forEach(e.nodes(), function(n) {
			var r = e.node(n);
			r.x -= t, r.y -= i;
		}), n.forEach(e.edges(), function(r) {
			var a = e.edge(r);
			n.forEach(a.points, function(e) {
				e.x -= t, e.y -= i;
			}), n.has(a, "x") && (a.x -= t), n.has(a, "y") && (a.y -= i);
		}), o.width = r - t + s, o.height = a - i + c;
	}
	function N(e) {
		n.forEach(e.edges(), function(t) {
			var n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
			n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(m.intersectRect(r, a)), n.points.push(m.intersectRect(i, o));
		});
	}
	function P(e) {
		n.forEach(e.edges(), function(t) {
			var r = e.edge(t);
			if (n.has(r, "x")) switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
				case "l":
					r.x -= r.width / 2 + r.labeloffset;
					break;
				case "r": r.x += r.width / 2 + r.labeloffset;
			}
		});
	}
	function F(e) {
		n.forEach(e.edges(), function(t) {
			var n = e.edge(t);
			n.reversed && n.points.reverse();
		});
	}
	function I(e) {
		n.forEach(e.nodes(), function(t) {
			if (e.children(t).length) {
				var r = e.node(t), i = e.node(r.borderTop), a = e.node(r.borderBottom), o = e.node(n.last(r.borderLeft)), s = e.node(n.last(r.borderRight));
				r.width = Math.abs(s.x - o.x), r.height = Math.abs(a.y - i.y), r.x = o.x + r.width / 2, r.y = i.y + r.height / 2;
			}
		}), n.forEach(e.nodes(), function(t) {
			e.node(t).dummy === "border" && e.removeNode(t);
		});
	}
	function L(e) {
		n.forEach(e.edges(), function(t) {
			if (t.v === t.w) {
				var n = e.node(t.v);
				n.selfEdges ||= [], n.selfEdges.push({
					e: t,
					label: e.edge(t)
				}), e.removeEdge(t);
			}
		});
	}
	function ee(e) {
		var t = m.buildLayerMatrix(e);
		n.forEach(t, function(t) {
			var r = 0;
			n.forEach(t, function(t, i) {
				var a = e.node(t);
				a.order = i + r, n.forEach(a.selfEdges, function(t) {
					m.addDummyNode(e, "selfedge", {
						width: t.label.width,
						height: t.label.height,
						rank: a.rank,
						order: i + ++r,
						e: t.e,
						label: t.label
					}, "_se");
				}), delete a.selfEdges;
			});
		});
	}
	function R(e) {
		n.forEach(e.nodes(), function(t) {
			var n = e.node(t);
			if (n.dummy === "selfedge") {
				var r = e.node(n.e.v), i = r.x + r.width / 2, a = r.y, o = n.x - i, s = r.height / 2;
				e.setEdge(n.e, n.label), e.removeNode(t), n.label.points = [
					{
						x: i + 2 * o / 3,
						y: a - s
					},
					{
						x: i + 5 * o / 6,
						y: a - s
					},
					{
						x: i + o,
						y: a
					},
					{
						x: i + 5 * o / 6,
						y: a + s
					},
					{
						x: i + 2 * o / 3,
						y: a + s
					}
				], n.label.x = n.x, n.label.y = n.y;
			}
		});
	}
	function z(e, t) {
		return n.mapValues(n.pick(e, t), Number);
	}
	function B(e) {
		var t = {};
		return n.forEach(e, function(e, n) {
			t[n.toLowerCase()] = e;
		}), t;
	}
})), Af = /* @__PURE__ */ Z(((e, t) => {
	var n = rf(), r = cf(), i = Ld().Graph;
	t.exports = { debugOrdering: a };
	/* istanbul ignore next */
	function a(e) {
		var t = r.buildLayerMatrix(e), a = new i({
			compound: !0,
			multigraph: !0
		}).setGraph({});
		return n.forEach(e.nodes(), function(t) {
			a.setNode(t, { label: t }), a.setParent(t, "layer" + e.node(t).rank);
		}), n.forEach(e.edges(), function(e) {
			a.setEdge(e.v, e.w, {}, e.name);
		}), n.forEach(t, function(e, t) {
			var r = "layer" + t;
			a.setNode(r, { rank: "same" }), n.reduce(e, function(e, t) {
				return a.setEdge(e, t, { style: "invis" }), t;
			});
		}), a;
	}
})), jf = /* @__PURE__ */ Z(((e, t) => {
	t.exports = "0.8.5";
})), Mf = /* @__PURE__ */ pt((/* @__PURE__ */ Z(((e, t) => {
	t.exports = {
		graphlib: Ld(),
		layout: kf(),
		debug: Af(),
		util: {
			time: cf().time,
			notime: cf().notime
		},
		version: jf()
	};
})))(), 1), Nf = "__start__", Pf = "__disqualified__";
function Ff(e) {
	let t = [];
	for (let n of e.questions) if (n.disqualifyingOptions) for (let e of n.choices ?? []) e in n.disqualifyingOptions && t.push(e);
	return t;
}
function If(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.pages) for (let e of n.questions) t.set(`#/properties/${e.id}`, {
		label: e.label,
		type: e.type
	});
	return t;
}
function Lf(e) {
	return e.conditions.find((e) => !St(e));
}
function Rf(e, t) {
	let n = Lf(e);
	if (!n) return {
		label: "Matches",
		isPositiveBoolean: !1
	};
	let r = t.get(n.fieldPath);
	if (r?.type === "boolean" && n.operator === "eq") return {
		label: n.value === !0 ? "Yes" : "No",
		isPositiveBoolean: n.value === !0
	};
	let i = {
		eq: "=",
		neq: "≠",
		contains: "contains",
		gt: ">",
		gte: "≥",
		lt: "<",
		lte: "≤",
		isEmpty: "is empty",
		isNotEmpty: "is not empty"
	}, a = n.operator !== "isEmpty" && n.operator !== "isNotEmpty" ? ` ${String(n.value ?? "")}` : "";
	return {
		label: `${r?.label ?? "Answer"} ${i[n.operator] ?? n.operator}${a}`,
		isPositiveBoolean: !1
	};
}
function zf(e, t) {
	let n = [], r = !1;
	for (let i of e.branch) {
		if (i.goToPageId === "end") continue;
		let { label: e, isPositiveBoolean: a } = Rf(i.when, t);
		n.push({
			targetId: i.goToPageId,
			isDefault: !1,
			label: e,
			variant: a ? "positive" : "neutral",
			ruleId: i.id
		}), a && (r = !0);
	}
	if (e.defaultNextPageId !== "end") {
		let t = e.branch.length === 0 ? "" : r ? "No" : "Otherwise";
		n.push({
			targetId: e.defaultNextPageId,
			isDefault: !0,
			label: t,
			variant: "neutral"
		});
	}
	return n;
}
function Bf(e) {
	return e ? {
		width: e.length * 6.5 + 16,
		height: 20
	} : {
		width: 0,
		height: 0
	};
}
function Vf(e, t) {
	let n = new Mf.default.graphlib.Graph();
	n.setGraph({
		rankdir: "LR",
		nodesep: 70,
		ranksep: 110,
		marginx: 20,
		marginy: 20
	}), n.setDefaultEdgeLabel(() => ({}));
	for (let t of e.pages) n.setNode(t.id, {
		width: 190,
		height: 100
	});
	let r = e.pages.find((t) => t.id === e.startPageId);
	r && (n.setNode(Nf, {
		width: 88,
		height: 34
	}), n.setEdge(Nf, r.id, {
		width: 0,
		height: 0
	}));
	let i = e.pages.some((e) => Ff(e).length > 0);
	if (i) {
		n.setNode(Pf, {
			width: 132,
			height: 34
		});
		for (let t of e.pages) for (let e of Ff(t)) {
			let { width: r, height: i } = Bf(e);
			n.setEdge(t.id, Pf, {
				width: r,
				height: i
			});
		}
	}
	for (let r of e.pages) for (let e of zf(r, t)) {
		let { width: t, height: i } = Bf(e.label);
		n.setEdge(r.id, e.targetId, {
			width: t,
			height: i
		});
	}
	Mf.default.layout(n);
	let a = /* @__PURE__ */ new Map();
	for (let t of e.pages) {
		let e = n.node(t.id);
		e && a.set(t.id, {
			x: e.x,
			y: e.y
		});
	}
	if (r) {
		let e = n.node(Nf);
		e && a.set(Nf, {
			x: e.x,
			y: e.y
		});
	}
	if (i) {
		let e = n.node(Pf);
		e && a.set(Pf, {
			x: e.x,
			y: e.y
		});
	}
	return a;
}
function Hf(e, t) {
	return t !== e.startPageId && !e.pages.some((e) => e.defaultNextPageId === t);
}
function Uf(e, t) {
	if (t === e.startPageId) return !1;
	let n = e.pages.some((e) => e.defaultNextPageId === t), r = e.pages.some((e) => e.branch.some((e) => e.goToPageId === t));
	return !n && !r;
}
function Wf(e) {
	let t = 0, n = 0;
	for (let r of e.pages) r.branch.length > 0 && n++, r.defaultNextPageId === "end" && t++, t += r.branch.filter((e) => e.goToPageId === "end").length;
	return {
		pageCount: e.pages.length,
		branchPointCount: n,
		pathsToEndingCount: t
	};
}
function Gf(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.startPageId;
	for (; r !== "end" && !n.has(r);) {
		let i = e.pages.find((e) => e.id === r);
		if (!i) break;
		n.add(r), t.push(r), r = i.defaultNextPageId;
	}
	return t;
}
function Kf(e, t) {
	let n = Gf(e), r = n.indexOf(t);
	return r !== -1 && e.pages.map((e) => e.id).filter((e) => n.includes(e)).indexOf(t) !== r;
}
function qf(e) {
	return e.questions.some((e) => e.disqualifyingOptions && Object.keys(e.disqualifyingOptions).length > 0);
}
function Jf(e) {
	if (e.blocksSubmission || qf(e)) return "warning";
	if (e.branch.length > 0) return "branch";
	let t = e.questions[0];
	return t ? t.type : "empty";
}
function Yf(e, t = {}) {
	let n = If(e), r = Vf(e, n), i = e.pages.map((n) => {
		let i = t[n.id], a = r.get(n.id) ?? {
			x: 95,
			y: 50
		}, o = i ?? {
			x: a.x - 95,
			y: a.y - 50
		};
		return {
			id: n.id,
			type: "pageNode",
			position: o,
			data: {
				pageId: n.id,
				title: n.title,
				questionCount: n.questions.length,
				iconKind: Jf(n),
				isConditionalOnly: Hf(e, n.id),
				isBranchPoint: n.branch.length > 0,
				isUnconnected: Uf(e, n.id),
				flowOrderDiffers: Kf(e, n.id),
				blocksSubmission: !!n.blocksSubmission,
				endsFlow: n.defaultNextPageId === "end" && !n.blocksSubmission
			}
		};
	}), a = e.pages.flatMap((e) => zf(e, n).map((t, n) => ({
		id: `${e.id}-${t.isDefault ? "default" : `rule-${n}`}-${t.targetId}`,
		source: e.id,
		target: t.targetId,
		label: t.label,
		data: {
			variant: t.variant,
			isDefault: t.isDefault,
			ruleId: t.ruleId
		}
	}))), o = e.pages.find((t) => t.id === e.startPageId), s = o ? r.get(Nf) : void 0, c = o && s ? {
		id: Nf,
		position: {
			x: s.x - 44,
			y: s.y - 17
		},
		edge: {
			id: `${Nf}-edge`,
			source: Nf,
			target: o.id
		}
	} : null, l = r.get(Pf), u = e.pages.flatMap((e) => Ff(e).map((t, n) => ({
		id: `${e.id}-disqualify-${n}-${t}`,
		source: e.id,
		target: Pf,
		label: t
	})));
	return {
		nodes: i,
		edges: a,
		startMarker: c,
		disqualifiedTerminal: l && u.length > 0 ? {
			id: Pf,
			position: {
				x: l.x - 66,
				y: l.y - 17
			},
			edges: u
		} : null
	};
}
function Xf(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.branch) t.add(n.goToPageId);
	return t.add(e.defaultNextPageId), Array.from(t);
}
function Zf(e, t, n = /* @__PURE__ */ new Set()) {
	if (n.has(t)) return Infinity;
	let r = e.pages.find((e) => e.id === t);
	if (!r) return Infinity;
	let i = new Set(n);
	i.add(t);
	let a = Infinity;
	for (let t of Xf(r)) {
		if (t === "end") {
			a = Math.min(a, 0);
			continue;
		}
		if (!e.pages.some((e) => e.id === t)) continue;
		let n = Zf(e, t, i);
		n !== Infinity && (a = Math.min(a, 1 + n));
	}
	return a === Infinity ? 0 : a;
}
function Qf(e, t) {
	let n = t[t.length - 1];
	if (!e.pages.some((e) => e.id === n)) return {
		currentStep: 1,
		totalSteps: 1
	};
	let r = t.length;
	return {
		currentStep: r,
		totalSteps: r + Zf(e, n)
	};
}
//#endregion
//#region src/domain/answerFormatting.ts
function $f(e, t) {
	if (t == null || t === "") return "(skipped)";
	if (e.type === "turnstile") return "Verified";
	if (e.type === "boolean") return t ? "Yes" : "No";
	if (e.type === "date" && typeof t == "string") {
		let e = (0, au.default)(t);
		return e.isValid() ? e.format("MMMM D, YYYY") : String(t);
	}
	return Array.isArray(t) ? t.length > 0 ? t.join(", ") : "(skipped)" : String(t);
}
//#endregion
//#region src/runtime/components/runner/ProgressRail.tsx
function ep({ percent: e }) {
	return /* @__PURE__ */ x(D, {
		sx: {
			position: "sticky",
			top: 0,
			zIndex: 10,
			height: 3,
			bgcolor: "divider"
		},
		children: /* @__PURE__ */ x(D, { sx: {
			height: "100%",
			width: `${Math.min(100, Math.max(0, e))}%`,
			bgcolor: "primary.main",
			transition: "width .25s ease"
		} })
	});
}
//#endregion
//#region src/runtime/components/runner/usePortalTarget.ts
function tp(e, t) {
	let [n, r] = f(void 0);
	return c(() => {
		if (t === void 0) {
			r(void 0);
			return;
		}
		if (t === null || t === "") {
			r(null);
			return;
		}
		if (typeof t == "string") {
			let n = document.querySelector(t);
			n || console.warn(`survey-builder-kit: ${e}="${t}" did not match any element in the document -- rendering nothing for this piece.`), r(n ?? null);
			return;
		}
		r(t);
	}, [e, t]), n;
}
function np(e, t) {
	return [e, t].filter(Boolean).join(" ");
}
//#endregion
//#region src/runtime/components/runner/RunnerHeader.tsx
var rp = 8;
function ip({ currentStep: e, totalSteps: t, onExit: n, stepsTarget: r, exitTarget: i, bgColor: a }) {
	let o = Math.min(t, rp), s = /* @__PURE__ */ S(K, {
		direction: "row",
		alignItems: "center",
		spacing: 1.5,
		children: [/* @__PURE__ */ S(J, {
			variant: "body2",
			color: "text.secondary",
			children: [
				e,
				" of ",
				t
			]
		}), /* @__PURE__ */ x(K, {
			direction: "row",
			spacing: .5,
			"aria-hidden": "true",
			children: Array.from({ length: o }, (e, t) => t + 1).map((t) => /* @__PURE__ */ x(D, { sx: {
				width: t === e ? 18 : 6,
				height: 6,
				borderRadius: 3,
				bgcolor: t <= e ? "primary.main" : "action.disabledBackground",
				transition: "width .2s ease, background-color .2s ease"
			} }, t))
		})]
	}), c = n ? /* @__PURE__ */ x(ee, {
		component: "button",
		underline: "hover",
		color: "text.secondary",
		variant: "body2",
		onClick: n,
		children: "Exit"
	}) : null;
	return /* @__PURE__ */ S(b, { children: [r && Ae(/* @__PURE__ */ x("div", {
		className: np(a, "sbk-steps"),
		children: s
	}), r), c && i && Ae(/* @__PURE__ */ x("div", {
		className: np(a, "sbk-exit"),
		children: c
	}), i)] });
}
//#endregion
//#region src/runtime/components/runner/ReviewScreen.tsx
function ap({ items: e, onEdit: t, onSubmit: n }) {
	return /* @__PURE__ */ S(D, {
		sx: {
			width: "100%",
			maxWidth: 620,
			mx: "auto"
		},
		children: [
			/* @__PURE__ */ x(J, {
				sx: {
					fontSize: 28,
					fontWeight: 700,
					mb: .5
				},
				children: "Review your answers"
			}),
			/* @__PURE__ */ x(J, {
				variant: "body2",
				color: "text.secondary",
				sx: { mb: 3 },
				children: "Everything looks good? Submit below, or edit any answer first."
			}),
			/* @__PURE__ */ x(K, {
				spacing: 1.5,
				sx: {
					maxHeight: "55vh",
					overflowY: "auto",
					pr: .5
				},
				children: e.map(({ question: e, answerText: n }) => /* @__PURE__ */ x(D, {
					sx: {
						p: 2,
						border: "1px solid",
						borderColor: "divider",
						borderRadius: "10px",
						bgcolor: "background.paper"
					},
					children: /* @__PURE__ */ S(K, {
						direction: "row",
						justifyContent: "space-between",
						alignItems: "flex-start",
						spacing: 2,
						children: [/* @__PURE__ */ S(D, {
							sx: { minWidth: 0 },
							children: [/* @__PURE__ */ x(J, {
								variant: "body2",
								color: "text.secondary",
								children: e.label
							}), /* @__PURE__ */ x(J, {
								sx: {
									fontWeight: 600,
									mt: .25,
									wordBreak: "break-word"
								},
								children: n
							})]
						}), /* @__PURE__ */ x(ee, {
							component: "button",
							underline: "hover",
							variant: "body2",
							onClick: () => t(e.id),
							sx: { flexShrink: 0 },
							children: "Edit"
						})]
					})
				}, e.id))
			}),
			/* @__PURE__ */ x(K, {
				direction: "row",
				justifyContent: "flex-end",
				sx: { mt: 4 },
				children: /* @__PURE__ */ x(O, {
					variant: "contained",
					disableElevation: !0,
					endIcon: /* @__PURE__ */ x(Te, { fontSize: "small" }),
					onClick: n,
					children: "Submit"
				})
			})
		]
	});
}
//#endregion
//#region src/runtime/components/runner/RunnerShell.tsx
function op(e, t, n) {
	return n.has(e.id) ? !1 : !e.visibilityRule || Zl(e.visibilityRule, t);
}
function sp(e, t, n) {
	return e.filter((e) => op(e, t, n));
}
function cp(e) {
	return !!e && typeof e == "object" && e.sbk === !0;
}
function lp({ exitPath: e, bgColor: t, renderAssessmentTo: n, renderProgressBarTo: r, renderStepsTo: i, renderExitTo: a }) {
	let o = tp("renderProgressBarTo", r ?? null), c = tp("renderStepsTo", i ?? null), l = tp("renderExitTo", e ? a ?? null : null), u = tp("renderAssessmentTo", n), p = ed((e) => e.survey), m = ed((e) => e.currentPageId), h = ed((e) => e.answers), g = ed((e) => e.predefinedQuestionIds), _ = ed((e) => e.visitedPageStack), v = ed((e) => e.setAnswers), y = ed((e) => e.goNext), b = td(), [C, w] = f("forward"), [T, E] = f(), [O, k] = f({}), [A, j] = f(!1), M = d(0);
	if (s(() => {
		let e = b.getState();
		if (!e.currentPageId) return;
		M.current = 0;
		let t = {
			sbk: !0,
			step: 0,
			currentPageId: e.currentPageId,
			visitedPageStack: e.visitedPageStack,
			reviewing: !1
		};
		window.history.replaceState(t, "", window.location.href);
	}, []), s(() => {
		let e = (e) => {
			if (!cp(e.state)) return;
			let t = e.state.step < M.current;
			M.current = e.state.step, b.getState().restoreNavigation(e.state.currentPageId, e.state.visitedPageStack), j(e.state.reviewing), w(t ? "backward" : "forward"), E(void 0), k({});
		};
		return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e);
	}, [b]), !p || !m) return null;
	let N = p.pages.find((e) => e.id === m);
	if (!N) return null;
	let P = sp(N.questions, h, g);
	if (P.length === 0) return y(), null;
	let F = P.length > 1, I = _.length > 1, L = Qf(p, _), ee = Ql(N, h) === "end", R = !!N.blocksSubmission || $l(N, h), z = (e) => {
		let t = b.getState();
		if (!t.currentPageId) return;
		M.current += 1;
		let n = {
			sbk: !0,
			step: M.current,
			currentPageId: t.currentPageId,
			visitedPageStack: t.visitedPageStack,
			reviewing: e
		};
		window.history.pushState(n, "", window.location.href);
	}, B = () => {
		if (Ql(N, h) === "end") {
			j(!0), z(!0);
			return;
		}
		w("forward"), y(), z(!1);
	}, V = () => {
		if (R) return;
		if (F) {
			let e = {};
			for (let t of P) {
				if (!Bu(t, h[t.id])) {
					e[t.id] = "Select at least one option.";
					continue;
				}
				let n = Ru(N, t, h);
				n.length > 0 && (e[t.id] = n[0]);
			}
			if (k(e), Object.keys(e).length > 0) return;
			B();
			return;
		}
		let e = P[0];
		if (!Bu(e, h[e.id])) return;
		let t = Ru(N, e, h);
		if (t.length > 0) {
			E(t[0]);
			return;
		}
		E(void 0), B();
	}, H = (e, t) => {
		let n = {
			...h,
			[e]: t
		};
		v(n);
		let r = P.find((t) => t.id === e);
		if (r) {
			if (F) {
				if (!(e in O) || !Bu(r, t) || Ru(N, r, n).length > 0) return;
				let { [e]: i, ...a } = O;
				k(a);
				return;
			}
			T && (Ru(N, r, n).length > 0 || E(void 0));
		}
	}, te = () => {
		R || G || (E(void 0), B());
	}, U = () => {
		(A || I) && window.history.back();
	}, ne = (e) => {
		let t = b.getState();
		if (!t.survey) return;
		let n = null;
		for (let r of t.visitedPageStack) {
			let i = t.survey.pages.find((e) => e.id === r);
			if (i && sp(i.questions, t.answers, t.predefinedQuestionIds).some((t) => t.id === e)) {
				n = r;
				break;
			}
		}
		if (!n) {
			j(!1), z(!1);
			return;
		}
		for (; b.getState().currentPageId !== n && b.getState().visitedPageStack.length > 1;) b.getState().goBack();
		w("backward"), j(!1), z(!1);
	}, W = P[0], G = !F && zu(W, h[W.id]).length > 0, re = !F && !W.required && W.type !== "label" && W.type !== "turnstile" && !R && !G, ie = A ? _.flatMap((e) => p.pages.find((t) => t.id === e)?.questions ?? []).filter((e) => e.type !== "label" && op(e, h, g)).map((e) => ({
		question: e,
		answerText: $f(e, h[e.id])
	})) : [], K = T ?? (A ? "Review your answers" : `Question ${L.currentStep} of ${L.totalSteps}`), ae = A ? /* @__PURE__ */ x(ap, {
		items: ie,
		onEdit: ne,
		onSubmit: () => y()
	}) : F ? /* @__PURE__ */ x(Uu, {
		questions: P,
		pageTitle: N.showTitle ? N.title : void 0,
		answers: h,
		onChangeQuestion: H,
		onAdvance: V,
		onBack: U,
		canGoBack: I,
		canAttemptAdvance: !R && P.every((e) => Bu(e, h[e.id])),
		isFinalPage: ee,
		errors: O,
		direction: C
	}) : /* @__PURE__ */ x(Hu, {
		question: W,
		categoryLabel: N.showTitle ? N.title : void 0,
		value: h[W.id],
		onChange: (e) => H(W.id, e),
		onAdvance: V,
		onBack: U,
		onSkip: te,
		canGoBack: I,
		canSkip: re,
		canAttemptAdvance: !R && Bu(W, h[W.id]),
		isFinalQuestion: ee,
		error: T,
		direction: C
	}), oe = /* @__PURE__ */ x(D, {
		sx: {
			flex: 1,
			minHeight: 0,
			overflowY: "auto",
			display: "flex",
			alignItems: "center",
			px: 3,
			py: 4
		},
		children: ae
	});
	return /* @__PURE__ */ S(D, {
		sx: {
			height: "100%",
			display: "flex",
			flexDirection: "column"
		},
		children: [
			o && Ae(/* @__PURE__ */ x("div", {
				className: np(t, "sbk-progress-bar"),
				children: /* @__PURE__ */ x(ep, { percent: L.currentStep / Math.max(1, L.totalSteps) * 100 })
			}), o),
			/* @__PURE__ */ x(ip, {
				currentStep: L.currentStep,
				totalSteps: L.totalSteps,
				onExit: e ? () => window.location.assign(e) : void 0,
				stepsTarget: c,
				exitTarget: l,
				bgColor: t
			}),
			u === void 0 && oe,
			u && Ae(/* @__PURE__ */ x("div", {
				className: np(t, "sbk-assessment"),
				children: oe
			}), u),
			/* @__PURE__ */ x(D, {
				role: "status",
				"aria-live": "polite",
				sx: up,
				children: K
			})
		]
	});
}
var up = {
	position: "absolute",
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0
};
//#endregion
//#region src/runtime/components/runner/SubmittedScreen.tsx
function dp() {
	let e = ed((e) => e.score), t = ed((e) => e.reset);
	return /* @__PURE__ */ S(D, {
		sx: {
			width: "100%",
			maxWidth: 480,
			mx: "auto",
			textAlign: "center"
		},
		children: [
			/* @__PURE__ */ x(D, {
				sx: {
					width: 64,
					height: 64,
					mx: "auto",
					mb: 3,
					borderRadius: "50%",
					bgcolor: "success.light",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ x(ke, { sx: {
					fontSize: 36,
					color: "success.main"
				} })
			}),
			/* @__PURE__ */ x(J, {
				sx: {
					fontSize: 28,
					fontWeight: 700,
					mb: 1
				},
				children: "Thanks for completing the survey!"
			}),
			/* @__PURE__ */ x(J, {
				variant: "body2",
				color: "text.secondary",
				children: "Your answers have been submitted."
			}),
			e && /* @__PURE__ */ S(D, {
				sx: {
					mt: 4,
					p: 2.5,
					border: "1px solid",
					borderColor: "divider",
					borderRadius: "10px",
					textAlign: "left"
				},
				children: [/* @__PURE__ */ S(K, {
					direction: "row",
					alignItems: "center",
					spacing: 2,
					children: [
						/* @__PURE__ */ x(J, {
							sx: {
								fontSize: 28,
								fontWeight: 700
							},
							children: e.total
						}),
						/* @__PURE__ */ x(J, {
							variant: "body2",
							color: "text.secondary",
							children: "total points"
						}),
						e.passed !== void 0 && /* @__PURE__ */ x(j, {
							label: e.passed ? "Passed" : "Did not pass",
							color: e.passed ? "success" : "default",
							size: "small"
						})
					]
				}), e.byCategory.length > 0 && /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(P, { sx: { my: 1.5 } }), /* @__PURE__ */ x(K, {
					spacing: .5,
					children: e.byCategory.map((e) => /* @__PURE__ */ S(K, {
						direction: "row",
						justifyContent: "space-between",
						children: [/* @__PURE__ */ x(J, {
							variant: "body2",
							children: e.label
						}), /* @__PURE__ */ x(J, {
							variant: "body2",
							children: e.points
						})]
					}, e.categoryId))
				})] })]
			}),
			/* @__PURE__ */ x(O, {
				variant: "outlined",
				onClick: t,
				sx: { mt: 4 },
				children: "Retake"
			})
		]
	});
}
var fp = new Iu.default({
	allErrors: !0,
	strict: !1
}).compile({
	$id: "survey-builder-kit/survey",
	type: "object",
	required: [
		"id",
		"title",
		"version",
		"createdAt",
		"updatedAt",
		"pages",
		"startPageId"
	],
	properties: {
		id: { type: "string" },
		title: { type: "string" },
		type: { type: "string" },
		schemaVersion: { type: "number" },
		version: { type: "number" },
		createdAt: { type: "string" },
		updatedAt: { type: "string" },
		startPageId: { type: "string" },
		pages: {
			type: "array",
			items: {
				type: "object",
				required: [
					"id",
					"title",
					"questions",
					"schema",
					"uischema",
					"branch",
					"defaultNextPageId"
				],
				properties: {
					id: { type: "string" },
					title: { type: "string" },
					questions: {
						type: "array",
						items: {
							type: "object",
							required: [
								"id",
								"type",
								"label"
							],
							properties: {
								id: { type: "string" },
								slug: { type: "string" },
								title: { type: "string" },
								type: { enum: [
									"shortText",
									"longText",
									"singleChoice",
									"multipleChoice",
									"rating",
									"nps",
									"number",
									"boolean",
									"date",
									"label",
									"turnstile"
								] },
								label: { type: "string" }
							}
						}
					},
					schema: { type: "object" },
					uischema: { type: "object" },
					branch: {
						type: "array",
						items: {
							type: "object",
							required: [
								"id",
								"when",
								"goToPageId"
							],
							properties: {
								id: { type: "string" },
								when: { $ref: "#/definitions/conditionGroup" },
								action: { enum: ["goToPage", "block"] },
								goToPageId: { type: "string" }
							}
						}
					},
					defaultNextPageId: { type: "string" }
				}
			}
		}
	},
	definitions: {
		conditionGroup: {
			type: "object",
			required: ["logic", "conditions"],
			properties: {
				logic: { enum: ["AND", "OR"] },
				conditions: {
					type: "array",
					items: { $ref: "#/definitions/conditionNode" }
				}
			}
		},
		conditionNode: { oneOf: [{
			type: "object",
			required: ["fieldPath", "operator"],
			properties: {
				fieldPath: { type: "string" },
				operator: { enum: [
					"eq",
					"neq",
					"contains",
					"gt",
					"gte",
					"lt",
					"lte",
					"isEmpty",
					"isNotEmpty"
				] }
			}
		}, { $ref: "#/definitions/conditionGroup" }] }
	}
});
function pp(e) {
	return e ? e.map((e) => `${e.instancePath || "(root)"} ${e.message ?? "is invalid"}`) : [];
}
function mp(e) {
	return fp(e) ? { valid: !0 } : {
		valid: !1,
		errors: pp(fp.errors)
	};
}
function hp(e) {
	if (!e) return {
		options: e,
		changed: !1
	};
	let t = !1, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "string" ? (t = !0, n[r] = { title: i }) : n[r] = i;
	return t ? {
		options: n,
		changed: !0
	} : {
		options: e,
		changed: !1
	};
}
function gp(e) {
	let t = !1, n = e.pages.map((e) => {
		let n = !1, r = e.questions.map((e) => {
			let { options: t, changed: r } = hp(e.disqualifyingOptions);
			return r ? (n = !0, {
				...e,
				disqualifyingOptions: t
			}) : e;
		});
		return n ? (t = !0, {
			...e,
			questions: r
		}) : e;
	});
	return t ? {
		...e,
		pages: n
	} : e;
}
function _p(e) {
	let t = !1, n = e.pages.map((e) => {
		let n = !1, r = e.questions.map((e) => typeof e.slug == "string" ? e : (n = !0, {
			...e,
			slug: e.id
		}));
		return n ? (t = !0, {
			...e,
			questions: r
		}) : e;
	});
	return t ? {
		...e,
		pages: n
	} : e;
}
function vp(e) {
	let t = !1, n = e.pages.map((e) => {
		let n = !1, r = e.questions.map((e) => typeof e.title == "string" ? e : (n = !0, {
			...e,
			title: e.label
		}));
		return n ? (t = !0, {
			...e,
			questions: r
		}) : e;
	});
	return t ? {
		...e,
		pages: n
	} : e;
}
function yp(e) {
	let t = e;
	return t.schemaVersion === void 0 && (t = {
		...t,
		schemaVersion: 1
	}), t = gp(t), t = vp(t), t = _p(t), t;
}
//#endregion
//#region src/domain/responsePayload.ts
function bp(e, t) {
	return !e.visibilityRule || Zl(e.visibilityRule, t);
}
function xp(e, t) {
	if (!e.choices) return;
	let n = new Set(Array.isArray(t) ? t.map(String) : t == null ? [] : [String(t)]);
	return e.choices.map((t) => ({
		value: t,
		label: t,
		selected: n.has(t),
		...e.disqualifyingOptions && t in e.disqualifyingOptions ? { disqualifying: !0 } : {}
	}));
}
function Sp(e, t) {
	let n = zu(e, t);
	return n.length === 0 ? {} : {
		disqualifying: !0,
		disqualifyMessage: n.map((e) => e.body ? `${e.title}: ${e.body}` : e.title).join("; ")
	};
}
function Cp(e, t, n) {
	let r = [];
	for (let i of n.visitedPageIds) {
		let n = e.pages.find((e) => e.id === i);
		if (n) for (let e of n.questions) {
			if (!bp(e, t)) continue;
			if (e.type === "label") {
				r.push({
					questionId: e.id,
					slug: e.slug,
					pageId: n.id,
					pageTitle: n.title,
					type: e.type,
					label: e.label,
					value: null,
					displayValue: "Acknowledged",
					...e.hasTrigger ? { hasTrigger: !0 } : {}
				});
				continue;
			}
			let i = t[e.id], a = !(e.required || e.type === "turnstile") && (i == null || i === ""), o = xp(e, i);
			r.push({
				questionId: e.id,
				slug: e.slug,
				pageId: n.id,
				pageTitle: n.title,
				type: e.type,
				label: e.label,
				...i === void 0 ? {} : { value: i },
				displayValue: $f(e, i),
				...a ? { skipped: !0 } : {},
				...o ? { options: o } : {},
				...Sp(e, i),
				...e.hasTrigger ? { hasTrigger: !0 } : {}
			});
		}
	}
	return r;
}
//#endregion
//#region src/components/SurveyValidationError.tsx
function wp({ errors: e }) {
	return /* @__PURE__ */ x(D, {
		sx: {
			p: 3,
			maxWidth: 640
		},
		children: /* @__PURE__ */ S(C, {
			severity: "error",
			children: [
				/* @__PURE__ */ x(w, { children: "Invalid survey data" }),
				/* @__PURE__ */ S(J, {
					variant: "body2",
					sx: { mb: +!!e?.length },
					children: [
						"The ",
						/* @__PURE__ */ x("code", { children: "survey" }),
						" prop doesn't match the shape this component expects."
					]
				}),
				e && e.length > 0 && /* @__PURE__ */ x(R, {
					dense: !0,
					sx: {
						listStyleType: "disc",
						pl: 2
					},
					children: e.map((e, t) => /* @__PURE__ */ x(z, {
						sx: {
							display: "list-item",
							p: 0
						},
						children: /* @__PURE__ */ x(J, {
							variant: "body2",
							component: "code",
							sx: { fontFamily: "monospace" },
							children: e
						})
					}, t))
				})
			]
		})
	});
}
//#endregion
//#region src/SurveyRunner.tsx
var Tp = y({ key: "sbk-runner" });
function Ep(e) {
	let t = mp(e.survey), n = l(() => yt(e.primaryColor), [e.primaryColor]);
	return /* @__PURE__ */ x(v, {
		value: Tp,
		children: /* @__PURE__ */ S(m, {
			theme: n,
			children: [/* @__PURE__ */ x(_, {}), /* @__PURE__ */ x(p, {
				className: e.bgColor,
				sx: { height: "100%" },
				children: t.valid ? /* @__PURE__ */ x(nd, { children: /* @__PURE__ */ x(Dp, {
					...e,
					survey: yp(e.survey)
				}) }) : /* @__PURE__ */ x(wp, { errors: t.errors })
			})]
		})
	});
}
function Dp({ survey: e, initialAnswers: t, predefinedAnswers: n, onChange: r, onAnswer: i, onSubmit: a, exitPath: o, bgColor: c, serviceSku: l, renderAssessmentTo: u, renderProgressBarTo: f, renderStepsTo: p, renderExitTo: m }) {
	let h = ed((e) => e.survey), g = ed((e) => e.answers), _ = ed((e) => e.finished), v = ed((e) => e.visitedPageStack), y = ed((e) => e.loadSurvey), b = ed((e) => e.setAnswers), S = ed((e) => e.setPredefinedQuestionIds), C = d((/* @__PURE__ */ new Date()).toISOString()), w = (t, n, r) => {
		let i = e.scoring?.enabled ? Xu(e.scoringMap, g, e.scoring.categories, e.scoring.passThreshold) : void 0;
		return {
			id: Qc("response"),
			surveyId: e.id,
			title: e.title,
			...e.type ? { type: e.type } : {},
			surveyVersion: e.version,
			answersFormatVersion: 3,
			answers: t,
			visitedPageIds: n,
			score: i,
			startedAt: C.current,
			...r ? { completedAt: r } : {},
			...l ? { serviceSku: l } : {}
		};
	}, T = d(null);
	s(() => {
		T.current !== e.id && (T.current = e.id, C.current = (/* @__PURE__ */ new Date()).toISOString(), y(e), (t || n) && b({
			...t,
			...Object.fromEntries((n ?? []).map((e) => [e.id, e.value]))
		}), n?.length && S(new Set(n.map((e) => e.id))));
	}, [e.id]);
	let E = d(null), D = d(!1);
	s(() => {
		if (!D.current) {
			D.current = !0;
			return;
		}
		return E.current && clearTimeout(E.current), E.current = setTimeout(() => r?.(g), 500), () => {
			E.current && clearTimeout(E.current);
		};
	}, [g, r]);
	let O = d(v), k = d(_);
	s(() => {
		let t = O.current, n = k.current;
		O.current = v, k.current = _;
		let r = v.length > t.length, a = _ && !n;
		if (!r && !a) return;
		if (a) {
			let t = Cp(e, g, { visitedPageIds: v });
			i?.(w(t, v, (/* @__PURE__ */ new Date()).toISOString()), !0);
			return;
		}
		let o = t[t.length - 1];
		if (!o) return;
		let s = Cp(e, g, { visitedPageIds: [o] }).filter((e) => e.hasTrigger);
		s.length > 0 && i?.(w(s, v), !1);
	}, [v, _]);
	let A = d(!1);
	return s(() => {
		if (_ && !A.current) {
			A.current = !0;
			let t = e.scoring?.enabled ? Xu(e.scoringMap, g, e.scoring.categories, e.scoring.passThreshold) : void 0;
			a?.({
				id: Qc("response"),
				surveyId: e.id,
				title: e.title,
				...e.type ? { type: e.type } : {},
				surveyVersion: e.version,
				answersFormatVersion: 3,
				answers: Cp(e, g, { visitedPageIds: v }),
				visitedPageIds: v,
				score: t,
				startedAt: C.current,
				completedAt: (/* @__PURE__ */ new Date()).toISOString(),
				...l ? { serviceSku: l } : {}
			});
		}
		_ || (A.current = !1);
	}, [_]), s(() => {
		if (_ || Object.keys(g).length === 0) return;
		let e = (e) => {
			e.preventDefault(), e.returnValue = "";
		};
		return window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e);
	}, [_, g]), h ? _ ? /* @__PURE__ */ x(dp, {}) : /* @__PURE__ */ x(lp, {
		exitPath: o,
		bgColor: c,
		renderAssessmentTo: u,
		renderProgressBarTo: f,
		renderStepsTo: p,
		renderExitTo: m
	}) : null;
}
function Op(e) {
	return /* @__PURE__ */ x(Ep, { ...e });
}
//#endregion
//#region src/builder/components/BuilderHeader.tsx
var kp = {
	saved: {
		label: "All changes saved",
		icon: /* @__PURE__ */ x(ye, { fontSize: "small" }),
		color: "success"
	},
	unsaved: {
		label: "Unsaved changes",
		icon: /* @__PURE__ */ x(be, { fontSize: "small" }),
		color: "warning"
	},
	saving: {
		label: "Saving…",
		icon: /* @__PURE__ */ x(we, { size: 14 }),
		color: "default"
	},
	error: {
		label: "Save failed — retry",
		icon: /* @__PURE__ */ x(xe, { fontSize: "small" }),
		color: "error"
	}
}, Ap = r(function(e, t) {
	return /* @__PURE__ */ x(re, {
		direction: "up",
		ref: t,
		...e
	});
});
function jp({ saveStatus: e, onSave: t }) {
	let n = Q((e) => e.survey), r = Q((e) => e.viewMode), i = Q((e) => e.setViewMode), a = Q((e) => e.undo), o = Q((e) => e.redo), s = Q((e) => e.history.past.length > 0), c = Q((e) => e.history.future.length > 0), [l, u] = f(null), [d, p] = f(!1), [m, h] = f(!1), g = kp[e];
	return /* @__PURE__ */ S(T, {
		position: "static",
		color: "inherit",
		sx: {
			bgcolor: "background.paper",
			borderBottom: "1px solid",
			borderColor: "divider"
		},
		children: [
			/* @__PURE__ */ S(le, {
				sx: {
					height: 64,
					minHeight: "64px !important",
					gap: 1.5
				},
				children: [
					/* @__PURE__ */ x(D, { sx: { flex: 1 } }),
					/* @__PURE__ */ S(ce, {
						value: r,
						exclusive: !0,
						size: "small",
						onChange: (e, t) => t && i(t),
						sx: {
							position: "absolute",
							left: "50%",
							transform: "translateX(-50%)"
						},
						children: [/* @__PURE__ */ S(se, {
							value: "builder",
							sx: {
								textTransform: "none",
								px: 1.5,
								gap: .75
							},
							children: [/* @__PURE__ */ x(pe, { sx: { fontSize: 17 } }), "Builder"]
						}), /* @__PURE__ */ S(se, {
							value: "flow",
							sx: {
								textTransform: "none",
								px: 1.5,
								gap: .75
							},
							children: [/* @__PURE__ */ x(me, { sx: { fontSize: 17 } }), "Flow map"]
						})]
					}),
					/* @__PURE__ */ x(D, { sx: { flex: 1 } }),
					/* @__PURE__ */ x(j, {
						size: "small",
						variant: "outlined",
						color: g.color === "default" ? void 0 : g.color,
						icon: g.icon,
						label: g.label
					}),
					/* @__PURE__ */ x(ue, {
						title: "Undo (Ctrl/Cmd+Z)",
						children: /* @__PURE__ */ x("span", { children: /* @__PURE__ */ x(L, {
							size: "small",
							disabled: !s,
							onClick: a,
							"aria-label": "Undo",
							children: /* @__PURE__ */ x(he, { fontSize: "small" })
						}) })
					}),
					/* @__PURE__ */ x(ue, {
						title: "Redo (Ctrl/Cmd+Shift+Z)",
						children: /* @__PURE__ */ x("span", { children: /* @__PURE__ */ x(L, {
							size: "small",
							disabled: !c,
							onClick: o,
							"aria-label": "Redo",
							children: /* @__PURE__ */ x(ge, { fontSize: "small" })
						}) })
					}),
					/* @__PURE__ */ x(ue, {
						title: "More actions",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							onClick: (e) => u(e.currentTarget),
							"aria-label": "More actions",
							children: /* @__PURE__ */ x(ve, { fontSize: "small" })
						})
					}),
					/* @__PURE__ */ S(te, {
						anchorEl: l,
						open: !!l,
						onClose: () => u(null),
						children: [/* @__PURE__ */ S(U, {
							onClick: () => {
								p(!0), u(null);
							},
							children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Se, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Quick preview (side panel)" })]
						}), /* @__PURE__ */ S(U, {
							onClick: () => {
								Jl(`${n.title}.json`, n), u(null);
							},
							children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Y, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Export JSON" })]
						})]
					}),
					/* @__PURE__ */ x(ue, {
						title: "Open the full survey preview",
						children: /* @__PURE__ */ x(fe, {
							variant: "outlined",
							size: "small",
							startIcon: /* @__PURE__ */ x(_e, { fontSize: "small" }),
							onClick: () => h(!0),
							children: "Preview"
						})
					}),
					/* @__PURE__ */ x(ue, {
						title: "Save (Ctrl/Cmd+S)",
						children: /* @__PURE__ */ x(fe, {
							variant: "contained",
							size: "small",
							onClick: t,
							children: "Publish"
						})
					})
				]
			}),
			/* @__PURE__ */ x(Gu, {
				open: d,
				onClose: () => p(!1)
			}),
			/* @__PURE__ */ S(N, {
				fullScreen: !0,
				open: m,
				onClose: () => h(!1),
				slots: { transition: Ap },
				children: [/* @__PURE__ */ x(T, {
					position: "relative",
					color: "inherit",
					sx: {
						borderBottom: "1px solid",
						borderColor: "divider"
					},
					children: /* @__PURE__ */ S(le, { children: [/* @__PURE__ */ x(L, {
						edge: "start",
						onClick: () => h(!1),
						"aria-label": "Close preview",
						children: /* @__PURE__ */ x(Ce, {})
					}), /* @__PURE__ */ S(J, {
						sx: { ml: 1 },
						variant: "subtitle1",
						children: ["Preview — ", n.title]
					})] })
				}), m && /* @__PURE__ */ x(Ep, {
					survey: n,
					onSubmit: () => h(!1)
				}, n.id)]
			})
		]
	});
}
//#endregion
//#region ../../node_modules/@dnd-kit/utilities/dist/utilities.esm.js
function Mp() {
	var e = [...arguments];
	return l(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var Np = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Pp(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Fp(e) {
	return "nodeType" in e;
}
function Ip(e) {
	return e ? Pp(e) ? e : Fp(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function Lp(e) {
	let { Document: t } = Ip(e);
	return e instanceof t;
}
function Rp(e) {
	return !Pp(e) && e instanceof Ip(e).HTMLElement;
}
function zp(e) {
	return e instanceof Ip(e).SVGElement;
}
function Bp(e) {
	return e ? Pp(e) ? e.document : Fp(e) ? Lp(e) ? e : Rp(e) || zp(e) ? e.ownerDocument : document : document : document;
}
var Vp = Np ? c : s;
function Hp(e) {
	let t = d(e);
	return Vp(() => {
		t.current = e;
	}), a(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Up() {
	let e = d(null);
	return [a((t, n) => {
		e.current = setInterval(t, n);
	}, []), a(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function Wp(e, t) {
	t === void 0 && (t = [e]);
	let n = d(e);
	return Vp(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function Gp(e, t) {
	let n = d();
	return l(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function Kp(e) {
	let t = Hp(e), n = d(null);
	return [n, a((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function qp(e) {
	let t = d();
	return s(() => {
		t.current = e;
	}, [e]), t.current;
}
var Jp = {};
function Yp(e, t) {
	return l(() => {
		if (t) return t;
		let n = Jp[e] == null ? 0 : Jp[e] + 1;
		return Jp[e] = n, e + "-" + n;
	}, [e, t]);
}
function Xp(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => {
			let r = Object.entries(n);
			for (let [n, i] of r) {
				let r = t[n];
				r != null && (t[n] = r + e * i);
			}
			return t;
		}, { ...t });
	};
}
var Zp = /*#__PURE__*/ Xp(1), Qp = /*#__PURE__*/ Xp(-1);
function $p(e) {
	return "clientX" in e && "clientY" in e;
}
function em(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Ip(e.target);
	return t && e instanceof t;
}
function tm(e) {
	if (!e) return !1;
	let { TouchEvent: t } = Ip(e.target);
	return t && e instanceof t;
}
function nm(e) {
	if (tm(e)) {
		if (e.touches && e.touches.length) {
			let { clientX: t, clientY: n } = e.touches[0];
			return {
				x: t,
				y: n
			};
		}
		if (e.changedTouches && e.changedTouches.length) {
			let { clientX: t, clientY: n } = e.changedTouches[0];
			return {
				x: t,
				y: n
			};
		}
	}
	return $p(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var rm = /*#__PURE__*/ Object.freeze({
	Translate: { toString(e) {
		if (!e) return;
		let { x: t, y: n } = e;
		return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
	} },
	Scale: { toString(e) {
		if (!e) return;
		let { scaleX: t, scaleY: n } = e;
		return "scaleX(" + t + ") scaleY(" + n + ")";
	} },
	Transform: { toString(e) {
		if (e) return [rm.Translate.toString(e), rm.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), im = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function am(e) {
	return e.matches(im) ? e : e.querySelector(im);
}
//#endregion
//#region ../../node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var om = { display: "none" };
function sm(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: om
	}, r);
}
function cm(e) {
	let { id: n, announcement: r, ariaLiveType: i = "assertive" } = e;
	return t.createElement("div", {
		id: n,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": i,
		"aria-atomic": !0
	}, r);
}
function lm() {
	let [e, t] = f("");
	return {
		announce: a((e) => {
			e != null && t(e);
		}, []),
		announcement: e
	};
}
//#endregion
//#region ../../node_modules/@dnd-kit/core/dist/core.esm.js
var um = /*#__PURE__*/ n(null);
function dm(e) {
	let t = o(um);
	s(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function fm() {
	let [e] = f(() => /* @__PURE__ */ new Set()), t = a((t) => (e.add(t), () => e.delete(t)), [e]);
	return [a((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var pm = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, mm = {
	onDragStart(e) {
		let { active: t } = e;
		return "Picked up draggable item " + t.id + ".";
	},
	onDragOver(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
	},
	onDragEnd(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
	},
	onDragCancel(e) {
		let { active: t } = e;
		return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
	}
};
function hm(e) {
	let { announcements: n = mm, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = pm } = e, { announce: o, announcement: c } = lm(), u = Yp("DndLiveRegion"), [d, p] = f(!1);
	if (s(() => {
		p(!0);
	}, []), dm(l(() => ({
		onDragStart(e) {
			let { active: t } = e;
			o(n.onDragStart({ active: t }));
		},
		onDragMove(e) {
			let { active: t, over: r } = e;
			n.onDragMove && o(n.onDragMove({
				active: t,
				over: r
			}));
		},
		onDragOver(e) {
			let { active: t, over: r } = e;
			o(n.onDragOver({
				active: t,
				over: r
			}));
		},
		onDragEnd(e) {
			let { active: t, over: r } = e;
			o(n.onDragEnd({
				active: t,
				over: r
			}));
		},
		onDragCancel(e) {
			let { active: t, over: r } = e;
			o(n.onDragCancel({
				active: t,
				over: r
			}));
		}
	}), [o, n])), !d) return null;
	let m = t.createElement(t.Fragment, null, t.createElement(sm, {
		id: i,
		value: a.draggable
	}), t.createElement(cm, {
		id: u,
		announcement: c
	}));
	return r ? Ae(m, r) : m;
}
var gm;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(gm ||= {});
function _m() {}
function vm(e, t) {
	return l(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function ym() {
	var e = [...arguments];
	return l(() => [...e].filter((e) => e != null), [...e]);
}
var bm = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function xm(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function Sm(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function Cm(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var wm = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = Cm(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(xm);
};
function Tm(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function Em(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : bm;
}
function Dm(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => ({
			...t,
			top: t.top + e * n.y,
			bottom: t.bottom + e * n.y,
			left: t.left + e * n.x,
			right: t.right + e * n.x
		}), { ...t });
	};
}
var Om = /*#__PURE__*/ Dm(1);
function km(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	}
	if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
function Am(e, t, n) {
	let r = km(t);
	if (!r) return e;
	let { scaleX: i, scaleY: a, x: o, y: s } = r, c = e.left - o - (1 - i) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c
	};
}
var jm = { ignoreTransform: !1 };
function Mm(e, t) {
	t === void 0 && (t = jm);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = Ip(e).getComputedStyle(e);
		t && (n = Am(n, t, r));
	}
	let { top: r, left: i, width: a, height: o, bottom: s, right: c } = n;
	return {
		top: r,
		left: i,
		width: a,
		height: o,
		bottom: s,
		right: c
	};
}
function Nm(e) {
	return Mm(e, { ignoreTransform: !0 });
}
function Pm(e) {
	let t = e.innerWidth, n = e.innerHeight;
	return {
		top: 0,
		left: 0,
		right: t,
		bottom: n,
		width: t,
		height: n
	};
}
function Fm(e, t) {
	return t === void 0 && (t = Ip(e).getComputedStyle(e)), t.position === "fixed";
}
function Im(e, t) {
	t === void 0 && (t = Ip(e).getComputedStyle(e));
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" && n.test(r);
	});
}
function Lm(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (Lp(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!Rp(i) || zp(i) || n.includes(i)) return n;
		let a = Ip(e).getComputedStyle(i);
		return i !== e && Im(i, a) && n.push(i), Fm(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function Rm(e) {
	let [t] = Lm(e, 1);
	return t ?? null;
}
function zm(e) {
	return !Np || !e ? null : Pp(e) ? e : Fp(e) ? Lp(e) || e === Bp(e).scrollingElement ? window : Rp(e) ? e : null : null;
}
function Bm(e) {
	return Pp(e) ? e.scrollX : e.scrollLeft;
}
function Vm(e) {
	return Pp(e) ? e.scrollY : e.scrollTop;
}
function Hm(e) {
	return {
		x: Bm(e),
		y: Vm(e)
	};
}
var Um;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Um ||= {});
function Wm(e) {
	return !Np || !e ? !1 : e === document.scrollingElement;
}
function Gm(e) {
	let t = {
		x: 0,
		y: 0
	}, n = Wm(e) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, r = {
		x: e.scrollWidth - n.width,
		y: e.scrollHeight - n.height
	};
	return {
		isTop: e.scrollTop <= t.y,
		isLeft: e.scrollLeft <= t.x,
		isBottom: e.scrollTop >= r.y,
		isRight: e.scrollLeft >= r.x,
		maxScroll: r,
		minScroll: t
	};
}
var Km = {
	x: .2,
	y: .2
};
function qm(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = Km);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = Gm(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = Um.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = Um.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = Um.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = Um.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function Jm(e) {
	if (e === document.scrollingElement) {
		let { innerWidth: e, innerHeight: t } = window;
		return {
			top: 0,
			left: 0,
			right: e,
			bottom: t,
			width: e,
			height: t
		};
	}
	let { top: t, left: n, right: r, bottom: i } = e.getBoundingClientRect();
	return {
		top: t,
		left: n,
		right: r,
		bottom: i,
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function Ym(e) {
	return e.reduce((e, t) => Zp(e, Hm(t)), bm);
}
function Xm(e) {
	return e.reduce((e, t) => e + Bm(t), 0);
}
function Zm(e) {
	return e.reduce((e, t) => e + Vm(t), 0);
}
function Qm(e, t) {
	if (t === void 0 && (t = Mm), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	Rm(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var $m = [[
	"x",
	["left", "right"],
	Xm
], [
	"y",
	["top", "bottom"],
	Zm
]], eh = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = Lm(t), r = Ym(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of $m) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, th = class {
	constructor(e) {
		this.target = void 0, this.listeners = [], this.removeAll = () => {
			this.listeners.forEach((e) => this.target?.removeEventListener(...e));
		}, this.target = e;
	}
	add(e, t, n) {
		var r;
		(r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([
			e,
			t,
			n
		]);
	}
};
function nh(e) {
	let { EventTarget: t } = Ip(e);
	return e instanceof t ? e : Bp(e);
}
function rh(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var ih;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ih ||= {});
function ah(e) {
	e.preventDefault();
}
function oh(e) {
	e.stopPropagation();
}
var sh;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(sh ||= {});
var ch = {
	start: [sh.Space, sh.Enter],
	cancel: [sh.Esc],
	end: [
		sh.Space,
		sh.Enter,
		sh.Tab
	]
}, lh = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case sh.Right: return {
			...n,
			x: n.x + 25
		};
		case sh.Left: return {
			...n,
			x: n.x - 25
		};
		case sh.Down: return {
			...n,
			y: n.y + 25
		};
		case sh.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, uh = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new th(Bp(t)), this.windowListeners = new th(Ip(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(ih.Resize, this.handleCancel), this.windowListeners.add(ih.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ih.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && Qm(n), t(bm);
	}
	handleKeyDown(e) {
		if (em(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = ch, coordinateGetter: a = lh, scrollBehavior: o = "smooth" } = r, { code: s } = e;
			if (i.end.includes(s)) {
				this.handleEnd(e);
				return;
			}
			if (i.cancel.includes(s)) {
				this.handleCancel(e);
				return;
			}
			let { collisionRect: c } = n.current, l = c ? {
				x: c.left,
				y: c.top
			} : bm;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = Qp(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = Gm(n), p = Jm(n), m = {
						x: Math.min(i === sh.Right ? p.right - p.width / 2 : p.right, Math.max(i === sh.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === sh.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === sh.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === sh.Right && !s || i === sh.Left && !c, g = i === sh.Down && !l || i === sh.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === sh.Right && e <= d.x || i === sh.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						r.x = a ? n.scrollLeft - e : i === sh.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					}
					if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === sh.Down && e <= d.y || i === sh.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						r.y = a ? n.scrollTop - e : i === sh.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, Zp(Qp(u, this.referenceCoordinates), r));
			}
		}
	}
	handleMove(e, t) {
		let { onMove: n } = this.props;
		e.preventDefault(), n(t);
	}
	handleEnd(e) {
		let { onEnd: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	handleCancel(e) {
		let { onCancel: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll();
	}
};
uh.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = ch, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function dh(e) {
	return !!(e && "distance" in e);
}
function fh(e) {
	return !!(e && "delay" in e);
}
var ph = class {
	constructor(e, t, n) {
		n === void 0 && (n = nh(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = Bp(i), this.documentListeners = new th(this.document), this.listeners = new th(n), this.windowListeners = new th(Ip(i)), this.initialCoordinates = nm(r) ?? bm, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ih.Resize, this.handleCancel), this.windowListeners.add(ih.DragStart, ah), this.windowListeners.add(ih.VisibilityChange, this.handleCancel), this.windowListeners.add(ih.ContextMenu, ah), this.documentListeners.add(ih.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (fh(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (dh(t)) {
				this.handlePending(t);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
	}
	handlePending(e, t) {
		let { active: n, onPending: r } = this.props;
		r(n, e, this.initialCoordinates, t);
	}
	handleStart() {
		let { initialCoordinates: e } = this, { onStart: t } = this.props;
		e && (this.activated = !0, this.documentListeners.add(ih.Click, oh, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(ih.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = nm(e) ?? bm, s = Qp(n, o);
		if (!t && a) {
			if (dh(a)) {
				if (a.tolerance != null && rh(s, a.tolerance)) return this.handleCancel();
				if (rh(s, a.distance)) return this.handleStart();
			}
			if (fh(a) && rh(s, a.tolerance)) return this.handleCancel();
			this.handlePending(a, s);
			return;
		}
		e.cancelable && e.preventDefault(), i(o);
	}
	handleEnd() {
		let { onAbort: e, onEnd: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleCancel() {
		let { onAbort: e, onCancel: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleKeydown(e) {
		e.code === sh.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, mh = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, hh = class extends ph {
	constructor(e) {
		let { event: t } = e, n = Bp(t.target);
		super(e, mh, n);
	}
};
hh.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var gh = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, _h;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(_h ||= {});
var vh = class extends ph {
	constructor(e) {
		super(e, gh, Bp(e.event.target));
	}
};
vh.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== _h.RightClick && (r?.({ event: n }), !0);
	}
}];
var yh = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, bh = class extends ph {
	constructor(e) {
		super(e, yh);
	}
	static setup() {
		return window.addEventListener(yh.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(yh.move.name, e);
		};
		function e() {}
	}
};
bh.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var xh;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(xh ||= {});
var Sh;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Sh ||= {});
function Ch(e) {
	let { acceleration: t, activator: n = xh.Pointer, canScroll: r, draggingRect: i, enabled: o, interval: c = 5, order: u = Sh.TreeOrder, pointerCoordinates: f, scrollableAncestors: p, scrollableAncestorRects: m, delta: h, threshold: g } = e, _ = Th({
		delta: h,
		disabled: !o
	}), [v, y] = Up(), b = d({
		x: 0,
		y: 0
	}), x = d({
		x: 0,
		y: 0
	}), S = l(() => {
		switch (n) {
			case xh.Pointer: return f ? {
				top: f.y,
				bottom: f.y,
				left: f.x,
				right: f.x
			} : null;
			case xh.DraggableRect: return i;
		}
	}, [
		n,
		i,
		f
	]), C = d(null), w = a(() => {
		let e = C.current;
		if (!e) return;
		let t = b.current.x * x.current.x, n = b.current.y * x.current.y;
		e.scrollBy(t, n);
	}, []), T = l(() => u === Sh.TreeOrder ? [...p].reverse() : p, [u, p]);
	s(() => {
		if (!o || !p.length || !S) {
			y();
			return;
		}
		for (let e of T) {
			if (r?.(e) === !1) continue;
			let n = p.indexOf(e), i = m[n];
			if (!i) continue;
			let { direction: a, speed: o } = qm(e, i, S, t, g);
			for (let e of ["x", "y"]) _[e][a[e]] || (o[e] = 0, a[e] = 0);
			if (o.x > 0 || o.y > 0) {
				y(), C.current = e, v(w, c), b.current = o, x.current = a;
				return;
			}
		}
		b.current = {
			x: 0,
			y: 0
		}, x.current = {
			x: 0,
			y: 0
		}, y();
	}, [
		t,
		w,
		r,
		y,
		o,
		c,
		JSON.stringify(S),
		JSON.stringify(_),
		v,
		p,
		T,
		m,
		JSON.stringify(g)
	]);
}
var wh = {
	x: {
		[Um.Backward]: !1,
		[Um.Forward]: !1
	},
	y: {
		[Um.Backward]: !1,
		[Um.Forward]: !1
	}
};
function Th(e) {
	let { delta: t, disabled: n } = e, r = qp(t);
	return Gp((e) => {
		if (n || !r || !e) return wh;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[Um.Backward]: e.x[Um.Backward] || i.x === -1,
				[Um.Forward]: e.x[Um.Forward] || i.x === 1
			},
			y: {
				[Um.Backward]: e.y[Um.Backward] || i.y === -1,
				[Um.Forward]: e.y[Um.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function Eh(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return Gp((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function Dh(e, t) {
	return l(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var Oh;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Oh ||= {});
var kh;
(function(e) {
	e.Optimized = "optimized";
})(kh ||= {});
var Ah = /*#__PURE__*/ new Map();
function jh(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [o, c] = f(null), { frequency: l, measure: u, strategy: p } = i, m = d(e), h = b(), g = Wp(h), _ = a(function(e) {
		e === void 0 && (e = []), !g.current && c((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = d(null), y = Gp((t) => {
		if (h && !n) return Ah;
		if (!t || t === Ah || m.current !== e || o != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (o && o.length > 0 && !o.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new eh(u(e), e) : null;
				n.rect.current = r, r && t.set(n.id, r);
			}
			return t;
		}
		return t;
	}, [
		e,
		o,
		n,
		h,
		u
	]);
	return s(() => {
		m.current = e;
	}, [e]), s(() => {
		h || _();
	}, [n, h]), s(() => {
		o && o.length > 0 && c(null);
	}, [JSON.stringify(o)]), s(() => {
		h || typeof l != "number" || v.current !== null || (v.current = setTimeout(() => {
			_(), v.current = null;
		}, l));
	}, [
		l,
		h,
		_,
		...r
	]), {
		droppableRects: y,
		measureDroppableContainers: _,
		measuringScheduled: o != null
	};
	function b() {
		switch (p) {
			case Oh.Always: return !1;
			case Oh.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function Mh(e, t) {
	return Gp((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Nh(e, t) {
	return Mh(e, t);
}
function Ph(e) {
	let { callback: t, disabled: n } = e, r = Hp(t), i = l(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return s(() => () => i?.disconnect(), [i]), i;
}
function Fh(e) {
	let { callback: t, disabled: n } = e, r = Hp(t), i = l(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return s(() => () => i?.disconnect(), [i]), i;
}
function Ih(e) {
	return new eh(Mm(e), e);
}
function Lh(e, t, n) {
	t === void 0 && (t = Ih);
	let [r, i] = f(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = Ph({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = Fh({ callback: a });
	return Vp(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function Rh(e) {
	return Em(e, Mh(e));
}
var zh = [];
function Bh(e) {
	let t = d(e), n = Gp((n) => e ? n && n !== zh && e && t.current && e.parentNode === t.current.parentNode ? n : Lm(e) : zh, [e]);
	return s(() => {
		t.current = e;
	}, [e]), n;
}
function Vh(e) {
	let [t, n] = f(null), r = d(e), i = a((e) => {
		let t = zm(e.target);
		t && n((e) => e ? (e.set(t, Hm(t)), new Map(e)) : null);
	}, []);
	return s(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = zm(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Hm(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				zm(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), l(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => Zp(e, t), bm) : Ym(e) : bm, [e, t]);
}
function Hh(e, t) {
	t === void 0 && (t = []);
	let n = d(null);
	return s(() => {
		n.current = null;
	}, t), s(() => {
		let t = e !== bm;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? Qp(e, n.current) : bm;
}
function Uh(e) {
	s(() => {
		if (!Np) return;
		let t = e.map((e) => {
			let { sensor: t } = e;
			return t.setup == null ? void 0 : t.setup();
		});
		return () => {
			for (let e of t) e?.();
		};
	}, e.map((e) => {
		let { sensor: t } = e;
		return t;
	}));
}
function Wh(e, t) {
	return l(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function Gh(e) {
	return l(() => e ? Pm(e) : null, [e]);
}
var Kh = [];
function qh(e, t) {
	t === void 0 && (t = Mm);
	let [n] = e, r = Gh(n ? Ip(n) : null), [i, a] = f(Kh);
	function o() {
		a(() => e.length ? e.map((e) => Wm(e) ? r : new eh(t(e), e)) : Kh);
	}
	let s = Fh({ callback: o });
	return Vp(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function Jh(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return Rp(t) ? t : e;
}
function Yh(e) {
	let { measure: t } = e, [n, r] = f(null), i = Fh({ callback: a((e) => {
		for (let { target: n } of e) if (Rp(n)) {
			r((e) => {
				let r = t(n);
				return e ? {
					...e,
					width: r.width,
					height: r.height
				} : r;
			});
			break;
		}
	}, [t]) }), [o, s] = Kp(a((e) => {
		let n = Jh(e);
		i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null);
	}, [t, i]));
	return l(() => ({
		nodeRef: o,
		rect: n,
		setRef: s
	}), [
		n,
		o,
		s
	]);
}
var Xh = [{
	sensor: hh,
	options: {}
}, {
	sensor: uh,
	options: {}
}], Zh = { current: {} }, Qh = {
	draggable: { measure: Nm },
	droppable: {
		measure: Nm,
		strategy: Oh.WhileDragging,
		frequency: kh.Optimized
	},
	dragOverlay: { measure: Mm }
}, $h = class extends Map {
	get(e) {
		return e == null ? void 0 : super.get(e) ?? void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((e) => {
			let { disabled: t } = e;
			return !t;
		});
	}
	getNodeFor(e) {
		return this.get(e)?.node.current ?? void 0;
	}
}, eg = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new $h(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: _m
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: Qh,
	measureDroppableContainers: _m,
	windowRect: null,
	measuringScheduled: !1
}, tg = /*#__PURE__*/ n({
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: _m,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: _m
}), ng = /*#__PURE__*/ n(eg);
function rg() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new $h() }
	};
}
function ig(e, t) {
	switch (t.type) {
		case gm.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case gm.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case gm.DragEnd:
		case gm.DragCancel: return {
			...e,
			draggable: {
				...e.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case gm.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new $h(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case gm.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new $h(e.droppable.containers);
			return o.set(n, {
				...a,
				disabled: i
			}), {
				...e,
				droppable: {
					...e.droppable,
					containers: o
				}
			};
		}
		case gm.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new $h(e.droppable.containers);
			return a.delete(n), {
				...e,
				droppable: {
					...e.droppable,
					containers: a
				}
			};
		}
		default: return e;
	}
}
function ag(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = o(tg), a = qp(r), c = qp(n?.id);
	return s(() => {
		if (!t && !r && a && c != null) {
			if (!em(a) || document.activeElement === a.target) return;
			let e = i.get(c);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = am(e);
					if (t) {
						t.focus();
						break;
					}
				}
			});
		}
	}, [
		r,
		t,
		i,
		c,
		a
	]), null;
}
function og(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function sg(e) {
	return l(() => ({
		draggable: {
			...Qh.draggable,
			...e?.draggable
		},
		droppable: {
			...Qh.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...Qh.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function cg(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = d(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	Vp(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = Em(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = Rm(e);
			t && t.scrollBy({
				top: i.y,
				left: i.x
			});
		}
	}, [
		t,
		o,
		s,
		r,
		n
	]);
}
var lg = /*#__PURE__*/ n({
	...bm,
	scaleX: 1,
	scaleY: 1
}), ug;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(ug ||= {});
var dg = /*#__PURE__*/ i(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: o, sensors: c = Xh, collisionDetection: p = wm, measuring: m, modifiers: h, ...g } = e, [_, v] = u(ig, void 0, rg), [y, b] = fm(), [x, S] = f(ug.Uninitialized), C = x === ug.Initialized, { draggable: { active: w, nodes: T, translate: E }, droppable: { containers: D } } = _, O = w == null ? null : T.get(w), k = d({
		initial: null,
		translated: null
	}), A = l(() => w == null ? null : {
		id: w,
		data: O?.data ?? Zh,
		rect: k
	}, [w, O]), j = d(null), [M, N] = f(null), [P, F] = f(null), I = Wp(g, Object.values(g)), L = Yp("DndDescribedBy", n), ee = l(() => D.getEnabled(), [D]), R = sg(m), { droppableRects: z, measureDroppableContainers: B, measuringScheduled: V } = jh(ee, {
		dragging: C,
		dependencies: [E.x, E.y],
		config: R.droppable
	}), H = Eh(T, w), te = l(() => P ? nm(P) : null, [P]), U = Te(), ne = Nh(H, R.draggable.measure);
	cg({
		activeNode: w == null ? null : T.get(w),
		config: U.layoutShiftCompensation,
		initialRect: ne,
		measure: R.draggable.measure
	});
	let W = Lh(H, R.draggable.measure, ne), G = Lh(H ? H.parentElement : null), re = d({
		activatorEvent: null,
		active: null,
		activeNode: H,
		collisionRect: null,
		collisions: null,
		droppableRects: z,
		draggableNodes: T,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: D,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), ie = D.getNodeFor(re.current.over?.id), K = Yh({ measure: R.dragOverlay.measure }), ae = K.nodeRef.current ?? H, oe = C ? K.rect ?? W : null, q = !!(K.nodeRef.current && K.rect), se = Rh(q ? null : W), ce = Gh(ae ? Ip(ae) : null), le = Bh(C ? ie ?? H : null), ue = qh(le), J = og(h, {
		transform: {
			x: E.x - se.x,
			y: E.y - se.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: P,
		active: A,
		activeNodeRect: W,
		containerNodeRect: G,
		draggingNodeRect: oe,
		over: re.current.over,
		overlayNodeRect: K.rect,
		scrollableAncestors: le,
		scrollableAncestorRects: ue,
		windowRect: ce
	}), de = te ? Zp(te, E) : null, fe = Vh(le), pe = Hh(fe), me = Hh(fe, [W]), he = Zp(J, pe), ge = oe ? Om(oe, J) : null, _e = A && ge ? p({
		active: A,
		collisionRect: ge,
		droppableRects: z,
		droppableContainers: ee,
		pointerCoordinates: de
	}) : null, ve = Sm(_e, "id"), [ye, be] = f(null), xe = Tm(q ? J : Zp(J, me), ye?.rect ?? null, W), Y = d(null), Se = a((e, t) => {
		let { sensor: n, options: r } = t;
		if (j.current == null) return;
		let i = T.get(j.current);
		if (!i) return;
		let a = e.nativeEvent, o = new n({
			active: j.current,
			activeNode: i,
			event: a,
			options: r,
			context: re,
			onAbort(e) {
				if (!T.get(e)) return;
				let { onDragAbort: t } = I.current, n = { id: e };
				t?.(n), y({
					type: "onDragAbort",
					event: n
				});
			},
			onPending(e, t, n, r) {
				if (!T.get(e)) return;
				let { onDragPending: i } = I.current, a = {
					id: e,
					constraint: t,
					initialCoordinates: n,
					offset: r
				};
				i?.(a), y({
					type: "onDragPending",
					event: a
				});
			},
			onStart(e) {
				let t = j.current;
				if (t == null) return;
				let n = T.get(t);
				if (!n) return;
				let { onDragStart: r } = I.current, i = {
					activatorEvent: a,
					active: {
						id: t,
						data: n.data,
						rect: k
					}
				};
				je(() => {
					r?.(i), S(ug.Initializing), v({
						type: gm.DragStart,
						initialCoordinates: e,
						active: t
					}), y({
						type: "onDragStart",
						event: i
					}), N(Y.current), F(a);
				});
			},
			onMove(e) {
				v({
					type: gm.DragMove,
					coordinates: e
				});
			},
			onEnd: s(gm.DragEnd),
			onCancel: s(gm.DragCancel)
		});
		Y.current = o;
		function s(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = re.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = I.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === gm.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = gm.DragCancel);
				}
				j.current = null, je(() => {
					v({ type: e }), S(ug.Uninitialized), be(null), N(null), F(null), Y.current = null;
					let t = e === gm.DragEnd ? "onDragEnd" : "onDragCancel";
					if (o) {
						let e = I.current[t];
						e?.(o), y({
							type: t,
							event: o
						});
					}
				});
			};
		}
	}, [T]), Ce = Dh(c, a((e, t) => (n, r) => {
		let i = n.nativeEvent, a = T.get(r);
		if (j.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, j.current = r, Se(n, t));
	}, [T, Se]));
	Uh(c), Vp(() => {
		W && x === ug.Initializing && S(ug.Initialized);
	}, [W, x]), s(() => {
		let { onDragMove: e } = I.current, { active: t, activatorEvent: n, collisions: r, over: i } = re.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: he.x,
				y: he.y
			},
			over: i
		};
		je(() => {
			e?.(a), y({
				type: "onDragMove",
				event: a
			});
		});
	}, [he.x, he.y]), s(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = re.current;
		if (!e || j.current == null || !t || !i) return;
		let { onDragOver: a } = I.current, o = r.get(ve), s = o && o.rect.current ? {
			id: o.id,
			rect: o.rect.current,
			data: o.data,
			disabled: o.disabled
		} : null, c = {
			active: e,
			activatorEvent: t,
			collisions: n,
			delta: {
				x: i.x,
				y: i.y
			},
			over: s
		};
		je(() => {
			be(s), a?.(c), y({
				type: "onDragOver",
				event: c
			});
		});
	}, [ve]), Vp(() => {
		re.current = {
			activatorEvent: P,
			active: A,
			activeNode: H,
			collisionRect: ge,
			collisions: _e,
			droppableRects: z,
			draggableNodes: T,
			draggingNode: ae,
			draggingNodeRect: oe,
			droppableContainers: D,
			over: ye,
			scrollableAncestors: le,
			scrollAdjustedTranslate: he
		}, k.current = {
			initial: oe,
			translated: ge
		};
	}, [
		A,
		H,
		_e,
		ge,
		T,
		ae,
		oe,
		z,
		D,
		ye,
		le,
		he
	]), Ch({
		...U,
		delta: E,
		draggingRect: ge,
		pointerCoordinates: de,
		scrollableAncestors: le,
		scrollableAncestorRects: ue
	});
	let we = l(() => ({
		active: A,
		activeNode: H,
		activeNodeRect: W,
		activatorEvent: P,
		collisions: _e,
		containerNodeRect: G,
		dragOverlay: K,
		draggableNodes: T,
		droppableContainers: D,
		droppableRects: z,
		over: ye,
		measureDroppableContainers: B,
		scrollableAncestors: le,
		scrollableAncestorRects: ue,
		measuringConfiguration: R,
		measuringScheduled: V,
		windowRect: ce
	}), [
		A,
		H,
		W,
		P,
		_e,
		G,
		K,
		T,
		D,
		z,
		ye,
		B,
		le,
		ue,
		R,
		V,
		ce
	]), X = l(() => ({
		activatorEvent: P,
		activators: Ce,
		active: A,
		activeNodeRect: W,
		ariaDescribedById: { draggable: L },
		dispatch: v,
		draggableNodes: T,
		over: ye,
		measureDroppableContainers: B
	}), [
		P,
		Ce,
		A,
		W,
		v,
		L,
		T,
		ye,
		B
	]);
	return t.createElement(um.Provider, { value: b }, t.createElement(tg.Provider, { value: X }, t.createElement(ng.Provider, { value: we }, t.createElement(lg.Provider, { value: xe }, o)), t.createElement(ag, { disabled: r?.restoreFocus === !1 })), t.createElement(hm, {
		...r,
		hiddenTextDescribedById: L
	}));
	function Te() {
		let e = M?.autoScrollEnabled === !1, t = typeof i == "object" ? i.enabled === !1 : i === !1, n = C && !e && !t;
		return typeof i == "object" ? {
			...i,
			enabled: n
		} : { enabled: n };
	}
}), fg = /*#__PURE__*/ n(null), pg = "button", mg = "Draggable";
function hg(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = Yp(mg), { activators: s, activatorEvent: c, active: u, activeNodeRect: d, ariaDescribedById: f, draggableNodes: p, over: m } = o(tg), { role: h = pg, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = u?.id === t, y = o(v ? lg : fg), [b, x] = Kp(), [S, C] = Kp(), w = Wh(s, t), T = Wp(n);
	return Vp(() => (p.set(t, {
		id: t,
		key: a,
		node: b,
		activatorNode: S,
		data: T
	}), () => {
		let e = p.get(t);
		e && e.key === a && p.delete(t);
	}), [p, t]), {
		active: u,
		activatorEvent: c,
		activeNodeRect: d,
		attributes: l(() => ({
			role: h,
			tabIndex: _,
			"aria-disabled": r,
			"aria-pressed": v && h === pg ? !0 : void 0,
			"aria-roledescription": g,
			"aria-describedby": f.draggable
		}), [
			r,
			h,
			_,
			v,
			g,
			f.draggable
		]),
		isDragging: v,
		listeners: r ? void 0 : w,
		node: b,
		over: m,
		setNodeRef: x,
		setActivatorNodeRef: C,
		transform: y
	};
}
function gg() {
	return o(ng);
}
var _g = "Droppable", vg = { timeout: 25 };
function yg(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, c = Yp(_g), { active: l, dispatch: u, over: f, measureDroppableContainers: p } = o(tg), m = d({ disabled: n }), h = d(!1), g = d(null), _ = d(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...vg,
		...i
	}, x = Wp(y ?? r), S = Fh({
		callback: a(() => {
			if (!h.current) {
				h.current = !0;
				return;
			}
			_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				p(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b);
		}, [b]),
		disabled: v || !l
	}), [C, w] = Kp(a((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = Wp(t);
	return s(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), s(() => (u({
		type: gm.RegisterDroppable,
		element: {
			id: r,
			key: c,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: gm.UnregisterDroppable,
		key: c,
		id: r
	})), [r]), s(() => {
		n !== m.current.disabled && (u({
			type: gm.SetDroppableDisabled,
			id: r,
			key: c,
			disabled: n
		}), m.current.disabled = n);
	}, [
		r,
		c,
		n,
		u
	]), {
		active: l,
		rect: g,
		isOver: f?.id === r,
		node: C,
		over: f,
		setNodeRef: w
	};
}
//#endregion
//#region ../../node_modules/@dnd-kit/sortable/dist/sortable.esm.js
function bg(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function xg(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function Sg(e) {
	return e !== null && e >= 0;
}
function Cg(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function wg(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var Tg = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = bg(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, Eg = {
	scaleX: 1,
	scaleY: 1
}, Dg = (e) => {
	let { activeIndex: t, activeNodeRect: n, index: r, rects: i, overIndex: a } = e, o = i[t] ?? n;
	if (!o) return null;
	if (r === t) {
		let e = i[a];
		return e ? {
			x: 0,
			y: t < a ? e.top + e.height - (o.top + o.height) : e.top - o.top,
			...Eg
		} : null;
	}
	let s = Og(i, r, t);
	return r > t && r <= a ? {
		x: 0,
		y: -o.height - s,
		...Eg
	} : r < t && r >= a ? {
		x: 0,
		y: o.height + s,
		...Eg
	} : {
		x: 0,
		y: 0,
		...Eg
	};
};
function Og(e, t, n) {
	let r = e[t], i = e[t - 1], a = e[t + 1];
	return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
var kg = "Sortable", Ag = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: kg,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: Tg,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function jg(e) {
	let { children: n, id: r, items: i, strategy: a = Tg, disabled: o = !1 } = e, { active: c, dragOverlay: u, droppableRects: f, over: p, measureDroppableContainers: m } = gg(), h = Yp(kg, r), g = u.rect !== null, _ = l(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = c != null, y = c ? _.indexOf(c.id) : -1, b = p ? _.indexOf(p.id) : -1, x = d(_), S = !Cg(_, x.current), C = b !== -1 && y === -1 || S, w = wg(o);
	Vp(() => {
		S && v && m(_);
	}, [
		S,
		_,
		v,
		m
	]), s(() => {
		x.current = _;
	}, [_]);
	let T = l(() => ({
		activeIndex: y,
		containerId: h,
		disabled: w,
		disableTransforms: C,
		items: _,
		overIndex: b,
		useDragOverlay: g,
		sortedRects: xg(_, f),
		strategy: a
	}), [
		y,
		h,
		w.draggable,
		w.droppable,
		C,
		_,
		b,
		f,
		g,
		a
	]);
	return t.createElement(Ag.Provider, { value: T }, n);
}
var Mg = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return bg(n, r, i).indexOf(t);
}, Ng = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, Pg = {
	duration: 200,
	easing: "ease"
}, Fg = "transform", Ig = /*#__PURE__*/ rm.Transition.toString({
	property: Fg,
	duration: 0,
	easing: "linear"
}), Lg = { roleDescription: "sortable" };
function Rg(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = f(null), c = d(n);
	return Vp(() => {
		if (!t && n !== c.current && r.current) {
			let e = i.current;
			if (e) {
				let t = Mm(r.current, { ignoreTransform: !0 }), n = {
					x: e.left - t.left,
					y: e.top - t.top,
					scaleX: e.width / t.width,
					scaleY: e.height / t.height
				};
				(n.x || n.y) && o(n);
			}
		}
		n !== c.current && (c.current = n);
	}, [
		t,
		n,
		r,
		i
	]), s(() => {
		a && o(null);
	}, [a]), a;
}
function zg(e) {
	let { animateLayoutChanges: t = Ng, attributes: n, disabled: r, data: i, getNewIndex: a = Mg, id: c, strategy: u, resizeObserverConfig: f, transition: p = Pg } = e, { items: m, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = o(Ag), C = Bg(r, _), w = m.indexOf(c), T = l(() => ({
		sortable: {
			containerId: h,
			index: w,
			items: m
		},
		...i
	}), [
		h,
		i,
		w,
		m
	]), E = l(() => m.slice(m.indexOf(c)), [m, c]), { rect: D, node: O, isOver: k, setNodeRef: A } = yg({
		id: c,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...f
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: ee, setActivatorNodeRef: R, transform: z } = hg({
		id: c,
		data: T,
		attributes: {
			...Lg,
			...n
		},
		disabled: C.draggable
	}), B = Mp(A, F), V = !!j, H = V && !v && Sg(g) && Sg(b), te = !x && L, U = H ? (te && H ? z : null) ?? (u ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ne = Sg(g) && Sg(b) ? a({
		id: c,
		items: m,
		activeIndex: g,
		overIndex: b
	}) : w, W = j?.id, G = d({
		activeId: W,
		items: m,
		newIndex: ne,
		containerId: h
	}), re = m !== G.current.items, ie = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: V,
		id: c,
		index: w,
		items: m,
		newIndex: G.current.newIndex,
		previousItems: G.current.items,
		previousContainerId: G.current.containerId,
		transition: p,
		wasDragging: G.current.activeId != null
	}), K = Rg({
		disabled: !ie,
		index: w,
		node: O,
		rect: D
	});
	return s(() => {
		V && G.current.newIndex !== ne && (G.current.newIndex = ne), h !== G.current.containerId && (G.current.containerId = h), m !== G.current.items && (G.current.items = m);
	}, [
		V,
		ne,
		h,
		m
	]), s(() => {
		if (W === G.current.activeId) return;
		if (W != null && G.current.activeId == null) {
			G.current.activeId = W;
			return;
		}
		let e = setTimeout(() => {
			G.current.activeId = W;
		}, 50);
		return () => clearTimeout(e);
	}, [W]), {
		active: j,
		activeIndex: g,
		attributes: P,
		data: T,
		rect: D,
		index: w,
		newIndex: ne,
		items: m,
		isOver: k,
		isSorting: V,
		isDragging: L,
		listeners: I,
		node: O,
		overIndex: b,
		over: ee,
		setNodeRef: B,
		setActivatorNodeRef: R,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: K ?? U,
		transition: ae()
	};
	function ae() {
		if (K || re && G.current.newIndex === w) return Ig;
		if (!(te && !em(M) || !p) && (V || ie)) return rm.Transition.toString({
			...p,
			property: Fg
		});
	}
}
function Bg(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
sh.Down, sh.Right, sh.Up, sh.Left;
//#endregion
//#region ../../node_modules/zustand/esm/middleware.mjs
function Vg(e, t) {
	let n;
	try {
		n = e();
	} catch {
		return;
	}
	return {
		getItem: (e) => {
			let r = (e) => e === null ? null : JSON.parse(e, t?.reviver), i = n.getItem(e) ?? null;
			return i instanceof Promise ? i.then(r) : r(i);
		},
		setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
		removeItem: (e) => n.removeItem(e)
	};
}
var Hg = (e) => (t) => {
	try {
		let n = e(t);
		return n instanceof Promise ? n : {
			then(e) {
				return Hg(e)(n);
			},
			catch(e) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(e) {
				return this;
			},
			catch(t) {
				return Hg(t)(e);
			}
		};
	}
}, Ug = (e, t) => (n, r, i) => {
	let a = {
		storage: Vg(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, s = 0, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = a.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e);
	}, r, i);
	let d = () => {
		let e = a.partialize({ ...r() });
		return u.setItem(a.name, {
			state: e,
			version: a.version
		});
	}, f = i.setState;
	i.setState = (e, t) => (f(e, t), d());
	let p = e((...e) => (n(...e), d()), r, i);
	i.getInitialState = () => p;
	let m, h = () => {
		if (!u) return;
		let e = ++s;
		o = !1, c.forEach((e) => e(r() ?? p));
		let t = a.onRehydrateStorage?.call(a, r() ?? p) || void 0;
		return Hg(u.getItem.bind(u))(a.name).then((e) => {
			if (e) {
				if (typeof e.version == "number" && e.version !== a.version) {
					if (a.migrate) {
						let t = a.migrate(e.state, e.version);
						return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
					}
					console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
				} else return [!1, e.state];
			}
			return [!1, void 0];
		}).then((t) => {
			if (e !== s) return;
			let [i, o] = t;
			if (m = a.merge(o, r() ?? p), n(m, !0), i) return d();
		}).then(() => {
			e === s && (t?.(r(), void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((n) => {
			e === s && t?.(void 0, n);
		});
	};
	return i.persist = {
		setOptions: (e) => {
			a = {
				...a,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			u?.removeItem(a.name);
		},
		getOptions: () => a,
		rehydrate: () => h(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, a.skipHydration || h(), m || p;
}, Wg = {
	default: 280,
	min: 260,
	max: 480
}, Gg = {
	default: 340,
	min: 300,
	max: 600
};
function Kg(e, t) {
	return Math.min(t.max, Math.max(t.min, e));
}
var qg = sl()(Ug((e) => ({
	sidebarWidth: Wg.default,
	rightPanelWidth: Gg.default,
	setSidebarWidth: (t) => e({ sidebarWidth: Kg(t, Wg) }),
	setRightPanelWidth: (t) => e({ rightPanelWidth: Kg(t, Gg) })
}), {
	name: "survey-builder:panel-widths",
	version: 1
})), Jg = {
	shortText: Ve,
	longText: He,
	singleChoice: Ue,
	multipleChoice: We,
	rating: Ge,
	nps: Ke,
	number: qe,
	boolean: Je,
	date: Ye,
	label: Xe,
	turnstile: Ze
};
//#endregion
//#region src/builder/pageIcon.tsx
function Yg(e) {
	return e === "warning" ? {
		Icon: Oe,
		color: "warning.main"
	} : e === "branch" ? {
		Icon: Be,
		color: "primary.main"
	} : e === "empty" ? {
		Icon: ze,
		color: "text.secondary"
	} : {
		Icon: Jg[e],
		color: "text.secondary"
	};
}
//#endregion
//#region src/builder/pageActions.ts
function Xg(e, t) {
	return e.pages.reduce((e, n) => e + n.branch.filter((e) => e.goToPageId === t).length, 0);
}
function Zg(e, t, n) {
	let r = Xg(e, t), i = r > 0 ? ` This page is the target of ${r} branch rule${r === 1 ? "" : "s"}; deleting it will also remove ${r === 1 ? "that rule" : "those rules"}.` : "";
	return window.confirm(`Delete "${n}"?${i} This can't be undone by itself (use Undo right after if you change your mind).`);
}
//#endregion
//#region src/builder/components/ResizeHandle.tsx
var Qg = 16;
function $g({ edge: e, width: t, min: n, max: r, defaultWidth: i, onChange: a, label: o }) {
	let [s, c] = f(!1), l = d(null), u = (e) => Math.min(r, Math.max(n, e)), p = (e) => {
		e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), l.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startWidth: t
		}, c(!0), document.body.style.userSelect = "none";
	}, m = (t) => {
		if (!l.current || l.current.pointerId !== t.pointerId) return;
		t.stopPropagation();
		let n = t.clientX - l.current.startX, r = e === "left" ? -n : n;
		a(u(l.current.startWidth + r));
	}, h = (e) => {
		l.current && l.current.pointerId === e.pointerId && (e.stopPropagation(), l.current = null, c(!1), document.body.style.userSelect = "");
	};
	return /* @__PURE__ */ x(D, {
		role: "separator",
		"aria-orientation": "vertical",
		"aria-valuenow": Math.round(t),
		"aria-valuemin": n,
		"aria-valuemax": r,
		"aria-label": o,
		tabIndex: 0,
		onPointerDown: p,
		onPointerMove: m,
		onPointerUp: h,
		onPointerCancel: h,
		onDoubleClick: () => a(i),
		onKeyDown: (i) => {
			let o = e === "left" ? "ArrowLeft" : "ArrowRight", s = e === "left" ? "ArrowRight" : "ArrowLeft";
			i.key === o ? (a(u(t + Qg)), i.preventDefault()) : i.key === s ? (a(u(t - Qg)), i.preventDefault()) : i.key === "Home" ? (a(n), i.preventDefault()) : i.key === "End" && (a(r), i.preventDefault());
		},
		sx: {
			position: "absolute",
			top: 0,
			bottom: 0,
			[e]: -3,
			width: 6,
			cursor: "col-resize",
			touchAction: "none",
			zIndex: 2,
			bgcolor: s ? "primary.main" : "transparent",
			opacity: s ? .5 : 1,
			transition: s ? "none" : "background-color 0.1s",
			"&:hover": {
				bgcolor: "primary.main",
				opacity: .35
			},
			"&:focus-visible": {
				bgcolor: "primary.main",
				opacity: .5,
				outline: "none"
			}
		}
	});
}
//#endregion
//#region src/builder/components/PageSidebar.tsx
function e_(e, t) {
	return {
		display: "flex",
		alignItems: "center",
		gap: .5,
		bgcolor: e ? h(t.palette.error.main, .08) : "action.hover",
		border: "1px solid",
		borderColor: e ? h(t.palette.error.main, .4) : "transparent",
		borderRadius: 5,
		pl: 1.25,
		pr: 1,
		py: .5
	};
}
function t_() {
	return /* @__PURE__ */ x(D, {
		component: "span",
		sx: {
			color: "error.main",
			fontWeight: 700,
			ml: .25
		},
		children: "*"
	});
}
function n_({ survey: e }) {
	let t = Q((e) => e.setSurveyTitle), n = Q((e) => e.setSurveyType), r = de(), i = e.pages.reduce((e, t) => e + t.questions.length, 0), a = e.title.trim().length === 0, o = !(e.type ?? "").trim();
	return /* @__PURE__ */ x(D, {
		sx: {
			px: 2,
			pt: 2,
			pb: 1.5,
			borderBottom: "1px solid",
			borderColor: "divider"
		},
		children: /* @__PURE__ */ S(K, {
			spacing: .75,
			children: [
				/* @__PURE__ */ S(D, {
					sx: e_(a, r),
					children: [/* @__PURE__ */ S(J, {
						variant: "caption",
						color: "text.secondary",
						fontWeight: 600,
						children: ["Name:", /* @__PURE__ */ x(t_, {})]
					}), /* @__PURE__ */ x(q, {
						variant: "standard",
						value: e.title,
						onChange: (e) => t(e.target.value),
						fullWidth: !0,
						slotProps: { input: {
							disableUnderline: !0,
							style: { fontSize: "0.8125rem" }
						} },
						sx: { "& .MuiInputBase-input": { p: 0 } }
					})]
				}),
				a && /* @__PURE__ */ x(J, {
					variant: "caption",
					color: "error.main",
					sx: { mt: -.5 },
					children: "Name is required."
				}),
				/* @__PURE__ */ x(ue, {
					title: "Type -- a free-text category for this survey, e.g. intake, screening",
					children: /* @__PURE__ */ S(D, {
						sx: e_(o, r),
						children: [/* @__PURE__ */ S(J, {
							variant: "caption",
							color: "text.secondary",
							fontWeight: 600,
							children: ["Type:", /* @__PURE__ */ x(t_, {})]
						}), /* @__PURE__ */ x(q, {
							variant: "standard",
							placeholder: "—",
							value: e.type ?? "",
							onChange: (e) => n(rl(e.target.value)),
							fullWidth: !0,
							slotProps: { input: {
								disableUnderline: !0,
								style: { fontSize: "0.8125rem" }
							} },
							sx: { "& .MuiInputBase-input": { p: 0 } }
						})]
					})
				}),
				o && /* @__PURE__ */ x(J, {
					variant: "caption",
					color: "error.main",
					sx: { mt: -.5 },
					children: "Type is required."
				}),
				e.description && /* @__PURE__ */ x(j, {
					size: "small",
					label: e.description,
					sx: {
						height: 20,
						fontSize: 11,
						bgcolor: "action.hover",
						fontWeight: 500,
						alignSelf: "flex-start"
					}
				}),
				/* @__PURE__ */ S(J, {
					variant: "caption",
					color: "text.secondary",
					children: [
						e.pages.length,
						" pages · ",
						i,
						" questions"
					]
				})
			]
		})
	});
}
function r_({ page: e }) {
	let t = Q((e) => e.setPageTitle), [n, r] = f(!1), [i, a] = f(e.title), o = d(null);
	s(() => {
		n && (a(e.title), requestAnimationFrame(() => o.current?.select()));
	}, [n, e.title]);
	let c = () => {
		let n = i.trim();
		n && n !== e.title && t(e.id, n), r(!1);
	};
	return n ? /* @__PURE__ */ x(q, {
		inputRef: o,
		size: "small",
		variant: "standard",
		value: i,
		onChange: (e) => a(e.target.value),
		onClick: (e) => e.stopPropagation(),
		onBlur: c,
		onKeyDown: (e) => {
			e.key === "Enter" && c(), e.key === "Escape" && r(!1);
		},
		fullWidth: !0
	}) : /* @__PURE__ */ x(J, {
		variant: "body2",
		fontWeight: 600,
		noWrap: !0,
		onDoubleClick: (e) => {
			e.stopPropagation(), r(!0);
		},
		title: "Double-click to rename",
		sx: {
			flex: 1,
			minWidth: 0
		},
		children: e.title
	});
}
function i_({ page: e, survey: t, active: n, expanded: r, onToggleExpanded: i }) {
	let { attributes: a, listeners: o, setNodeRef: s, transform: c, transition: l, isDragging: u } = zg({ id: e.id }), d = Q((e) => e.selectedQuestionId), f = Q((e) => e.selectPage), p = Q((e) => e.selectQuestion), m = Q((e) => e.removePage), h = Q((e) => e.setStartPage), g = de(), _ = {
		transform: rm.Transform.toString(c),
		transition: l,
		opacity: u ? .4 : 1
	}, { Icon: v, color: y } = Yg(Jf(e)), b = Hf(t, e.id), C = Uf(t, e.id), w = Kf(t, e.id), T = e.id === t.startPageId, E = () => {
		t.pages.length <= 1 || Zg(t, e.id, e.title) && m(e.id);
	}, O = (t) => {
		n || f(e.id), p(t);
	};
	return /* @__PURE__ */ S(D, {
		ref: s,
		style: _,
		children: [/* @__PURE__ */ S(K, {
			direction: "row",
			alignItems: "center",
			spacing: .75,
			onClick: () => f(e.id),
			sx: {
				cursor: "pointer",
				borderRadius: 1.5,
				pl: .5,
				pr: 1,
				py: .5,
				bgcolor: n ? "primary.light" : void 0,
				"&:hover": { bgcolor: n ? "primary.light" : "action.hover" },
				"&:hover .drag-handle, &:focus-within .drag-handle": { opacity: 1 },
				"&:hover .set-start-btn, &:focus-within .set-start-btn": { opacity: 1 }
			},
			children: [
				/* @__PURE__ */ x(D, {
					className: "drag-handle",
					...o,
					...a,
					sx: {
						opacity: 0,
						transition: "opacity 0.15s",
						display: "flex",
						alignItems: "center",
						cursor: "grab",
						color: "text.disabled"
					},
					children: /* @__PURE__ */ x(Fe, { fontSize: "small" })
				}),
				/* @__PURE__ */ x(D, {
					sx: {
						width: 24,
						height: 24,
						borderRadius: 1,
						flexShrink: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: n ? "primary.main" : "action.hover"
					},
					children: /* @__PURE__ */ x(v, { sx: {
						fontSize: 15,
						color: n ? "primary.contrastText" : y
					} })
				}),
				/* @__PURE__ */ x(r_, { page: e }),
				T && /* @__PURE__ */ x(ue, {
					title: "This is the first page the survey opens on",
					children: /* @__PURE__ */ x(j, {
						size: "small",
						icon: /* @__PURE__ */ x(Le, { sx: { fontSize: "12px !important" } }),
						label: "Start",
						sx: {
							height: 18,
							fontSize: 10,
							fontWeight: 700,
							bgcolor: g.custom.successBanner.bg,
							color: g.custom.successBanner.text,
							"& .MuiChip-icon": {
								color: g.custom.successBanner.text,
								ml: "4px"
							}
						}
					})
				}),
				!T && /* @__PURE__ */ x(ue, {
					title: "Set as start page",
					children: /* @__PURE__ */ x(L, {
						size: "small",
						className: "set-start-btn",
						"aria-label": `Set "${e.title}" as start page`,
						onClick: (t) => {
							t.stopPropagation(), h(e.id);
						},
						sx: {
							opacity: 0,
							transition: "opacity 0.15s",
							flexShrink: 0
						},
						children: /* @__PURE__ */ x(Re, { sx: { fontSize: 15 } })
					})
				}),
				C && /* @__PURE__ */ x(j, {
					size: "small",
					label: "Not connected",
					sx: {
						height: 18,
						fontSize: 10,
						bgcolor: "transparent",
						color: "text.disabled",
						border: "1px dashed",
						borderColor: "text.disabled"
					}
				}),
				b && !C && /* @__PURE__ */ x(j, {
					size: "small",
					label: "Conditional",
					sx: {
						height: 18,
						fontSize: 10,
						bgcolor: "action.hover",
						color: "text.secondary"
					}
				}),
				w && /* @__PURE__ */ x(ue, {
					title: "This page's position in the list doesn't match where it actually falls in the flow respondents take -- reordering only changes the list, not the branching itself.",
					children: /* @__PURE__ */ x(Ie, { sx: {
						fontSize: 15,
						color: "text.disabled",
						flexShrink: 0
					} })
				}),
				/* @__PURE__ */ x(J, {
					variant: "caption",
					color: n ? "primary.dark" : "text.secondary",
					children: e.questions.length
				}),
				t.pages.length > 1 && /* @__PURE__ */ x(ue, {
					title: `Delete "${e.title}"`,
					children: /* @__PURE__ */ x(L, {
						size: "small",
						"aria-label": `Delete ${e.title}`,
						onClick: (e) => {
							e.stopPropagation(), E();
						},
						children: /* @__PURE__ */ x(Ne, { sx: { fontSize: 15 } })
					})
				}),
				/* @__PURE__ */ x(L, {
					size: "small",
					"aria-label": r ? `Collapse ${e.title}` : `Expand ${e.title}`,
					onClick: (e) => {
						e.stopPropagation(), i();
					},
					children: /* @__PURE__ */ x(Pe, {
						fontSize: "small",
						sx: {
							transform: r ? "none" : "rotate(-90deg)",
							transition: "transform 0.15s"
						}
					})
				})
			]
		}), /* @__PURE__ */ x(M, {
			in: r,
			unmountOnExit: !0,
			children: /* @__PURE__ */ x(K, {
				sx: {
					pl: 4.5,
					pr: 1
				},
				children: e.questions.length === 0 ? /* @__PURE__ */ x(J, {
					variant: "caption",
					color: "text.secondary",
					sx: { py: .5 },
					children: "No questions yet"
				}) : e.questions.map((e) => {
					let t = Jg[e.type], r = n && d === e.id;
					return /* @__PURE__ */ S(K, {
						direction: "row",
						alignItems: "center",
						spacing: 1,
						onClick: () => O(e.id),
						sx: {
							cursor: "pointer",
							borderRadius: 1,
							px: 1,
							py: .5,
							bgcolor: r ? "primary.main" : void 0,
							color: r ? "primary.contrastText" : "text.secondary",
							"&:hover": { bgcolor: r ? "primary.main" : "action.hover" }
						},
						children: [/* @__PURE__ */ x(t, {
							fontSize: "small",
							sx: { color: r ? "inherit" : "action.active" }
						}), /* @__PURE__ */ x(J, {
							variant: "body2",
							noWrap: !0,
							sx: { minWidth: 0 },
							children: e.label || "(untitled question)"
						})]
					}, e.id);
				})
			})
		})]
	});
}
function a_() {
	let e = Q((e) => e.survey), t = Q((e) => e.selectedPageId), n = Q((e) => e.addPage), r = Q((e) => e.reorderPage), i = qg((e) => e.sidebarWidth), a = qg((e) => e.setSidebarWidth), [o, s] = f(/* @__PURE__ */ new Set()), c = ym(vm(hh, { activationConstraint: { distance: 8 } })), l = (t) => {
		let { active: n, over: i } = t;
		if (!i || n.id === i.id) return;
		let a = e.pages.findIndex((e) => e.id === n.id), o = e.pages.findIndex((e) => e.id === i.id);
		a !== -1 && o !== -1 && r(a, o);
	}, u = (e) => {
		s((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	};
	return /* @__PURE__ */ S(D, {
		component: "aside",
		sx: {
			position: "relative",
			width: i,
			flexShrink: 0,
			borderRight: "1px solid",
			borderColor: "divider",
			bgcolor: "background.paper",
			display: "flex",
			flexDirection: "column",
			minHeight: 0
		},
		children: [
			/* @__PURE__ */ x($g, {
				edge: "right",
				width: i,
				min: Wg.min,
				max: Wg.max,
				defaultWidth: Wg.default,
				onChange: a,
				label: "Resize pages panel"
			}),
			/* @__PURE__ */ x(n_, { survey: e }),
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				spacing: 1,
				sx: {
					px: 2,
					py: 1.5
				},
				children: [
					/* @__PURE__ */ x(J, {
						variant: "subtitle2",
						children: "Pages"
					}),
					/* @__PURE__ */ x(j, {
						size: "small",
						label: e.pages.length,
						sx: {
							height: 18,
							fontSize: 11
						}
					}),
					/* @__PURE__ */ x(D, { sx: { flex: 1 } }),
					/* @__PURE__ */ x(ue, {
						title: "Add page",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							onClick: n,
							"aria-label": "Add page",
							children: /* @__PURE__ */ x(Me, { fontSize: "small" })
						})
					})
				]
			}),
			/* @__PURE__ */ x(D, {
				sx: {
					flex: 1,
					overflowY: "auto",
					px: 1
				},
				children: /* @__PURE__ */ x(dg, {
					sensors: c,
					onDragEnd: l,
					children: /* @__PURE__ */ x(jg, {
						items: e.pages.map((e) => e.id),
						strategy: Dg,
						children: /* @__PURE__ */ x(K, {
							spacing: .25,
							children: e.pages.map((n) => {
								let r = n.id === t, i = r || o.has(n.id);
								return /* @__PURE__ */ x(i_, {
									page: n,
									survey: e,
									active: r,
									expanded: i,
									onToggleExpanded: () => u(n.id)
								}, n.id);
							})
						})
					})
				})
			}),
			/* @__PURE__ */ x(D, {
				sx: {
					p: 1.5,
					pt: 1
				},
				children: /* @__PURE__ */ x(fe, {
					fullWidth: !0,
					startIcon: /* @__PURE__ */ x(Me, { fontSize: "small" }),
					onClick: n,
					sx: {
						border: "1px dashed",
						borderColor: "divider",
						color: "text.secondary",
						justifyContent: "flex-start",
						py: 1
					},
					children: "Add page"
				})
			})
		]
	});
}
//#endregion
//#region src/builder/components/ConditionEditor.tsx
var o_ = [
	{
		value: "eq",
		label: "is",
		needsValue: !0
	},
	{
		value: "neq",
		label: "is not",
		needsValue: !0
	},
	{
		value: "contains",
		label: "contains",
		needsValue: !0
	},
	{
		value: "gt",
		label: ">",
		needsValue: !0
	},
	{
		value: "gte",
		label: ">=",
		needsValue: !0
	},
	{
		value: "lt",
		label: "<",
		needsValue: !0
	},
	{
		value: "lte",
		label: "<=",
		needsValue: !0
	},
	{
		value: "isEmpty",
		label: "is empty",
		needsValue: !1
	},
	{
		value: "isNotEmpty",
		label: "is not empty",
		needsValue: !1
	}
];
function s_(e) {
	let t = e[0];
	return {
		fieldPath: t?.scope ?? "",
		operator: "eq",
		value: t?.questionType === "boolean" || ""
	};
}
function c_({ leaf: e, field: t, onChange: n }) {
	return t ? t.questionType === "boolean" ? /* @__PURE__ */ S(G, {
		size: "small",
		value: e.value === !0 ? "true" : "false",
		onChange: (e) => n(e.target.value === "true"),
		children: [/* @__PURE__ */ x(U, {
			value: "true",
			children: "Yes"
		}), /* @__PURE__ */ x(U, {
			value: "false",
			children: "No"
		})]
	}) : (t.questionType === "singleChoice" || t.questionType === "multipleChoice") && t.choices ? /* @__PURE__ */ x(G, {
		size: "small",
		value: typeof e.value == "string" ? e.value : "",
		onChange: (e) => n(e.target.value),
		children: t.choices.map((e) => /* @__PURE__ */ x(U, {
			value: e,
			children: e
		}, e))
	}) : t.questionType === "number" || t.questionType === "rating" || t.questionType === "nps" ? /* @__PURE__ */ x(q, {
		size: "small",
		type: "number",
		value: typeof e.value == "number" ? e.value : "",
		onChange: (e) => n(e.target.value === "" ? void 0 : Number(e.target.value))
	}) : /* @__PURE__ */ x(q, {
		size: "small",
		value: e.value === void 0 ? "" : String(e.value),
		onChange: (e) => n(e.target.value)
	}) : /* @__PURE__ */ x(q, {
		size: "small",
		value: e.value === void 0 ? "" : String(e.value),
		onChange: (e) => n(e.target.value)
	});
}
function l_({ value: e, onChange: t, availableFields: n, emptyLabel: r }) {
	let i = e !== null, a = (e?.conditions ?? []).filter((e) => !St(e)), o = (n) => {
		if (n.length === 0) {
			t(null);
			return;
		}
		t({
			logic: e?.logic ?? "AND",
			conditions: n
		});
	};
	return n.length === 0 ? /* @__PURE__ */ x(J, {
		variant: "caption",
		color: "text.secondary",
		children: "No earlier questions to reference yet."
	}) : i ? /* @__PURE__ */ S(K, {
		spacing: 1,
		children: [
			/* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					color: "text.secondary",
					children: "Match"
				}), /* @__PURE__ */ S(G, {
					size: "small",
					value: e.logic,
					onChange: (n) => t({
						...e,
						logic: n.target.value
					}),
					children: [/* @__PURE__ */ x(U, {
						value: "AND",
						children: "ALL of"
					}), /* @__PURE__ */ x(U, {
						value: "OR",
						children: "ANY of"
					})]
				})]
			}),
			a.map((e, t) => {
				let r = o_.find((t) => t.value === e.operator), i = n.find((t) => t.scope === e.fieldPath);
				return /* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [
						/* @__PURE__ */ x(G, {
							size: "small",
							value: e.fieldPath,
							sx: { minWidth: 120 },
							onChange: (r) => {
								let i = n.find((e) => e.scope === r.target.value), s = [...a];
								s[t] = {
									...e,
									fieldPath: r.target.value,
									value: i?.questionType === "boolean" || ""
								}, o(s);
							},
							children: n.map((e) => /* @__PURE__ */ x(U, {
								value: e.scope,
								children: e.label
							}, e.scope))
						}),
						/* @__PURE__ */ x(G, {
							size: "small",
							value: e.operator,
							onChange: (n) => {
								let r = [...a];
								r[t] = {
									...e,
									operator: n.target.value
								}, o(r);
							},
							children: o_.map((e) => /* @__PURE__ */ x(U, {
								value: e.value,
								children: e.label
							}, e.value))
						}),
						r?.needsValue && /* @__PURE__ */ x(c_, {
							leaf: e,
							field: i,
							onChange: (n) => {
								let r = [...a];
								r[t] = {
									...e,
									value: n
								}, o(r);
							}
						}),
						/* @__PURE__ */ x(L, {
							size: "small",
							onClick: () => o(a.filter((e, n) => n !== t)),
							children: /* @__PURE__ */ x(Ne, { fontSize: "small" })
						})
					]
				}, t);
			}),
			/* @__PURE__ */ S(D, { children: [/* @__PURE__ */ x(O, {
				size: "small",
				onClick: () => o([...a, s_(n)]),
				children: "+ Add condition"
			}), /* @__PURE__ */ x(O, {
				size: "small",
				color: "inherit",
				onClick: () => t(null),
				children: "Remove all"
			})] })
		]
	}) : /* @__PURE__ */ x(O, {
		size: "small",
		onClick: () => t({
			logic: "AND",
			conditions: [s_(n)]
		}),
		children: r ?? "+ Add condition"
	});
}
//#endregion
//#region src/builder/components/ScoringEditor.tsx
var u_ = [
	"singleChoice",
	"multipleChoice",
	"rating",
	"nps",
	"number",
	"boolean"
];
function d_({ question: e }) {
	let t = Q((e) => e.survey), n = Q((e) => e.setScoringForQuestion);
	if (!t.scoring?.enabled || !u_.includes(e.type)) return null;
	let r = `#/properties/${e.id}`, i = t.scoringMap?.[r] ?? {}, a = t.scoring.categories ?? [], o = (t) => {
		n(e.id, {
			...i,
			...t
		});
	};
	return /* @__PURE__ */ S(D, { children: [/* @__PURE__ */ x(J, {
		variant: "caption",
		color: "text.secondary",
		children: "Scoring"
	}), /* @__PURE__ */ S(K, {
		spacing: 1,
		sx: { mt: .5 },
		children: [
			a.length > 0 && /* @__PURE__ */ S(G, {
				size: "small",
				value: i.categoryId ?? "",
				displayEmpty: !0,
				onChange: (e) => o({ categoryId: e.target.value || void 0 }),
				children: [/* @__PURE__ */ x(U, {
					value: "",
					children: "No category"
				}), a.map((e) => /* @__PURE__ */ x(U, {
					value: e.id,
					children: e.label
				}, e.id))]
			}),
			(e.type === "singleChoice" || e.type === "multipleChoice") && (e.choices ?? []).map((e) => /* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				children: [/* @__PURE__ */ x(J, {
					variant: "body2",
					sx: { flex: 1 },
					children: e
				}), /* @__PURE__ */ x(q, {
					size: "small",
					type: "number",
					sx: { width: 90 },
					value: i.optionScores?.[e] ?? 0,
					onChange: (t) => o({ optionScores: {
						...i.optionScores,
						[e]: Number(t.target.value)
					} })
				})]
			}, e)),
			(e.type === "rating" || e.type === "nps" || e.type === "number") && /* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				children: [/* @__PURE__ */ x(q, {
					label: "Points at min",
					size: "small",
					type: "number",
					value: i.linearScore?.minPoints ?? 0,
					onChange: (t) => o({ linearScore: {
						min: i.linearScore?.min ?? e.min ?? 0,
						max: i.linearScore?.max ?? e.max ?? 10,
						minPoints: Number(t.target.value),
						maxPoints: i.linearScore?.maxPoints ?? 0
					} })
				}), /* @__PURE__ */ x(q, {
					label: "Points at max",
					size: "small",
					type: "number",
					value: i.linearScore?.maxPoints ?? 0,
					onChange: (t) => o({ linearScore: {
						min: i.linearScore?.min ?? e.min ?? 0,
						max: i.linearScore?.max ?? e.max ?? 10,
						minPoints: i.linearScore?.minPoints ?? 0,
						maxPoints: Number(t.target.value)
					} })
				})]
			}),
			e.type === "boolean" && /* @__PURE__ */ x(q, {
				label: "Points if Yes",
				size: "small",
				type: "number",
				value: i.valueScore ?? 0,
				onChange: (e) => o({ valueScore: Number(e.target.value) })
			})
		]
	})] });
}
//#endregion
//#region src/builder/components/QuestionCard.tsx
function f_({ questionId: e, choices: t, disqualifyingOptions: n }) {
	let r = Q((e) => e.updateQuestion), i = de().custom.warningBanner, a = n ?? {}, o = (n, i) => {
		let o = t[n], s = [...t];
		s[n] = i;
		let c = { choices: s };
		if (o !== i && o in a) {
			let e = { ...a };
			e[i] = e[o], delete e[o], c.disqualifyingOptions = e;
		}
		r(e, c);
	}, s = (n) => {
		if (t.length <= 1) return;
		let i = t[n], o = { choices: t.filter((e, t) => t !== n) };
		if (i in a) {
			let e = { ...a };
			delete e[i], o.disqualifyingOptions = e;
		}
		r(e, o);
	}, c = (n, i) => {
		let a = n + i;
		if (a < 0 || a >= t.length) return;
		let o = [...t];
		[o[n], o[a]] = [o[a], o[n]], r(e, { choices: o });
	}, l = () => {
		r(e, { choices: [...t, `Option ${t.length + 1}`] });
	}, u = (t) => {
		let n = { ...a };
		t in n ? delete n[t] : n[t] = {
			title: "",
			body: ""
		}, r(e, { disqualifyingOptions: n });
	}, d = (t, n) => {
		r(e, { disqualifyingOptions: {
			...a,
			[t]: n
		} });
	};
	return /* @__PURE__ */ S(K, {
		spacing: 1,
		children: [
			/* @__PURE__ */ x(J, {
				variant: "caption",
				color: "text.secondary",
				children: "Options"
			}),
			t.map((e, n) => {
				let r = e in a, l = a[e], f = typeof l == "string" ? { title: l } : l ?? {
					title: "",
					body: ""
				}, p = r && (f.title ?? "").trim() === "";
				return /* @__PURE__ */ S(D, { children: [/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: .5,
					alignItems: "center",
					children: [
						/* @__PURE__ */ S(K, { children: [/* @__PURE__ */ x(L, {
							size: "small",
							disabled: n === 0,
							onClick: () => c(n, -1),
							"aria-label": `Move option "${e}" up`,
							sx: { p: .25 },
							children: /* @__PURE__ */ x($e, { sx: { fontSize: 14 } })
						}), /* @__PURE__ */ x(L, {
							size: "small",
							disabled: n === t.length - 1,
							onClick: () => c(n, 1),
							"aria-label": `Move option "${e}" down`,
							sx: { p: .25 },
							children: /* @__PURE__ */ x(et, { sx: { fontSize: 14 } })
						})] }),
						/* @__PURE__ */ x(q, {
							size: "small",
							fullWidth: !0,
							value: e,
							onChange: (e) => o(n, e.target.value)
						}),
						r && /* @__PURE__ */ x(j, {
							size: "small",
							label: "Disqualifying",
							sx: {
								bgcolor: i.iconBg,
								color: i.textStrong,
								fontWeight: 600,
								flexShrink: 0
							}
						}),
						/* @__PURE__ */ x(ue, {
							title: r ? "Remove disqualifying flag" : "Mark this option as disqualifying",
							children: /* @__PURE__ */ x(L, {
								size: "small",
								onClick: () => u(e),
								"aria-label": r ? `Remove disqualifying flag from "${e}"` : `Mark "${e}" as disqualifying`,
								sx: { color: r ? i.icon : "action.active" },
								children: /* @__PURE__ */ x(Oe, { fontSize: "small" })
							})
						}),
						/* @__PURE__ */ x(ue, {
							title: t.length <= 1 ? "At least one option is required" : "Remove option",
							children: /* @__PURE__ */ x("span", { children: /* @__PURE__ */ x(L, {
								size: "small",
								disabled: t.length <= 1,
								onClick: () => s(n),
								"aria-label": `Remove option "${e}"`,
								children: /* @__PURE__ */ x(Ne, { fontSize: "small" })
							}) })
						})
					]
				}), /* @__PURE__ */ x(M, {
					in: r,
					unmountOnExit: !0,
					children: /* @__PURE__ */ S(K, {
						spacing: 1,
						sx: {
							ml: 4.5,
							mt: .5,
							p: 1,
							borderRadius: 1,
							bgcolor: i.bg,
							border: "1px solid",
							borderColor: i.border
						},
						children: [/* @__PURE__ */ x(q, {
							size: "small",
							fullWidth: !0,
							required: !0,
							label: "Title shown if selected",
							placeholder: "e.g. Medical Review Required",
							value: f.title,
							error: p,
							helperText: p ? "Required -- a blank disqualification notice is not allowed." : "Short heading -- shown in bold, above the body text.",
							onChange: (t) => d(e, {
								...f,
								title: t.target.value
							})
						}), /* @__PURE__ */ x(q, {
							size: "small",
							fullWidth: !0,
							multiline: !0,
							label: "Body text (optional)",
							placeholder: "e.g. This disqualifies you from the online assessment. Please see a GP in person.",
							value: f.body ?? "",
							helperText: "Longer detail -- shown below the title.",
							onChange: (t) => d(e, {
								...f,
								body: t.target.value
							})
						})]
					})
				})] }, n);
			}),
			/* @__PURE__ */ x(fe, {
				size: "small",
				onClick: l,
				children: "+ Add option"
			})
		]
	});
}
function p_(e, t) {
	let n = e.pages.findIndex((e) => e.questions.some((e) => e.id === t));
	if (n === -1) return [];
	let r = [];
	for (let i = 0; i <= n; i++) for (let n of e.pages[i].questions) n.id !== t && n.type !== "label" && n.type !== "turnstile" && r.push({
		scope: `#/properties/${n.id}`,
		label: n.label,
		questionType: n.type,
		choices: n.choices
	});
	return r;
}
function m_({ question: e, isBlockingPage: t }) {
	let n = de();
	if (t) {
		let t = n.custom.warningBanner;
		return /* @__PURE__ */ S(D, {
			sx: {
				mx: 1.5,
				mb: 1.5,
				p: 1.5,
				borderRadius: 1.5,
				bgcolor: t.bg,
				border: "1px solid",
				borderColor: t.border,
				display: "flex",
				gap: 1.25
			},
			children: [/* @__PURE__ */ x(D, {
				sx: {
					flexShrink: 0,
					width: 28,
					height: 28,
					borderRadius: 1,
					bgcolor: t.iconBg,
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ x(Oe, { sx: {
					fontSize: 18,
					color: t.icon
				} })
			}), /* @__PURE__ */ S(D, {
				sx: { minWidth: 0 },
				children: [/* @__PURE__ */ x(J, {
					variant: "subtitle2",
					sx: {
						color: t.textStrong,
						fontWeight: 700
					},
					children: e.label || "(untitled)"
				}), e.description && /* @__PURE__ */ x(J, {
					variant: "body2",
					sx: {
						color: t.text,
						mt: .25
					},
					children: e.description
				})]
			})]
		});
	}
	return /* @__PURE__ */ S(D, {
		sx: {
			mx: 1.5,
			mb: 1.5
		},
		children: [/* @__PURE__ */ x(J, {
			variant: "subtitle1",
			fontWeight: 700,
			children: e.label || "(untitled)"
		}), e.description && /* @__PURE__ */ x(J, {
			variant: "body2",
			color: "text.secondary",
			children: e.description
		})]
	});
}
function h_({ question: e, isBlockingPage: t = !1 }) {
	let { attributes: n, listeners: r, setNodeRef: i, transform: a, transition: o, isDragging: c } = zg({
		id: e.id,
		data: { source: "canvas-item" }
	}), l = Q((e) => e.selectedQuestionId), u = Q((e) => e.selectQuestion), p = Q((e) => e.duplicateQuestion), m = Q((e) => e.removeQuestion), h = Q((e) => e.updateQuestion), g = Q((e) => e.finalizeQuestionId), _ = Q((e) => e.renameQuestionId), v = Q((e) => e.setVisibilityRule), y = Q((e) => e.survey), C = de().custom.warningBanner, w = {
		transform: rm.Transform.toString(a),
		transition: o,
		opacity: c ? .4 : 1
	}, T = l === e.id, E = () => u(T ? null : e.id), [O, N] = f(e.slug);
	s(() => {
		N(e.slug);
	}, [e.slug]);
	let F = ul(e.type), ee = e.type === "singleChoice" || e.type === "multipleChoice", R = e.type === "rating" || e.type === "number" || e.type === "nps", z = e.type === "label", B = e.type === "turnstile", V = e.type === "shortText" || e.type === "longText", H = e.type === "date", te = Object.keys(e.disqualifyingOptions ?? {}).length > 0, U = d(null);
	s(() => {
		T && U.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		});
	}, [T]);
	let ne = (e) => {
		i(e), U.current = e;
	}, W = Jg[e.type];
	return /* @__PURE__ */ S(k, {
		ref: ne,
		style: w,
		variant: "outlined",
		sx: {
			borderColor: T ? "primary.main" : "divider",
			borderWidth: T ? 2 : 1,
			"&:hover .q-actions, &:focus-within .q-actions": { opacity: 1 }
		},
		children: [
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				spacing: 1,
				sx: { pr: 1 },
				children: [
					/* @__PURE__ */ x(ue, {
						title: "Drag to reorder",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							...r,
							...n,
							sx: { cursor: "grab" },
							children: /* @__PURE__ */ x(Fe, { fontSize: "small" })
						})
					}),
					/* @__PURE__ */ x(j, {
						size: "small",
						icon: /* @__PURE__ */ x(W, { sx: { fontSize: 15 } }),
						label: F.paletteLabel,
						sx: {
							bgcolor: "action.hover",
							color: "text.secondary",
							flexShrink: 0
						}
					}),
					te && /* @__PURE__ */ x(ue, {
						title: "At least one option here is flagged disqualifying",
						children: /* @__PURE__ */ x(j, {
							size: "small",
							icon: /* @__PURE__ */ x(Oe, { sx: { fontSize: 14 } }),
							label: "Disqualifying",
							sx: {
								bgcolor: C.iconBg,
								color: C.textStrong,
								fontWeight: 600,
								flexShrink: 0
							}
						})
					}),
					/* @__PURE__ */ S(D, {
						onClick: E,
						sx: {
							flex: 1,
							cursor: "pointer",
							py: 1.5,
							minWidth: 0
						},
						children: [/* @__PURE__ */ x(J, {
							variant: "body2",
							fontWeight: 600,
							noWrap: !0,
							children: e.label || "(untitled question)"
						}), (e.required || e.visibilityRule || e.hasTrigger) && /* @__PURE__ */ x(J, {
							variant: "caption",
							color: "text.secondary",
							children: [
								e.required && "Required",
								e.visibilityRule && "Conditional",
								e.hasTrigger && "Trigger"
							].filter(Boolean).join(" · ")
						})]
					}),
					/* @__PURE__ */ S(K, {
						direction: "row",
						className: "q-actions",
						sx: {
							opacity: 0,
							transition: "opacity 0.15s"
						},
						children: [/* @__PURE__ */ x(ue, {
							title: "Duplicate question",
							children: /* @__PURE__ */ x(L, {
								size: "small",
								"aria-label": "Duplicate question",
								onClick: () => p(e.id),
								children: /* @__PURE__ */ x(Qe, { fontSize: "small" })
							})
						}), /* @__PURE__ */ x(ue, {
							title: "Delete question",
							children: /* @__PURE__ */ x(L, {
								size: "small",
								"aria-label": "Delete question",
								onClick: () => {
									window.confirm(`Delete "${e.label || "this question"}"?`) && m(e.id);
								},
								children: /* @__PURE__ */ x(Ne, { fontSize: "small" })
							})
						})]
					}),
					/* @__PURE__ */ x(L, {
						size: "small",
						onClick: E,
						"aria-label": T ? "Collapse question" : "Expand question",
						sx: {
							transform: T ? "rotate(180deg)" : "none",
							transition: "transform 0.15s"
						},
						children: /* @__PURE__ */ x(Pe, { fontSize: "small" })
					})
				]
			}),
			z && /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(m_, {
				question: e,
				isBlockingPage: t
			}), /* @__PURE__ */ x(J, {
				variant: "caption",
				color: "text.secondary",
				sx: {
					display: "block",
					mx: 1.5,
					mb: 1.5
				},
				children: "Informational label · no response required"
			})] }),
			/* @__PURE__ */ x(M, {
				in: T,
				unmountOnExit: !0,
				children: /* @__PURE__ */ S(D, {
					sx: {
						px: 2,
						pb: 2,
						pt: .5
					},
					children: [/* @__PURE__ */ x(P, { sx: { mb: 2 } }), /* @__PURE__ */ S(K, {
						spacing: 2,
						children: [
							/* @__PURE__ */ x(q, {
								label: "Title",
								size: "small",
								fullWidth: !0,
								value: e.title,
								onChange: (t) => h(e.id, { title: t.target.value }),
								helperText: "Internal name for this question, used to generate its slug below. Never shown to respondents -- always editable.",
								onBlur: () => g(e.id)
							}),
							/* @__PURE__ */ x(q, {
								label: "Slug (question ID)",
								size: "small",
								fullWidth: !0,
								value: O,
								onChange: (e) => N(rl(e.target.value)),
								onBlur: () => {
									_(e.id, O) || N(e.slug);
								},
								helperText: "Letters, digits, underscores, and hyphens only -- must stay unique across the survey. Renaming it updates every condition/branch/scoring rule that references it, but NOT responses already submitted under the old slug.",
								slotProps: { htmlInput: { sx: { fontFamily: "monospace" } } }
							}),
							/* @__PURE__ */ x(q, {
								label: z ? "Heading" : "Label",
								size: "small",
								fullWidth: !0,
								value: e.label,
								onChange: (t) => h(e.id, { label: t.target.value }),
								helperText: z ? void 0 : "Shown to the respondent as the question text."
							}),
							/* @__PURE__ */ x(q, {
								label: z ? "Body text (optional)" : "Description (optional)",
								size: "small",
								fullWidth: !0,
								multiline: !0,
								value: e.description ?? "",
								onChange: (t) => h(e.id, { description: t.target.value })
							}),
							e.description && /* @__PURE__ */ S(K, {
								direction: "row",
								spacing: 1.5,
								alignItems: "center",
								children: [
									/* @__PURE__ */ S(J, {
										variant: "caption",
										color: "text.secondary",
										children: [z ? "Body text" : "Description", " color"]
									}),
									/* @__PURE__ */ x(D, {
										component: "input",
										type: "color",
										value: e.descriptionColor ?? "#64748b",
										onChange: (t) => h(e.id, { descriptionColor: t.target.value }),
										sx: {
											width: 32,
											height: 32,
											p: 0,
											border: "1px solid",
											borderColor: "divider",
											borderRadius: 1,
											cursor: "pointer",
											bgcolor: "transparent",
											"&::-webkit-color-swatch-wrapper": { p: .25 },
											"&::-webkit-color-swatch": {
												border: "none",
												borderRadius: .5
											}
										}
									}),
									e.descriptionColor && /* @__PURE__ */ x(fe, {
										size: "small",
										onClick: () => h(e.id, { descriptionColor: void 0 }),
										children: "Reset"
									})
								]
							}),
							B && /* @__PURE__ */ x(q, {
								label: "Turnstile SiteKey",
								size: "small",
								fullWidth: !0,
								required: !0,
								value: e.turnstileSiteKey ?? "",
								onChange: (t) => h(e.id, { turnstileSiteKey: t.target.value || void 0 }),
								error: !e.turnstileSiteKey?.trim(),
								helperText: e.turnstileSiteKey?.trim() ? "The Cloudflare Turnstile site key this widget renders with (public, safe to expose in the browser)." : "Required -- the Cloudflare Turnstile site key this widget renders with."
							}),
							B && /* @__PURE__ */ x(J, {
								variant: "caption",
								color: "text.secondary",
								children: "Always required -- a respondent can't continue past this question without completing the verification."
							}),
							!z && !B && /* @__PURE__ */ x(I, {
								control: /* @__PURE__ */ x(A, {
									checked: !!e.required,
									onChange: (t) => h(e.id, { required: t.target.checked })
								}),
								label: "Required"
							}),
							!z && !B && e.required && /* @__PURE__ */ x(q, {
								label: "Custom message when empty (optional)",
								size: "small",
								fullWidth: !0,
								placeholder: `${e.label || "This field"} is required.`,
								value: e.requiredMessage ?? "",
								onChange: (t) => h(e.id, { requiredMessage: t.target.value || void 0 })
							}),
							!z && /* @__PURE__ */ x(I, {
								control: /* @__PURE__ */ x(A, {
									checked: !!e.hasTrigger,
									onChange: (t) => h(e.id, { hasTrigger: t.target.checked })
								}),
								label: /* @__PURE__ */ S(J, {
									variant: "body2",
									children: ["Trigger immediate callback", /* @__PURE__ */ x(J, {
										component: "span",
										variant: "caption",
										color: "text.secondary",
										sx: { display: "block" },
										children: "Reports this answer to the host right away, not just when the respondent moves to the next page"
									})]
								})
							}),
							ee && /* @__PURE__ */ x(f_, {
								questionId: e.id,
								choices: e.choices ?? [],
								disqualifyingOptions: e.disqualifyingOptions
							}),
							R && /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ S(K, {
								direction: "row",
								spacing: 1,
								children: [/* @__PURE__ */ x(q, {
									label: "Min",
									size: "small",
									type: "number",
									value: e.min ?? "",
									onChange: (t) => h(e.id, { min: t.target.value === "" ? void 0 : Number(t.target.value) })
								}), /* @__PURE__ */ x(q, {
									label: "Max",
									size: "small",
									type: "number",
									value: e.max ?? "",
									onChange: (t) => h(e.id, { max: t.target.value === "" ? void 0 : Number(t.target.value) })
								})]
							}), /* @__PURE__ */ x(q, {
								label: "Custom message when out of range (optional)",
								size: "small",
								fullWidth: !0,
								placeholder: `${e.label || "This field"} is out of the allowed range.`,
								value: e.rangeMessage ?? "",
								onChange: (t) => h(e.id, { rangeMessage: t.target.value || void 0 })
							})] }),
							V && /* @__PURE__ */ S(b, { children: [
								/* @__PURE__ */ x(P, {}),
								/* @__PURE__ */ x(J, {
									variant: "caption",
									color: "text.secondary",
									children: "Custom validation"
								}),
								/* @__PURE__ */ S(K, {
									direction: "row",
									spacing: 1,
									children: [/* @__PURE__ */ x(q, {
										label: "Min length",
										size: "small",
										type: "number",
										value: e.minLength ?? "",
										onChange: (t) => h(e.id, { minLength: t.target.value === "" ? void 0 : Number(t.target.value) })
									}), /* @__PURE__ */ x(q, {
										label: "Max length",
										size: "small",
										type: "number",
										value: e.maxLength ?? "",
										onChange: (t) => h(e.id, { maxLength: t.target.value === "" ? void 0 : Number(t.target.value) })
									})]
								}),
								(e.minLength !== void 0 || e.maxLength !== void 0) && /* @__PURE__ */ x(q, {
									label: "Custom message for length (optional)",
									size: "small",
									fullWidth: !0,
									placeholder: `${e.label || "This field"} length is invalid.`,
									value: e.lengthMessage ?? "",
									onChange: (t) => h(e.id, { lengthMessage: t.target.value || void 0 })
								}),
								/* @__PURE__ */ x(q, {
									label: "Pattern (regex, optional)",
									size: "small",
									fullWidth: !0,
									placeholder: "e.g. ^[0-9]{5}$",
									value: e.pattern ?? "",
									onChange: (t) => h(e.id, { pattern: t.target.value || void 0 })
								}),
								e.pattern && /* @__PURE__ */ x(q, {
									label: "Custom message for pattern (optional)",
									size: "small",
									fullWidth: !0,
									placeholder: `${e.label || "This field"} is not in a valid format.`,
									value: e.patternMessage ?? "",
									onChange: (t) => h(e.id, { patternMessage: t.target.value || void 0 })
								})
							] }),
							H && /* @__PURE__ */ S(b, { children: [
								/* @__PURE__ */ x(P, {}),
								/* @__PURE__ */ x(J, {
									variant: "caption",
									color: "text.secondary",
									children: "Custom validation"
								}),
								/* @__PURE__ */ S(K, {
									direction: "row",
									spacing: 1,
									children: [/* @__PURE__ */ x(q, {
										label: "Min age (years)",
										size: "small",
										type: "number",
										value: e.minYears ?? "",
										onChange: (t) => h(e.id, { minYears: t.target.value === "" ? void 0 : Number(t.target.value) })
									}), /* @__PURE__ */ x(q, {
										label: "Max age (years)",
										size: "small",
										type: "number",
										value: e.maxYears ?? "",
										onChange: (t) => h(e.id, { maxYears: t.target.value === "" ? void 0 : Number(t.target.value) })
									})]
								}),
								(e.minYears !== void 0 || e.maxYears !== void 0) && /* @__PURE__ */ x(q, {
									label: "Custom message when age is out of range (optional)",
									size: "small",
									fullWidth: !0,
									placeholder: `${e.label || "This field"} does not meet the required age.`,
									value: e.yearsMessage ?? "",
									onChange: (t) => h(e.id, { yearsMessage: t.target.value || void 0 })
								})
							] }),
							/* @__PURE__ */ x(P, {}),
							/* @__PURE__ */ x(J, {
								variant: "caption",
								color: "text.secondary",
								children: "Show this question only if:"
							}),
							/* @__PURE__ */ x(l_, {
								value: e.visibilityRule ?? null,
								onChange: (t) => v(e.id, t),
								availableFields: p_(y, e.id)
							}),
							y.scoring?.enabled && /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(P, {}), /* @__PURE__ */ x(d_, { question: e })] })
						]
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/builder/components/AddQuestionMenu.tsx
function g_({ pageId: e }) {
	let t = Q((e) => e.addQuestion), [n, r] = f(null), i = !!n, a = (e) => r(e.currentTarget), o = () => r(null), s = (n) => {
		t(e, n), o();
	};
	return /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(O, {
		fullWidth: !0,
		startIcon: /* @__PURE__ */ x(Me, { fontSize: "small" }),
		onClick: a,
		sx: {
			border: "1px dashed",
			borderColor: "divider",
			color: "text.secondary",
			py: 1.25
		},
		children: "Add question"
	}), /* @__PURE__ */ x(te, {
		anchorEl: n,
		open: i,
		onClose: o,
		children: ll.map((e) => {
			let t = Jg[e.type];
			return /* @__PURE__ */ S(U, {
				onClick: () => s(e.type),
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(t, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: e.paletteLabel })]
			}, e.type);
		})
	})] });
}
//#endregion
//#region src/builder/components/QuestionListEditor.tsx
function __({ page: e }) {
	let t = Q((e) => e.reorderQuestion), { setNodeRef: n, isOver: r } = yg({
		id: `page-canvas-${e.id}`,
		data: { pageId: e.id }
	}), i = ym(vm(hh, { activationConstraint: { distance: 8 } }));
	return /* @__PURE__ */ S(dg, {
		sensors: i,
		onDragEnd: (n) => {
			let { active: r, over: i } = n;
			if (!i || r.id === i.id) return;
			let a = e.questions.findIndex((e) => e.id === r.id), o = e.questions.findIndex((e) => e.id === i.id);
			a !== -1 && o !== -1 && t(e.id, a, o);
		},
		children: [/* @__PURE__ */ x(D, {
			ref: n,
			sx: {
				minHeight: 120,
				p: e.questions.length === 0 ? 4 : 0,
				border: e.questions.length === 0 ? "1px dashed" : void 0,
				borderColor: r ? "primary.main" : "divider",
				borderRadius: 1.5,
				bgcolor: r ? "primary.light" : void 0
			},
			children: e.questions.length === 0 ? /* @__PURE__ */ x(J, {
				variant: "body2",
				color: "text.secondary",
				sx: { textAlign: "center" },
				children: "This page has no questions yet. Add one below to get started."
			}) : /* @__PURE__ */ x(jg, {
				items: e.questions.map((e) => e.id),
				strategy: Dg,
				children: /* @__PURE__ */ x(K, {
					spacing: 1.5,
					children: e.questions.map((t) => /* @__PURE__ */ x(h_, {
						question: t,
						isBlockingPage: !!e.blocksSubmission
					}, t.id))
				})
			})
		}), /* @__PURE__ */ x(D, {
			sx: { mt: 2 },
			children: /* @__PURE__ */ x(g_, { pageId: e.id })
		})]
	});
}
//#endregion
//#region src/builder/components/PageCanvas.tsx
function v_() {
	let e = Q((e) => e.survey), t = Q((e) => e.selectedPageId), n = Q((e) => e.setViewMode), r = Q((e) => e.setPageShowTitle), i = e.pages.find((e) => e.id === t);
	if (!i) return null;
	let a = Hf(e, i.id);
	return /* @__PURE__ */ S(D, {
		sx: {
			width: "100%",
			maxWidth: 760,
			mx: "auto",
			py: 3.5,
			px: {
				xs: 2,
				md: 0
			}
		},
		children: [
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "center",
				spacing: 1.5,
				sx: { mb: 2.5 },
				children: [
					/* @__PURE__ */ x(J, {
						variant: "h6",
						fontWeight: 700,
						sx: { minWidth: 0 },
						noWrap: !0,
						children: i.title
					}),
					a && /* @__PURE__ */ x(j, {
						size: "small",
						label: "Conditional",
						sx: {
							bgcolor: "action.hover",
							color: "text.secondary",
							fontWeight: 600
						}
					}),
					/* @__PURE__ */ x(D, { sx: { flex: 1 } }),
					/* @__PURE__ */ x(fe, {
						size: "small",
						startIcon: /* @__PURE__ */ x(me, { sx: { fontSize: 16 } }),
						onClick: () => n("flow"),
						sx: { color: "primary.main" },
						children: "View in flow map"
					})
				]
			}),
			a && /* @__PURE__ */ x(J, {
				variant: "body2",
				color: "text.secondary",
				sx: {
					mb: 2,
					mt: -1.5
				},
				children: "Shown only when a prior answer requires review."
			}),
			/* @__PURE__ */ x(I, {
				sx: {
					mb: 2,
					mt: -1
				},
				control: /* @__PURE__ */ x(A, {
					size: "small",
					checked: !!i.showTitle,
					onChange: (e) => r(i.id, e.target.checked)
				}),
				label: /* @__PURE__ */ x(J, {
					variant: "body2",
					color: "text.secondary",
					children: "Show this page's title to respondents"
				})
			}),
			/* @__PURE__ */ x(__, { page: i })
		]
	});
}
//#endregion
//#region src/builder/conditionFields.ts
function y_(e, t) {
	let n = e.pages.findIndex((e) => e.id === t);
	if (n === -1) return [];
	let r = [];
	for (let t = 0; t <= n; t++) for (let n of e.pages[t].questions) n.type !== "label" && n.type !== "turnstile" && r.push({
		scope: `#/properties/${n.id}`,
		label: n.label,
		questionType: n.type,
		choices: n.choices
	});
	return r;
}
//#endregion
//#region src/builder/components/BranchEditor.tsx
var b_ = {
	eq: "=",
	neq: "≠",
	contains: "contains",
	gt: ">",
	gte: "≥",
	lt: "<",
	lte: "≤",
	isEmpty: "is empty",
	isNotEmpty: "is not empty"
};
function x_(e, t) {
	return e.conditions.map((e) => {
		if (St(e)) return x_(e, t);
		let n = t.find((t) => t.scope === e.fieldPath), r = n?.label ?? "Answer";
		if (e.operator === "isEmpty" || e.operator === "isNotEmpty") return `${r} ${b_[e.operator]}`;
		let i = n?.questionType === "boolean" ? e.value === !0 ? "Yes" : "No" : String(e.value ?? "");
		return `${r} ${b_[e.operator] ?? e.operator} ${i}`;
	}).join(e.logic === "AND" ? " and " : " or ") || "Always";
}
function S_({ rule: e, order: t, reorderable: n, otherPages: r, availableFields: i, onChange: a, onDelete: o }) {
	let [s, c] = f(e.when.conditions.length === 0), l = e.action === "block", u = e.goToPageId === "end" ? "End of survey" : r.find((t) => t.id === e.goToPageId)?.title ?? "Unknown page", { attributes: d, listeners: p, setNodeRef: m, transform: h, transition: g, isDragging: _ } = zg({ id: e.id }), v = {
		transform: rm.Transform.toString(h),
		transition: g,
		opacity: _ ? .4 : 1
	};
	return /* @__PURE__ */ S(D, {
		ref: m,
		style: v,
		sx: {
			p: 1.5,
			borderRadius: 1.5,
			border: "1px solid",
			borderColor: "divider",
			bgcolor: "background.paper",
			"&:hover .rule-actions, &:focus-within .rule-actions": { opacity: 1 }
		},
		children: [/* @__PURE__ */ S(K, {
			direction: "row",
			justifyContent: "space-between",
			alignItems: "flex-start",
			spacing: 1,
			children: [
				n && /* @__PURE__ */ S(K, {
					alignItems: "center",
					spacing: .25,
					sx: {
						flexShrink: 0,
						pt: .25
					},
					children: [/* @__PURE__ */ x(ue, {
						title: "Drag to reorder -- rules are evaluated top to bottom, first match wins",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							...p,
							...d,
							sx: { cursor: "grab" },
							children: /* @__PURE__ */ x(Fe, { fontSize: "small" })
						})
					}), /* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.disabled",
						fontWeight: 700,
						children: t
					})]
				}),
				/* @__PURE__ */ S(K, {
					spacing: .75,
					sx: {
						minWidth: 0,
						flex: 1
					},
					children: [
						/* @__PURE__ */ S(K, {
							direction: "row",
							spacing: 1,
							alignItems: "center",
							children: [/* @__PURE__ */ x(j, {
								size: "small",
								label: "IF",
								sx: {
									bgcolor: "action.hover",
									fontWeight: 700,
									fontSize: 11
								}
							}), /* @__PURE__ */ x(J, {
								variant: "body2",
								sx: { minWidth: 0 },
								noWrap: !0,
								title: x_(e.when, i),
								children: x_(e.when, i)
							})]
						}),
						/* @__PURE__ */ x(et, { sx: {
							fontSize: 14,
							color: "text.disabled",
							ml: "3px"
						} }),
						/* @__PURE__ */ S(K, {
							direction: "row",
							spacing: 1,
							alignItems: "center",
							children: [/* @__PURE__ */ x(j, {
								size: "small",
								label: "THEN",
								sx: l ? {
									bgcolor: "error.light",
									color: "error.dark",
									fontWeight: 700,
									fontSize: 11
								} : {
									bgcolor: "primary.light",
									color: "primary.dark",
									fontWeight: 700,
									fontSize: 11
								}
							}), /* @__PURE__ */ x(J, {
								variant: "body2",
								color: l ? "error.dark" : "primary.dark",
								fontWeight: 600,
								noWrap: !0,
								children: l ? "Block submission" : `Jump to ${u}`
							})]
						})
					]
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					className: "rule-actions",
					sx: {
						opacity: 0,
						transition: "opacity 0.15s",
						flexShrink: 0
					},
					children: [/* @__PURE__ */ x(ue, {
						title: s ? "Done editing" : "Edit rule",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							"aria-label": "Edit rule",
							onClick: () => c((e) => !e),
							children: /* @__PURE__ */ x(tt, { fontSize: "small" })
						})
					}), /* @__PURE__ */ x(ue, {
						title: "Delete rule",
						children: /* @__PURE__ */ x(L, {
							size: "small",
							"aria-label": "Delete rule",
							onClick: o,
							children: /* @__PURE__ */ x(Ne, { fontSize: "small" })
						})
					})]
				})
			]
		}), s && /* @__PURE__ */ S(K, {
			spacing: 1.5,
			sx: {
				mt: 1.5,
				pt: 1.5,
				borderTop: "1px dashed",
				borderColor: "divider"
			},
			children: [
				/* @__PURE__ */ x(l_, {
					value: e.when.conditions.length > 0 ? e.when : {
						logic: "AND",
						conditions: []
					},
					onChange: (e) => a({ when: e ?? {
						logic: "AND",
						conditions: []
					} }),
					availableFields: i
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Then"
					}), /* @__PURE__ */ S(ce, {
						size: "small",
						exclusive: !0,
						value: l ? "block" : "goToPage",
						onChange: (e, t) => {
							t && a(t === "block" ? {
								action: "block",
								goToPageId: "end"
							} : {
								action: "goToPage",
								goToPageId: r[0]?.id ?? "end"
							});
						},
						children: [/* @__PURE__ */ x(se, {
							value: "goToPage",
							sx: {
								fontSize: 12.5,
								py: .25
							},
							children: "Go to page"
						}), /* @__PURE__ */ x(se, {
							value: "block",
							sx: {
								fontSize: 12.5,
								py: .25
							},
							children: "Block submission"
						})]
					})]
				}),
				l ? /* @__PURE__ */ x(J, {
					variant: "caption",
					color: "text.secondary",
					children: "Disables Continue/Submit on this page while this condition matches -- the respondent stays here (no navigation) until it no longer does."
				}) : /* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Go to"
					}), /* @__PURE__ */ S(G, {
						size: "small",
						value: e.goToPageId,
						onChange: (e) => a({ goToPageId: e.target.value }),
						children: [/* @__PURE__ */ x(U, {
							value: "end",
							children: "End of survey"
						}), r.map((e) => /* @__PURE__ */ x(U, {
							value: e.id,
							children: e.title
						}, e.id))]
					})]
				})
			]
		})]
	});
}
function C_({ pageId: e }) {
	let t = Q((e) => e.survey), n = Q((e) => e.addBranchRule), r = Q((e) => e.updateBranchRule), i = Q((e) => e.removeBranchRule), a = Q((e) => e.reorderBranchRule), o = Q((e) => e.setDefaultNextPage), s = t.pages.find((t) => t.id === e);
	if (!s) return null;
	let c = t.pages.filter((t) => t.id !== e), l = y_(t, e), u = s.branch.length > 1, d = ym(vm(hh, { activationConstraint: { distance: 8 } }));
	return /* @__PURE__ */ S(K, {
		spacing: 1.5,
		children: [
			/* @__PURE__ */ S(J, {
				variant: "caption",
				color: "text.secondary",
				children: ["Rules are evaluated top to bottom; the first match wins.", u && " Drag to reorder."]
			}),
			/* @__PURE__ */ x(dg, {
				sensors: d,
				onDragEnd: (t) => {
					let { active: n, over: r } = t;
					if (!r || n.id === r.id) return;
					let i = s.branch.findIndex((e) => e.id === n.id), o = s.branch.findIndex((e) => e.id === r.id);
					i !== -1 && o !== -1 && a(e, i, o);
				},
				children: /* @__PURE__ */ x(jg, {
					items: s.branch.map((e) => e.id),
					strategy: Dg,
					children: /* @__PURE__ */ x(K, {
						spacing: 1.5,
						children: s.branch.map((t, n) => /* @__PURE__ */ x(S_, {
							rule: t,
							order: n + 1,
							reorderable: u,
							otherPages: c,
							availableFields: l,
							onChange: (n) => r(e, t.id, n),
							onDelete: () => i(e, t.id)
						}, t.id))
					})
				})
			}),
			/* @__PURE__ */ x(fe, {
				onClick: () => {
					n(e, {
						id: Qc("branch"),
						when: {
							logic: "AND",
							conditions: []
						},
						goToPageId: c[0]?.id ?? "end"
					});
				},
				sx: {
					border: "1px dashed",
					borderColor: "divider",
					color: "text.secondary",
					justifyContent: "flex-start",
					py: 1
				},
				children: "+ Add rule"
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				sx: { pt: 1 },
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					color: "text.secondary",
					children: "Otherwise, go to"
				}), /* @__PURE__ */ S(G, {
					size: "small",
					value: s.defaultNextPageId,
					onChange: (t) => o(e, t.target.value),
					children: [/* @__PURE__ */ x(U, {
						value: "end",
						children: "End of survey"
					}), c.map((e) => /* @__PURE__ */ x(U, {
						value: e.id,
						children: e.title
					}, e.id))]
				})]
			})
		]
	});
}
//#endregion
//#region src/builder/components/ScoringSettings.tsx
function w_() {
	let e = Q((e) => e.survey), t = Q((e) => e.setScoringEnabled), n = Q((e) => e.setPassThreshold), r = Q((e) => e.setScoringCategories), [i, a] = f(""), o = e.scoring?.categories ?? [];
	return /* @__PURE__ */ S(K, {
		spacing: 1.5,
		children: [
			/* @__PURE__ */ x(J, {
				variant: "subtitle2",
				children: "Scoring"
			}),
			/* @__PURE__ */ x(I, {
				control: /* @__PURE__ */ x(A, {
					checked: !!e.scoring?.enabled,
					onChange: (e) => t(e.target.checked)
				}),
				label: "Enable scoring for this survey"
			}),
			e.scoring?.enabled && /* @__PURE__ */ x(D, {
				sx: {
					p: 1.5,
					borderRadius: 1.5,
					border: "1px solid",
					borderColor: "divider"
				},
				children: /* @__PURE__ */ S(K, {
					spacing: 1.5,
					children: [
						/* @__PURE__ */ x(q, {
							label: "Pass threshold (optional)",
							size: "small",
							type: "number",
							value: e.scoring.passThreshold ?? "",
							onChange: (e) => n(e.target.value === "" ? void 0 : Number(e.target.value))
						}),
						/* @__PURE__ */ x(J, {
							variant: "caption",
							color: "text.secondary",
							children: "Categories (optional sub-score groups)"
						}),
						o.map((e, t) => /* @__PURE__ */ S(K, {
							direction: "row",
							spacing: 1,
							alignItems: "center",
							children: [/* @__PURE__ */ x(q, {
								size: "small",
								fullWidth: !0,
								value: e.label,
								onChange: (n) => {
									let i = [...o];
									i[t] = {
										...e,
										label: n.target.value
									}, r(i);
								}
							}), /* @__PURE__ */ x(L, {
								size: "small",
								onClick: () => r(o.filter((e, n) => n !== t)),
								children: /* @__PURE__ */ x(Ne, { fontSize: "small" })
							})]
						}, e.id)),
						/* @__PURE__ */ S(K, {
							direction: "row",
							spacing: 1,
							children: [/* @__PURE__ */ x(q, {
								size: "small",
								placeholder: "New category name",
								value: i,
								onChange: (e) => a(e.target.value)
							}), /* @__PURE__ */ x(O, {
								size: "small",
								disabled: !i.trim(),
								onClick: () => {
									r([...o, {
										id: Qc("cat"),
										label: i.trim()
									}]), a("");
								},
								children: "Add"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/builder/components/InspectorTabs.tsx
function T_({ pageId: e }) {
	let [t, n] = f("branching"), r = Q((e) => e.survey), i = Q((e) => e.selectedQuestionId), a = Q((e) => e.setPageBlocksSubmission), o = r.pages.find((t) => t.id === e), s = o?.questions.find((e) => e.id === i);
	return o ? /* @__PURE__ */ S(D, {
		sx: {
			display: "flex",
			flexDirection: "column",
			minHeight: 0,
			flex: 1
		},
		children: [/* @__PURE__ */ S(oe, {
			value: t,
			onChange: (e, t) => n(t),
			sx: {
				borderBottom: "1px solid",
				borderColor: "divider",
				minHeight: 44,
				px: 1,
				flexShrink: 0
			},
			children: [/* @__PURE__ */ x(ae, {
				value: "branching",
				label: "Branching",
				sx: {
					minHeight: 44,
					textTransform: "none"
				}
			}), /* @__PURE__ */ x(ae, {
				value: "scoring",
				label: "Scoring",
				sx: {
					minHeight: 44,
					textTransform: "none"
				}
			})]
		}), /* @__PURE__ */ x(D, {
			sx: {
				flex: 1,
				overflowY: "auto",
				p: 2
			},
			children: t === "branching" ? /* @__PURE__ */ S(K, {
				spacing: 2,
				children: [
					/* @__PURE__ */ x(J, {
						variant: "body2",
						color: "text.secondary",
						children: "Show or skip pages automatically based on how someone answers."
					}),
					/* @__PURE__ */ x(I, {
						control: /* @__PURE__ */ x(A, {
							checked: !!o.blocksSubmission,
							onChange: (e) => a(o.id, e.target.checked)
						}),
						label: /* @__PURE__ */ S(J, {
							variant: "body2",
							children: ["This page blocks submission", /* @__PURE__ */ x(J, {
								component: "span",
								variant: "caption",
								color: "text.secondary",
								sx: { display: "block" },
								children: "e.g. a referral or disqualification notice"
							})]
						})
					}),
					/* @__PURE__ */ x(P, {}),
					/* @__PURE__ */ x(C_, { pageId: o.id }, o.id)
				]
			}) : /* @__PURE__ */ S(K, {
				spacing: 2,
				children: [/* @__PURE__ */ x(w_, {}), s && r.scoring?.enabled && u_.includes(s.type) && /* @__PURE__ */ S(b, { children: [
					/* @__PURE__ */ x(P, {}),
					/* @__PURE__ */ x(J, {
						variant: "subtitle2",
						children: "Selected question"
					}),
					/* @__PURE__ */ x(d_, { question: s })
				] })]
			})
		})]
	}) : null;
}
//#endregion
//#region src/builder/components/Inspector.tsx
function E_({ pageId: e }) {
	let t = qg((e) => e.rightPanelWidth), n = qg((e) => e.setRightPanelWidth);
	return /* @__PURE__ */ S(D, {
		component: "aside",
		sx: {
			position: "relative",
			width: t,
			flexShrink: 0,
			borderLeft: "1px solid",
			borderColor: "divider",
			bgcolor: "background.paper",
			display: "flex",
			flexDirection: "column",
			minHeight: 0
		},
		children: [/* @__PURE__ */ x($g, {
			edge: "left",
			width: t,
			min: Gg.min,
			max: Gg.max,
			defaultWidth: Gg.default,
			onChange: n,
			label: "Resize inspector panel"
		}), /* @__PURE__ */ x(T_, { pageId: e })]
	});
}
//#endregion
//#region ../../node_modules/classcat/index.js
function D_(e) {
	if (typeof e == "string" || typeof e == "number") return "" + e;
	let t = "";
	if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = D_(e[n])) !== "" && (t += (t && " ") + r);
	else for (let n in e) e[n] && (t += (t && " ") + n);
	return t;
}
//#endregion
//#region ../../node_modules/d3-dispatch/src/dispatch.js
var O_ = { value: () => {} };
function k_() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new A_(n);
}
function A_(e) {
	this._ = e;
}
function j_(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
A_.prototype = k_.prototype = {
	constructor: A_,
	on: function(e, t) {
		var n = this._, r = j_(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = M_(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = N_(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = N_(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new A_(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function M_(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function N_(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = O_, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var P_ = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../../node_modules/d3-selection/src/namespace.js
function F_(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), P_.hasOwnProperty(t) ? {
		space: P_[t],
		local: e
	} : e;
}
//#endregion
//#region ../../node_modules/d3-selection/src/creator.js
function I_(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function L_(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function R_(e) {
	var t = F_(e);
	return (t.local ? L_ : I_)(t);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selector.js
function z_() {}
function B_(e) {
	return e == null ? z_ : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/select.js
function V_(e) {
	typeof e != "function" && (e = B_(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new ky(r, this._parents);
}
//#endregion
//#region ../../node_modules/d3-selection/src/array.js
function H_(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selectorAll.js
function U_() {
	return [];
}
function W_(e) {
	return e == null ? U_ : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/selectAll.js
function G_(e) {
	return function() {
		return H_(e.apply(this, arguments));
	};
}
function K_(e) {
	e = typeof e == "function" ? G_(e) : W_(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new ky(r, i);
}
//#endregion
//#region ../../node_modules/d3-selection/src/matcher.js
function q_(e) {
	return function() {
		return this.matches(e);
	};
}
function J_(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/selectChild.js
var Y_ = Array.prototype.find;
function X_(e) {
	return function() {
		return Y_.call(this.children, e);
	};
}
function Z_() {
	return this.firstElementChild;
}
function Q_(e) {
	return this.select(e == null ? Z_ : X_(typeof e == "function" ? e : J_(e)));
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/selectChildren.js
var $_ = Array.prototype.filter;
function ev() {
	return Array.from(this.children);
}
function tv(e) {
	return function() {
		return $_.call(this.children, e);
	};
}
function nv(e) {
	return this.selectAll(e == null ? ev : tv(typeof e == "function" ? e : J_(e)));
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/filter.js
function rv(e) {
	typeof e != "function" && (e = q_(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new ky(r, this._parents);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/sparse.js
function iv(e) {
	return Array(e.length);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/enter.js
function av() {
	return new ky(this._enter || this._groups.map(iv), this._parents);
}
function ov(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ov.prototype = {
	constructor: ov,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region ../../node_modules/d3-selection/src/constant.js
function sv(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/data.js
function cv(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new ov(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function lv(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new ov(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function uv(e) {
	return e.__data__;
}
function dv(e, t) {
	if (!arguments.length) return Array.from(this, uv);
	var n = t ? lv : cv, r = this._parents, i = this._groups;
	typeof e != "function" && (e = sv(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = fv(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new ky(o, r), o._enter = s, o._exit = c, o;
}
function fv(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/exit.js
function pv() {
	return new ky(this._exit || this._groups.map(iv), this._parents);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/join.js
function mv(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/merge.js
function hv(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new ky(s, this._parents);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/order.js
function gv() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/sort.js
function _v(e) {
	e ||= vv;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new ky(i, this._parents).order();
}
function vv(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/call.js
function yv() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/nodes.js
function bv() {
	return Array.from(this);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/node.js
function xv() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/size.js
function Sv() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/empty.js
function Cv() {
	return !this.node();
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/each.js
function wv(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/attr.js
function Tv(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Ev(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Dv(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Ov(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function kv(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Av(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function jv(e, t) {
	var n = F_(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Ev : Tv : typeof t == "function" ? n.local ? Av : kv : n.local ? Ov : Dv)(n, t));
}
//#endregion
//#region ../../node_modules/d3-selection/src/window.js
function Mv(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/style.js
function Nv(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Pv(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Fv(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Iv(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Nv : typeof t == "function" ? Fv : Pv)(e, t, n ?? "")) : Lv(this.node(), e);
}
function Lv(e, t) {
	return e.style.getPropertyValue(t) || Mv(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/property.js
function Rv(e) {
	return function() {
		delete this[e];
	};
}
function zv(e, t) {
	return function() {
		this[e] = t;
	};
}
function Bv(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function Vv(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Rv : typeof t == "function" ? Bv : zv)(e, t)) : this.node()[e];
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/classed.js
function Hv(e) {
	return e.trim().split(/^|\s+/);
}
function Uv(e) {
	return e.classList || new Wv(e);
}
function Wv(e) {
	this._node = e, this._names = Hv(e.getAttribute("class") || "");
}
Wv.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function Gv(e, t) {
	for (var n = Uv(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function Kv(e, t) {
	for (var n = Uv(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function qv(e) {
	return function() {
		Gv(this, e);
	};
}
function Jv(e) {
	return function() {
		Kv(this, e);
	};
}
function Yv(e, t) {
	return function() {
		(t.apply(this, arguments) ? Gv : Kv)(this, e);
	};
}
function Xv(e, t) {
	var n = Hv(e + "");
	if (arguments.length < 2) {
		for (var r = Uv(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? Yv : t ? qv : Jv)(n, t));
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/text.js
function Zv() {
	this.textContent = "";
}
function Qv(e) {
	return function() {
		this.textContent = e;
	};
}
function $v(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function ey(e) {
	return arguments.length ? this.each(e == null ? Zv : (typeof e == "function" ? $v : Qv)(e)) : this.node().textContent;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/html.js
function ty() {
	this.innerHTML = "";
}
function ny(e) {
	return function() {
		this.innerHTML = e;
	};
}
function ry(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function iy(e) {
	return arguments.length ? this.each(e == null ? ty : (typeof e == "function" ? ry : ny)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/raise.js
function ay() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function oy() {
	return this.each(ay);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/lower.js
function sy() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cy() {
	return this.each(sy);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/append.js
function ly(e) {
	var t = typeof e == "function" ? e : R_(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/insert.js
function uy() {
	return null;
}
function dy(e, t) {
	var n = typeof e == "function" ? e : R_(e), r = t == null ? uy : typeof t == "function" ? t : B_(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/remove.js
function fy() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function py() {
	return this.each(fy);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/clone.js
function my() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hy() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gy(e) {
	return this.select(e ? hy : my);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/datum.js
function _y(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/on.js
function vy(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function yy(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function by(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function xy(e, t, n) {
	return function() {
		var r = this.__on, i, a = vy(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Sy(e, t, n) {
	var r = yy(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? xy : by, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/dispatch.js
function Cy(e, t, n) {
	var r = Mv(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function wy(e, t) {
	return function() {
		return Cy(this, e, t);
	};
}
function Ty(e, t) {
	return function() {
		return Cy(this, e, t.apply(this, arguments));
	};
}
function Ey(e, t) {
	return this.each((typeof t == "function" ? Ty : wy)(e, t));
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/iterator.js
function* Dy() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../../node_modules/d3-selection/src/selection/index.js
var Oy = [null];
function ky(e, t) {
	this._groups = e, this._parents = t;
}
function Ay() {
	return new ky([[document.documentElement]], Oy);
}
function jy() {
	return this;
}
ky.prototype = Ay.prototype = {
	constructor: ky,
	select: V_,
	selectAll: K_,
	selectChild: Q_,
	selectChildren: nv,
	filter: rv,
	data: dv,
	enter: av,
	exit: pv,
	join: mv,
	merge: hv,
	selection: jy,
	order: gv,
	sort: _v,
	call: yv,
	nodes: bv,
	node: xv,
	size: Sv,
	empty: Cv,
	each: wv,
	attr: jv,
	style: Iv,
	property: Vv,
	classed: Xv,
	text: ey,
	html: iy,
	raise: oy,
	lower: cy,
	append: ly,
	insert: dy,
	remove: py,
	clone: gy,
	datum: _y,
	on: Sy,
	dispatch: Ey,
	[Symbol.iterator]: Dy
};
//#endregion
//#region ../../node_modules/d3-selection/src/select.js
function My(e) {
	return typeof e == "string" ? new ky([[document.querySelector(e)]], [document.documentElement]) : new ky([[e]], Oy);
}
//#endregion
//#region ../../node_modules/d3-selection/src/sourceEvent.js
function Ny(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region ../../node_modules/d3-selection/src/pointer.js
function Py(e, t) {
	if (e = Ny(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region ../../node_modules/d3-drag/src/noevent.js
var Fy = { passive: !1 }, Iy = {
	capture: !0,
	passive: !1
};
function Ly(e) {
	e.stopImmediatePropagation();
}
function Ry(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/d3-drag/src/nodrag.js
function zy(e) {
	var t = e.document.documentElement, n = My(e).on("dragstart.drag", Ry, Iy);
	"onselectstart" in t ? n.on("selectstart.drag", Ry, Iy) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function By(e, t) {
	var n = e.document.documentElement, r = My(e).on("dragstart.drag", null);
	t && (r.on("click.drag", Ry, Iy), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region ../../node_modules/d3-drag/src/constant.js
var Vy = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-drag/src/event.js
function Hy(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
Hy.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region ../../node_modules/d3-drag/src/drag.js
function Uy(e) {
	return !e.ctrlKey && !e.button;
}
function Wy() {
	return this.parentNode;
}
function Gy(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function Ky() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qy() {
	var e = Uy, t = Wy, n = Gy, r = Ky, i = {}, a = k_("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, Fy).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!u && e.call(this, n, r)) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (My(n.view).on("mousemove.drag", m, Iy).on("mouseup.drag", h, Iy), zy(n.view), Ly(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (Ry(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		My(e.view).on("mousemove.drag mouseup.drag", null), By(e.view, l), Ry(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) for (var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s = 0, c; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (Ly(n), c("start", n, i[s]));
	}
	function _(e) {
		for (var t = e.changedTouches, n = t.length, r = 0, a; r < n; ++r) (a = i[t[r].identifier]) && (Ry(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Ly(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = Py(l || r, t), p, m, h;
		if ((h = n.call(e, new Hy("beforestart", {
			sourceEvent: r,
			target: f,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = o++;
					break;
				case "end": delete i[c], --o;
				case "drag": d = Py(l || a, t), _ = o;
			}
			u.call(r, e, new Hy(r, {
				sourceEvent: a,
				subject: h,
				target: f,
				identifier: c,
				active: _,
				x: d[0] + p,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return f.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Vy(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Vy(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Vy(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Vy(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function Jy(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Yy(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function Xy() {}
var Zy = .7, Qy = 1 / Zy, $y = "\\s*([+-]?\\d+)\\s*", eb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nb = /^#([0-9a-f]{3,8})$/, rb = RegExp(`^rgb\\(${$y},${$y},${$y}\\)$`), ib = RegExp(`^rgb\\(${tb},${tb},${tb}\\)$`), ab = RegExp(`^rgba\\(${$y},${$y},${$y},${eb}\\)$`), ob = RegExp(`^rgba\\(${tb},${tb},${tb},${eb}\\)$`), sb = RegExp(`^hsl\\(${eb},${tb},${tb}\\)$`), cb = RegExp(`^hsla\\(${eb},${tb},${tb},${eb}\\)$`), lb = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Jy(Xy, mb, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: ub,
	formatHex: ub,
	formatHex8: db,
	formatHsl: fb,
	formatRgb: pb,
	toString: pb
});
function ub() {
	return this.rgb().formatHex();
}
function db() {
	return this.rgb().formatHex8();
}
function fb() {
	return Db(this).formatHsl();
}
function pb() {
	return this.rgb().formatRgb();
}
function mb(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = nb.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? hb(t) : n === 3 ? new yb(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gb(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gb(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = rb.exec(e)) ? new yb(t[1], t[2], t[3], 1) : (t = ib.exec(e)) ? new yb(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ab.exec(e)) ? gb(t[1], t[2], t[3], t[4]) : (t = ob.exec(e)) ? gb(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = sb.exec(e)) ? Eb(t[1], t[2] / 100, t[3] / 100, 1) : (t = cb.exec(e)) ? Eb(t[1], t[2] / 100, t[3] / 100, t[4]) : lb.hasOwnProperty(e) ? hb(lb[e]) : e === "transparent" ? new yb(NaN, NaN, NaN, 0) : null;
}
function hb(e) {
	return new yb(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gb(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new yb(e, t, n, r);
}
function _b(e) {
	return e instanceof Xy || (e = mb(e)), e ? (e = e.rgb(), new yb(e.r, e.g, e.b, e.opacity)) : new yb();
}
function vb(e, t, n, r) {
	return arguments.length === 1 ? _b(e) : new yb(e, t, n, r ?? 1);
}
function yb(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Jy(yb, vb, Yy(Xy, {
	brighter(e) {
		return e = e == null ? Qy : Qy ** +e, new yb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Zy : Zy ** +e, new yb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new yb(wb(this.r), wb(this.g), wb(this.b), Cb(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: bb,
	formatHex: bb,
	formatHex8: xb,
	formatRgb: Sb,
	toString: Sb
}));
function bb() {
	return `#${Tb(this.r)}${Tb(this.g)}${Tb(this.b)}`;
}
function xb() {
	return `#${Tb(this.r)}${Tb(this.g)}${Tb(this.b)}${Tb((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Sb() {
	let e = Cb(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${wb(this.r)}, ${wb(this.g)}, ${wb(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Cb(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function wb(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Tb(e) {
	return e = wb(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Eb(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new kb(e, t, n, r);
}
function Db(e) {
	if (e instanceof kb) return new kb(e.h, e.s, e.l, e.opacity);
	if (e instanceof Xy || (e = mb(e)), !e) return new kb();
	if (e instanceof kb) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new kb(o, s, c, e.opacity);
}
function Ob(e, t, n, r) {
	return arguments.length === 1 ? Db(e) : new kb(e, t, n, r ?? 1);
}
function kb(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Jy(kb, Ob, Yy(Xy, {
	brighter(e) {
		return e = e == null ? Qy : Qy ** +e, new kb(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Zy : Zy ** +e, new kb(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new yb(Mb(e >= 240 ? e - 240 : e + 120, i, r), Mb(e, i, r), Mb(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new kb(Ab(this.h), jb(this.s), jb(this.l), Cb(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Cb(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Ab(this.h)}, ${jb(this.s) * 100}%, ${jb(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Ab(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function jb(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Mb(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Nb = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Pb(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Fb(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Ib(e) {
	return (e = +e) == 1 ? Lb : function(t, n) {
		return n - t ? Fb(t, n, e) : Nb(isNaN(t) ? n : t);
	};
}
function Lb(e, t) {
	var n = t - e;
	return n ? Pb(e, n) : Nb(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Rb = (function e(t) {
	var n = Ib(t);
	function r(e, t) {
		var r = n((e = vb(e)).r, (t = vb(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Lb(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function zb(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Bb(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Vb(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = Xb(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function Hb(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function Ub(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function Wb(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Xb(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var Gb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kb = new RegExp(Gb.source, "g");
function qb(e) {
	return function() {
		return e;
	};
}
function Jb(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Yb(e, t) {
	var n = Gb.lastIndex = Kb.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Gb.exec(e)) && (i = Kb.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Ub(r, i)
	})), n = Kb.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Jb(c[0].x) : qb(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function Xb(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Nb(t) : (n === "number" ? Ub : n === "string" ? (r = mb(t)) ? (t = r, Rb) : Yb : t instanceof mb ? Rb : t instanceof Date ? Hb : Bb(t) ? zb : Array.isArray(t) ? Vb : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Wb : Ub)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var Zb = 180 / Math.PI, Qb = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function $b(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Zb,
		skewX: Math.atan(c) * Zb,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var ex;
function tx(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Qb : $b(t.a, t.b, t.c, t.d, t.e, t.f);
}
function nx(e) {
	return e == null || (ex ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), ex.setAttribute("transform", e), !(e = ex.transform.baseVal.consolidate())) ? Qb : (e = e.matrix, $b(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function rx(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Ub(e, i)
			}, {
				i: c - 2,
				x: Ub(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Ub(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Ub(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Ub(e, n)
			}, {
				i: s - 2,
				x: Ub(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var ix = rx(tx, "px, ", "px)", "deg)"), ax = rx(nx, ", ", ")", ")"), ox = 1e-12;
function sx(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function cx(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function lx(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var ux = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < ox) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = sx(y), c = s / (n * g) * (i * lx(t * r + y) - cx(y));
				return [
					a + c * d,
					o + c * f,
					s * i / sx(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), dx = 0, fx = 0, px = 0, mx = 1e3, hx, gx, _x = 0, vx = 0, yx = 0, bx = typeof performance == "object" && performance.now ? performance : Date, xx = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Sx() {
	return vx ||= (xx(Cx), bx.now() + yx);
}
function Cx() {
	vx = 0;
}
function wx() {
	this._call = this._time = this._next = null;
}
wx.prototype = Tx.prototype = {
	constructor: wx,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Sx() : +n) + (t == null ? 0 : +t), !this._next && gx !== this && (gx ? gx._next = this : hx = this, gx = this), this._call = e, this._time = n, Ax();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Ax());
	}
};
function Tx(e, t, n) {
	var r = new wx();
	return r.restart(e, t, n), r;
}
function Ex() {
	Sx(), ++dx;
	for (var e = hx, t; e;) (t = vx - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--dx;
}
function Dx() {
	vx = (_x = bx.now()) + yx, dx = fx = 0;
	try {
		Ex();
	} finally {
		dx = 0, kx(), vx = 0;
	}
}
function Ox() {
	var e = bx.now(), t = e - _x;
	t > mx && (yx -= t, _x = e);
}
function kx() {
	for (var e, t = hx, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : hx = n);
	gx = e, Ax(r);
}
function Ax(e) {
	dx || (fx &&= clearTimeout(fx), e - vx > 24 ? (e < Infinity && (fx = setTimeout(Dx, e - bx.now() - yx)), px &&= clearInterval(px)) : (px ||= (_x = bx.now(), setInterval(Ox, mx)), dx = 1, xx(Dx)));
}
//#endregion
//#region ../../node_modules/d3-timer/src/timeout.js
function jx(e, t, n) {
	var r = new wx();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/schedule.js
var Mx = k_("start", "end", "cancel", "interrupt"), Nx = [];
function Px(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Rx(e, n, {
		name: t,
		index: r,
		group: i,
		on: Mx,
		tween: Nx,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Fx(e, t) {
	var n = Lx(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Ix(e, t) {
	var n = Lx(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Lx(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Rx(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Tx(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return jx(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (jx(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region ../../node_modules/d3-transition/src/interrupt.js
function zx(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region ../../node_modules/d3-transition/src/selection/interrupt.js
function Bx(e) {
	return this.each(function() {
		zx(this, e);
	});
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/tween.js
function Vx(e, t) {
	var n, r;
	return function() {
		var i = Ix(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Hx(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Ix(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function Ux(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Lx(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Vx : Hx)(n, e, t));
}
function Wx(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Ix(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Lx(e, r).value[t];
	};
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/interpolate.js
function Gx(e, t) {
	var n;
	return (typeof t == "number" ? Ub : t instanceof mb ? Rb : (n = mb(t)) ? (t = n, Rb) : Yb)(e, t);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/attr.js
function Kx(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function qx(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Jx(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Yx(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Xx(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Zx(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Qx(e, t) {
	var n = F_(e), r = n === "transform" ? ax : Gx;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Zx : Xx)(n, r, Wx(this, "attr." + e, t)) : t == null ? (n.local ? qx : Kx)(n) : (n.local ? Yx : Jx)(n, r, t));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/attrTween.js
function $x(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function eS(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function tS(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && eS(e, i)), n;
	}
	return i._value = t, i;
}
function nS(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && $x(e, i)), n;
	}
	return i._value = t, i;
}
function rS(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = F_(e);
	return this.tween(n, (r.local ? tS : nS)(r, t));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/delay.js
function iS(e, t) {
	return function() {
		Fx(this, e).delay = +t.apply(this, arguments);
	};
}
function aS(e, t) {
	return t = +t, function() {
		Fx(this, e).delay = t;
	};
}
function oS(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? iS : aS)(t, e)) : Lx(this.node(), t).delay;
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/duration.js
function sS(e, t) {
	return function() {
		Ix(this, e).duration = +t.apply(this, arguments);
	};
}
function cS(e, t) {
	return t = +t, function() {
		Ix(this, e).duration = t;
	};
}
function lS(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? sS : cS)(t, e)) : Lx(this.node(), t).duration;
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/ease.js
function uS(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Ix(this, e).ease = t;
	};
}
function dS(e) {
	var t = this._id;
	return arguments.length ? this.each(uS(t, e)) : Lx(this.node(), t).ease;
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/easeVarying.js
function fS(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Ix(this, e).ease = n;
	};
}
function pS(e) {
	if (typeof e != "function") throw Error();
	return this.each(fS(this._id, e));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/filter.js
function mS(e) {
	typeof e != "function" && (e = q_(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new US(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/merge.js
function hS(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new US(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/on.js
function gS(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function _S(e, t, n) {
	var r, i, a = gS(t) ? Fx : Ix;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function vS(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Lx(this.node(), n).on.on(e) : this.each(_S(n, e, t));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/remove.js
function yS(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function bS() {
	return this.on("end.remove", yS(this._id));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/select.js
function xS(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = B_(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, Px(l[f], t, n, f, l, Lx(u, n)));
	return new US(a, this._parents, t, n);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/selectAll.js
function SS(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = W_(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = Lx(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && Px(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new US(a, o, t, n);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/selection.js
var CS = Ay.prototype.constructor;
function wS() {
	return new CS(this._groups, this._parents);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/style.js
function TS(e, t) {
	var n, r, i;
	return function() {
		var a = Lv(this, e), o = (this.style.removeProperty(e), Lv(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function ES(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function DS(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Lv(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function OS(e, t, n) {
	var r, i, a;
	return function() {
		var o = Lv(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Lv(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function kS(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Ix(this, e), l = c.on, u = c.value[a] == null ? s ||= ES(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function AS(e, t, n) {
	var r = (e += "") == "transform" ? ix : Gx;
	return t == null ? this.styleTween(e, TS(e, r)).on("end.style." + e, ES(e)) : typeof t == "function" ? this.styleTween(e, OS(e, r, Wx(this, "style." + e, t))).each(kS(this._id, e)) : this.styleTween(e, DS(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/styleTween.js
function jS(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function MS(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && jS(e, a, n)), r;
	}
	return a._value = t, a;
}
function NS(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, MS(e, t, n ?? ""));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/text.js
function PS(e) {
	return function() {
		this.textContent = e;
	};
}
function FS(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function IS(e) {
	return this.tween("text", typeof e == "function" ? FS(Wx(this, "text", e)) : PS(e == null ? "" : e + ""));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/textTween.js
function LS(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function RS(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && LS(r)), t;
	}
	return r._value = e, r;
}
function zS(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, RS(e));
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/transition.js
function BS() {
	for (var e = this._name, t = this._id, n = WS(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Lx(c, t);
		Px(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new US(r, this._parents, e, n);
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/end.js
function VS() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Ix(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../../node_modules/d3-transition/src/transition/index.js
var HS = 0;
function US(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function WS() {
	return ++HS;
}
var GS = Ay.prototype;
US.prototype = {
	constructor: US,
	select: xS,
	selectAll: SS,
	selectChild: GS.selectChild,
	selectChildren: GS.selectChildren,
	filter: mS,
	merge: hS,
	selection: wS,
	transition: BS,
	call: GS.call,
	nodes: GS.nodes,
	node: GS.node,
	size: GS.size,
	empty: GS.empty,
	each: GS.each,
	on: vS,
	attr: Qx,
	attrTween: rS,
	style: AS,
	styleTween: NS,
	text: IS,
	textTween: zS,
	remove: bS,
	tween: Ux,
	delay: oS,
	duration: lS,
	ease: dS,
	easeVarying: pS,
	end: VS,
	[Symbol.iterator]: GS[Symbol.iterator]
};
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function KS(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../../node_modules/d3-transition/src/selection/transition.js
var qS = {
	time: null,
	delay: 0,
	duration: 250,
	ease: KS
};
function JS(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function YS(e) {
	var t, n;
	e instanceof US ? (t = e._id, e = e._name) : (t = WS(), (n = qS).time = Sx(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Px(c, e, t, l, o, n || JS(c, t));
	return new US(r, this._parents, e, t);
}
Ay.prototype.interrupt = Bx, Ay.prototype.transition = YS;
//#endregion
//#region ../../node_modules/d3-zoom/src/constant.js
var XS = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-zoom/src/event.js
function ZS(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
//#endregion
//#region ../../node_modules/d3-zoom/src/transform.js
function QS(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
QS.prototype = {
	constructor: QS,
	scale: function(e) {
		return e === 1 ? this : new QS(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new QS(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var $S = new QS(1, 0, 0);
eC.prototype = QS.prototype;
function eC(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return $S;
	return e.__zoom;
}
//#endregion
//#region ../../node_modules/d3-zoom/src/noevent.js
function tC(e) {
	e.stopImmediatePropagation();
}
function nC(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/d3-zoom/src/zoom.js
function rC(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function iC() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function aC() {
	return this.__zoom || $S;
}
function oC(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function sC() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function cC(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function lC() {
	var e = rC, t = iC, n = cC, r = oC, i = sC, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = ux, l = k_("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", aC).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", aC), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n($S.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new QS(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new QS(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new QS(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new C(e, t);
	}
	function C(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	C.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = My(this.that).datum();
			l.call(e, this.that, new ZS(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function w(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = Py(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], zx(this), s.start();
		nC(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = My(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = Py(t, i), l = t.clientX, u = t.clientY;
		zy(t.view), tC(t), a.mouse = [c, this.__zoom.invert(c)], zx(this), a.start();
		function d(e) {
			if (nC(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = Py(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), By(e.view, a.moved), nC(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = Py(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			nC(r), s > 0 ? My(this).transition().duration(s).call(x, d, c, r) : My(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (tC(t), s = 0; s < i; ++s) c = r[s], l = Py(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), zx(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (nC(e), s = 0; s < a; ++s) c = i[s], l = Py(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function k(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (tC(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = Py(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = My(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : XS(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : XS(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : XS(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : XS([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
//#endregion
//#region ../../node_modules/@xyflow/system/dist/esm/index.js
var uC = {
	error001: (e = "react") => `Seems like you have not used ${e === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,
	error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
	error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
	error004: () => "The parent container needs a width and a height to render the graph.",
	error005: () => "Only child nodes can use a parent extent.",
	error006: () => "Can't create edge. An edge needs a source and a target.",
	error007: (e) => `The old edge with id=${e} does not exist.`,
	error009: (e) => `Marker type "${e}" doesn't exist.`,
	error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
	error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
	error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
	error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
	error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
	error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
	error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
	error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, dC = [[-Infinity, -Infinity], [Infinity, Infinity]], fC = [
	"Enter",
	" ",
	"Escape"
], pC = {
	"node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
	"node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
	"edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
	"controls.ariaLabel": "Control Panel",
	"controls.zoomIn.ariaLabel": "Zoom In",
	"controls.zoomOut.ariaLabel": "Zoom Out",
	"controls.fitView.ariaLabel": "Fit View",
	"controls.interactive.ariaLabel": "Toggle Interactivity",
	"minimap.ariaLabel": "Mini Map",
	"handle.ariaLabel": "Handle"
}, mC;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(mC ||= {});
var hC;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(hC ||= {});
var gC;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(gC ||= {});
var _C = {
	inProgress: !1,
	isValid: null,
	from: null,
	fromHandle: null,
	fromPosition: null,
	fromNode: null,
	to: null,
	toHandle: null,
	toPosition: null,
	toNode: null,
	pointer: null
}, vC;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(vC ||= {});
var yC;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(yC ||= {});
var $;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($ ||= {});
var bC = {
	[$.Left]: $.Right,
	[$.Right]: $.Left,
	[$.Top]: $.Bottom,
	[$.Bottom]: $.Top
}, xC = (e) => !!e && typeof e == "object" && "id" in e && "source" in e && "target" in e, SC = (e) => !!e && typeof e == "object" && "id" in e && "position" in e && !("source" in e) && !("target" in e), CC = (e) => !!e && typeof e == "object" && "id" in e && "internals" in e && !("source" in e) && !("target" in e), wC = (e, t = [0, 0]) => {
	let { width: n, height: r } = iw(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, TC = (e, t = { nodeOrigin: [0, 0] }) => {
	if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0) return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	let n = !1, r = e.reduce((e, r) => {
		let i = typeof r == "string", a = !t.nodeLookup && !i ? r : void 0;
		return t.nodeLookup && (a = i ? t.nodeLookup.get(r) : CC(r) ? r : t.nodeLookup.get(r.id)), a ? (n = !0, RC(e, HC(a, t.nodeOrigin))) : e;
	}, {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	});
	return n ? BC(r) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, EC = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = RC(n, HC(e)), r = !0);
	}), r ? BC(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, DC = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = (t.x - n) / i, c = (t.y - r) / i, l = t.width / i, u = t.height / i, d = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? 0, f = e.height ?? t.height ?? t.initialHeight ?? 0, { x: p, y: m } = t.internals.positionAbsolute, h = WC(s, c, l, u, p, m, i, f), g = i * f, _ = a && h > 0;
		(!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t);
	}
	return d;
}, OC = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function kC(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		let i;
		if (t?.includeHiddenNodes) {
			let { width: t, height: n } = iw(e);
			i = t > 0 && n > 0;
		} else i = !!(e.measured.width && e.measured.height && !e.hidden);
		i && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function AC({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return !0;
	let s = tw(EC(kC(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), !0;
}
function jC({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) {
		if (!s) a?.("005", uC.error005());
		else {
			let { width: e, height: t } = iw(s);
			e && t && (d = [[c, l], [c + e, l + t]]);
		}
	} else s && rw(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = rw(d) ? PC(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", uC.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function MC({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = OC(o, c);
	for (let e of c) s.has(e.id) && !l.find((t) => t.id === e.id) && l.push(e);
	if (!i) return {
		edges: l,
		nodes: o
	};
	let u = await i({
		nodes: o,
		edges: l
	});
	return typeof u == "boolean" ? u ? {
		edges: l,
		nodes: o
	} : {
		edges: [],
		nodes: []
	} : u;
}
var NC = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), PC = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: NC(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: NC(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function FC(e, t, n) {
	let { width: r, height: i } = iw(n), { x: a, y: o } = n.internals.positionAbsolute;
	return PC(e, [[a, o], [a + r, o + i]], t);
}
var IC = (e, t, n) => e < t ? NC(Math.abs(e - t), 1, t) / t : e > n ? -NC(Math.abs(e - n), 1, t) / t : 0, LC = (e, t, n = 15, r = 40) => [IC(e.x, r, t.width - r) * n, IC(e.y, r, t.height - r) * n], RC = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), zC = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), BC = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), VC = (e, t = [0, 0]) => {
	let { x: n, y: r } = CC(e) ? e.internals.positionAbsolute : wC(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, HC = (e, t = [0, 0]) => {
	let { x: n, y: r } = CC(e) ? e.internals.positionAbsolute : wC(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, UC = (e, t) => BC(RC(zC(e), zC(t))), WC = (e, t, n, r, i, a, o, s) => {
	let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
	return Math.ceil(c * l);
}, GC = (e, t) => WC(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), KC = (e) => qC(e.width) && qC(e.height) && qC(e.x) && qC(e.y), qC = (e) => !isNaN(e) && isFinite(e), JC = (e, t) => (n, r) => {
	process.env.NODE_ENV === "development" && console.warn(`[${e}]: ${r} Help: ${t}error#${n}`);
}, YC = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), XC = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? YC(s, o) : s;
}, ZC = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function QC(e, t) {
	if (typeof e == "number") return Math.floor((t - t / (1 + e)) * .5);
	if (typeof e == "string" && e.endsWith("px")) {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return Math.floor(t);
	}
	if (typeof e == "string" && e.endsWith("%")) {
		let n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(t * n * .01);
	}
	return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function $C(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = QC(e, n), i = QC(e, t);
		return {
			top: r,
			right: i,
			bottom: r,
			left: i,
			x: i * 2,
			y: r * 2
		};
	}
	if (typeof e == "object") {
		let r = QC(e.top ?? e.y ?? 0, n), i = QC(e.bottom ?? e.y ?? 0, n), a = QC(e.left ?? e.x ?? 0, t), o = QC(e.right ?? e.x ?? 0, t);
		return {
			top: r,
			right: o,
			bottom: i,
			left: a,
			x: a + o,
			y: r + i
		};
	}
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		x: 0,
		y: 0
	};
}
function ew(e, t, n, r, i, a) {
	let { x: o, y: s } = ZC(e, [
		t,
		n,
		r
	]), { x: c, y: l } = ZC({
		x: e.x + e.width,
		y: e.y + e.height
	}, [
		t,
		n,
		r
	]), u = i - c, d = a - l;
	return {
		left: Math.floor(o),
		top: Math.floor(s),
		right: Math.floor(u),
		bottom: Math.floor(d)
	};
}
var tw = (e, t, n, r, i, a) => {
	let o = $C(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = NC(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = ew(e, f, p, l, t, n), h = {
		left: Math.min(m.left - o.left, 0),
		top: Math.min(m.top - o.top, 0),
		right: Math.min(m.right - o.right, 0),
		bottom: Math.min(m.bottom - o.bottom, 0)
	};
	return {
		x: f - h.left + h.right,
		y: p - h.top + h.bottom,
		zoom: l
	};
}, nw = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function rw(e) {
	return e != null && e !== "parent";
}
function iw(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function aw(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function ow(e, t = {
	width: 0,
	height: 0
}, n, r, i) {
	let a = { ...e }, o = r.get(n);
	if (o) {
		let e = o.origin || i;
		a.x += o.internals.positionAbsolute.x - (t.width ?? 0) * e[0], a.y += o.internals.positionAbsolute.y - (t.height ?? 0) * e[1];
	}
	return a;
}
function sw(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function cw() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function lw(e) {
	return {
		...pC,
		...e || {}
	};
}
function uw(e) {
	if (typeof document > "u") return !0;
	let t = document.querySelector(`.${e}-flow__pane`);
	if (!t || !t.isConnected) return !0;
	let n = getComputedStyle(t);
	if (n.display === "none" || n.visibility === "hidden" || n.visibility === "collapse" || n.opacity === "0" || n.width === "0" && n.height === "0") return !0;
	let r = t.getBoundingClientRect();
	if (r.width === 0 && r.height === 0) return !0;
	let i = document.querySelector(`.${e}-flow__attribution`);
	if (!i || !i.isConnected) return !1;
	let a = getComputedStyle(i);
	if (a.display === "none" || a.visibility === "hidden" || a.visibility === "collapse" || a.opacity === "0") return !1;
	let o = i.getBoundingClientRect();
	return o.width !== 0 || o.height !== 0;
}
var dw = !1;
function fw(e) {
	if (dw || process.env.NODE_ENV !== "development") return;
	dw = !0;
	let t = `${e.charAt(0).toUpperCase() + e.slice(1)} Flow`;
	setTimeout(() => {
		uw(e) || console.warn(`${t}: It seems like you are hiding the attribution. Please only do this when you are subscribed to ${t} Pro: https://${e}flow.dev/remove-attr\n%cYou can ignore this warning if you are subscribed.`, "font-style: italic;");
	}, 1e3);
}
function pw(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
function mw(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = bw(e), s = XC({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? YC(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var hw = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), gw = (e) => e?.getRootNode?.() || window?.document, _w = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function vw(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? _w.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var yw = (e) => "clientX" in e, bw = (e, t) => {
	let n = yw(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, xw = (e, t, n, r, i) => {
	let a = t.querySelectorAll(`.${e}`);
	return !a || !a.length ? null : Array.from(a).map((t) => {
		let a = t.getBoundingClientRect();
		return {
			id: t.getAttribute("data-handleid"),
			type: e,
			nodeId: i,
			position: t.getAttribute("data-handlepos"),
			x: (a.left - n.left) / r,
			y: (a.top - n.top) / r,
			...hw(t)
		};
	});
};
function Sw({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Cw(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function ww({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case $.Left: return [t - Cw(t - r, a), n];
		case $.Right: return [t + Cw(r - t, a), n];
		case $.Top: return [t, n - Cw(n - i, a)];
		case $.Bottom: return [t, n + Cw(i - n, a)];
	}
}
function Tw({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: i, targetPosition: a = $.Top, curvature: o = .25 }) {
	let [s, c] = ww({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = ww({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = Sw({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: s,
		sourceControlY: c,
		targetControlX: l,
		targetControlY: u
	});
	return [
		`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`,
		d,
		f,
		p,
		m
	];
}
function Ew({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function Dw({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function Ow({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = RC(HC(e), HC(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), GC({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, BC(a)) > 0;
}
var kw = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Aw = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), jw = (e, t, n = {}) => {
	if (!e.source || !e.target) return n.onError?.("006", uC.error006()), t;
	let r = n.getEdgeId || kw, i;
	return i = xC(e) ? { ...e } : {
		...e,
		id: r(e)
	}, Aw(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function Mw({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = Ew({
		sourceX: e,
		sourceY: t,
		targetX: n,
		targetY: r
	});
	return [
		`M ${e},${t}L ${n},${r}`,
		i,
		a,
		o,
		s
	];
}
var Nw = {
	[$.Left]: {
		x: -1,
		y: 0
	},
	[$.Right]: {
		x: 1,
		y: 0
	},
	[$.Top]: {
		x: 0,
		y: -1
	},
	[$.Bottom]: {
		x: 0,
		y: 1
	}
}, Pw = ({ source: e, sourcePosition: t = $.Bottom, target: n }) => t === $.Left || t === $.Right ? e.x < n.x ? {
	x: 1,
	y: 0
} : {
	x: -1,
	y: 0
} : e.y < n.y ? {
	x: 0,
	y: 1
} : {
	x: 0,
	y: -1
}, Fw = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function Iw({ source: e, sourcePosition: t = $.Bottom, target: n, targetPosition: r = $.Top, center: i, offset: a, stepPosition: o }) {
	let s = Nw[t], c = Nw[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = Pw({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = Ew({
		sourceX: e.x,
		sourceY: e.y,
		targetX: n.x,
		targetY: n.y
	});
	if (s[f] * c[f] === -1) {
		f === "x" ? (h = i.x ?? l.x + (u.x - l.x) * o, g = i.y ?? (l.y + u.y) / 2) : (h = i.x ?? (l.x + u.x) / 2, g = i.y ?? l.y + (u.y - l.y) * o);
		let e = [{
			x: h,
			y: l.y
		}, {
			x: h,
			y: u.y
		}], t = [{
			x: l.x,
			y: g
		}, {
			x: u.x,
			y: g
		}];
		m = s[f] === p ? f === "x" ? e : t : f === "x" ? t : e;
	} else {
		let i = [{
			x: l.x,
			y: u.y
		}], o = [{
			x: u.x,
			y: l.y
		}];
		if (m = f === "x" ? s.x === p ? o : i : s.y === p ? i : o, t === r) {
			let t = Math.abs(e[f] - n[f]);
			if (t <= a) {
				let r = Math.min(a - 1, a - t);
				s[f] === p ? _[f] = (l[f] > e[f] ? -1 : 1) * r : v[f] = (u[f] > n[f] ? -1 : 1) * r;
			}
		}
		if (t !== r) {
			let e = f === "x" ? "y" : "x", t = s[f] === c[e], n = l[e] > u[e], r = l[e] < u[e];
			(s[f] === 1 && (!t && n || t && r) || s[f] !== 1 && (!t && r || t && n)) && (m = f === "x" ? i : o);
		}
		let d = {
			x: l.x + _.x,
			y: l.y + _.y
		}, y = {
			x: u.x + v.x,
			y: u.y + v.y
		};
		Math.max(Math.abs(d.x - m[0].x), Math.abs(y.x - m[0].x)) >= Math.max(Math.abs(d.y - m[0].y), Math.abs(y.y - m[0].y)) ? (h = (d.x + y.x) / 2, g = m[0].y) : (h = m[0].x, g = (d.y + y.y) / 2);
	}
	let x = {
		x: l.x + _.x,
		y: l.y + _.y
	}, S = {
		x: u.x + v.x,
		y: u.y + v.y
	};
	return [
		[
			e,
			...x.x !== m[0].x || x.y !== m[0].y ? [x] : [],
			...m,
			...S.x !== m[m.length - 1].x || S.y !== m[m.length - 1].y ? [S] : [],
			n
		],
		h,
		g,
		y,
		b
	];
}
function Lw(e, t, n, r) {
	let i = Math.min(Fw(e, t) / 2, Fw(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function Rw({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: i, targetPosition: a = $.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = Iw({
		source: {
			x: e,
			y: t
		},
		sourcePosition: n,
		target: {
			x: r,
			y: i
		},
		targetPosition: a,
		center: {
			x: s,
			y: c
		},
		offset: l,
		stepPosition: u
	}), g = `M${d[0].x} ${d[0].y}`;
	for (let e = 1; e < d.length - 1; e++) g += Lw(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function zw(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Bw(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!zw(t) || !zw(n)) return null;
	let r = t.internals.handleBounds || Vw(t.handles), i = n.internals.handleBounds || Vw(n.handles), a = Uw(r?.source ?? [], e.sourceHandle), o = Uw(e.connectionMode === mC.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", uC.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || $.Bottom, c = o?.position || $.Top, l = Hw(t, a, s), u = Hw(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function Vw(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function Hw(e, t, n = $.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? iw(e);
	if (r) return {
		x: i + o / 2,
		y: a + s / 2
	};
	switch (t?.position ?? n) {
		case $.Top: return {
			x: i + o / 2,
			y: a
		};
		case $.Right: return {
			x: i + o,
			y: a + s / 2
		};
		case $.Bottom: return {
			x: i + o / 2,
			y: a + s
		};
		case $.Left: return {
			x: i,
			y: a + s / 2
		};
	}
}
function Uw(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function Ww(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function Gw(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = Ww(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
var Kw = 1e3, qw = 10, Jw = {
	nodeOrigin: [0, 0],
	nodeExtent: dC,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, Yw = {
	...Jw,
	checkEquality: !0
};
function Xw(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function Zw(e, t, n) {
	let r = Xw(Jw, n);
	for (let n of e.values()) if (n.parentId) nT(n, e, t, r);
	else {
		let e = PC(wC(n, r.nodeOrigin), rw(n.extent) ? n.extent : r.nodeExtent, iw(n));
		n.internals.positionAbsolute = e;
	}
}
function Qw(e, t) {
	if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
	let n = [], r = [];
	for (let t of e.handles) {
		let i = {
			id: t.id,
			width: t.width ?? 1,
			height: t.height ?? 1,
			nodeId: e.id,
			x: t.x,
			y: t.y,
			position: t.position,
			type: t.type
		};
		t.type === "source" ? n.push(i) : t.type === "target" && r.push(i);
	}
	return {
		source: n,
		target: r
	};
}
function $w(e) {
	return e === "manual";
}
function eT(e, t, n, r = {}) {
	let i = Xw(Yw, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !$w(i.zIndexMode) ? Kw : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = PC(wC(u, i.nodeOrigin), rw(u.extent) ? u.extent : i.nodeExtent, iw(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: Qw(u, e),
					z: rT(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && nT(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function tT(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function nT(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = Xw(Jw, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	tT(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * qw), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = iT(e, u, o, s, a && !$w(c) ? Kw : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
	(h || p !== e.internals.z) && t.set(e.id, {
		...e,
		internals: {
			...e.internals,
			positionAbsolute: h ? {
				x: d,
				y: f
			} : m,
			z: p
		}
	});
}
function rT(e, t, n) {
	let r = qC(e.zIndex) ? e.zIndex : 0;
	return $w(n) ? r : r + (e.selected ? t : 0);
}
function iT(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = iw(e), l = wC(e, n), u = rw(e.extent) ? PC(l, e.extent, c) : l, d = PC({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = FC(d, c, t));
	let f = rT(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function aT(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = UC(a.get(n.parentId)?.expandedRect ?? VC(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = iw(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
		(u > 0 || d > 0 || m || h) && (i.push({
			id: o,
			type: "position",
			position: {
				x: a.position.x - u + m,
				y: a.position.y - d + h
			}
		}), n.get(o)?.forEach((t) => {
			e.some((e) => e.id === t.id) || i.push({
				id: t.id,
				type: "position",
				position: {
					x: t.position.x + u,
					y: t.position.y + d
				}
			});
		})), (c.width < t.width || c.height < t.height || u || d) && i.push({
			id: o,
			type: "dimensions",
			setAttributes: !0,
			dimensions: {
				width: f + (u ? l[0] * u - m : 0),
				height: p + (d ? l[1] * d - h : 0)
			}
		});
	}), i;
}
function oT(e, t, n, r, i, a, o) {
	let s = r?.querySelector(".xyflow__viewport"), c = !1;
	if (!s) return {
		changes: [],
		updatedInternals: c
	};
	let l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
	for (let r of e.values()) {
		let e = t.get(r.id);
		if (!e) continue;
		if (e.hidden) {
			t.set(e.id, {
				...e,
				internals: {
					...e.internals,
					handleBounds: void 0
				}
			}), c = !0;
			continue;
		}
		let s = hw(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = rw(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			if (e.parentId && e.extent === "parent") {
				let n = t.get(e.parentId);
				n && (h = FC(h, s, n));
			} else m && (h = PC(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: xw("source", r.nodeElement, p, d, e.id),
						target: xw("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && nT(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: VC(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = aT(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function sT({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return !1;
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r);
	return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function cT(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function lT(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		cT("source", s, `${i}-${o}--${n}-${a}`, e, n, a), cT("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function uT(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : uT(n, t) : !1;
}
function dT(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function fT(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !uT(o, e)) && (o.draggable || t && o.draggable === void 0)) {
		let t = e.get(a);
		t && i.set(a, {
			id: a,
			position: t.position || {
				x: 0,
				y: 0
			},
			distance: {
				x: n.x - t.internals.positionAbsolute.x,
				y: n.y - t.internals.positionAbsolute.y
			},
			extent: t.extent,
			parentId: t.parentId,
			origin: t.origin,
			expandParent: t.expandParent,
			internals: { positionAbsolute: t.internals.positionAbsolute || {
				x: 0,
				y: 0
			} },
			measured: {
				width: t.measured.width ?? 0,
				height: t.measured.height ?? 0
			}
		});
	}
	return i;
}
function pT({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	let i = [];
	for (let [e, a] of t) {
		let t = n.get(e)?.internals.userNode;
		t && i.push({
			...t,
			position: a.position,
			dragging: r
		});
	}
	if (!e) return [i[0], i];
	let a = n.get(e)?.internals.userNode;
	return [a ? {
		...a,
		position: t.get(e)?.position || a.position,
		dragging: r
	} : i[0], i];
}
function mT({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = YC(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function hT({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = My(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? zC(EC(s)) : null, x = v && l ? mT({
				dragItems: s,
				snapGrid: c,
				x: e,
				y: n
			}) : null;
			for (let [t, r] of s) {
				if (!i.has(t)) continue;
				let a = {
					x: e - r.distance.x,
					y: n - r.distance.y
				};
				l && (a = x ? {
					x: Math.round(a.x + x.x),
					y: Math.round(a.y + x.y)
				} : YC(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = jC({
					nodeId: t,
					nextPosition: a,
					nodeLookup: i,
					nodeExtent: s || o,
					nodeOrigin: u,
					onError: p
				});
				_ = _ || r.position.x !== d.x || r.position.y !== d.y, r.position = d, r.internals.positionAbsolute = f;
			}
			if (m ||= _, _ && (g(s, !0), h && (r || d || !b && f))) {
				let [e, t] = pT({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				r?.(h, s, e, t), d?.(h, e, t), b || f?.(h, t);
			}
		}
		async function C() {
			if (!u) return;
			let { transform: e, panBy: n, autoPanSpeed: r, autoPanOnNodeDrag: i } = t();
			if (!i) {
				c = !1, cancelAnimationFrame(o);
				return;
			}
			let [s, d] = LC(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = mw(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = fT(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = pT({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = qy().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = mw(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = bw(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = mw(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = bw(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = bw(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!d || p) {
				p && s.size > 0 && t().updateNodePositions(s, !1);
				return;
			}
			if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = pT({
						nodeId: b,
						dragItems: s,
						nodeLookup: n,
						dragging: !1
					});
					i?.(e.sourceEvent, s, t, r), a?.(e.sourceEvent, t, r), b || o?.(e.sourceEvent, r);
				}
			}
		}).filter((e) => {
			let t = e.target;
			return !e.button && (!g || !dT(t, `.${g}`, v)) && (!_ || dT(t, _, v));
		});
		f.call(T);
	}
	function _() {
		f?.on(".drag", null);
	}
	return {
		update: g,
		destroy: _
	};
}
function gT(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) GC(i, VC(e)) > 0 && r.push(e);
	return r;
}
var _T = 250;
function vT(e, t, n, r) {
	let i = [], a = Infinity, o = gT(e, n, t + _T);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = Hw(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
			l > t || (l < a ? (i = [{
				...s,
				x: o,
				y: c
			}], a = l) : l === a && i.push({
				...s,
				x: o,
				y: c
			}));
		}
	}
	if (!i.length) return null;
	if (i.length > 1) {
		let e = r.type === "source" ? "target" : "source";
		return i.find((t) => t.type === e) ?? i[0];
	}
	return i[0];
}
function yT(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...Hw(o, c, c.position, !0)
	} : c;
}
function bT(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function xT(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var ST = () => !0;
function CT(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = ST, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = gw(e.target), E = 0, D, { x: O, y: k } = bw(e), A = bT(a, w), j = s?.getBoundingClientRect(), M = !1;
	if (!j || !A) return;
	let N = yT(i, A, r, c, t);
	if (!N) return;
	let P = bw(e, j), F = !1, I = null, L = !1, ee = null;
	function R() {
		if (!u || !j) return;
		let [e, t] = LC(P, j, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(R);
	}
	let z = {
		...N,
		nodeId: i,
		type: A,
		position: N.position
	}, B = c.get(i), V = {
		inProgress: !0,
		isValid: null,
		from: Hw(B, z, $.Left, !0),
		fromHandle: z,
		fromPosition: z.position,
		fromNode: B,
		to: P,
		toHandle: null,
		toPosition: bC[z.position],
		toNode: null,
		pointer: P
	};
	function H() {
		M = !0, y(V), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: A
		});
	}
	C === 0 && H();
	function te(e) {
		if (!M) {
			let { x: t, y: n } = bw(e), r = t - O, i = n - k;
			if (!(r * r + i * i > C * C)) return;
			H();
		}
		if (!x() || !z) {
			U(e);
			return;
		}
		let a = b();
		P = bw(e, j), D = vT(XC(P, a, !1, [1, 1]), n, c, z), F ||= (R(), !0);
		let s = wT(e, {
			handle: D,
			connectionMode: t,
			fromNodeId: i,
			fromHandleId: r,
			fromType: o ? "target" : "source",
			isValidConnection: _,
			doc: T,
			lib: l,
			flowId: d,
			nodeLookup: c
		});
		ee = s.handleDomNode, I = s.connection, L = xT(!!D, s.isValid);
		let u = c.get(i), f = u ? Hw(u, z, $.Left, !0) : V.from, p = {
			...V,
			from: f,
			isValid: L,
			to: s.toHandle && L ? ZC({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : P,
			toHandle: s.toHandle,
			toPosition: L && s.toHandle ? s.toHandle.position : bC[z.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: P
		};
		y(p), V = p;
	}
	function U(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (M) {
				(D || ee) && I && L && h?.(I);
				let { inProgress: t, ...n } = V, r = {
					...n,
					toPosition: V.toHandle ? V.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), F = !1, L = !1, I = null, ee = null, T.removeEventListener("mousemove", te), T.removeEventListener("mouseup", U), T.removeEventListener("touchmove", te), T.removeEventListener("touchend", U);
		}
	}
	T.addEventListener("mousemove", te), T.addEventListener("mouseup", U), T.addEventListener("touchmove", te), T.addEventListener("touchend", U);
}
function wT(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = ST, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = bw(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = bT(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === mC.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = yT(t, e, a, u, n, !0);
	}
	return _;
}
var TT = {
	onPointerDown: CT,
	isValid: wT
};
function ET({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = My(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && nw() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = lC().on("start", (e) => {
			(e.sourceEvent.type === "mousedown" || e.sourceEvent.type === "touchstart") && (f = [e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX, e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY]);
		}).on("zoom", c ? (i) => {
			let s = n();
			if (i.sourceEvent.type !== "mousemove" && i.sourceEvent.type !== "touchmove" || !t) return;
			let c = [i.sourceEvent.clientX ?? i.sourceEvent.touches[0].clientX, i.sourceEvent.clientY ?? i.sourceEvent.touches[0].clientY], l = [c[0] - f[0], c[1] - f[1]];
			f = c;
			let d = r() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1), p = {
				x: s[0] - l[0] * d,
				y: s[1] - l[1] * d
			}, m = [[0, 0], [a, o]];
			t.setViewportConstrained({
				x: p.x,
				y: p.y,
				zoom: s[2]
			}, m, e);
		} : null).on("zoom.wheel", l ? d : null);
		i.call(p, {});
	}
	function o() {
		i.on("zoom", null);
	}
	return {
		update: a,
		destroy: o,
		pointer: Py
	};
}
var DT = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), OT = ({ x: e, y: t, zoom: n }) => $S.translate(e, t).scale(n), kT = (e, t) => e.target.closest(`.${t}`), AT = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), jT = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, MT = (e, t = 0, n = jT, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, NT = (e) => {
	let t = e.ctrlKey && nw() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function PT({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (kT(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = Py(u), t = d * 2 ** NT(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === hC.Vertical ? 0 : u.deltaX * f, m = i === hC.Horizontal ? 0 : u.deltaY * f;
		!nw() && u.shiftKey && i !== hC.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = DT(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? c?.(u, h) : (e.isPanScrolling = !0, s?.(u, h)), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150);
	};
}
function FT({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = kT(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function IT({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = DT(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function LT({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && AT(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, DT(a.transform));
	};
}
function RT({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && AT(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = DT(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function zT({ panActivationKeyPressed: e, zoomActivationKeyPressed: t, zoomOnScroll: n, zoomOnPinch: r, panOnDrag: i, panOnScroll: a, zoomOnDoubleClick: o, userSelectionActive: s, noWheelClassName: c, noPanClassName: l, lib: u, connectionInProgress: d }) {
	return (f) => {
		let p = t || n, m = r && f.ctrlKey, h = f.type === "wheel";
		if (f.button === 1 && f.type === "mousedown" && (kT(f, `${u}-flow__node`) || kT(f, `${u}-flow__edge`) || kT(f, `${u}-flow__selection`) || kT(f, `${u}-flow__nodesselection`))) return !0;
		if (!i && !p && !a && !o && !r || s || d && !h || kT(f, c) && h || kT(f, l) && (!h || a && h && !t) || !r && f.ctrlKey && h) return !1;
		if (!r && f.type === "touchstart" && f.touches?.length > 1) return f.preventDefault(), !1;
		if (!p && !a && !m && h || !i && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(i) && !i.includes(f.button) && f.type === "mousedown") return !1;
		let g = Array.isArray(i) && i.includes(f.button) || !f.button || f.button <= 1;
		return (!f.ctrlKey || h || e) && g;
	};
}
function BT({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
	let l = {
		isZoomingOrPanning: !1,
		usedRightMouseButton: !1,
		prevViewport: {},
		mouseButton: 0,
		timerId: void 0,
		panScrollTimeout: void 0,
		isPanScrolling: !1
	}, u = e.getBoundingClientRect(), d = [[0, 0], [u.width, u.height]];
	(typeof ResizeObserver < "u" ? new ResizeObserver((e) => {
		let t = e[0];
		t && (d = [[0, 0], [t.contentRect.width, t.contentRect.height]]);
	}) : null)?.observe(e);
	let f = lC().extent(() => d).scaleExtent([t, n]).translateExtent(r), p = My(e).call(f);
	y({
		x: i.x,
		y: i.y,
		zoom: NC(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let m = p.on("wheel.zoom"), h = p.on("dblclick.zoom");
	f.wheelDelta(NT);
	async function g(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Xb : ux).transform(MT(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function _({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: d, panOnScrollSpeed: g, preventScrolling: _, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, panActivationKeyPressed: S = !1, zoomActivationKeyPressed: C, lib: w, onTransformChange: T, connectionInProgress: E, paneClickDistance: D, selectionOnDrag: O }) {
		r && !l.isZoomingOrPanning && v();
		let k = i && !C && !r;
		f.clickDistance(O ? Infinity : !qC(D) || D < 0 ? 0 : D);
		let A = k ? PT({
			zoomPanValues: l,
			noWheelClassName: e,
			d3Selection: p,
			d3Zoom: f,
			panOnScrollMode: d,
			panOnScrollSpeed: g,
			zoomOnPinch: y,
			onPanZoomStart: o,
			onPanZoom: a,
			onPanZoomEnd: s
		}) : FT({
			noWheelClassName: e,
			preventScrolling: _,
			d3ZoomHandler: m
		});
		p.on("wheel.zoom", A, { passive: !1 });
		let j = IT({
			zoomPanValues: l,
			onDraggingChange: c,
			onPanZoomStart: o
		});
		f.on("start", j);
		let M = LT({
			zoomPanValues: l,
			panOnDrag: u,
			onPaneContextMenu: !!n,
			onPanZoom: a,
			onTransformChange: T
		});
		f.on("zoom", M);
		let N = RT({
			zoomPanValues: l,
			panOnDrag: u,
			panOnScroll: i,
			onPaneContextMenu: n,
			onPanZoomEnd: s,
			onDraggingChange: c
		});
		f.on("end", N);
		let P = zT({
			panActivationKeyPressed: S,
			zoomActivationKeyPressed: C,
			panOnDrag: u,
			zoomOnScroll: b,
			panOnScroll: i,
			zoomOnDoubleClick: x,
			zoomOnPinch: y,
			userSelectionActive: r,
			noPanClassName: t,
			noWheelClassName: e,
			lib: w,
			connectionInProgress: E
		});
		f.filter(P), x ? p.on("dblclick.zoom", h) : p.on("dblclick.zoom", null);
	}
	function v() {
		f.on("zoom", null);
	}
	async function y(e, t, n) {
		let r = OT(e), i = f?.constrain()(r, t, n);
		return i && await g(i), i;
	}
	async function b(e, t) {
		let n = OT(e);
		return await g(n, t), n;
	}
	function x(e) {
		if (p) {
			let t = OT(e), n = p.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && f?.transform(p, t, null, { sync: !0 });
		}
	}
	function S() {
		let e = p ? eC(p.node()) : {
			x: 0,
			y: 0,
			k: 1
		};
		return {
			x: e.x,
			y: e.y,
			zoom: e.k
		};
	}
	async function C(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Xb : ux).scaleTo(MT(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	async function w(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? Xb : ux).scaleBy(MT(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function T(e) {
		f?.scaleExtent(e);
	}
	function E(e) {
		f?.translateExtent(e);
	}
	function D(e) {
		let t = !qC(e) || e < 0 ? 0 : e;
		f?.clickDistance(t);
	}
	return {
		update: _,
		destroy: v,
		setViewport: b,
		setViewportConstrained: y,
		getViewport: S,
		scaleTo: C,
		scaleBy: w,
		setScaleExtent: T,
		setTranslateExtent: E,
		syncViewport: x,
		setClickDistance: D
	};
}
var VT;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(VT ||= {});
function HT({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: a }) {
	let o = e - t, s = n - r, c = [o > 0 ? 1 : o < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
	return o && i && (c[0] *= -1), s && a && (c[1] *= -1), c;
}
function UT(e) {
	return {
		isHorizontal: e.includes("right") || e.includes("left"),
		isVertical: e.includes("bottom") || e.includes("top"),
		affectsX: e.includes("left"),
		affectsY: e.includes("top")
	};
}
function WT(e, t) {
	return Math.max(0, t - e);
}
function GT(e, t) {
	return Math.max(0, e - t);
}
function KT(e, t, n) {
	return Math.max(0, t - e, e - n);
}
function qT(e, t) {
	return e ? !t : t;
}
function JT(e, t, n, r, i, a, o, s) {
	let { affectsX: c, affectsY: l } = t, { isHorizontal: u, isVertical: d } = t, f = u && d, { xSnapped: p, ySnapped: m } = n, { minWidth: h, maxWidth: g, minHeight: _, maxHeight: v } = r, { x: y, y: b, width: x, height: S, aspectRatio: C } = e, w = Math.floor(u ? p - e.pointerX : 0), T = Math.floor(d ? m - e.pointerY : 0), E = x + (c ? -w : w), D = S + (l ? -T : T), O = -a[0] * x, k = -a[1] * S, A = KT(E, h, g), j = KT(D, _, v);
	if (o) {
		let e = 0, t = 0;
		c && w < 0 ? e = WT(y + w + O, o[0][0]) : !c && w > 0 && (e = GT(y + E + O, o[1][0])), l && T < 0 ? t = WT(b + T + k, o[0][1]) : !l && T > 0 && (t = GT(b + D + k, o[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (s) {
		let e = 0, t = 0;
		c && w > 0 ? e = GT(y + w, s[0][0]) : !c && w < 0 && (e = WT(y + E, s[1][0])), l && T > 0 ? t = GT(b + T, s[0][1]) : !l && T < 0 && (t = WT(b + D, s[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (i) {
		if (u) {
			let e = KT(E / C, _, v) * C;
			if (A = Math.max(A, e), o) {
				let e = 0;
				e = !c && !l || c && !l && f ? GT(b + k + E / C, o[1][1]) * C : WT(b + k + (c ? w : -w) / C, o[0][1]) * C, A = Math.max(A, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || c && !l && f ? WT(b + E / C, s[1][1]) * C : GT(b + (c ? w : -w) / C, s[0][1]) * C, A = Math.max(A, e);
			}
		}
		if (d) {
			let e = KT(D * C, h, g) / C;
			if (j = Math.max(j, e), o) {
				let e = 0;
				e = !c && !l || l && !c && f ? GT(y + D * C + O, o[1][0]) / C : WT(y + (l ? T : -T) * C + O, o[0][0]) / C, j = Math.max(j, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || l && !c && f ? WT(y + D * C, s[1][0]) / C : GT(y + (l ? T : -T) * C, s[0][0]) / C, j = Math.max(j, e);
			}
		}
	}
	T += T < 0 ? j : -j, w += w < 0 ? A : -A, i && (f ? E > D * C ? T = (qT(c, l) ? -w : w) / C : w = (qT(c, l) ? -T : T) * C : u ? (T = w / C, l = c) : (w = T * C, c = l));
	let M = c ? y + w : y, N = l ? b + T : b;
	return {
		width: x + (c ? -w : w),
		height: S + (l ? -T : T),
		x: a[0] * w * (c ? -1 : 1) + M,
		y: a[1] * T * (l ? -1 : 1) + N
	};
}
var YT = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, XT = {
	...YT,
	pointerX: 0,
	pointerY: 0,
	aspectRatio: 1
};
function ZT(e, t, n) {
	let r = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, o = e.measured.height ?? 0, s = n[0] * a, c = n[1] * o;
	return [[r - s, i - c], [r + a - s, i + o - c]];
}
function QT({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
	let a = My(e), o = {
		controlDirection: UT("bottom-right"),
		boundaries: {
			minWidth: 0,
			minHeight: 0,
			maxWidth: Number.MAX_VALUE,
			maxHeight: Number.MAX_VALUE
		},
		resizeDirection: void 0,
		keepAspectRatio: !1
	};
	function s({ controlPosition: e, boundaries: s, keepAspectRatio: c, resizeDirection: l, onResizeStart: u, onResize: d, onResizeEnd: f, shouldResize: p }) {
		let m = { ...YT }, h = { ...XT };
		o = {
			boundaries: s,
			resizeDirection: l,
			keepAspectRatio: c,
			controlDirection: UT(e)
		};
		let g, _ = null, v = [], y, b, x, S = !1, C = qy().on("start", (e) => {
			let { nodeLookup: r, transform: i, snapGrid: a, snapToGrid: o, nodeOrigin: s, paneDomNode: c } = n();
			if (g = r.get(t), !g) return;
			_ = c?.getBoundingClientRect() ?? null;
			let { xSnapped: l, ySnapped: d } = mw(e.sourceEvent, {
				transform: i,
				snapGrid: a,
				snapToGrid: o,
				containerBounds: _
			});
			m = {
				width: g.measured.width ?? 0,
				height: g.measured.height ?? 0,
				x: g.position.x ?? 0,
				y: g.position.y ?? 0
			}, h = {
				...m,
				pointerX: l,
				pointerY: d,
				aspectRatio: m.width / m.height
			}, y = void 0, b = rw(g.extent) ? g.extent : void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (y = r.get(g.parentId)), y && g.extent === "parent" && (b = [[0, 0], [y.measured.width, y.measured.height]]), v = [], x = void 0;
			for (let [e, n] of r) if (n.parentId === t && (v.push({
				id: e,
				position: { ...n.position },
				extent: n.extent
			}), n.extent === "parent" || n.expandParent)) {
				let e = ZT(n, g, n.origin ?? s);
				x = x ? [[Math.min(e[0][0], x[0][0]), Math.min(e[0][1], x[0][1])], [Math.max(e[1][0], x[1][0]), Math.max(e[1][1], x[1][1])]] : e;
			}
			u?.(e, { ...m });
		}).on("drag", (e) => {
			let { transform: t, snapGrid: i, snapToGrid: a, nodeOrigin: s } = n(), c = mw(e.sourceEvent, {
				transform: t,
				snapGrid: i,
				snapToGrid: a,
				containerBounds: _
			}), l = [];
			if (!g) return;
			let { x: u, y: f, width: C, height: w } = m, T = {}, E = g.origin ?? s, { width: D, height: O, x: k, y: A } = JT(h, o.controlDirection, c, o.boundaries, o.keepAspectRatio, E, b, x), j = D !== C, M = O !== w, N = k !== u && j, P = A !== f && M;
			if (!N && !P && !j && !M) return;
			if ((N || P || E[0] === 1 || E[1] === 1) && (T.x = N ? k : m.x, T.y = P ? A : m.y, m.x = T.x, m.y = T.y, v.length > 0)) {
				let e = k - u, t = A - f;
				for (let n of v) n.position = {
					x: n.position.x - e + E[0] * (D - C),
					y: n.position.y - t + E[1] * (O - w)
				}, l.push(n);
			}
			if ((j || M) && (T.width = j && (!o.resizeDirection || o.resizeDirection === "horizontal") ? D : m.width, T.height = M && (!o.resizeDirection || o.resizeDirection === "vertical") ? O : m.height, m.width = T.width, m.height = T.height), y && g.expandParent) {
				let e = E[0] * (T.width ?? 0);
				T.x && T.x < e && (m.x = e, h.x -= T.x - e);
				let t = E[1] * (T.height ?? 0);
				T.y && T.y < t && (m.y = t, h.y -= T.y - t);
			}
			let F = HT({
				width: m.width,
				prevWidth: C,
				height: m.height,
				prevHeight: w,
				affectsX: o.controlDirection.affectsX,
				affectsY: o.controlDirection.affectsY
			}), I = {
				...m,
				direction: F
			};
			p?.(e, I) !== !1 && (S = !0, d?.(e, I), r(T, l));
		}).on("end", (e) => {
			S &&= (f?.(e, { ...m }), i?.({ ...m }), !1);
		});
		a.call(C);
	}
	function c() {
		a.on(".drag", null);
	}
	return {
		update: s,
		destroy: c
	};
}
//#endregion
//#region builtin:esm-external-require-react
var $T = /* @__PURE__ */ Z(((t, n) => {
	n.exports = Object.prototype.hasOwnProperty.call(e, "module.exports") ? e["module.exports"] : { ...e };
})), eE = /* @__PURE__ */ Z(((e) => {
	var t = $T();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), tE = /* @__PURE__ */ Z(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = $T(), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), nE = /* @__PURE__ */ Z(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? eE() : tE();
})), rE = /* @__PURE__ */ Z(((e) => {
	var t = $T(), n = nE();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), iE = /* @__PURE__ */ Z(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = $T(), r = nE(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, o = n.useRef, s = n.useEffect, c = n.useMemo, l = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
			var d = o(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = c(function() {
				function e(e) {
					if (!a) {
						if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return s = t;
						}
						return s = e;
					}
					if (t = s, i(o, e)) return t;
					var n = r(e);
					return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
				}
				var a = !1, o, s, c = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, c === null ? void 0 : function() {
					return e(c());
				}];
			}, [
				t,
				n,
				r,
				u
			]);
			var p = a(e, d[0], d[1]);
			return s(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), l(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), aE = /* @__PURE__ */ pt((/* @__PURE__ */ Z(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? rE() : iE();
})))(), 1), oE = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e)),
		destroy: () => {
			n.clear();
		}
	}, o = t = e(r, i, a);
	return a;
}, sE = (e) => e ? oE(e) : oE, { useDebugValue: cE } = t, { useSyncExternalStoreWithSelector: lE } = aE.default, uE = (e) => e;
function dE(e, t = uE, n) {
	let r = lE(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
	return cE(r), r;
}
var fE = (e, t) => {
	let n = sE(e), r = (e, r = t) => dE(n, e, r);
	return Object.assign(r, n), r;
}, pE = (e, t) => e ? fE(e, t) : fE;
//#endregion
//#region ../../node_modules/@xyflow/react/node_modules/zustand/esm/shallow.mjs
function mE(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@xyflow/react/dist/esm/index.js
var hE = n(null), gE = hE.Provider, _E = uC.error001("react");
function vE(e, t) {
	let n = o(hE);
	if (n === null) throw Error(_E);
	return dE(n, e, t);
}
function yE() {
	let e = o(hE);
	if (e === null) throw Error(_E);
	return l(() => ({
		getState: e.getState,
		setState: e.setState,
		subscribe: e.subscribe
	}), [e]);
}
var bE = { display: "none" }, xE = {
	position: "absolute",
	width: 1,
	height: 1,
	margin: -1,
	border: 0,
	padding: 0,
	overflow: "hidden",
	clip: "rect(0px, 0px, 0px, 0px)",
	clipPath: "inset(100%)"
}, SE = "react-flow__node-desc", CE = "react-flow__edge-desc", wE = "react-flow__aria-live", TE = (e) => e.ariaLiveMessage, EE = (e) => e.ariaLabelConfig;
function DE({ rfId: e }) {
	let t = vE(TE);
	return x("div", {
		id: `${wE}-${e}`,
		"aria-live": "assertive",
		"aria-atomic": "true",
		style: xE,
		children: t
	});
}
function OE({ rfId: e, disableKeyboardA11y: t }) {
	let n = vE(EE);
	return S(b, { children: [
		x("div", {
			id: `${SE}-${e}`,
			style: bE,
			children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"]
		}),
		x("div", {
			id: `${CE}-${e}`,
			style: bE,
			children: n["edge.a11yDescription.default"]
		}),
		!t && x(DE, { rfId: e })
	] });
}
var kE = r(({ position: e = "top-left", children: t, className: n, style: r, ...i }, a) => {
	let o = `${e}`.split("-");
	return x("div", {
		className: D_([
			"react-flow__panel",
			n,
			...o
		]),
		style: r,
		ref: a,
		...i,
		children: t
	});
});
kE.displayName = "Panel";
var AE = `https://reactflow.dev${process.env.NODE_ENV === "production" ? "?utm_source=attribution" : "/attribution"}`;
function jE({ proOptions: e, position: t = "bottom-right" }) {
	return s(() => {
		process.env.NODE_ENV === "development" && fw("react");
	}, []), e?.hideAttribution ? null : x(kE, {
		position: t,
		className: "react-flow__attribution",
		"data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${AE}`,
		children: x("a", {
			href: AE,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "React Flow attribution",
			children: "React Flow"
		})
	});
}
var ME = (e) => {
	let t = [], n = [];
	for (let [, n] of e.nodeLookup) n.selected && t.push(n.internals.userNode);
	for (let [, t] of e.edgeLookup) t.selected && n.push(t);
	return {
		selectedNodes: t,
		selectedEdges: n
	};
}, NE = (e) => e.id;
function PE(e, t) {
	return mE(e.selectedNodes.map(NE), t.selectedNodes.map(NE)) && mE(e.selectedEdges.map(NE), t.selectedEdges.map(NE));
}
function FE({ onSelectionChange: e }) {
	let t = yE(), { selectedNodes: n, selectedEdges: r } = vE(ME, PE);
	return s(() => {
		let i = {
			nodes: n,
			edges: r
		};
		e?.(i), t.getState().onSelectionChangeHandlers.forEach((e) => e(i));
	}, [
		n,
		r,
		e
	]), null;
}
var IE = (e) => !!e.onSelectionChangeHandlers;
function LE({ onSelectionChange: e }) {
	let t = vE(IE);
	return e || t ? x(FE, { onSelectionChange: e }) : null;
}
var RE = [0, 0], zE = {
	x: 0,
	y: 0,
	zoom: 1
}, BE = [.../* @__PURE__ */ "nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode".split("."), "rfId"], VE = (e) => ({
	setNodes: e.setNodes,
	setEdges: e.setEdges,
	setMinZoom: e.setMinZoom,
	setMaxZoom: e.setMaxZoom,
	setTranslateExtent: e.setTranslateExtent,
	setNodeExtent: e.setNodeExtent,
	reset: e.reset,
	setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), HE = {
	translateExtent: dC,
	nodeOrigin: RE,
	minZoom: .5,
	maxZoom: 2,
	elementsSelectable: !0,
	noPanClassName: "nopan",
	rfId: "1"
};
function UE(e) {
	let { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: o, reset: c, setDefaultNodesAndEdges: l } = vE(VE, mE), u = yE();
	s(() => (l(e.defaultNodes, e.defaultEdges), () => {
		f.current = HE, c();
	}), []);
	let f = d(HE);
	return s(() => {
		for (let s of BE) {
			let c = e[s];
			c !== f.current[s] && e[s] !== void 0 && (s === "nodes" ? t(c) : s === "edges" ? n(c) : s === "minZoom" ? r(c) : s === "maxZoom" ? i(c) : s === "translateExtent" ? a(c) : s === "nodeExtent" ? o(c) : s === "ariaLabelConfig" ? u.setState({ ariaLabelConfig: lw(c) }) : s === "fitView" ? u.setState({ fitViewQueued: c }) : s === "fitViewOptions" ? u.setState({ fitViewOptions: c }) : u.setState({ [s]: c }));
		}
		f.current = e;
	}, BE.map((t) => e[t])), null;
}
function WE() {
	return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function GE(e) {
	let [t, n] = f(e === "system" ? null : e);
	return s(() => {
		if (e !== "system") {
			n(e);
			return;
		}
		let t = WE(), r = () => n(t?.matches ? "dark" : "light");
		return r(), t?.addEventListener("change", r), () => {
			t?.removeEventListener("change", r);
		};
	}, [e]), t === null ? WE()?.matches ? "dark" : "light" : t;
}
var KE = typeof document < "u" ? document : null;
function qE(e = null, t = {
	target: KE,
	actInsideInputWithModifier: !0
}) {
	let [n, r] = f(!1), i = d(!1), a = d(/* @__PURE__ */ new Set([])), [o, c] = l(() => {
		if (e !== null) {
			let t = (Array.isArray(e) ? e : [e]).filter((e) => typeof e == "string").map((e) => e.replace(/\+/g, "\n").replace("\n\n", "\n+").split("\n"));
			return [t, t.reduce((e, t) => e.concat(...t), [])];
		}
		return [[], []];
	}, [e]);
	return s(() => {
		let n = t?.target ?? KE, s = t?.actInsideInputWithModifier ?? !0;
		if (e !== null) {
			let e = (e) => {
				if (i.current = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, (!i.current || i.current && !s) && vw(e)) return !1;
				let n = YE(e.code, c);
				if (a.current.add(e[n]), JE(o, a.current, !1)) {
					let n = e.composedPath?.()?.[0] || e.target, a = n?.nodeName === "BUTTON" || n?.nodeName === "A";
					t.preventDefault !== !1 && (i.current || !a) && e.preventDefault(), r(!0);
				}
			}, l = (e) => {
				let t = YE(e.code, c);
				JE(o, a.current, !0) ? (r(!1), a.current.clear()) : a.current.delete(e[t]), e.key === "Meta" && a.current.clear(), i.current = !1;
			}, u = () => {
				a.current.clear(), r(!1);
			};
			return n?.addEventListener("keydown", e), n?.addEventListener("keyup", l), window.addEventListener("blur", u), window.addEventListener("contextmenu", u), () => {
				n?.removeEventListener("keydown", e), n?.removeEventListener("keyup", l), window.removeEventListener("blur", u), window.removeEventListener("contextmenu", u);
			};
		}
	}, [e, r]), n;
}
function JE(e, t, n) {
	return e.filter((e) => n || e.length === t.size).some((e) => e.every((e) => t.has(e)));
}
function YE(e, t) {
	return t.includes(e) ? "code" : "key";
}
var XE = () => {
	let e = yE();
	return l(() => ({
		zoomIn: async (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1.2, t) : !1;
		},
		zoomOut: async (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1 / 1.2, t) : !1;
		},
		zoomTo: async (t, n) => {
			let { panZoom: r } = e.getState();
			return r ? r.scaleTo(t, n) : !1;
		},
		getZoom: () => e.getState().transform[2],
		setViewport: async (t, n) => {
			let { transform: [r, i, a], panZoom: o } = e.getState();
			return o ? (await o.setViewport({
				x: t.x ?? r,
				y: t.y ?? i,
				zoom: t.zoom ?? a
			}, n), !0) : !1;
		},
		getViewport: () => {
			let [t, n, r] = e.getState().transform;
			return {
				x: t,
				y: n,
				zoom: r
			};
		},
		setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
		fitBounds: async (t, n) => {
			let { width: r, height: i, minZoom: a, maxZoom: o, panZoom: s } = e.getState(), c = tw(t, r, i, a, o, n?.padding ?? .1);
			return s ? (await s.setViewport(c, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0) : !1;
		},
		screenToFlowPosition: (t, n = {}) => {
			let { transform: r, snapGrid: i, snapToGrid: a, domNode: o } = e.getState();
			if (!o) return t;
			let { x: s, y: c } = o.getBoundingClientRect(), l = {
				x: t.x - s,
				y: t.y - c
			}, u = n.snapGrid ?? i;
			return XC(l, r, n.snapToGrid ?? a, u);
		},
		flowToScreenPosition: (t) => {
			let { transform: n, domNode: r } = e.getState();
			if (!r) return t;
			let { x: i, y: a } = r.getBoundingClientRect(), o = ZC(t, n);
			return {
				x: o.x + i,
				y: o.y + a
			};
		}
	}), []);
};
function ZE(e, t) {
	let n = [], r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e) if (t.type === "add") {
		i.push(t);
		continue;
	} else if (t.type === "remove" || t.type === "replace") r.set(t.id, [t]);
	else {
		let e = r.get(t.id);
		e ? e.push(t) : r.set(t.id, [t]);
	}
	for (let e of t) {
		let t = r.get(e.id);
		if (!t) {
			n.push(e);
			continue;
		}
		if (t[0].type === "remove") continue;
		if (t[0].type === "replace") {
			n.push({ ...t[0].item });
			continue;
		}
		let i = { ...e };
		for (let e of t) QE(e, i);
		n.push(i);
	}
	return i.length && i.forEach((e) => {
		e.index === void 0 ? n.push({ ...e.item }) : n.splice(e.index, 0, { ...e.item });
	}), n;
}
function QE(e, t) {
	switch (e.type) {
		case "select":
			t.selected = e.selected;
			break;
		case "position":
			e.position !== void 0 && (t.position = e.position), e.dragging !== void 0 && (t.dragging = e.dragging);
			break;
		case "dimensions": e.dimensions !== void 0 && (t.measured = { ...e.dimensions }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
	}
}
function $E(e, t) {
	return ZE(e, t);
}
function eD(e, t) {
	return ZE(e, t);
}
function tD(e, t) {
	return {
		id: e,
		type: "select",
		selected: t
	};
}
function nD(e, t = /* @__PURE__ */ new Set(), n = !1) {
	let r = [];
	for (let [i, a] of e) {
		let e = t.has(i);
		(a.selected !== void 0 || e) && a.selected !== e && (n && (a.selected = e), r.push(tD(a.id, e)));
	}
	return r;
}
function rD({ items: e = [], lookup: t }) {
	let n = [], r = new Map(e.map((e) => [e.id, e]));
	for (let [r, i] of e.entries()) {
		let e = t.get(i.id), a = e?.internals?.userNode ?? e;
		a !== void 0 && a !== i && n.push({
			id: i.id,
			item: i,
			type: "replace"
		}), a === void 0 && n.push({
			item: i,
			type: "add",
			index: r
		});
	}
	for (let [e] of t) r.get(e) === void 0 && n.push({
		id: e,
		type: "remove"
	});
	return n;
}
function iD(e) {
	return {
		id: e.id,
		type: "remove"
	};
}
var aD = JC("React Flow", "https://reactflow.dev/");
function oD(e, t, n = {}) {
	return jw(e, t, {
		...n,
		onError: n.onError ?? aD
	});
}
var sD = (e) => SC(e), cD = (e) => xC(e);
function lD(e) {
	return r(e);
}
var uD = typeof window < "u" ? c : s;
function dD(e) {
	let [t, n] = f(BigInt(0)), [r] = f(() => fD(() => n((e) => e + BigInt(1))));
	return uD(() => {
		let t = r.get();
		t.length && (e(t), r.reset());
	}, [t]), r;
}
function fD(e) {
	let t = [];
	return {
		get: () => t,
		reset: () => {
			t = [];
		},
		push: (n) => {
			t.push(n), e();
		}
	};
}
var pD = n(null);
function mD({ children: e }) {
	let t = yE(), n = dD(a((e) => {
		let { nodes: n = [], setNodes: r, hasDefaultNodes: i, onNodesChange: a, nodeLookup: o, fitViewQueued: s, onNodesChangeMiddlewareMap: c } = t.getState(), l = n;
		for (let t of e) l = typeof t == "function" ? t(l) : t;
		let u = rD({
			items: l,
			lookup: o
		});
		for (let e of c.values()) u = e(u);
		i && r(l), u.length > 0 ? a?.(u) : s && window.requestAnimationFrame(() => {
			let { fitViewQueued: e, nodes: n, setNodes: r } = t.getState();
			e && r(n);
		});
	}, [])), r = dD(a((e) => {
		let { edges: n = [], setEdges: r, hasDefaultEdges: i, onEdgesChange: a, edgeLookup: o } = t.getState(), s = n;
		for (let t of e) s = typeof t == "function" ? t(s) : t;
		i ? r(s) : a && a(rD({
			items: s,
			lookup: o
		}));
	}, [])), i = l(() => ({
		nodeQueue: n,
		edgeQueue: r
	}), []);
	return x(pD.Provider, {
		value: i,
		children: e
	});
}
function hD() {
	let e = o(pD);
	if (!e) throw Error("useBatchContext must be used within a BatchProvider");
	return e;
}
var gD = (e) => !!e.panZoom;
function _D() {
	let e = XE(), t = yE(), n = hD(), r = vE(gD), i = l(() => {
		let e = (e) => t.getState().nodeLookup.get(e), r = (e) => {
			n.nodeQueue.push(e);
		}, i = (e) => {
			n.edgeQueue.push(e);
		}, a = (e) => {
			let { nodeLookup: n, nodeOrigin: r } = t.getState(), i = sD(e) ? e : n.get(e.id), a = i.parentId ? ow(i.position, i.measured, i.parentId, n, r) : i.position;
			return VC({
				...i,
				position: a,
				width: i.measured?.width ?? i.width,
				height: i.measured?.height ?? i.height
			});
		}, o = (e, t, n = { replace: !1 }) => {
			r((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == "function" ? t(r) : t;
					return n.replace && sD(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		}, s = (e, t, n = { replace: !1 }) => {
			i((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == "function" ? t(r) : t;
					return n.replace && cD(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		};
		return {
			getNodes: () => t.getState().nodes.map((e) => ({ ...e })),
			getNode: (t) => e(t)?.internals.userNode,
			getInternalNode: e,
			getEdges: () => {
				let { edges: e = [] } = t.getState();
				return e.map((e) => ({ ...e }));
			},
			getEdge: (e) => t.getState().edgeLookup.get(e),
			setNodes: r,
			setEdges: i,
			addNodes: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.nodeQueue.push((e) => [...e, ...t]);
			},
			addEdges: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.edgeQueue.push((e) => [...e, ...t]);
			},
			toObject: () => {
				let { nodes: e = [], edges: n = [], transform: r } = t.getState(), [i, a, o] = r;
				return {
					nodes: e.map((e) => ({ ...e })),
					edges: n.map((e) => ({ ...e })),
					viewport: {
						x: i,
						y: a,
						zoom: o
					}
				};
			},
			deleteElements: async ({ nodes: e = [], edges: n = [] }) => {
				let { nodes: r, edges: i, onNodesDelete: a, onEdgesDelete: o, triggerNodeChanges: s, triggerEdgeChanges: c, onDelete: l, onBeforeDelete: u } = t.getState(), { nodes: d, edges: f } = await MC({
					nodesToRemove: e,
					edgesToRemove: n,
					nodes: r,
					edges: i,
					onBeforeDelete: u
				}), p = f.length > 0, m = d.length > 0;
				if (p) {
					let e = f.map(iD);
					o?.(f), c(e);
				}
				if (m) {
					let e = d.map(iD);
					a?.(d), s(e);
				}
				return (m || p) && l?.({
					nodes: d,
					edges: f
				}), {
					deletedNodes: d,
					deletedEdges: f
				};
			},
			getIntersectingNodes: (e, n = !0, r) => {
				let i = KC(e), o = i ? e : a(e), s = r !== void 0;
				return o ? (r || t.getState().nodes).filter((r) => {
					let a = t.getState().nodeLookup.get(r.id);
					if (a && !i && (r.id === e.id || !a.internals.positionAbsolute)) return !1;
					let c = VC(s ? r : a), l = GC(c, o);
					return n && l > 0 || l >= c.width * c.height || l >= o.width * o.height;
				}) : [];
			},
			isNodeIntersecting: (e, t, n = !0) => {
				let r = KC(e) ? e : a(e);
				if (!r) return !1;
				let i = GC(r, t);
				return n && i > 0 || i >= t.width * t.height || i >= r.width * r.height;
			},
			updateNode: o,
			updateNodeData: (e, t, n = { replace: !1 }) => {
				o(e, (e) => {
					let r = typeof t == "function" ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			updateEdge: s,
			updateEdgeData: (e, t, n = { replace: !1 }) => {
				s(e, (e) => {
					let r = typeof t == "function" ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			getNodesBounds: (e) => {
				let { nodeLookup: n, nodeOrigin: r } = t.getState();
				return TC(e, {
					nodeLookup: n,
					nodeOrigin: r
				});
			},
			getHandleConnections: ({ type: e, id: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}-${e}${n ? `-${n}` : ""}`)?.values() ?? []),
			getNodeConnections: ({ type: e, handleId: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}${e ? n ? `-${e}-${n}` : `-${e}` : ""}`)?.values() ?? []),
			fitView: async (e) => {
				let r = t.getState().fitViewResolver ?? cw();
				return t.setState({
					fitViewQueued: !0,
					fitViewOptions: e,
					fitViewResolver: r
				}), n.nodeQueue.push((e) => [...e]), r.promise;
			}
		};
	}, []);
	return l(() => ({
		...i,
		...e,
		viewportInitialized: r
	}), [r]);
}
var vD = (e) => e.selected, yD = typeof window < "u" ? window : void 0;
function bD({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
	let n = yE(), { deleteElements: r } = _D(), i = qE(e, { actInsideInputWithModifier: !1 }), a = qE(t, { target: yD });
	s(() => {
		if (i) {
			let { edges: e, nodes: t } = n.getState();
			r({
				nodes: t.filter(vD),
				edges: e.filter(vD)
			}), n.setState({ nodesSelectionActive: !1 });
		}
	}, [i]), s(() => {
		n.setState({ multiSelectionActive: a });
	}, [a]);
}
function xD(e) {
	let t = yE();
	s(() => {
		let n = () => {
			if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
			let n = hw(e.current);
			(n.height === 0 || n.width === 0) && t.getState().onError?.("004", uC.error004()), t.setState({
				width: n.width || 500,
				height: n.height || 500
			});
		};
		if (e.current) {
			n(), window.addEventListener("resize", n);
			let t = new ResizeObserver(() => n());
			return t.observe(e.current), () => {
				window.removeEventListener("resize", n), t && e.current && t.unobserve(e.current);
			};
		}
	}, []);
}
var SD = {
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0
}, CD = (e) => ({
	userSelectionActive: e.userSelectionActive,
	lib: e.lib,
	connectionInProgress: e.connection.inProgress
});
function wD({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panActivationKeyPressed: i, panOnScrollSpeed: o = .5, panOnScrollMode: c = hC.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: p, minZoom: m, maxZoom: h, zoomActivationKeyCode: g, preventScrolling: _ = !0, children: v, noWheelClassName: y, noPanClassName: b, onViewportChange: S, isControlledViewport: C, paneClickDistance: w, selectionOnDrag: T }) {
	let E = yE(), D = d(null), { userSelectionActive: O, lib: k, connectionInProgress: A } = vE(CD, mE), j = qE(g), M = d();
	xD(D);
	let N = a((e) => {
		S?.({
			x: e[0],
			y: e[1],
			zoom: e[2]
		}), C || E.setState({ transform: e });
	}, [S, C]);
	return s(() => {
		if (D.current) {
			M.current = BT({
				domNode: D.current,
				minZoom: m,
				maxZoom: h,
				translateExtent: p,
				viewport: f,
				onDraggingChange: (e) => E.setState((t) => t.paneDragging === e ? t : { paneDragging: e }),
				onPanZoomStart: (e, t) => {
					let { onViewportChangeStart: n, onMoveStart: r } = E.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoom: (e, t) => {
					let { onViewportChange: n, onMove: r } = E.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoomEnd: (e, t) => {
					let { onViewportChangeEnd: n, onMoveEnd: r } = E.getState();
					r?.(e, t), n?.(t);
				}
			});
			let { x: e, y: t, zoom: n } = M.current.getViewport();
			return E.setState({
				panZoom: M.current,
				transform: [
					e,
					t,
					n
				],
				domNode: D.current.closest(".react-flow")
			}), () => {
				M.current?.destroy();
			};
		}
	}, []), s(() => {
		M.current?.update({
			onPaneContextMenu: e,
			zoomOnScroll: t,
			zoomOnPinch: n,
			panOnScroll: r,
			panActivationKeyPressed: i,
			panOnScrollSpeed: o,
			panOnScrollMode: c,
			zoomOnDoubleClick: l,
			panOnDrag: u,
			zoomActivationKeyPressed: j,
			preventScrolling: _,
			noPanClassName: b,
			userSelectionActive: O,
			noWheelClassName: y,
			lib: k,
			onTransformChange: N,
			connectionInProgress: A,
			selectionOnDrag: T,
			paneClickDistance: w
		});
	}, [
		e,
		t,
		n,
		r,
		i,
		o,
		c,
		l,
		u,
		j,
		_,
		b,
		O,
		y,
		k,
		N,
		A,
		T,
		w
	]), x("div", {
		className: "react-flow__renderer",
		ref: D,
		style: SD,
		children: v
	});
}
var TD = (e) => ({
	userSelectionActive: e.userSelectionActive,
	userSelectionRect: e.userSelectionRect
});
function ED() {
	let { userSelectionActive: e, userSelectionRect: t } = vE(TD, mE);
	return e && t ? x("div", {
		className: "react-flow__selection react-flow__container",
		style: {
			width: t.width,
			height: t.height,
			transform: `translate(${t.x}px, ${t.y}px)`
		}
	}) : null;
}
var DD = (e, t) => (n) => {
	n.target === t.current && e?.(n);
}, OD = (e) => ({
	userSelectionActive: e.userSelectionActive,
	elementsSelectable: e.elementsSelectable,
	dragging: e.paneDragging,
	panBy: e.panBy,
	autoPanSpeed: e.autoPanSpeed
});
function kD({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = gC.Full, panOnDrag: r, autoPanOnSelection: i, paneClickDistance: a, selectionOnDrag: o, onSelectionStart: c, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: f, onPaneScroll: p, onPaneMouseEnter: m, onPaneMouseMove: h, onPaneMouseLeave: g, children: _ }) {
	let v = d(0), y = yE(), { userSelectionActive: b, elementsSelectable: C, dragging: w, panBy: T, autoPanSpeed: E } = vE(OD, mE), D = C && (e || b), O = d(null), k = d(), A = d(/* @__PURE__ */ new Set()), j = d(/* @__PURE__ */ new Set()), M = d(!1), N = d(!1), P = d({
		x: 0,
		y: 0
	}), F = d(!1), I = (e) => {
		if (N.current || M.current || y.getState().connection.inProgress) {
			N.current = !1, M.current = !1;
			return;
		}
		u?.(e), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
	}, L = (e) => {
		if (Array.isArray(r) && r?.includes(2)) {
			e.preventDefault();
			return;
		}
		f?.(e);
	}, ee = p ? (e) => p(e) : void 0, R = (e) => {
		N.current &&= (e.stopPropagation(), !1);
	}, z = (n) => {
		if (n.pointerType === "touch" && r !== !1 && !t) return;
		let { domNode: i, transform: a } = y.getState();
		if (k.current = i?.getBoundingClientRect(), !k.current) return;
		let s = n.target === O.current;
		if (!s && n.target.closest(".nokey") || !e || !(o && s || t) || n.button !== 0 || !n.isPrimary) return;
		n.target?.setPointerCapture?.(n.pointerId), N.current = !1;
		let { x: c, y: l } = bw(n.nativeEvent, k.current), u = XC({
			x: c,
			y: l
		}, a);
		y.setState({ userSelectionRect: {
			width: 0,
			height: 0,
			startX: u.x,
			startY: u.y,
			x: c,
			y: l
		} }), s || (n.stopPropagation(), n.preventDefault());
	};
	function B(e, t) {
		let { userSelectionRect: r } = y.getState();
		if (!r) return;
		let { transform: i, nodeLookup: a, edgeLookup: o, connectionLookup: s, triggerNodeChanges: c, triggerEdgeChanges: l, defaultEdgeOptions: u } = y.getState(), d = {
			x: r.startX,
			y: r.startY
		}, { x: f, y: p } = ZC(d, i), m = {
			startX: d.x,
			startY: d.y,
			x: e < f ? e : f,
			y: t < p ? t : p,
			width: Math.abs(e - f),
			height: Math.abs(t - p)
		}, h = A.current, g = j.current;
		A.current = new Set(DC(a, m, i, n === gC.Partial, !0).map((e) => e.id)), j.current = /* @__PURE__ */ new Set();
		let _ = u?.selectable ?? !0;
		for (let e of A.current) {
			let t = s.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = o.get(e);
				t && (t.selectable ?? _) && j.current.add(e);
			}
		}
		sw(h, A.current) || c(nD(a, A.current, !0)), sw(g, j.current) || l(nD(o, j.current)), y.setState({
			userSelectionRect: m,
			userSelectionActive: !0,
			nodesSelectionActive: !1
		});
	}
	function V() {
		if (!i || !k.current) return;
		let [e, t] = LC(P.current, k.current, E);
		T({
			x: e,
			y: t
		}).then((e) => {
			if (!N.current || !e) {
				v.current = requestAnimationFrame(V);
				return;
			}
			let { x: t, y: n } = P.current;
			B(t, n), v.current = requestAnimationFrame(V);
		});
	}
	let H = () => {
		cancelAnimationFrame(v.current), v.current = 0, F.current = !1;
	};
	s(() => () => H(), []);
	let te = (e) => {
		let { userSelectionRect: n, transform: r, resetSelectedElements: i } = y.getState();
		if (!k.current || !n) return;
		let { x: o, y: s } = bw(e.nativeEvent, k.current);
		P.current = {
			x: o,
			y: s
		};
		let l = ZC({
			x: n.startX,
			y: n.startY
		}, r);
		if (!N.current) {
			let n = t ? 0 : a;
			if (Math.hypot(o - l.x, s - l.y) <= n) return;
			i(), c?.(e);
		}
		N.current = !0, F.current ||= (V(), !0), B(o, s);
	}, U = (e) => {
		if (!D) {
			e.target === O.current && y.getState().connection.inProgress && (M.current = !0);
			return;
		}
		e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !b && e.target === O.current && y.getState().userSelectionRect && I?.(e), y.setState({
			userSelectionActive: !1,
			userSelectionRect: null
		}), N.current && (l?.(e), y.setState({ nodesSelectionActive: A.current.size > 0 })), H());
	}, ne = (e) => {
		e.target?.releasePointerCapture?.(e.pointerId), H();
	}, W = r === !0 || Array.isArray(r) && r.includes(0);
	return S("div", {
		className: D_(["react-flow__pane", {
			draggable: W,
			dragging: w,
			selection: e
		}]),
		onClick: D ? void 0 : DD(I, O),
		onContextMenu: DD(L, O),
		onWheel: DD(ee, O),
		onPointerEnter: D ? void 0 : m,
		onPointerMove: D ? te : h,
		onPointerUp: U,
		onPointerCancel: D ? ne : void 0,
		onPointerDownCapture: D ? z : void 0,
		onClickCapture: D ? R : void 0,
		onPointerLeave: g,
		ref: O,
		style: SD,
		children: [_, x(ED, {})]
	});
}
function AD({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
	let { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: o, nodeLookup: s, onError: c } = t.getState(), l = s.get(e);
	if (!l) {
		c?.("012", uC.error012(e));
		return;
	}
	t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && o) && (a({
		nodes: [l],
		edges: []
	}), requestAnimationFrame(() => r?.current?.blur())) : i([e]);
}
function jD({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: a, nodeClickDistance: o }) {
	let c = yE(), [l, u] = f(!1), p = d();
	return s(() => {
		if (!t) return p.current = hT({
			getStoreItems: () => c.getState(),
			onNodeMouseDown: (t) => {
				AD({
					id: t,
					store: c,
					nodeRef: e
				});
			},
			onDragStart: () => {
				u(!0);
			},
			onDragStop: () => {
				u(!1);
			}
		}), () => {
			p.current?.destroy(), p.current = void 0;
		};
	}, [
		t,
		c,
		e
	]), s(() => {
		!t && e.current && p.current && p.current.update({
			noDragClassName: n,
			handleSelector: r,
			domNode: e.current,
			isSelectable: a,
			nodeId: i,
			nodeClickDistance: o
		});
	}, [
		n,
		r,
		t,
		a,
		e,
		i,
		o
	]), l;
}
var MD = (e) => (t) => t.selected && (t.draggable || e && t.draggable === void 0);
function ND() {
	let e = yE();
	return a((t) => {
		let { nodeExtent: n, snapToGrid: r, snapGrid: i, nodesDraggable: a, onError: o, updateNodePositions: s, nodeLookup: c, nodeOrigin: l } = e.getState(), u = /* @__PURE__ */ new Map(), d = MD(a), f = r ? i[0] : 5, p = r ? i[1] : 5, m = t.direction.x * f * t.factor, h = t.direction.y * p * t.factor;
		for (let [, e] of c) {
			if (!d(e)) continue;
			let t = {
				x: e.internals.positionAbsolute.x + m,
				y: e.internals.positionAbsolute.y + h
			};
			r && (t = YC(t, i));
			let { position: a, positionAbsolute: s } = jC({
				nodeId: e.id,
				nextPosition: t,
				nodeLookup: c,
				nodeExtent: n,
				nodeOrigin: l,
				onError: o
			});
			e.position = a, e.internals.positionAbsolute = s, u.set(e.id, e);
		}
		s(u);
	}, []);
}
var PD = n(null), FD = PD.Provider;
PD.Consumer;
var ID = () => o(PD), LD = (e) => ({
	connectOnClick: e.connectOnClick,
	noPanClassName: e.noPanClassName,
	rfId: e.rfId
}), RD = n(null);
function zD({ children: e }) {
	let t = vE(LD, mE);
	return x(RD.Provider, {
		value: t,
		children: e
	});
}
function BD() {
	let e = o(RD);
	if (!e) throw Error("useHandleConfig must be used within a HandleConfigProvider");
	return e;
}
var VD = {
	connectingFrom: !1,
	connectingTo: !1,
	clickConnecting: !1,
	isPossibleEndHandle: !0,
	connectionInProcess: !1,
	clickConnectionInProcess: !1,
	valid: !1
}, HD = (e, t, n) => (r) => {
	let { connectionClickStartHandle: i, connectionMode: a, connection: o } = r, { fromHandle: s, toHandle: c, isValid: l } = o;
	if (!s && !i) return VD;
	let u = c?.nodeId === e && c?.id === t && c?.type === n;
	return {
		connectingFrom: s?.nodeId === e && s?.id === t && s?.type === n,
		connectingTo: u,
		clickConnecting: i?.nodeId === e && i?.id === t && i?.type === n,
		isPossibleEndHandle: a === mC.Strict ? s?.type !== n : e !== s?.nodeId || t !== s?.id,
		connectionInProcess: !!s,
		clickConnectionInProcess: !!i,
		valid: u && l
	};
};
function UD({ type: e = "source", position: t = $.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: o, onConnect: s, children: c, className: l, onMouseDown: u, onTouchStart: d, ...f }, p) {
	let m = o || null, h = e === "target", g = yE(), _ = ID(), { connectOnClick: v, noPanClassName: y, rfId: b } = BD(), { connectingFrom: S, connectingTo: C, clickConnecting: w, isPossibleEndHandle: T, connectionInProcess: E, clickConnectionInProcess: D, valid: O } = vE(HD(_, m, e), mE);
	_ || g.getState().onError?.("010", uC.error010());
	let k = (e) => {
		let { defaultEdgeOptions: t, onConnect: n, hasDefaultEdges: r } = g.getState(), i = {
			...t,
			...e
		};
		if (r) {
			let { edges: e, setEdges: t, onError: n } = g.getState();
			t(oD(i, e, { onError: n }));
		}
		n?.(i), s?.(i);
	}, A = (e) => {
		if (!_) return;
		let t = yw(e.nativeEvent);
		if (i && (t && e.button === 0 || !t)) {
			let t = g.getState();
			TT.onPointerDown(e.nativeEvent, {
				handleDomNode: e.currentTarget,
				autoPanOnConnect: t.autoPanOnConnect,
				connectionMode: t.connectionMode,
				connectionRadius: t.connectionRadius,
				domNode: t.domNode,
				nodeLookup: t.nodeLookup,
				lib: t.lib,
				isTarget: h,
				handleId: m,
				nodeId: _,
				flowId: t.rfId,
				panBy: t.panBy,
				cancelConnection: t.cancelConnection,
				onConnectStart: t.onConnectStart,
				onConnectEnd: (...e) => g.getState().onConnectEnd?.(...e),
				updateConnection: t.updateConnection,
				onConnect: k,
				isValidConnection: n || ((...e) => g.getState().isValidConnection?.(...e) ?? !0),
				getTransform: () => g.getState().transform,
				getFromHandle: () => g.getState().connection.fromHandle,
				autoPanSpeed: t.autoPanSpeed,
				dragThreshold: t.connectionDragThreshold
			});
		}
		t ? u?.(e) : d?.(e);
	};
	return x("div", {
		"data-handleid": m,
		"data-nodeid": _,
		"data-handlepos": t,
		"data-id": `${b}-${_}-${m}-${e}`,
		className: D_([
			"react-flow__handle",
			`react-flow__handle-${t}`,
			"nodrag",
			y,
			l,
			{
				source: !h,
				target: h,
				connectable: r,
				connectablestart: i,
				connectableend: a,
				clickconnecting: w,
				connectingfrom: S,
				connectingto: C,
				valid: O,
				connectionindicator: r && (!E || T) && (E || D ? a : i)
			}
		]),
		onMouseDown: A,
		onTouchStart: A,
		onClick: v ? (t) => {
			let { onClickConnectStart: r, onClickConnectEnd: a, connectionClickStartHandle: o, connectionMode: s, isValidConnection: c, lib: l, rfId: u, nodeLookup: d, connection: f } = g.getState();
			if (!_ || !o && !i) return;
			if (!o) {
				r?.(t.nativeEvent, {
					nodeId: _,
					handleId: m,
					handleType: e
				}), g.setState({ connectionClickStartHandle: {
					nodeId: _,
					type: e,
					id: m
				} });
				return;
			}
			let p = gw(t.target), h = n || c, { connection: v, isValid: y } = TT.isValid(t.nativeEvent, {
				handle: {
					nodeId: _,
					id: m,
					type: e
				},
				connectionMode: s,
				fromNodeId: o.nodeId,
				fromHandleId: o.id || null,
				fromType: o.type,
				isValidConnection: h,
				flowId: u,
				doc: p,
				lib: l,
				nodeLookup: d
			});
			y && v && k(v);
			let b = structuredClone(f);
			delete b.inProgress, b.toPosition = b.toHandle ? b.toHandle.position : null, a?.(t, b), g.setState({ connectionClickStartHandle: null });
		} : void 0,
		ref: p,
		...f,
		children: c
	});
}
var WD = i(lD(UD));
function GD({ data: e, isConnectable: t, sourcePosition: n = $.Bottom }) {
	return S(b, { children: [e?.label, x(WD, {
		type: "source",
		position: n,
		isConnectable: t
	})] });
}
function KD({ data: e, isConnectable: t, targetPosition: n = $.Top, sourcePosition: r = $.Bottom }) {
	return S(b, { children: [
		x(WD, {
			type: "target",
			position: n,
			isConnectable: t
		}),
		e?.label,
		x(WD, {
			type: "source",
			position: r,
			isConnectable: t
		})
	] });
}
function qD() {
	return null;
}
function JD({ data: e, isConnectable: t, targetPosition: n = $.Top }) {
	return S(b, { children: [x(WD, {
		type: "target",
		position: n,
		isConnectable: t
	}), e?.label] });
}
var YD = {
	ArrowUp: {
		x: 0,
		y: -1
	},
	ArrowDown: {
		x: 0,
		y: 1
	},
	ArrowLeft: {
		x: -1,
		y: 0
	},
	ArrowRight: {
		x: 1,
		y: 0
	}
}, XD = {
	input: GD,
	default: KD,
	output: JD,
	group: qD
};
function ZD(e) {
	return e.internals.handleBounds === void 0 ? {
		width: e.width ?? e.initialWidth ?? e.style?.width,
		height: e.height ?? e.initialHeight ?? e.style?.height
	} : {
		width: e.width ?? e.style?.width,
		height: e.height ?? e.style?.height
	};
}
var QD = (e) => {
	let { width: t, height: n, x: r, y: i } = EC(e.nodeLookup, { filter: (e) => !!e.selected });
	return {
		width: qC(t) ? t : null,
		height: qC(n) ? n : null,
		userSelectionActive: e.userSelectionActive,
		transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
	};
};
function $D({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
	let r = yE(), { width: i, height: a, transformString: o, userSelectionActive: c } = vE(QD, mE), l = ND(), u = d(null);
	s(() => {
		n || u.current?.focus({ preventScroll: !0 });
	}, [n]);
	let f = !c && i !== null && a !== null;
	if (jD({
		nodeRef: u,
		disabled: !f
	}), !f) return null;
	let p = e ? (t) => {
		e(t, r.getState().nodes.filter((e) => e.selected));
	} : void 0;
	return x("div", {
		className: D_([
			"react-flow__nodesselection",
			"react-flow__container",
			t
		]),
		style: { transform: o },
		children: x("div", {
			ref: u,
			className: "react-flow__nodesselection-rect",
			onContextMenu: p,
			tabIndex: n ? void 0 : -1,
			onKeyDown: n ? void 0 : (e) => {
				Object.prototype.hasOwnProperty.call(YD, e.key) && (e.preventDefault(), l({
					direction: YD[e.key],
					factor: e.shiftKey ? 4 : 1
				}));
			},
			style: {
				width: i,
				height: a
			}
		})
	});
}
var eO = typeof window < "u" ? window : void 0, tO = (e) => ({
	nodesSelectionActive: e.nodesSelectionActive,
	userSelectionActive: e.userSelectionActive
});
function nO({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, paneClickDistance: s, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: u, selectionMode: d, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: m, panActivationKeyCode: h, zoomActivationKeyCode: g, elementsSelectable: _, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: b, panOnScrollSpeed: C, panOnScrollMode: w, zoomOnDoubleClick: T, panOnDrag: E, autoPanOnSelection: D, defaultViewport: O, translateExtent: k, minZoom: A, maxZoom: j, preventScrolling: M, onSelectionContextMenu: N, noWheelClassName: P, noPanClassName: F, disableKeyboardA11y: I, onViewportChange: L, isControlledViewport: ee }) {
	let { nodesSelectionActive: R, userSelectionActive: z } = vE(tO, mE), B = qE(l, { target: eO }), V = qE(h, { target: eO }), H = V || E, te = V || b, U = u && H !== !0, ne = B || z || U;
	return bD({
		deleteKeyCode: c,
		multiSelectionKeyCode: m
	}), x(wD, {
		onPaneContextMenu: a,
		elementsSelectable: _,
		zoomOnScroll: v,
		zoomOnPinch: y,
		panOnScroll: te,
		panActivationKeyPressed: V,
		panOnScrollSpeed: C,
		panOnScrollMode: w,
		zoomOnDoubleClick: T,
		panOnDrag: !B && H,
		defaultViewport: O,
		translateExtent: k,
		minZoom: A,
		maxZoom: j,
		zoomActivationKeyCode: g,
		preventScrolling: M,
		noWheelClassName: P,
		noPanClassName: F,
		onViewportChange: L,
		isControlledViewport: ee,
		paneClickDistance: s,
		selectionOnDrag: U,
		children: S(kD, {
			onSelectionStart: f,
			onSelectionEnd: p,
			onPaneClick: t,
			onPaneMouseEnter: n,
			onPaneMouseMove: r,
			onPaneMouseLeave: i,
			onPaneContextMenu: a,
			onPaneScroll: o,
			panOnDrag: H,
			autoPanOnSelection: D,
			isSelecting: !!ne,
			selectionMode: d,
			selectionKeyPressed: B,
			paneClickDistance: s,
			selectionOnDrag: U,
			children: [e, R && x($D, {
				onSelectionContextMenu: N,
				noPanClassName: F,
				disableKeyboardA11y: I
			})]
		})
	});
}
nO.displayName = "FlowRenderer";
var rO = i(nO), iO = (e) => (t) => e ? DC(t.nodeLookup, {
	x: 0,
	y: 0,
	width: t.width,
	height: t.height
}, t.transform, !0).map((e) => e.id) : Array.from(t.nodeLookup.keys());
function aO(e) {
	return vE(a(iO(e), [e]), mE);
}
var oO = (e) => e.updateNodeInternals;
function sO() {
	let e = vE(oO), [t] = f(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((t) => {
		let n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = e.target.getAttribute("data-id");
			n.set(t, {
				id: t,
				nodeElement: e.target,
				force: !0
			});
		}), e(n);
	}));
	return s(() => () => {
		t?.disconnect();
	}, [t]), t;
}
function cO({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
	let i = yE(), a = d(null), o = d(null), c = d(e.sourcePosition), l = d(e.targetPosition), u = d(t), f = n && !!e.internals.handleBounds;
	return s(() => {
		a.current && !e.hidden && (!f || o.current !== a.current) && (o.current && r?.unobserve(o.current), r?.observe(a.current), o.current = a.current);
	}, [f, e.hidden]), s(() => () => {
		o.current &&= (r?.unobserve(o.current), null);
	}, []), s(() => {
		if (a.current) {
			let n = u.current !== t, r = c.current !== e.sourcePosition, o = l.current !== e.targetPosition;
			(n || r || o) && (u.current = t, c.current = e.sourcePosition, l.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, {
				id: e.id,
				nodeElement: a.current,
				force: !0
			}]])));
		}
	}, [
		e.id,
		t,
		e.sourcePosition,
		e.targetPosition
	]), a;
}
function lO({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: i, onContextMenu: a, onDoubleClick: o, nodesDraggable: s, elementsSelectable: c, nodesConnectable: l, nodesFocusable: u, resizeObserver: d, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: m, rfId: h, nodeTypes: g, nodeClickDistance: _, onError: v }) {
	let { node: y, internals: b, isParent: S } = vE((t) => {
		let n = t.nodeLookup.get(e), r = t.parentLookup.has(e);
		return {
			node: n,
			internals: n.internals,
			isParent: r
		};
	}, mE), C = y.type || "default", w = g?.[C] || XD[C];
	w === void 0 && (v?.("003", uC.error003(C)), C = "default", w = g?.default || XD.default);
	let T = !!(y.draggable || s && y.draggable === void 0), E = !!(y.selectable || c && y.selectable === void 0), D = !!(y.connectable || l && y.connectable === void 0), O = !!(y.focusable || u && y.focusable === void 0), k = yE(), A = aw(y), j = cO({
		node: y,
		nodeType: C,
		hasDimensions: A,
		resizeObserver: d
	}), M = jD({
		nodeRef: j,
		disabled: y.hidden || !T,
		noDragClassName: f,
		handleSelector: y.dragHandle,
		nodeId: e,
		isSelectable: E,
		nodeClickDistance: _
	}), N = ND();
	if (y.hidden) return null;
	let P = iw(y), F = ZD(y), I = E || T || t || n || r || i, L = n ? (e) => n(e, { ...b.userNode }) : void 0, ee = r ? (e) => r(e, { ...b.userNode }) : void 0, R = i ? (e) => i(e, { ...b.userNode }) : void 0, z = a ? (e) => a(e, { ...b.userNode }) : void 0, B = o ? (e) => o(e, { ...b.userNode }) : void 0, V = (n) => {
		let { selectNodesOnDrag: r, nodeDragThreshold: i } = k.getState();
		E && (!r || !T || i > 0) && AD({
			id: e,
			store: k,
			nodeRef: j
		}), t && t(n, { ...b.userNode });
	}, H = (t) => {
		if (!(vw(t.nativeEvent) || m)) {
			if (fC.includes(t.key) && E) {
				let n = t.key === "Escape";
				AD({
					id: e,
					store: k,
					unselect: n,
					nodeRef: j
				});
			} else if (T && y.selected && Object.prototype.hasOwnProperty.call(YD, t.key)) {
				t.preventDefault();
				let { ariaLabelConfig: e } = k.getState();
				k.setState({ ariaLiveMessage: e["node.a11yDescription.ariaLiveMessage"]({
					direction: t.key.replace("Arrow", "").toLowerCase(),
					x: ~~b.positionAbsolute.x,
					y: ~~b.positionAbsolute.y
				}) }), N({
					direction: YD[t.key],
					factor: t.shiftKey ? 4 : 1
				});
			}
		}
	}, te = () => {
		if (m || !j.current?.matches(":focus-visible")) return;
		let { transform: t, width: n, height: r, autoPanOnNodeFocus: i, setCenter: a } = k.getState();
		i && (DC(/* @__PURE__ */ new Map([[e, y]]), {
			x: 0,
			y: 0,
			width: n,
			height: r
		}, t, !0).length > 0 || a(y.position.x + P.width / 2, y.position.y + P.height / 2, { zoom: t[2] }));
	};
	return x("div", {
		className: D_([
			"react-flow__node",
			`react-flow__node-${C}`,
			{ [p]: T },
			y.className,
			{
				selected: y.selected,
				selectable: E,
				parent: S,
				draggable: T,
				dragging: M
			}
		]),
		ref: j,
		style: {
			zIndex: b.z,
			transform: `translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,
			pointerEvents: I ? "all" : "none",
			visibility: A ? "visible" : "hidden",
			...y.style,
			...F
		},
		"data-id": e,
		"data-testid": `rf__node-${e}`,
		onMouseEnter: L,
		onMouseMove: ee,
		onMouseLeave: R,
		onContextMenu: z,
		onClick: V,
		onDoubleClick: B,
		onKeyDown: O ? H : void 0,
		tabIndex: O ? 0 : void 0,
		onFocus: O ? te : void 0,
		role: y.ariaRole ?? (O ? "group" : void 0),
		"aria-roledescription": "node",
		"aria-describedby": m ? void 0 : `${SE}-${h}`,
		"aria-label": y.ariaLabel,
		...y.domAttributes,
		children: x(FD, {
			value: e,
			children: x(w, {
				id: e,
				data: y.data,
				type: C,
				positionAbsoluteX: b.positionAbsolute.x,
				positionAbsoluteY: b.positionAbsolute.y,
				selected: y.selected ?? !1,
				selectable: E,
				draggable: T,
				deletable: y.deletable ?? !0,
				isConnectable: D,
				sourcePosition: y.sourcePosition,
				targetPosition: y.targetPosition,
				dragging: M,
				dragHandle: y.dragHandle,
				zIndex: b.z,
				parentId: y.parentId,
				...P
			})
		})
	});
}
var uO = i(lO), dO = (e) => ({
	nodesConnectable: e.nodesConnectable,
	nodesFocusable: e.nodesFocusable,
	elementsSelectable: e.elementsSelectable,
	onError: e.onError
});
function fO(e) {
	let { nodesConnectable: t, nodesFocusable: n, elementsSelectable: r, onError: i } = vE(dO, mE), a = aO(e.onlyRenderVisibleElements), o = sO();
	return x("div", {
		className: "react-flow__nodes",
		style: SD,
		children: a.map((a) => x(uO, {
			id: a,
			nodeTypes: e.nodeTypes,
			nodeExtent: e.nodeExtent,
			onClick: e.onNodeClick,
			onMouseEnter: e.onNodeMouseEnter,
			onMouseMove: e.onNodeMouseMove,
			onMouseLeave: e.onNodeMouseLeave,
			onContextMenu: e.onNodeContextMenu,
			onDoubleClick: e.onNodeDoubleClick,
			noDragClassName: e.noDragClassName,
			noPanClassName: e.noPanClassName,
			rfId: e.rfId,
			disableKeyboardA11y: e.disableKeyboardA11y,
			resizeObserver: o,
			nodesDraggable: e.nodesDraggable ?? !0,
			nodesConnectable: t,
			nodesFocusable: n,
			elementsSelectable: r,
			nodeClickDistance: e.nodeClickDistance,
			onError: i
		}, a))
	});
}
fO.displayName = "NodeRenderer";
var pO = i(fO);
function mO(e) {
	return vE(a((t) => {
		if (!e) return t.edges.map((e) => e.id);
		let n = [];
		if (t.width && t.height) for (let e of t.edges) {
			let r = t.nodeLookup.get(e.source), i = t.nodeLookup.get(e.target);
			r && i && Ow({
				sourceNode: r,
				targetNode: i,
				width: t.width,
				height: t.height,
				transform: t.transform
			}) && n.push(e.id);
		}
		return n;
	}, [e]), mE);
}
var hO = ({ color: e = "none", strokeWidth: t = 1 }) => {
	let n = {
		strokeWidth: t,
		...e && { stroke: e }
	};
	return x("polyline", {
		className: "arrow",
		style: n,
		strokeLinecap: "round",
		fill: "none",
		strokeLinejoin: "round",
		points: "-5,-4 0,0 -5,4"
	});
}, gO = ({ color: e = "none", strokeWidth: t = 1 }) => {
	let n = {
		strokeWidth: t,
		...e && {
			stroke: e,
			fill: e
		}
	};
	return x("polyline", {
		className: "arrowclosed",
		style: n,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		points: "-5,-4 0,0 -5,4 -5,-4"
	});
}, _O = {
	[yC.Arrow]: hO,
	[yC.ArrowClosed]: gO
};
function vO(e) {
	let t = yE();
	return l(() => Object.prototype.hasOwnProperty.call(_O, e) ? _O[e] : (t.getState().onError?.("009", uC.error009(e)), null), [e]);
}
var yO = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: o, orient: s = "auto-start-reverse" }) => {
	let c = vO(t);
	return c ? x("marker", {
		className: "react-flow__arrowhead",
		id: e,
		markerWidth: `${r}`,
		markerHeight: `${i}`,
		viewBox: "-10 -10 20 20",
		markerUnits: a,
		orient: s,
		refX: "0",
		refY: "0",
		children: x(c, {
			color: n,
			strokeWidth: o
		})
	}) : null;
}, bO = ({ defaultColor: e, rfId: t }) => {
	let n = vE((e) => e.edges), r = vE((e) => e.defaultEdgeOptions), i = l(() => Gw(n, {
		id: t,
		defaultColor: e,
		defaultMarkerStart: r?.markerStart,
		defaultMarkerEnd: r?.markerEnd
	}), [
		n,
		r,
		t,
		e
	]);
	return i.length ? x("svg", {
		className: "react-flow__marker",
		"aria-hidden": "true",
		children: x("defs", { children: i.map((e) => x(yO, {
			id: e.id,
			type: e.type,
			color: e.color,
			width: e.width,
			height: e.height,
			markerUnits: e.markerUnits,
			strokeWidth: e.strokeWidth,
			orient: e.orient
		}, e.id)) })
	}) : null;
};
bO.displayName = "MarkerDefinitions";
var xO = i(bO);
function SO({ x: e, y: t, label: n, labelStyle: r, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: o = [2, 4], labelBgBorderRadius: c = 2, children: l, className: u, ...p }) {
	let [m, h] = f({
		x: 1,
		y: 0,
		width: 0,
		height: 0
	}), g = D_(["react-flow__edge-textwrapper", u]), _ = d(null);
	return s(() => {
		if (_.current) {
			let e = _.current.getBBox();
			h({
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			});
		}
	}, [n]), n ? S("g", {
		transform: `translate(${e - m.width / 2} ${t - m.height / 2})`,
		className: g,
		visibility: m.width ? "visible" : "hidden",
		...p,
		children: [
			i && x("rect", {
				width: m.width + 2 * o[0],
				x: -o[0],
				y: -o[1],
				height: m.height + 2 * o[1],
				className: "react-flow__edge-textbg",
				style: a,
				rx: c,
				ry: c
			}),
			x("text", {
				className: "react-flow__edge-text",
				y: m.height / 2,
				dy: "0.3em",
				ref: _,
				style: r,
				children: n
			}),
			l
		]
	}) : null;
}
SO.displayName = "EdgeText";
var CO = i(SO);
function wO({ path: e, labelX: t, labelY: n, label: r, labelStyle: i, labelShowBg: a, labelBgStyle: o, labelBgPadding: s, labelBgBorderRadius: c, interactionWidth: l = 20, ...u }) {
	return S(b, { children: [
		x("path", {
			...u,
			d: e,
			fill: "none",
			className: D_(["react-flow__edge-path", u.className])
		}),
		l ? x("path", {
			d: e,
			fill: "none",
			strokeOpacity: 0,
			strokeWidth: l,
			className: "react-flow__edge-interaction"
		}) : null,
		r && qC(t) && qC(n) ? x(CO, {
			x: t,
			y: n,
			label: r,
			labelStyle: i,
			labelShowBg: a,
			labelBgStyle: o,
			labelBgPadding: s,
			labelBgBorderRadius: c
		}) : null
	] });
}
function TO({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
	return e === $.Left || e === $.Right ? [.5 * (t + r), n] : [t, .5 * (n + i)];
}
function EO({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: i, targetPosition: a = $.Top }) {
	let [o, s] = TO({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i
	}), [c, l] = TO({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t
	}), [u, d, f, p] = Sw({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: o,
		sourceControlY: s,
		targetControlX: c,
		targetControlY: l
	});
	return [
		`M${e},${t} C${o},${s} ${c},${l} ${r},${i}`,
		u,
		d,
		f,
		p
	];
}
function DO(e) {
	return i(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o, targetPosition: s, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, interactionWidth: _ }) => {
		let [v, y, b] = EO({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s
		}), S = e.isInternal ? void 0 : t;
		return x(wO, {
			id: S,
			path: v,
			labelX: y,
			labelY: b,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: _
		});
	});
}
var OO = DO({ isInternal: !1 }), kO = DO({ isInternal: !0 });
OO.displayName = "SimpleBezierEdge", kO.displayName = "SimpleBezierEdgeInternal";
function AO(e) {
	return i(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, sourcePosition: p = $.Bottom, targetPosition: m = $.Top, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, S] = Rw({
			sourceX: n,
			sourceY: r,
			sourcePosition: p,
			targetX: i,
			targetY: a,
			targetPosition: m,
			borderRadius: _?.borderRadius,
			offset: _?.offset,
			stepPosition: _?.stepPosition
		}), C = e.isInternal ? void 0 : t;
		return x(wO, {
			id: C,
			path: y,
			labelX: b,
			labelY: S,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var jO = AO({ isInternal: !1 }), MO = AO({ isInternal: !0 });
jO.displayName = "SmoothStepEdge", MO.displayName = "SmoothStepEdgeInternal";
function NO(e) {
	return i(({ id: t, ...n }) => {
		let r = e.isInternal ? void 0 : t;
		return x(jO, {
			...n,
			id: r,
			pathOptions: l(() => ({
				borderRadius: 0,
				offset: n.pathOptions?.offset
			}), [n.pathOptions?.offset])
		});
	});
}
var PO = NO({ isInternal: !1 }), FO = NO({ isInternal: !0 });
PO.displayName = "StepEdge", FO.displayName = "StepEdgeInternal";
function IO(e) {
	return i(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: p, markerStart: m, interactionWidth: h }) => {
		let [g, _, v] = Mw({
			sourceX: n,
			sourceY: r,
			targetX: i,
			targetY: a
		}), y = e.isInternal ? void 0 : t;
		return x(wO, {
			id: y,
			path: g,
			labelX: _,
			labelY: v,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: p,
			markerStart: m,
			interactionWidth: h
		});
	});
}
var LO = IO({ isInternal: !1 }), RO = IO({ isInternal: !0 });
LO.displayName = "StraightEdge", RO.displayName = "StraightEdgeInternal";
function zO(e) {
	return i(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o = $.Bottom, targetPosition: s = $.Top, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, S] = Tw({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s,
			curvature: _?.curvature
		}), C = e.isInternal ? void 0 : t;
		return x(wO, {
			id: C,
			path: y,
			labelX: b,
			labelY: S,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var BO = zO({ isInternal: !1 }), VO = zO({ isInternal: !0 });
BO.displayName = "BezierEdge", VO.displayName = "BezierEdgeInternal";
var HO = {
	default: VO,
	straight: RO,
	step: FO,
	smoothstep: MO,
	simplebezier: kO
}, UO = {
	sourceX: null,
	sourceY: null,
	targetX: null,
	targetY: null,
	sourcePosition: null,
	targetPosition: null,
	zIndex: void 0
}, WO = (e, t, n) => n === $.Left ? e - t : n === $.Right ? e + t : e, GO = (e, t, n) => n === $.Top ? e - t : n === $.Bottom ? e + t : e, KO = "react-flow__edgeupdater";
function qO({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: o, type: s }) {
	return x("circle", {
		onMouseDown: i,
		onMouseEnter: a,
		onMouseOut: o,
		className: D_([KO, `${KO}-${s}`]),
		cx: WO(t, r, e),
		cy: GO(n, r, e),
		r,
		stroke: "transparent",
		fill: "transparent"
	});
}
function JO({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: i, targetX: a, targetY: o, sourcePosition: s, targetPosition: c, onReconnect: l, onReconnectStart: u, onReconnectEnd: d, setReconnecting: f, setUpdateHover: p }) {
	let m = yE(), h = (e, t) => {
		if (e.button !== 0) return;
		let { autoPanOnConnect: r, domNode: i, connectionMode: a, connectionRadius: o, lib: s, onConnectStart: c, cancelConnection: p, nodeLookup: h, rfId: g, panBy: _, updateConnection: v } = m.getState(), y = t.type === "target";
		TT.onPointerDown(e.nativeEvent, {
			autoPanOnConnect: r,
			connectionMode: a,
			connectionRadius: o,
			domNode: i,
			handleId: t.id,
			nodeId: t.nodeId,
			nodeLookup: h,
			isTarget: y,
			edgeUpdaterType: t.type,
			lib: s,
			flowId: g,
			cancelConnection: p,
			panBy: _,
			isValidConnection: (...e) => m.getState().isValidConnection?.(...e) ?? !0,
			onConnect: (e) => l?.(n, e),
			onConnectStart: (r, i) => {
				f(!0), u?.(e, n, t.type), c?.(r, i);
			},
			onConnectEnd: (...e) => m.getState().onConnectEnd?.(...e),
			onReconnectEnd: (e, r) => {
				f(!1), d?.(e, n, t.type, r);
			},
			updateConnection: v,
			getTransform: () => m.getState().transform,
			getFromHandle: () => m.getState().connection.fromHandle,
			dragThreshold: m.getState().connectionDragThreshold,
			handleDomNode: e.currentTarget
		});
	}, g = (e) => h(e, {
		nodeId: n.target,
		id: n.targetHandle ?? null,
		type: "target"
	}), _ = (e) => h(e, {
		nodeId: n.source,
		id: n.sourceHandle ?? null,
		type: "source"
	}), v = () => p(!0), y = () => p(!1);
	return S(b, { children: [(e === !0 || e === "source") && x(qO, {
		position: s,
		centerX: r,
		centerY: i,
		radius: t,
		onMouseDown: g,
		onMouseEnter: v,
		onMouseOut: y,
		type: "source"
	}), (e === !0 || e === "target") && x(qO, {
		position: c,
		centerX: a,
		centerY: o,
		radius: t,
		onMouseDown: _,
		onMouseEnter: v,
		onMouseOut: y,
		type: "target"
	})] });
}
function YO({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: i, onDoubleClick: o, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: p, reconnectRadius: m, onReconnect: h, onReconnectStart: g, onReconnectEnd: _, rfId: v, edgeTypes: y, noPanClassName: b, onError: C, disableKeyboardA11y: w }) {
	let T = vE((t) => t.edgeLookup.get(e)), E = vE((e) => e.defaultEdgeOptions);
	T = E ? {
		...E,
		...T
	} : T;
	let D = T.type || "default", O = y?.[D] || HO[D];
	O === void 0 && (C?.("011", uC.error011(D)), D = "default", O = y?.default || HO.default);
	let k = !!(T.focusable || t && T.focusable === void 0), A = h !== void 0 && (T.reconnectable || n && T.reconnectable === void 0), j = !!(T.selectable || r && T.selectable === void 0), M = d(null), [N, P] = f(!1), [F, I] = f(!1), L = yE(), { zIndex: ee = T.zIndex, sourceX: R, sourceY: z, targetX: B, targetY: V, sourcePosition: H, targetPosition: te } = vE(a((t) => {
		let n = t.nodeLookup.get(T.source), r = t.nodeLookup.get(T.target);
		if (!n || !r) return UO;
		let i = Bw({
			id: e,
			sourceNode: n,
			targetNode: r,
			sourceHandle: T.sourceHandle || null,
			targetHandle: T.targetHandle || null,
			connectionMode: t.connectionMode,
			onError: C
		}), a = Dw({
			selected: T.selected,
			zIndex: T.zIndex,
			sourceNode: n,
			targetNode: r,
			elevateOnSelect: t.elevateEdgesOnSelect,
			zIndexMode: t.zIndexMode
		});
		return {
			...i || UO,
			zIndex: a
		};
	}, [
		T.source,
		T.target,
		T.sourceHandle,
		T.targetHandle,
		T.selected,
		T.zIndex,
		C
	]), mE), U = l(() => T.markerStart ? `url('#${Ww(T.markerStart, v)}')` : void 0, [T.markerStart, v]), ne = l(() => T.markerEnd ? `url('#${Ww(T.markerEnd, v)}')` : void 0, [T.markerEnd, v]);
	if (T.hidden || R === null || z === null || B === null || V === null) return null;
	let W = (t) => {
		let { addSelectedEdges: n, unselectNodesAndEdges: r, multiSelectionActive: a } = L.getState();
		j && (L.setState({ nodesSelectionActive: !1 }), T.selected && a ? (r({
			nodes: [],
			edges: [T]
		}), M.current?.blur()) : n([e])), i && i(t, T);
	}, G = o ? (e) => {
		o(e, { ...T });
	} : void 0, re = s ? (e) => {
		s(e, { ...T });
	} : void 0, ie = c ? (e) => {
		c(e, { ...T });
	} : void 0, K = u ? (e) => {
		u(e, { ...T });
	} : void 0, ae = p ? (e) => {
		p(e, { ...T });
	} : void 0;
	return x("svg", {
		style: { zIndex: ee },
		children: S("g", {
			className: D_([
				"react-flow__edge",
				`react-flow__edge-${D}`,
				T.className,
				b,
				{
					selected: T.selected,
					animated: T.animated,
					inactive: !j && !i,
					updating: N,
					selectable: j
				}
			]),
			onClick: W,
			onDoubleClick: G,
			onContextMenu: re,
			onMouseEnter: ie,
			onMouseMove: K,
			onMouseLeave: ae,
			onKeyDown: k ? (t) => {
				if (!w && fC.includes(t.key) && j) {
					let { unselectNodesAndEdges: n, addSelectedEdges: r } = L.getState();
					t.key === "Escape" ? (M.current?.blur(), n({ edges: [T] })) : r([e]);
				}
			} : void 0,
			tabIndex: k ? 0 : void 0,
			role: T.ariaRole ?? (k ? "group" : "img"),
			"aria-roledescription": "edge",
			"data-id": e,
			"data-testid": `rf__edge-${e}`,
			"aria-label": T.ariaLabel === null ? void 0 : T.ariaLabel || `Edge from ${T.source} to ${T.target}`,
			"aria-describedby": k ? `${CE}-${v}` : void 0,
			ref: M,
			...T.domAttributes,
			children: [!F && x(O, {
				id: e,
				source: T.source,
				target: T.target,
				type: T.type,
				selected: T.selected,
				animated: T.animated,
				selectable: j,
				deletable: T.deletable ?? !0,
				label: T.label,
				labelStyle: T.labelStyle,
				labelShowBg: T.labelShowBg,
				labelBgStyle: T.labelBgStyle,
				labelBgPadding: T.labelBgPadding,
				labelBgBorderRadius: T.labelBgBorderRadius,
				sourceX: R,
				sourceY: z,
				targetX: B,
				targetY: V,
				sourcePosition: H,
				targetPosition: te,
				data: T.data,
				style: T.style,
				sourceHandleId: T.sourceHandle,
				targetHandleId: T.targetHandle,
				markerStart: U,
				markerEnd: ne,
				pathOptions: "pathOptions" in T ? T.pathOptions : void 0,
				interactionWidth: T.interactionWidth
			}), A && x(JO, {
				edge: T,
				isReconnectable: A,
				reconnectRadius: m,
				onReconnect: h,
				onReconnectStart: g,
				onReconnectEnd: _,
				sourceX: R,
				sourceY: z,
				targetX: B,
				targetY: V,
				sourcePosition: H,
				targetPosition: te,
				setUpdateHover: P,
				setReconnecting: I
			})]
		})
	});
}
var XO = i(YO), ZO = (e) => ({
	edgesFocusable: e.edgesFocusable,
	edgesReconnectable: e.edgesReconnectable,
	elementsSelectable: e.elementsSelectable,
	connectionMode: e.connectionMode,
	onError: e.onError
});
function QO({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: i, onReconnect: a, onEdgeContextMenu: o, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: u, reconnectRadius: d, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: m, disableKeyboardA11y: h }) {
	let { edgesFocusable: g, edgesReconnectable: _, elementsSelectable: v, onError: y } = vE(ZO, mE), b = mO(t);
	return S("div", {
		className: "react-flow__edges",
		children: [x(xO, {
			defaultColor: e,
			rfId: n
		}), b.map((e) => x(XO, {
			id: e,
			edgesFocusable: g,
			edgesReconnectable: _,
			elementsSelectable: v,
			noPanClassName: i,
			onReconnect: a,
			onContextMenu: o,
			onMouseEnter: s,
			onMouseMove: c,
			onMouseLeave: l,
			onClick: u,
			reconnectRadius: d,
			onDoubleClick: f,
			onReconnectStart: p,
			onReconnectEnd: m,
			rfId: n,
			onError: y,
			edgeTypes: r,
			disableKeyboardA11y: h
		}, e))]
	});
}
QO.displayName = "EdgeRenderer";
var $O = i(QO), ek = (e) => `translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;
function tk({ children: e }) {
	let t = yE(), n = d(null), [r] = f(() => t.getState().transform);
	return uD(() => {
		let e = null, r = () => {
			let r = t.getState().transform;
			e && r[0] === e[0] && r[1] === e[1] && r[2] === e[2] || (e = r, n.current && (n.current.style.transform = ek(r)));
		};
		return r(), t.subscribe(r);
	}, [t]), x("div", {
		ref: n,
		className: "react-flow__viewport xyflow__viewport react-flow__container",
		style: { transform: ek(r) },
		children: e
	});
}
function nk(e) {
	let t = _D(), n = d(!1);
	s(() => {
		!n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
	}, [e, t.viewportInitialized]);
}
var rk = (e) => e.panZoom?.syncViewport;
function ik(e) {
	let t = vE(rk), n = yE();
	return s(() => {
		e && (t?.(e), n.setState({ transform: [
			e.x,
			e.y,
			e.zoom
		] }));
	}, [e, t]), null;
}
function ak(e) {
	return e.connection.inProgress ? {
		...e.connection,
		to: XC(e.connection.to, e.transform)
	} : { ...e.connection };
}
function ok(e) {
	return e ? (t) => e(ak(t)) : ak;
}
function sk(e) {
	return vE(ok(e), mE);
}
var ck = (e) => ({
	nodesConnectable: e.nodesConnectable,
	isValid: e.connection.isValid,
	inProgress: e.connection.inProgress,
	width: e.width,
	height: e.height
});
function lk({ containerStyle: e, style: t, type: n, component: r }) {
	let { nodesConnectable: i, width: a, height: o, isValid: s, inProgress: c } = vE(ck, mE);
	return a && i && c ? x("svg", {
		style: e,
		width: a,
		height: o,
		className: "react-flow__connectionline react-flow__container",
		children: x("g", {
			className: D_(["react-flow__connection", pw(s)]),
			children: x(uk, {
				style: t,
				type: n,
				CustomComponent: r,
				isValid: s
			})
		})
	}) : null;
}
var uk = ({ style: e, type: t = vC.Bezier, CustomComponent: n, isValid: r }) => {
	let { inProgress: i, from: a, fromNode: o, fromHandle: s, fromPosition: c, to: l, toNode: u, toHandle: d, toPosition: f, pointer: p } = sk();
	if (!i) return;
	if (n) return x(n, {
		connectionLineType: t,
		connectionLineStyle: e,
		fromNode: o,
		fromHandle: s,
		fromX: a.x,
		fromY: a.y,
		toX: l.x,
		toY: l.y,
		fromPosition: c,
		toPosition: f,
		connectionStatus: pw(r),
		toNode: u,
		toHandle: d,
		pointer: p
	});
	let m = "", h = {
		sourceX: a.x,
		sourceY: a.y,
		sourcePosition: c,
		targetX: l.x,
		targetY: l.y,
		targetPosition: f
	};
	switch (t) {
		case vC.Bezier:
			[m] = Tw(h);
			break;
		case vC.SimpleBezier:
			[m] = EO(h);
			break;
		case vC.Step:
			[m] = Rw({
				...h,
				borderRadius: 0
			});
			break;
		case vC.SmoothStep:
			[m] = Rw(h);
			break;
		default: [m] = Mw(h);
	}
	return x("path", {
		d: m,
		fill: "none",
		className: "react-flow__connection-path",
		style: e
	});
};
uk.displayName = "ConnectionLine";
var dk = {};
function fk(e = dk) {
	let t = d(e), n = yE();
	s(() => {
		if (process.env.NODE_ENV === "development") {
			let r = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
			for (let i of r) if (t.current[i] !== e[i]) {
				n.getState().onError?.("002", uC.error002());
				break;
			}
			t.current = e;
		}
	}, [e]);
}
function pk() {
	let e = yE(), t = d(!1);
	s(() => {
		if (process.env.NODE_ENV === "development" && !t.current) {
			let n = document.querySelector(".react-flow__pane");
			n && window.getComputedStyle(n).zIndex !== "1" && e.getState().onError?.("013", uC.error013("react")), t.current = !0;
		}
	}, []);
}
function mk({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: o, onNodeMouseEnter: s, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: u, onSelectionContextMenu: d, onSelectionStart: f, onSelectionEnd: p, connectionLineType: m, connectionLineStyle: h, connectionLineComponent: g, connectionLineContainerStyle: _, selectionKeyCode: v, selectionOnDrag: y, selectionMode: b, multiSelectionKeyCode: C, panActivationKeyCode: w, zoomActivationKeyCode: T, deleteKeyCode: E, onlyRenderVisibleElements: D, elementsSelectable: O, defaultViewport: k, translateExtent: A, minZoom: j, maxZoom: M, preventScrolling: N, defaultMarkerColor: P, zoomOnScroll: F, zoomOnPinch: I, panOnScroll: L, panOnScrollSpeed: ee, panOnScrollMode: R, zoomOnDoubleClick: z, panOnDrag: B, autoPanOnSelection: V, onPaneClick: H, onPaneMouseEnter: te, onPaneMouseMove: U, onPaneMouseLeave: ne, onPaneScroll: W, onPaneContextMenu: G, paneClickDistance: re, nodeClickDistance: ie, onEdgeContextMenu: K, onEdgeMouseEnter: ae, onEdgeMouseMove: oe, onEdgeMouseLeave: q, reconnectRadius: se, onReconnect: ce, onReconnectStart: le, onReconnectEnd: ue, noDragClassName: J, noWheelClassName: de, noPanClassName: fe, disableKeyboardA11y: pe, nodeExtent: me, rfId: he, viewport: ge, onViewportChange: _e, nodesDraggable: ve }) {
	return fk(e), fk(t), pk(), nk(n), ik(ge), x(rO, {
		onPaneClick: H,
		onPaneMouseEnter: te,
		onPaneMouseMove: U,
		onPaneMouseLeave: ne,
		onPaneContextMenu: G,
		onPaneScroll: W,
		paneClickDistance: re,
		deleteKeyCode: E,
		selectionKeyCode: v,
		selectionOnDrag: y,
		selectionMode: b,
		onSelectionStart: f,
		onSelectionEnd: p,
		multiSelectionKeyCode: C,
		panActivationKeyCode: w,
		zoomActivationKeyCode: T,
		elementsSelectable: O,
		zoomOnScroll: F,
		zoomOnPinch: I,
		zoomOnDoubleClick: z,
		panOnScroll: L,
		panOnScrollSpeed: ee,
		panOnScrollMode: R,
		panOnDrag: B,
		autoPanOnSelection: V,
		defaultViewport: k,
		translateExtent: A,
		minZoom: j,
		maxZoom: M,
		onSelectionContextMenu: d,
		preventScrolling: N,
		noDragClassName: J,
		noWheelClassName: de,
		noPanClassName: fe,
		disableKeyboardA11y: pe,
		onViewportChange: _e,
		isControlledViewport: !!ge,
		children: S(tk, { children: [
			x($O, {
				edgeTypes: t,
				onEdgeClick: i,
				onEdgeDoubleClick: o,
				onReconnect: ce,
				onReconnectStart: le,
				onReconnectEnd: ue,
				onlyRenderVisibleElements: D,
				onEdgeContextMenu: K,
				onEdgeMouseEnter: ae,
				onEdgeMouseMove: oe,
				onEdgeMouseLeave: q,
				reconnectRadius: se,
				defaultMarkerColor: P,
				noPanClassName: fe,
				disableKeyboardA11y: pe,
				rfId: he
			}),
			x(lk, {
				style: h,
				type: m,
				component: g,
				containerStyle: _
			}),
			x("div", { className: "react-flow__edgelabel-renderer" }),
			x(pO, {
				nodeTypes: e,
				onNodeClick: r,
				onNodeDoubleClick: a,
				onNodeMouseEnter: s,
				onNodeMouseMove: c,
				onNodeMouseLeave: l,
				onNodeContextMenu: u,
				nodeClickDistance: ie,
				onlyRenderVisibleElements: D,
				noPanClassName: fe,
				noDragClassName: J,
				disableKeyboardA11y: pe,
				nodeExtent: me,
				rfId: he,
				nodesDraggable: ve
			}),
			x("div", { className: "react-flow__viewport-portal" })
		] })
	});
}
mk.displayName = "GraphView";
var hk = i(mk), gk = JC("React Flow", "https://reactflow.dev/"), _k = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c = .5, maxZoom: l = 2, nodeOrigin: u, nodeExtent: d, zIndexMode: f = "basic" } = {}) => {
	let p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = r ?? t ?? [], v = n ?? e ?? [], y = u ?? [0, 0], b = d ?? dC;
	lT(h, g, _);
	let { nodesInitialized: x } = eT(v, p, m, {
		nodeOrigin: y,
		nodeExtent: b,
		zIndexMode: f
	}), S = [
		0,
		0,
		1
	];
	if (o && i && a) {
		let { x: e, y: t, zoom: n } = tw(EC(p, { filter: (e) => !(!e.width && !e.initialWidth || !e.height && !e.initialHeight) }), i, a, c, l, s?.padding ?? .1);
		S = [
			e,
			t,
			n
		];
	}
	return {
		rfId: "1",
		width: i ?? 0,
		height: a ?? 0,
		transform: S,
		nodes: v,
		nodesInitialized: x,
		nodeLookup: p,
		parentLookup: m,
		edges: _,
		edgeLookup: g,
		connectionLookup: h,
		onNodesChange: null,
		onEdgesChange: null,
		hasDefaultNodes: n !== void 0,
		hasDefaultEdges: r !== void 0,
		panZoom: null,
		minZoom: c,
		maxZoom: l,
		translateExtent: dC,
		nodeExtent: b,
		nodesSelectionActive: !1,
		userSelectionActive: !1,
		userSelectionRect: null,
		connectionMode: mC.Strict,
		domNode: null,
		paneDragging: !1,
		noPanClassName: "nopan",
		nodeOrigin: y,
		nodeDragThreshold: 1,
		connectionDragThreshold: 1,
		snapGrid: [15, 15],
		snapToGrid: !1,
		nodesDraggable: !0,
		nodesConnectable: !0,
		nodesFocusable: !0,
		edgesFocusable: !0,
		edgesReconnectable: !0,
		elementsSelectable: !0,
		elevateNodesOnSelect: !0,
		elevateEdgesOnSelect: !0,
		selectNodesOnDrag: !0,
		multiSelectionActive: !1,
		fitViewQueued: o ?? !1,
		fitViewOptions: s,
		fitViewResolver: null,
		connection: { ..._C },
		connectionClickStartHandle: null,
		connectOnClick: !0,
		ariaLiveMessage: "",
		autoPanOnConnect: !0,
		autoPanOnNodeDrag: !0,
		autoPanOnNodeFocus: !0,
		autoPanSpeed: 15,
		connectionRadius: 20,
		onError: gk,
		isValidConnection: void 0,
		onSelectionChangeHandlers: [],
		lib: "react",
		debug: !1,
		ariaLabelConfig: pC,
		zIndexMode: f,
		defaultEdgeOptions: void 0,
		onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
		onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
		onNodesDelete: void 0,
		onEdgesDelete: void 0,
		onDelete: void 0,
		onBeforeDelete: void 0,
		onViewportChangeStart: void 0,
		onViewportChange: void 0,
		onViewportChangeEnd: void 0,
		onNodeDragStart: void 0,
		onNodeDrag: void 0,
		onNodeDragStop: void 0,
		onSelectionDragStart: void 0,
		onSelectionDrag: void 0,
		onSelectionDragStop: void 0,
		onMoveStart: void 0,
		onMove: void 0,
		onMoveEnd: void 0,
		onConnect: void 0,
		onConnectStart: void 0,
		onConnectEnd: void 0,
		onClickConnectStart: void 0,
		onClickConnectEnd: void 0
	};
}, vk = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c, maxZoom: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f }) => pE((p, m) => {
	async function h() {
		let { nodeLookup: e, panZoom: t, fitViewOptions: n, fitViewResolver: r, width: i, height: a, minZoom: o, maxZoom: s } = m();
		t && (await AC({
			nodes: e,
			width: i,
			height: a,
			panZoom: t,
			minZoom: o,
			maxZoom: s
		}, n), r?.resolve(!0), p({ fitViewResolver: null }));
	}
	return {
		..._k({
			nodes: e,
			edges: t,
			width: i,
			height: a,
			fitView: o,
			fitViewOptions: s,
			minZoom: c,
			maxZoom: l,
			nodeOrigin: u,
			nodeExtent: d,
			defaultNodes: n,
			defaultEdges: r,
			zIndexMode: f
		}),
		setNodes: (e) => {
			let { nodeLookup: t, parentLookup: n, nodeOrigin: r, nodeExtent: i, elevateNodesOnSelect: a, fitViewQueued: o, zIndexMode: s, nodesSelectionActive: c } = m(), { nodesInitialized: l, hasSelectedNodes: u } = eT(e, t, n, {
				nodeOrigin: r,
				nodeExtent: i,
				elevateNodesOnSelect: a,
				checkEquality: !0,
				zIndexMode: s
			}), d = c && u;
			o && l ? (h(), p({
				nodes: e,
				nodesInitialized: l,
				fitViewQueued: !1,
				fitViewOptions: void 0,
				nodesSelectionActive: d
			})) : p({
				nodes: e,
				nodesInitialized: l,
				nodesSelectionActive: d
			});
		},
		setEdges: (e) => {
			let { connectionLookup: t, edgeLookup: n } = m();
			lT(t, n, e), p({ edges: e });
		},
		setDefaultNodesAndEdges: (e, t) => {
			if (e) {
				let { setNodes: t } = m();
				t(e), p({ hasDefaultNodes: !0 });
			}
			if (t) {
				let { setEdges: e } = m();
				e(t), p({ hasDefaultEdges: !0 });
			}
		},
		updateNodeInternals: (e) => {
			let { triggerNodeChanges: t, nodeLookup: n, parentLookup: r, domNode: i, nodeOrigin: a, nodeExtent: o, debug: s, fitViewQueued: c, zIndexMode: l } = m(), { changes: u, updatedInternals: d } = oT(e, n, r, i, a, o, l);
			d && (Zw(n, r, {
				nodeOrigin: a,
				nodeExtent: o,
				zIndexMode: l
			}), c ? (h(), p({
				fitViewQueued: !1,
				fitViewOptions: void 0
			})) : p({}), u?.length > 0 && (s && console.log("React Flow: trigger node changes", u), t?.(u)));
		},
		updateNodePositions: (e, t = !1) => {
			let n = [], r = [], { nodeLookup: i, triggerNodeChanges: a, connection: o, updateConnection: s, onNodesChangeMiddlewareMap: c } = m();
			for (let [a, c] of e) {
				let e = i.get(a), l = !!(e?.expandParent && e?.parentId && c?.position), u = {
					id: a,
					type: "position",
					position: l ? {
						x: Math.max(0, c.position.x),
						y: Math.max(0, c.position.y)
					} : c.position,
					dragging: t
				};
				if (e && o.inProgress && o.fromNode.id === e.id) {
					let t = Hw(e, o.fromHandle, $.Left, !0);
					s({
						...o,
						from: t
					});
				}
				l && e.parentId && n.push({
					id: a,
					parentId: e.parentId,
					rect: {
						...c.internals.positionAbsolute,
						width: c.measured.width ?? 0,
						height: c.measured.height ?? 0
					}
				}), r.push(u);
			}
			if (n.length > 0) {
				let { parentLookup: e, nodeOrigin: t } = m(), a = aT(n, i, e, t);
				r.push(...a);
			}
			for (let e of c.values()) r = e(r);
			a(r);
		},
		triggerNodeChanges: (e) => {
			let { onNodesChange: t, setNodes: n, nodes: r, hasDefaultNodes: i, debug: a } = m();
			e?.length && (i && n($E(e, r)), a && console.log("React Flow: trigger node changes", e), t?.(e));
		},
		triggerEdgeChanges: (e) => {
			let { onEdgesChange: t, setEdges: n, edges: r, hasDefaultEdges: i, debug: a } = m();
			e?.length && (i && n(eD(e, r)), a && console.log("React Flow: trigger edge changes", e), t?.(e));
		},
		addSelectedNodes: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				i(e.map((e) => tD(e, !0)));
				return;
			}
			i(nD(r, /* @__PURE__ */ new Set([...e]), !0)), a(nD(n));
		},
		addSelectedEdges: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				a(e.map((e) => tD(e, !0)));
				return;
			}
			a(nD(n, /* @__PURE__ */ new Set([...e]))), i(nD(r, /* @__PURE__ */ new Set(), !0));
		},
		unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
			let { edges: n, nodes: r, nodeLookup: i, triggerNodeChanges: a, triggerEdgeChanges: o } = m(), s = e || r, c = t || n, l = [];
			for (let e of s) {
				if (!e.selected) continue;
				let t = i.get(e.id);
				t && (t.selected = !1), l.push(tD(e.id, !1));
			}
			let u = [];
			for (let e of c) e.selected && u.push(tD(e.id, !1));
			a(l), o(u);
		},
		setMinZoom: (e) => {
			let { panZoom: t, maxZoom: n } = m();
			t?.setScaleExtent([e, n]), p({ minZoom: e });
		},
		setMaxZoom: (e) => {
			let { panZoom: t, minZoom: n } = m();
			t?.setScaleExtent([n, e]), p({ maxZoom: e });
		},
		setTranslateExtent: (e) => {
			m().panZoom?.setTranslateExtent(e), p({ translateExtent: e });
		},
		resetSelectedElements: () => {
			let { edges: e, nodes: t, triggerNodeChanges: n, triggerEdgeChanges: r, elementsSelectable: i } = m();
			if (!i) return;
			let a = t.reduce((e, t) => t.selected ? [...e, tD(t.id, !1)] : e, []), o = e.reduce((e, t) => t.selected ? [...e, tD(t.id, !1)] : e, []);
			n(a), r(o);
		},
		setNodeExtent: (e) => {
			let { nodes: t, nodeLookup: n, parentLookup: r, nodeOrigin: i, elevateNodesOnSelect: a, nodeExtent: o, zIndexMode: s } = m();
			(e[0][0] !== o[0][0] || e[0][1] !== o[0][1] || e[1][0] !== o[1][0] || e[1][1] !== o[1][1]) && (eT(t, n, r, {
				nodeOrigin: i,
				nodeExtent: e,
				elevateNodesOnSelect: a,
				checkEquality: !1,
				zIndexMode: s
			}), p({ nodeExtent: e }));
		},
		panBy: (e) => {
			let { transform: t, width: n, height: r, panZoom: i, translateExtent: a } = m();
			return sT({
				delta: e,
				panZoom: i,
				transform: t,
				translateExtent: a,
				width: n,
				height: r
			});
		},
		setCenter: async (e, t, n) => {
			let { width: r, height: i, maxZoom: a, panZoom: o } = m();
			if (!o) return !1;
			let s = n?.zoom === void 0 ? a : n.zoom;
			return await o.setViewport({
				x: r / 2 - e * s,
				y: i / 2 - t * s,
				zoom: s
			}, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0;
		},
		cancelConnection: () => {
			p({ connection: { ..._C } });
		},
		updateConnection: (e) => {
			p({ connection: e });
		},
		reset: () => p({ ..._k() })
	};
}, Object.is);
function yk({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: i, initialHeight: a, initialMinZoom: o, initialMaxZoom: s, initialFitViewOptions: c, fitView: l, nodeOrigin: u, nodeExtent: d, zIndexMode: p, children: m }) {
	let [h] = f(() => vk({
		nodes: e,
		edges: t,
		defaultNodes: n,
		defaultEdges: r,
		width: i,
		height: a,
		fitView: l,
		minZoom: o,
		maxZoom: s,
		fitViewOptions: c,
		nodeOrigin: u,
		nodeExtent: d,
		zIndexMode: p
	}));
	return x(gE, {
		value: h,
		children: x(mD, { children: x(zD, { children: m }) })
	});
}
function bk({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: i, width: a, height: s, fitView: c, fitViewOptions: l, minZoom: u, maxZoom: d, nodeOrigin: f, nodeExtent: p, zIndexMode: m }) {
	return o(hE) ? x(b, { children: e }) : x(yk, {
		initialNodes: t,
		initialEdges: n,
		defaultNodes: r,
		defaultEdges: i,
		initialWidth: a,
		initialHeight: s,
		fitView: c,
		initialFitViewOptions: l,
		initialMinZoom: u,
		initialMaxZoom: d,
		nodeOrigin: f,
		nodeExtent: p,
		zIndexMode: m,
		children: e
	});
}
var xk = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
	zIndex: 0
};
function Sk({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: o, edgeTypes: s, onNodeClick: c, onEdgeClick: l, onInit: u, onMove: d, onMoveStart: f, onMoveEnd: p, onConnect: m, onConnectStart: h, onConnectEnd: g, onClickConnectStart: _, onClickConnectEnd: v, onNodeMouseEnter: y, onNodeMouseMove: b, onNodeMouseLeave: C, onNodeContextMenu: w, onNodeDoubleClick: T, onNodeDragStart: E, onNodeDrag: D, onNodeDragStop: O, onNodesDelete: k, onEdgesDelete: A, onDelete: j, onSelectionChange: M, onSelectionDragStart: N, onSelectionDrag: P, onSelectionDragStop: F, onSelectionContextMenu: I, onSelectionStart: L, onSelectionEnd: ee, onBeforeDelete: R, connectionMode: z, connectionLineType: B = vC.Bezier, connectionLineStyle: V, connectionLineComponent: H, connectionLineContainerStyle: te, deleteKeyCode: U = "Backspace", selectionKeyCode: ne = "Shift", selectionOnDrag: W = !1, selectionMode: G = gC.Full, panActivationKeyCode: re = "Space", multiSelectionKeyCode: ie = nw() ? "Meta" : "Control", zoomActivationKeyCode: K = nw() ? "Meta" : "Control", snapToGrid: ae, snapGrid: oe, onlyRenderVisibleElements: q = !1, selectNodesOnDrag: se, nodesDraggable: ce, autoPanOnNodeFocus: le, nodesConnectable: ue, nodesFocusable: J, nodeOrigin: de = RE, edgesFocusable: fe, edgesReconnectable: pe, elementsSelectable: me = !0, defaultViewport: he = zE, minZoom: ge = .5, maxZoom: _e = 2, translateExtent: ve = dC, preventScrolling: ye = !0, nodeExtent: be, defaultMarkerColor: xe = "#b1b1b7", zoomOnScroll: Y = !0, zoomOnPinch: Se = !0, panOnScroll: Ce = !1, panOnScrollSpeed: we = .5, panOnScrollMode: X = hC.Free, zoomOnDoubleClick: Te = !0, panOnDrag: Ee = !0, onPaneClick: De, onPaneMouseEnter: Oe, onPaneMouseMove: ke, onPaneMouseLeave: Ae, onPaneScroll: je, onPaneContextMenu: Me, paneClickDistance: Ne = 1, nodeClickDistance: Pe = 0, children: Fe, onReconnect: Ie, onReconnectStart: Le, onReconnectEnd: Re, onEdgeContextMenu: ze, onEdgeDoubleClick: Be, onEdgeMouseEnter: Ve, onEdgeMouseMove: He, onEdgeMouseLeave: Ue, reconnectRadius: We = 10, onNodesChange: Ge, onEdgesChange: Ke, noDragClassName: qe = "nodrag", noWheelClassName: Je = "nowheel", noPanClassName: Ye = "nopan", fitView: Xe, fitViewOptions: Ze, connectOnClick: Qe, attributionPosition: $e, proOptions: et, defaultEdgeOptions: tt, elevateNodesOnSelect: nt = !0, elevateEdgesOnSelect: rt = !1, disableKeyboardA11y: it = !1, autoPanOnConnect: at, autoPanOnNodeDrag: ot, autoPanOnSelection: st = !0, autoPanSpeed: ct, connectionRadius: lt, isValidConnection: ut, onError: Z, style: dt, id: ft, nodeDragThreshold: pt, connectionDragThreshold: mt, viewport: ht, onViewportChange: gt, width: _t, height: vt, colorMode: yt = "light", debug: bt, onScroll: xt, ariaLabelConfig: St, zIndexMode: Ct = "basic", ...wt }, Tt) {
	let Et = ft || "1", Dt = GE(yt), Ot = a((e) => {
		e.currentTarget.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant"
		}), xt?.(e);
	}, [xt]);
	return x("div", {
		"data-testid": "rf__wrapper",
		...wt,
		onScroll: Ot,
		style: {
			...dt,
			...xk
		},
		ref: Tt,
		className: D_([
			"react-flow",
			i,
			Dt
		]),
		id: ft,
		role: "application",
		children: S(bk, {
			nodes: e,
			edges: t,
			width: _t,
			height: vt,
			fitView: Xe,
			fitViewOptions: Ze,
			minZoom: ge,
			maxZoom: _e,
			nodeOrigin: de,
			nodeExtent: be,
			zIndexMode: Ct,
			children: [
				x(UE, {
					nodes: e,
					edges: t,
					defaultNodes: n,
					defaultEdges: r,
					onConnect: m,
					onConnectStart: h,
					onConnectEnd: g,
					onClickConnectStart: _,
					onClickConnectEnd: v,
					nodesDraggable: ce,
					autoPanOnNodeFocus: le,
					nodesConnectable: ue,
					nodesFocusable: J,
					edgesFocusable: fe,
					edgesReconnectable: pe,
					elementsSelectable: me,
					elevateNodesOnSelect: nt,
					elevateEdgesOnSelect: rt,
					minZoom: ge,
					maxZoom: _e,
					nodeExtent: be,
					onNodesChange: Ge,
					onEdgesChange: Ke,
					snapToGrid: ae,
					snapGrid: oe,
					connectionMode: z,
					translateExtent: ve,
					connectOnClick: Qe,
					defaultEdgeOptions: tt,
					fitView: Xe,
					fitViewOptions: Ze,
					onNodesDelete: k,
					onEdgesDelete: A,
					onDelete: j,
					onNodeDragStart: E,
					onNodeDrag: D,
					onNodeDragStop: O,
					onSelectionDrag: P,
					onSelectionDragStart: N,
					onSelectionDragStop: F,
					onMove: d,
					onMoveStart: f,
					onMoveEnd: p,
					noPanClassName: Ye,
					nodeOrigin: de,
					rfId: Et,
					autoPanOnConnect: at,
					autoPanOnNodeDrag: ot,
					autoPanSpeed: ct,
					onError: Z,
					connectionRadius: lt,
					isValidConnection: ut,
					selectNodesOnDrag: se,
					nodeDragThreshold: pt,
					connectionDragThreshold: mt,
					onBeforeDelete: R,
					debug: bt,
					ariaLabelConfig: St,
					zIndexMode: Ct
				}),
				x(hk, {
					onInit: u,
					onNodeClick: c,
					onEdgeClick: l,
					onNodeMouseEnter: y,
					onNodeMouseMove: b,
					onNodeMouseLeave: C,
					onNodeContextMenu: w,
					onNodeDoubleClick: T,
					nodeTypes: o,
					edgeTypes: s,
					connectionLineType: B,
					connectionLineStyle: V,
					connectionLineComponent: H,
					connectionLineContainerStyle: te,
					selectionKeyCode: ne,
					selectionOnDrag: W,
					selectionMode: G,
					deleteKeyCode: U,
					multiSelectionKeyCode: ie,
					panActivationKeyCode: re,
					zoomActivationKeyCode: K,
					onlyRenderVisibleElements: q,
					defaultViewport: he,
					translateExtent: ve,
					minZoom: ge,
					maxZoom: _e,
					preventScrolling: ye,
					zoomOnScroll: Y,
					zoomOnPinch: Se,
					zoomOnDoubleClick: Te,
					panOnScroll: Ce,
					panOnScrollSpeed: we,
					panOnScrollMode: X,
					panOnDrag: Ee,
					autoPanOnSelection: st,
					onPaneClick: De,
					onPaneMouseEnter: Oe,
					onPaneMouseMove: ke,
					onPaneMouseLeave: Ae,
					onPaneScroll: je,
					onPaneContextMenu: Me,
					paneClickDistance: Ne,
					nodeClickDistance: Pe,
					onSelectionContextMenu: I,
					onSelectionStart: L,
					onSelectionEnd: ee,
					onReconnect: Ie,
					onReconnectStart: Le,
					onReconnectEnd: Re,
					onEdgeContextMenu: ze,
					onEdgeDoubleClick: Be,
					onEdgeMouseEnter: Ve,
					onEdgeMouseMove: He,
					onEdgeMouseLeave: Ue,
					reconnectRadius: We,
					defaultMarkerColor: xe,
					noDragClassName: qe,
					noWheelClassName: Je,
					noPanClassName: Ye,
					rfId: Et,
					disableKeyboardA11y: it,
					nodeExtent: be,
					viewport: ht,
					onViewportChange: gt,
					nodesDraggable: ce
				}),
				x(LE, { onSelectionChange: M }),
				Fe,
				x(jE, {
					proOptions: et,
					position: $e
				}),
				x(OE, {
					rfId: Et,
					disableKeyboardA11y: it
				})
			]
		})
	});
}
var Ck = lD(Sk), wk = (e) => e.domNode?.querySelector(".react-flow__edgelabel-renderer");
function Tk({ children: e }) {
	let t = vE(wk);
	return t ? Ae(e, t) : null;
}
uC.error014();
function Ek({ dimensions: e, lineWidth: t, variant: n, className: r }) {
	return x("path", {
		strokeWidth: t,
		d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
		className: D_([
			"react-flow__background-pattern",
			n,
			r
		])
	});
}
function Dk({ radius: e, className: t }) {
	return x("circle", {
		cx: e,
		cy: e,
		r: e,
		className: D_([
			"react-flow__background-pattern",
			"dots",
			t
		])
	});
}
var Ok;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ok ||= {});
var kk = {
	[Ok.Dots]: 1,
	[Ok.Lines]: 1,
	[Ok.Cross]: 6
}, Ak = (e) => ({
	transform: e.transform,
	patternId: `pattern-${e.rfId}`
});
function jk({ id: e, variant: t = Ok.Dots, gap: n = 20, size: r, lineWidth: i = 1, offset: a = 0, color: o, bgColor: s, style: c, className: l, patternClassName: u }) {
	let f = d(null), { transform: p, patternId: m } = vE(Ak, mE), h = r || kk[t], g = t === Ok.Dots, _ = t === Ok.Cross, v = Array.isArray(n) ? n : [n, n], y = [v[0] * p[2] || 1, v[1] * p[2] || 1], b = h * p[2], C = Array.isArray(a) ? a : [a, a], w = _ ? [b, b] : y, T = [C[0] * p[2] + w[0] / 2, C[1] * p[2] + w[1] / 2], E = `${m}${e || ""}`;
	return S("svg", {
		className: D_(["react-flow__background", l]),
		style: {
			...c,
			...SD,
			"--xy-background-color-props": s,
			"--xy-background-pattern-color-props": o
		},
		ref: f,
		"data-testid": "rf__background",
		children: [x("pattern", {
			id: E,
			x: p[0] % y[0],
			y: p[1] % y[1],
			width: y[0],
			height: y[1],
			patternUnits: "userSpaceOnUse",
			patternTransform: `translate(-${T[0]},-${T[1]})`,
			children: g ? x(Dk, {
				radius: b / 2,
				className: u
			}) : x(Ek, {
				dimensions: w,
				lineWidth: i,
				variant: t,
				className: u
			})
		}), x("rect", {
			x: "0",
			y: "0",
			width: "100%",
			height: "100%",
			fill: `url(#${E})`
		})]
	});
}
jk.displayName = "Background";
var Mk = i(jk);
function Nk() {
	return x("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		children: x("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })
	});
}
function Pk() {
	return x("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 5",
		children: x("path", { d: "M0 0h32v4.2H0z" })
	});
}
function Fk() {
	return x("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 30",
		children: x("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })
	});
}
function Ik() {
	return x("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: x("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })
	});
}
function Lk() {
	return x("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32",
		children: x("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })
	});
}
function Rk({ children: e, className: t, ...n }) {
	return x("button", {
		type: "button",
		className: D_(["react-flow__controls-button", t]),
		...n,
		children: e
	});
}
var zk = (e) => ({
	isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
	minZoomReached: e.transform[2] <= e.minZoom,
	maxZoomReached: e.transform[2] >= e.maxZoom,
	ariaLabelConfig: e.ariaLabelConfig
});
function Bk({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: o, onFitView: s, onInteractiveChange: c, className: l, children: u, position: d = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
	let m = yE(), { isInteractive: h, minZoomReached: g, maxZoomReached: _, ariaLabelConfig: v } = vE(zk, mE), { zoomIn: y, zoomOut: C, fitView: w } = _D();
	return S(kE, {
		className: D_([
			"react-flow__controls",
			f === "horizontal" ? "horizontal" : "vertical",
			l
		]),
		position: d,
		style: e,
		"data-testid": "rf__controls",
		"aria-label": p ?? v["controls.ariaLabel"],
		children: [
			t && S(b, { children: [x(Rk, {
				onClick: () => {
					y(), a?.();
				},
				className: "react-flow__controls-zoomin",
				title: v["controls.zoomIn.ariaLabel"],
				"aria-label": v["controls.zoomIn.ariaLabel"],
				disabled: _,
				children: x(Nk, {})
			}), x(Rk, {
				onClick: () => {
					C(), o?.();
				},
				className: "react-flow__controls-zoomout",
				title: v["controls.zoomOut.ariaLabel"],
				"aria-label": v["controls.zoomOut.ariaLabel"],
				disabled: g,
				children: x(Pk, {})
			})] }),
			n && x(Rk, {
				className: "react-flow__controls-fitview",
				onClick: () => {
					w(i), s?.();
				},
				title: v["controls.fitView.ariaLabel"],
				"aria-label": v["controls.fitView.ariaLabel"],
				children: x(Fk, {})
			}),
			r && x(Rk, {
				className: "react-flow__controls-interactive",
				onClick: () => {
					m.setState({
						nodesDraggable: !h,
						nodesConnectable: !h,
						elementsSelectable: !h
					}), c?.(!h);
				},
				title: v["controls.interactive.ariaLabel"],
				"aria-label": v["controls.interactive.ariaLabel"],
				children: x(h ? Lk : Ik, {})
			}),
			u
		]
	});
}
Bk.displayName = "Controls";
var Vk = i(Bk);
function Hk({ id: e, x: t, y: n, width: r, height: i, style: a, color: o, strokeColor: s, strokeWidth: c, className: l, borderRadius: u, shapeRendering: d, selected: f, onClick: p }) {
	let { background: m, backgroundColor: h } = a || {}, g = o || m || h;
	return x("rect", {
		className: D_([
			"react-flow__minimap-node",
			{ selected: f },
			l
		]),
		x: t,
		y: n,
		rx: u,
		ry: u,
		width: r,
		height: i,
		style: {
			fill: g,
			stroke: s,
			strokeWidth: c
		},
		shapeRendering: d,
		onClick: p ? (t) => p(t, e) : void 0
	});
}
var Uk = i(Hk), Wk = (e) => e.nodes.map((e) => e.id), Gk = (e) => e instanceof Function ? e : () => e;
function Kk({ nodeStrokeColor: e, nodeColor: t, nodeClassName: n = "", nodeBorderRadius: r = 5, nodeStrokeWidth: i, nodeComponent: a = Uk, onClick: o }) {
	let s = vE(Wk, mE), c = Gk(t), l = Gk(e), u = Gk(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
	return x(b, { children: s.map((e) => x(Jk, {
		id: e,
		nodeColorFunc: c,
		nodeStrokeColorFunc: l,
		nodeClassNameFunc: u,
		nodeBorderRadius: r,
		nodeStrokeWidth: i,
		NodeComponent: a,
		onClick: o,
		shapeRendering: d
	}, e)) });
}
function qk({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: o, NodeComponent: s, onClick: c }) {
	let { node: l, x: u, y: d, width: f, height: p } = vE((t) => {
		let n = t.nodeLookup.get(e);
		if (!n) return {
			node: void 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		let r = n.internals.userNode, { x: i, y: a } = n.internals.positionAbsolute, { width: o, height: s } = iw(r);
		return {
			node: r,
			x: i,
			y: a,
			width: o,
			height: s
		};
	}, mE);
	return !l || l.hidden || !aw(l) ? null : x(s, {
		x: u,
		y: d,
		width: f,
		height: p,
		style: l.style,
		selected: !!l.selected,
		className: r(l),
		color: t(l),
		borderRadius: i,
		strokeColor: n(l),
		strokeWidth: a,
		shapeRendering: o,
		onClick: c,
		id: l.id
	});
}
var Jk = i(qk), Yk = i(Kk), Xk = 200, Zk = 150, Qk = (e) => !e.hidden, $k = (e) => {
	let t = {
		x: -e.transform[0] / e.transform[2],
		y: -e.transform[1] / e.transform[2],
		width: e.width / e.transform[2],
		height: e.height / e.transform[2]
	}, n = !1;
	for (let t of e.nodeLookup.values()) if (!t.hidden) {
		n = !0;
		break;
	}
	return {
		viewBB: t,
		boundingRect: n ? UC(EC(e.nodeLookup, { filter: Qk }), t) : t,
		rfId: e.rfId,
		panZoom: e.panZoom,
		translateExtent: e.translateExtent,
		flowWidth: e.width,
		flowHeight: e.height,
		ariaLabelConfig: e.ariaLabelConfig
	};
}, eA = (e, t) => e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height, tA = (e, t) => eA(e.viewBB, t.viewBB) && eA(e.boundingRect, t.boundingRect) && e.rfId === t.rfId && e.panZoom === t.panZoom && e.translateExtent === t.translateExtent && e.flowWidth === t.flowWidth && e.flowHeight === t.flowHeight && e.ariaLabelConfig === t.ariaLabelConfig, nA = "react-flow__minimap-desc";
function rA({ style: e, className: t, nodeStrokeColor: n, nodeColor: r, nodeClassName: i = "", nodeBorderRadius: o = 5, nodeStrokeWidth: c, nodeComponent: l, bgColor: u, maskColor: f, maskStrokeColor: p, maskStrokeWidth: m, position: h = "bottom-right", onClick: g, onNodeClick: _, pannable: v = !1, zoomable: y = !1, ariaLabel: b, inversePan: C, zoomStep: w = 1, offsetScale: T = 5 }) {
	let E = yE(), D = d(null), { boundingRect: O, panZoom: k, viewBB: A, rfId: j, translateExtent: M, flowWidth: N, flowHeight: P, ariaLabelConfig: F } = vE($k, tA), I = e?.width ?? Xk, L = e?.height ?? Zk, ee = O.width / I, R = O.height / L, z = Math.max(ee, R), B = z * I, V = z * L, H = T * z, te = O.x - (B - O.width) / 2 - H, U = O.y - (V - O.height) / 2 - H, ne = B + H * 2, W = V + H * 2, G = `${nA}-${j}`, re = d(0), ie = d();
	re.current = z, s(() => {
		let e = E.getState().panZoom;
		if (D.current && e) return ie.current = ET({
			domNode: D.current,
			panZoom: e,
			getTransform: () => E.getState().transform,
			getViewScale: () => re.current
		}), () => {
			ie.current?.destroy();
		};
	}, [k]), s(() => {
		ie.current?.update({
			translateExtent: M,
			width: N,
			height: P,
			inversePan: C,
			pannable: v,
			zoomStep: w,
			zoomable: y
		});
	}, [
		v,
		y,
		C,
		w,
		M,
		N,
		P
	]);
	let K = g ? (e) => {
		let [t, n] = ie.current?.pointer(e) || [0, 0];
		g(e, {
			x: t,
			y: n
		});
	} : void 0, ae = a((e, t) => {
		let n = E.getState().nodeLookup.get(t).internals.userNode;
		_?.(e, n);
	}, [_]), oe = _ ? ae : void 0, q = b ?? F["minimap.ariaLabel"];
	return x(kE, {
		position: h,
		style: {
			...e,
			"--xy-minimap-background-color-props": typeof u == "string" ? u : void 0,
			"--xy-minimap-mask-background-color-props": typeof f == "string" ? f : void 0,
			"--xy-minimap-mask-stroke-color-props": typeof p == "string" ? p : void 0,
			"--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * z : void 0,
			"--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
			"--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
			"--xy-minimap-node-stroke-width-props": typeof c == "number" ? c : void 0
		},
		className: D_(["react-flow__minimap", t]),
		"data-testid": "rf__minimap",
		children: S("svg", {
			width: I,
			height: L,
			viewBox: `${te} ${U} ${ne} ${W}`,
			className: "react-flow__minimap-svg",
			role: "img",
			"aria-labelledby": G,
			ref: D,
			onClick: K,
			children: [
				q && x("title", {
					id: G,
					children: q
				}),
				x(Yk, {
					onClick: oe,
					nodeColor: r,
					nodeStrokeColor: n,
					nodeBorderRadius: o,
					nodeClassName: i,
					nodeStrokeWidth: c,
					nodeComponent: l
				}),
				x("path", {
					className: "react-flow__minimap-mask",
					d: `M${te - H},${U - H}h${ne + H * 2}v${W + H * 2}h${-ne - H * 2}z
        M${A.x},${A.y}h${A.width}v${A.height}h${-A.width}z`,
					fillRule: "evenodd",
					pointerEvents: "none"
				})
			]
		})
	});
}
rA.displayName = "MiniMap";
var iA = i(rA), aA = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, oA = {
	[VT.Line]: "right",
	[VT.Handle]: "bottom-right"
};
function sA({ nodeId: e, position: t, variant: n = VT.Handle, className: r, style: i = void 0, children: o, color: c, minWidth: l = 10, minHeight: u = 10, maxWidth: f = Number.MAX_VALUE, maxHeight: p = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: h, autoScale: g = !0, shouldResize: _, onResizeStart: v, onResize: y, onResizeEnd: b }) {
	let S = ID(), C = typeof e == "string" ? e : S, w = yE(), T = d(null), E = n === VT.Handle, D = vE(a(aA(E && g), [E, g]), mE), O = d(null), k = t ?? oA[n];
	s(() => {
		if (T.current && C) return O.current ||= QT({
			domNode: T.current,
			nodeId: C,
			getStoreItems: () => {
				let { nodeLookup: e, transform: t, snapGrid: n, snapToGrid: r, nodeOrigin: i, domNode: a } = w.getState();
				return {
					nodeLookup: e,
					transform: t,
					snapGrid: n,
					snapToGrid: r,
					nodeOrigin: i,
					paneDomNode: a
				};
			},
			onChange: (e, t) => {
				let { triggerNodeChanges: n, nodeLookup: r, parentLookup: i, nodeOrigin: a } = w.getState(), o = [], s = {
					x: e.x,
					y: e.y
				}, c = r.get(C);
				if (c && c.expandParent && c.parentId) {
					let t = c.origin ?? a, n = e.width ?? c.measured.width ?? 0, l = e.height ?? c.measured.height ?? 0, u = aT([{
						id: c.id,
						parentId: c.parentId,
						rect: {
							width: n,
							height: l,
							...ow({
								x: e.x ?? c.position.x,
								y: e.y ?? c.position.y
							}, {
								width: n,
								height: l
							}, c.parentId, r, t)
						}
					}], r, i, a);
					o.push(...u), s.x = e.x ? Math.max(t[0] * n, e.x) : void 0, s.y = e.y ? Math.max(t[1] * l, e.y) : void 0;
				}
				if (s.x !== void 0 && s.y !== void 0) {
					let e = {
						id: C,
						type: "position",
						position: { ...s }
					};
					o.push(e);
				}
				if (e.width !== void 0 && e.height !== void 0) {
					let t = {
						id: C,
						type: "dimensions",
						resizing: !0,
						setAttributes: h ? h === "horizontal" ? "width" : "height" : !0,
						dimensions: {
							width: e.width,
							height: e.height
						}
					};
					o.push(t);
				}
				for (let e of t) {
					let t = {
						...e,
						type: "position"
					};
					o.push(t);
				}
				n(o);
			},
			onEnd: ({ width: e, height: t }) => {
				let n = {
					id: C,
					type: "dimensions",
					resizing: !1,
					dimensions: {
						width: e,
						height: t
					}
				};
				w.getState().triggerNodeChanges([n]);
			}
		}), O.current.update({
			controlPosition: k,
			boundaries: {
				minWidth: l,
				minHeight: u,
				maxWidth: f,
				maxHeight: p
			},
			keepAspectRatio: m,
			resizeDirection: h,
			onResizeStart: v,
			onResize: y,
			onResizeEnd: b,
			shouldResize: _
		}), () => {
			O.current?.destroy();
		};
	}, [
		k,
		l,
		u,
		f,
		p,
		m,
		v,
		y,
		b,
		_
	]);
	let A = k.split("-");
	return x("div", {
		className: D_([
			"react-flow__resize-control",
			"nodrag",
			...A,
			n,
			r
		]),
		ref: T,
		style: {
			...i,
			scale: D,
			...c && { [E ? "backgroundColor" : "borderColor"]: c }
		},
		children: o
	});
}
i(sA);
//#endregion
//#region src/domain/graphValidation.ts
function cA(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.pages) {
		let e = [];
		for (let t of n.branch) t.goToPageId !== "end" && e.push(t.goToPageId);
		n.defaultNextPageId !== "end" && e.push(n.defaultNextPageId), t.set(n.id, e);
	}
	return t;
}
function lA(e, t, n) {
	if (t === n) return !0;
	let r = cA(e), i = /* @__PURE__ */ new Set([n]), a = [n];
	for (; a.length > 0;) {
		let e = a.shift();
		if (e === t) return !0;
		for (let t of r.get(e) ?? []) i.has(t) || (i.add(t), a.push(t));
	}
	return !1;
}
function uA(e, t, n) {
	return t === n ? {
		valid: !1,
		reason: "A page cannot branch to itself."
	} : e.pages.some((e) => e.id === n) ? lA(e, t, n) ? {
		valid: !1,
		reason: "That would create a loop in the survey flow."
	} : { valid: !0 } : {
		valid: !1,
		reason: "That page no longer exists."
	};
}
//#endregion
//#region src/builder/components/FlowMap/PageNode.tsx
var dA = i(function({ id: e, data: t, selected: n }) {
	let r = de(), i = Q((e) => e.setPageTitle), { Icon: a, color: o } = Yg(t.iconKind), c = {
		width: 9,
		height: 9,
		background: r.palette.background.paper,
		border: `2px solid ${r.palette.primary.main}`
	}, [l, u] = f(!1), [p, m] = f(t.title), h = d(null);
	s(() => {
		t.autoFocusRename && !l && (m(t.title), u(!0), t.onAutoFocusHandled?.());
	}, [t.autoFocusRename]), s(() => {
		if (!l) return;
		let e = setTimeout(() => {
			h.current?.focus(), h.current?.select();
		}, 100);
		return () => clearTimeout(e);
	}, [l]);
	let g = () => {
		let n = p.trim();
		n && n !== t.title && i(e, n), u(!1);
	};
	return /* @__PURE__ */ S(D, {
		sx: {
			width: 190,
			borderRadius: 1.5,
			border: "1px solid",
			borderStyle: t.isSnapTarget || t.isUnconnected ? "dashed" : "solid",
			borderColor: t.isSnapTarget || t.isActivePage || n ? "primary.main" : t.isUnconnected ? "text.disabled" : "divider",
			borderWidth: t.isActivePage || n || t.isSnapTarget ? 2 : 1,
			bgcolor: "background.paper",
			boxShadow: t.isSnapTarget ? `0 0 0 4px ${r.palette.primary.light}` : "0 1px 2px rgba(16,24,40,0.04)",
			p: 1.25,
			cursor: "grab",
			position: "relative"
		},
		children: [
			/* @__PURE__ */ x(WD, {
				id: "target",
				type: "target",
				position: $.Left,
				style: c,
				onClick: (e) => {
					e.stopPropagation(), t.onTargetDotClick?.(e);
				}
			}),
			/* @__PURE__ */ x(WD, {
				id: "source",
				type: "source",
				position: $.Right,
				style: c,
				onClick: (e) => {
					e.stopPropagation(), t.onSourceDotClick?.(e);
				}
			}),
			t.flowOrderDiffers && /* @__PURE__ */ x(ue, {
				title: "This page's position in the list doesn't match where it actually falls in the flow respondents take -- reordering only changes the list, not the branching itself.",
				children: /* @__PURE__ */ x(D, {
					sx: {
						position: "absolute",
						top: -8,
						right: -8,
						width: 20,
						height: 20,
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "background.paper",
						border: "1px solid",
						borderColor: "divider"
					},
					children: /* @__PURE__ */ x(Ie, { sx: {
						fontSize: 13,
						color: "text.secondary"
					} })
				})
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				sx: {
					mb: .75,
					flexWrap: "wrap",
					rowGap: .5
				},
				children: [
					t.isUnconnected && /* @__PURE__ */ x(j, {
						size: "small",
						label: "NOT CONNECTED",
						sx: {
							height: 18,
							fontSize: 9,
							fontWeight: 700,
							bgcolor: "transparent",
							color: "text.disabled",
							border: "1px dashed",
							borderColor: "text.disabled"
						}
					}),
					t.isBranchPoint && /* @__PURE__ */ x(j, {
						size: "small",
						label: "BRANCH POINT",
						sx: {
							height: 18,
							fontSize: 9,
							fontWeight: 700,
							bgcolor: "primary.light",
							color: "primary.dark"
						}
					}),
					t.isConditionalOnly && !t.isBranchPoint && !t.isUnconnected && /* @__PURE__ */ x(j, {
						size: "small",
						label: "PAGE",
						sx: {
							height: 18,
							fontSize: 9,
							fontWeight: 700,
							bgcolor: "action.hover",
							color: "text.secondary"
						}
					})
				]
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				spacing: 1,
				alignItems: "flex-start",
				children: [/* @__PURE__ */ x(D, {
					sx: {
						width: 22,
						height: 22,
						borderRadius: .75,
						flexShrink: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						bgcolor: "action.hover"
					},
					children: /* @__PURE__ */ x(a, { sx: {
						fontSize: 14,
						color: o
					} })
				}), l ? /* @__PURE__ */ x(q, {
					inputRef: h,
					size: "small",
					variant: "standard",
					value: p,
					onChange: (e) => m(e.target.value),
					onPointerDown: (e) => e.stopPropagation(),
					onBlur: g,
					onKeyDown: (e) => {
						e.key === "Enter" && g(), e.key === "Escape" && u(!1), e.stopPropagation();
					},
					fullWidth: !0,
					sx: { mt: -.25 }
				}) : /* @__PURE__ */ x(J, {
					variant: "body2",
					fontWeight: 700,
					sx: {
						lineHeight: 1.3,
						cursor: "text"
					},
					onDoubleClick: (e) => {
						e.stopPropagation(), m(t.title), u(!0);
					},
					title: "Double-click to rename",
					children: t.title
				})]
			}),
			(t.blocksSubmission || t.endsFlow) && /* @__PURE__ */ S(D, {
				sx: {
					mt: 1,
					px: .75,
					py: .4,
					borderRadius: .75,
					display: "inline-flex",
					alignItems: "center",
					gap: .5,
					bgcolor: t.blocksSubmission ? r.custom.warningBanner.bg : r.custom.successBanner.bg,
					border: t.blocksSubmission ? `1px solid ${r.custom.warningBanner.border}` : void 0
				},
				children: [t.blocksSubmission ? /* @__PURE__ */ x(Oe, { sx: {
					fontSize: 13,
					color: r.custom.warningBanner.icon
				} }) : /* @__PURE__ */ x(nt, { sx: {
					fontSize: 13,
					color: r.custom.successBanner.text
				} }), /* @__PURE__ */ x(J, {
					variant: "caption",
					sx: {
						fontWeight: 700,
						fontSize: 10,
						color: t.blocksSubmission ? r.custom.warningBanner.textStrong : r.custom.successBanner.text
					},
					children: t.blocksSubmission ? "Blocks submission" : "Ends flow"
				})]
			})
		]
	});
}), fA = i(function() {
	let e = de();
	return /* @__PURE__ */ S(D, {
		sx: {
			display: "inline-flex",
			alignItems: "center",
			gap: .5,
			px: 1.25,
			py: .6,
			borderRadius: 999,
			bgcolor: e.custom.successBanner.bg,
			border: `1px solid ${e.custom.successBanner.text}`,
			boxShadow: "0 1px 2px rgba(16,24,40,0.04)"
		},
		children: [
			/* @__PURE__ */ x(Le, { sx: {
				fontSize: 13,
				color: e.custom.successBanner.text
			} }),
			/* @__PURE__ */ x(J, {
				variant: "caption",
				sx: {
					fontWeight: 700,
					fontSize: 10,
					letterSpacing: .3,
					color: e.custom.successBanner.text
				},
				children: "START"
			}),
			/* @__PURE__ */ x(WD, {
				id: "source",
				type: "source",
				position: $.Right,
				style: { opacity: 0 }
			})
		]
	});
}), pA = i(function() {
	let e = de().custom.warningBanner;
	return /* @__PURE__ */ S(D, {
		sx: {
			display: "inline-flex",
			alignItems: "center",
			gap: .5,
			px: 1.25,
			py: .6,
			borderRadius: 999,
			bgcolor: e.bg,
			border: `1px solid ${e.icon}`,
			boxShadow: "0 1px 2px rgba(16,24,40,0.04)"
		},
		children: [
			/* @__PURE__ */ x(WD, {
				id: "target",
				type: "target",
				position: $.Left,
				style: { opacity: 0 }
			}),
			/* @__PURE__ */ x(Oe, { sx: {
				fontSize: 13,
				color: e.icon
			} }),
			/* @__PURE__ */ x(J, {
				variant: "caption",
				sx: {
					fontWeight: 700,
					fontSize: 10,
					letterSpacing: .3,
					color: e.textStrong
				},
				children: "DISQUALIFIED"
			})
		]
	});
}), mA = i(function({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: i, sourcePosition: a, targetPosition: o, label: s, data: c, markerEnd: l, style: u, selected: d }) {
	let f = de(), [p, m, h] = Rw({
		sourceX: t,
		sourceY: n,
		sourcePosition: a,
		targetX: r,
		targetY: i,
		targetPosition: o
	}), g = d ? {
		...u,
		strokeWidth: 3.5,
		filter: `drop-shadow(0 0 3px ${f.palette.primary.main})`
	} : u;
	return /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(wO, {
		id: e,
		path: p,
		markerEnd: l,
		style: g
	}), s || c?.ruleId || c?.isDefault ? /* @__PURE__ */ x(Tk, { children: /* @__PURE__ */ S(D, {
		sx: {
			position: "absolute",
			transform: `translate(-50%, -50%) translate(${m}px,${h}px)`,
			pointerEvents: "all",
			display: "flex",
			alignItems: "center",
			gap: .25,
			"&:hover .edge-delete-btn": { opacity: 1 }
		},
		className: "nodrag nopan",
		children: [s && /* @__PURE__ */ x(D, {
			component: "button",
			onClick: (e) => {
				e.stopPropagation(), c?.onLabelClick?.();
			},
			sx: {
				font: "inherit",
				fontSize: 12,
				fontWeight: 600,
				color: c?.color,
				bgcolor: "background.default",
				px: .75,
				py: .25,
				borderRadius: .75,
				border: d ? "1.5px solid" : "none",
				borderColor: "primary.main",
				cursor: c?.onLabelClick ? "pointer" : "default"
			},
			children: s
		}), (c?.ruleId || c?.isDefault) && /* @__PURE__ */ x(ue, {
			title: "Delete this connection",
			children: /* @__PURE__ */ x(L, {
				className: "edge-delete-btn",
				size: "small",
				onClick: (e) => {
					e.stopPropagation(), c?.onDeleteRequest?.();
				},
				sx: {
					opacity: +!!d,
					transition: "opacity 0.15s",
					width: 18,
					height: 18,
					bgcolor: d ? "error.main" : "background.paper",
					color: d ? "error.contrastText" : "inherit",
					border: "1px solid",
					borderColor: d ? "error.main" : "divider",
					"&:hover": {
						bgcolor: "error.main",
						color: "error.contrastText",
						borderColor: "error.main"
					}
				},
				children: /* @__PURE__ */ x(Ce, { sx: { fontSize: 12 } })
			})
		})]
	}) }) : null] });
}), hA = [
	{
		value: "eq",
		label: "is",
		needsValue: !0
	},
	{
		value: "neq",
		label: "is not",
		needsValue: !0
	},
	{
		value: "contains",
		label: "contains",
		needsValue: !0
	},
	{
		value: "gt",
		label: ">",
		needsValue: !0
	},
	{
		value: "gte",
		label: "≥",
		needsValue: !0
	},
	{
		value: "lt",
		label: "<",
		needsValue: !0
	},
	{
		value: "lte",
		label: "≤",
		needsValue: !0
	},
	{
		value: "isEmpty",
		label: "is empty",
		needsValue: !1
	},
	{
		value: "isNotEmpty",
		label: "is not empty",
		needsValue: !1
	}
];
function gA(e) {
	let t = e[0];
	return {
		fieldPath: t?.scope ?? "",
		operator: "eq",
		value: t?.questionType === "boolean" || ""
	};
}
function _A({ open: e, anchorEl: t, fields: n, initialLeaf: r, destinationLabel: i, onClose: a, onSave: o, onEditFullRule: c }) {
	let [l, u] = f(r ?? gA(n));
	s(() => {
		e && u(r ?? gA(n));
	}, [
		e,
		t,
		r
	]);
	let d = n.find((e) => e.scope === l.fieldPath), p = hA.find((e) => e.value === l.operator);
	return /* @__PURE__ */ x(W, {
		open: e,
		anchorEl: t,
		onClose: a,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "center"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "center"
		},
		children: /* @__PURE__ */ S(D, {
			sx: {
				p: 2,
				width: 320
			},
			children: [
				/* @__PURE__ */ x(J, {
					variant: "subtitle2",
					sx: { mb: 1.5 },
					children: r ? "Edit branch condition" : "New branch"
				}),
				n.length === 0 ? /* @__PURE__ */ x(J, {
					variant: "body2",
					color: "text.secondary",
					sx: { mb: 2 },
					children: "No earlier questions to branch on yet — add a question to this page or an earlier one first."
				}) : /* @__PURE__ */ S(K, {
					spacing: 1.25,
					sx: { mb: 2 },
					children: [
						/* @__PURE__ */ x(J, {
							variant: "caption",
							color: "text.secondary",
							children: "IF"
						}),
						/* @__PURE__ */ x(G, {
							size: "small",
							fullWidth: !0,
							value: l.fieldPath,
							onChange: (e) => {
								let t = n.find((t) => t.scope === e.target.value);
								u({
									fieldPath: e.target.value,
									operator: l.operator,
									value: t?.questionType === "boolean" || ""
								});
							},
							children: n.map((e) => /* @__PURE__ */ x(U, {
								value: e.scope,
								children: e.label
							}, e.scope))
						}),
						/* @__PURE__ */ S(K, {
							direction: "row",
							spacing: 1,
							children: [/* @__PURE__ */ x(G, {
								size: "small",
								value: l.operator,
								onChange: (e) => u({
									...l,
									operator: e.target.value
								}),
								sx: { flex: 1 },
								children: hA.map((e) => /* @__PURE__ */ x(U, {
									value: e.value,
									children: e.label
								}, e.value))
							}), p?.needsValue && /* @__PURE__ */ x(D, {
								sx: { flex: 1 },
								children: /* @__PURE__ */ x(c_, {
									leaf: l,
									field: d,
									onChange: (e) => u({
										...l,
										value: e
									})
								})
							})]
						}),
						/* @__PURE__ */ S(J, {
							variant: "caption",
							color: "text.secondary",
							children: ["THEN jump to ", /* @__PURE__ */ x("strong", { children: i })]
						})
					]
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					justifyContent: "space-between",
					alignItems: "center",
					children: [c ? /* @__PURE__ */ x(O, {
						size: "small",
						onClick: c,
						children: "Edit full rule…"
					}) : /* @__PURE__ */ x(D, {}), /* @__PURE__ */ S(K, {
						direction: "row",
						spacing: 1,
						children: [/* @__PURE__ */ x(O, {
							size: "small",
							color: "inherit",
							onClick: a,
							children: "Cancel"
						}), /* @__PURE__ */ x(O, {
							size: "small",
							variant: "contained",
							disabled: n.length === 0,
							onClick: () => {
								l.fieldPath && o(l);
							},
							children: "Save"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/builder/components/FlowMap/FlowOverviewPanel.tsx
function vA({ label: e, value: t }) {
	return /* @__PURE__ */ S(K, {
		direction: "row",
		justifyContent: "space-between",
		alignItems: "center",
		children: [/* @__PURE__ */ x(J, {
			variant: "body2",
			color: "text.secondary",
			children: e
		}), /* @__PURE__ */ x(J, {
			variant: "body2",
			fontWeight: 700,
			children: t
		})]
	});
}
function yA() {
	let e = Wf(Q((e) => e.survey)), t = qg((e) => e.rightPanelWidth), n = qg((e) => e.setRightPanelWidth);
	return /* @__PURE__ */ S(D, {
		component: "aside",
		sx: {
			position: "relative",
			width: t,
			flexShrink: 0,
			borderLeft: "1px solid",
			borderColor: "divider",
			bgcolor: "background.paper",
			p: 2.5
		},
		children: [
			/* @__PURE__ */ x($g, {
				edge: "left",
				width: t,
				min: Gg.min,
				max: Gg.max,
				defaultWidth: Gg.default,
				onChange: n,
				label: "Resize inspector panel"
			}),
			/* @__PURE__ */ x(J, {
				variant: "subtitle1",
				fontWeight: 700,
				gutterBottom: !0,
				children: "Flow overview"
			}),
			/* @__PURE__ */ x(J, {
				variant: "body2",
				color: "text.secondary",
				sx: { mb: 2.5 },
				children: "The whole survey path, drawn from your pages and branching rules."
			}),
			/* @__PURE__ */ S(K, {
				spacing: 1.5,
				sx: {
					p: 1.5,
					borderRadius: 1.5,
					border: "1px solid",
					borderColor: "divider"
				},
				children: [
					/* @__PURE__ */ x(vA, {
						label: "Pages",
						value: e.pageCount
					}),
					/* @__PURE__ */ x(vA, {
						label: "Branch points",
						value: e.branchPointCount
					}),
					/* @__PURE__ */ x(vA, {
						label: "Paths to an ending",
						value: e.pathsToEndingCount
					})
				]
			}),
			/* @__PURE__ */ x(J, {
				variant: "caption",
				color: "text.secondary",
				sx: {
					display: "block",
					mt: 2.5
				},
				children: "Select a page on the map to view and edit it here."
			})
		]
	});
}
//#endregion
//#region src/builder/components/FlowMap/FlowMapPagePanel.tsx
function bA({ pageId: e, onClose: t }) {
	let n = Q((e) => e.survey), r = n.pages.find((t) => t.id === e), i = qg((e) => e.rightPanelWidth), a = qg((e) => e.setRightPanelWidth);
	if (!r) return null;
	let o = Hf(n, r.id), s = Uf(n, r.id);
	return /* @__PURE__ */ S(D, {
		component: "aside",
		sx: {
			position: "relative",
			width: i,
			flexShrink: 0,
			borderLeft: "1px solid",
			borderColor: "divider",
			bgcolor: "background.paper",
			display: "flex",
			flexDirection: "column",
			minHeight: 0
		},
		children: [
			/* @__PURE__ */ x($g, {
				edge: "left",
				width: i,
				min: Gg.min,
				max: Gg.max,
				defaultWidth: Gg.default,
				onChange: a,
				label: "Resize inspector panel"
			}),
			/* @__PURE__ */ S(K, {
				direction: "row",
				alignItems: "flex-start",
				spacing: 1,
				sx: {
					p: 2,
					pb: 1.5,
					borderBottom: "1px solid",
					borderColor: "divider",
					flexShrink: 0
				},
				children: [/* @__PURE__ */ S(D, {
					sx: {
						flex: 1,
						minWidth: 0
					},
					children: [/* @__PURE__ */ x(J, {
						variant: "subtitle1",
						fontWeight: 700,
						noWrap: !0,
						children: r.title
					}), /* @__PURE__ */ S(K, {
						direction: "row",
						spacing: .75,
						sx: {
							mt: .5,
							flexWrap: "wrap",
							rowGap: .5
						},
						children: [s && /* @__PURE__ */ x(j, {
							size: "small",
							label: "Not connected",
							sx: {
								height: 18,
								fontSize: 10,
								bgcolor: "transparent",
								color: "text.disabled",
								border: "1px dashed",
								borderColor: "text.disabled"
							}
						}), o && !s && /* @__PURE__ */ x(j, {
							size: "small",
							label: "Conditional",
							sx: {
								height: 18,
								fontSize: 10,
								bgcolor: "action.hover",
								color: "text.secondary"
							}
						})]
					})]
				}), /* @__PURE__ */ x(ue, {
					title: "Close (Esc)",
					children: /* @__PURE__ */ x(L, {
						size: "small",
						onClick: t,
						"aria-label": "Close page panel",
						children: /* @__PURE__ */ x(Ce, { fontSize: "small" })
					})
				})]
			}),
			/* @__PURE__ */ S(D, {
				sx: {
					maxHeight: "48%",
					overflowY: "auto",
					p: 2
				},
				children: [/* @__PURE__ */ x(J, {
					variant: "caption",
					color: "text.secondary",
					sx: {
						display: "block",
						mb: 1.5
					},
					children: "Questions"
				}), /* @__PURE__ */ x(__, { page: r })]
			}),
			/* @__PURE__ */ x(P, {}),
			/* @__PURE__ */ x(T_, { pageId: r.id })
		]
	});
}
//#endregion
//#region src/builder/components/FlowMap/DotContextMenu.tsx
function xA({ state: e, onClose: t, onAddPage: n, onConnectExisting: r, onSetAsStart: i, onDuplicate: a, onDelete: o }) {
	let s = e?.handleType === "target";
	return /* @__PURE__ */ S(te, {
		open: e !== null,
		anchorEl: e?.anchorEl ?? null,
		onClose: t,
		anchorOrigin: {
			vertical: "center",
			horizontal: s ? "left" : "right"
		},
		transformOrigin: {
			vertical: "center",
			horizontal: s ? "right" : "left"
		},
		children: [
			/* @__PURE__ */ S(J, {
				variant: "caption",
				color: "text.secondary",
				sx: {
					px: 2,
					py: .5,
					display: "block"
				},
				noWrap: !0,
				children: [
					e?.pageTitle,
					" · ",
					s ? "incoming" : "outgoing"
				]
			}),
			/* @__PURE__ */ x(P, {}),
			/* @__PURE__ */ S(U, {
				onClick: n,
				dense: !0,
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Me, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Add page" })]
			}),
			/* @__PURE__ */ S(U, {
				onClick: r,
				dense: !0,
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(rt, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Connect to existing page…" })]
			}),
			s && !e?.isStartPage && /* @__PURE__ */ S(U, {
				onClick: i,
				dense: !0,
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Le, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Set as start page" })]
			}),
			/* @__PURE__ */ S(U, {
				onClick: a,
				dense: !0,
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Qe, { fontSize: "small" }) }), /* @__PURE__ */ x(H, { children: "Duplicate page" })]
			}),
			/* @__PURE__ */ x(P, {}),
			/* @__PURE__ */ S(U, {
				onClick: o,
				dense: !0,
				sx: { color: "error.main" },
				children: [/* @__PURE__ */ x(V, { children: /* @__PURE__ */ x(Ne, {
					fontSize: "small",
					color: "error"
				}) }), /* @__PURE__ */ x(H, { children: "Delete page" })]
			})
		]
	});
}
//#endregion
//#region src/builder/components/FlowMap/ConnectExistingPopover.tsx
function SA({ state: e, onClose: t, onSelect: n }) {
	let [r, i] = f(""), a = e?.handleType === "target", o = (e?.candidates ?? []).filter((e) => e.title.toLowerCase().includes(r.toLowerCase()));
	return /* @__PURE__ */ x(W, {
		open: e !== null,
		anchorEl: e?.anchorEl ?? null,
		onClose: () => {
			i(""), t();
		},
		anchorOrigin: {
			vertical: "center",
			horizontal: a ? "left" : "right"
		},
		transformOrigin: {
			vertical: "center",
			horizontal: a ? "right" : "left"
		},
		children: /* @__PURE__ */ S(D, {
			sx: {
				width: 260,
				p: 1.5
			},
			children: [
				/* @__PURE__ */ S(J, {
					variant: "caption",
					color: "text.secondary",
					sx: {
						display: "block",
						mb: 1
					},
					children: [
						"Connect ",
						e?.pageTitle,
						" ",
						a ? "from" : "to",
						" an existing page"
					]
				}),
				/* @__PURE__ */ x(q, {
					size: "small",
					fullWidth: !0,
					autoFocus: !0,
					placeholder: "Search pages…",
					value: r,
					onChange: (e) => i(e.target.value)
				}),
				/* @__PURE__ */ S(R, {
					dense: !0,
					sx: {
						maxHeight: 260,
						overflowY: "auto",
						mt: .5
					},
					children: [
						e && e.candidates.length === 0 && /* @__PURE__ */ x(J, {
							variant: "body2",
							color: "text.secondary",
							sx: {
								px: 1,
								py: 1
							},
							children: "No other pages can be linked here."
						}),
						e && e.candidates.length > 0 && o.length === 0 && /* @__PURE__ */ S(J, {
							variant: "body2",
							color: "text.secondary",
							sx: {
								px: 1,
								py: 1
							},
							children: [
								"No pages match \"",
								r,
								"\"."
							]
						}),
						o.map((e) => /* @__PURE__ */ x(B, {
							onClick: () => {
								i(""), n(e.id);
							},
							children: /* @__PURE__ */ x(H, { primary: e.title })
						}, e.id))
					]
				})
			]
		})
	});
}
//#endregion
//#region src/builder/components/FlowMap/FlowMapView.tsx
var CA = {
	pageNode: dA,
	startNode: fA,
	disqualifiedNode: pA
}, wA = { branchEdge: mA }, TA = 90;
function EA(e) {
	return e?.when.conditions.find((e) => !e.logic) ?? null;
}
function DA() {
	let e = de();
	return /* @__PURE__ */ S(ne, {
		variant: "outlined",
		sx: {
			p: 1.5,
			borderRadius: 1.5,
			width: 200
		},
		children: [/* @__PURE__ */ x(J, {
			variant: "subtitle2",
			sx: { mb: 1 },
			children: "Legend"
		}), /* @__PURE__ */ S(K, {
			spacing: .75,
			children: [
				/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(D, { sx: {
						width: 10,
						height: 10,
						borderRadius: "50%",
						bgcolor: e.custom.successBanner.bg,
						border: `1.5px solid ${e.custom.successBanner.text}`
					} }), /* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Start"
					})]
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(D, { sx: {
						width: 20,
						height: 2,
						bgcolor: e.palette.warning.main
					} }), /* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Branch · highlighted"
					})]
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(D, { sx: {
						width: 20,
						height: 2,
						bgcolor: e.palette.text.disabled
					} }), /* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Branch · default"
					})]
				}),
				/* @__PURE__ */ S(K, {
					direction: "row",
					spacing: 1,
					alignItems: "center",
					children: [/* @__PURE__ */ x(D, { sx: {
						width: 10,
						height: 10,
						borderRadius: .5,
						bgcolor: e.custom.warningBanner.icon
					} }), /* @__PURE__ */ x(J, {
						variant: "caption",
						color: "text.secondary",
						children: "Blocks submission"
					})]
				})
			]
		})]
	});
}
function OA() {
	let e = bl(), t = Q((e) => e.survey), n = Q((e) => e.selectedPageId), r = Q((e) => e.selectPage), i = Q((e) => e.clearSelectedPage), a = Q((e) => e.setViewMode), o = Q((e) => e.addPage), c = Q((e) => e.duplicatePage), u = Q((e) => e.removePage), p = Q((e) => e.setStartPage), m = Q((e) => e.reorderPage), h = Q((e) => e.addBranchRule), g = Q((e) => e.updateBranchRule), _ = Q((e) => e.removeBranchRule), v = Q((e) => e.setDefaultNextPage), y = zl((e) => e.overrides), b = zl((e) => e.setOverride), C = zl((e) => e.clearOverride), w = Ul((e) => e.showError), T = de(), E = d(null), k = d(null), [A, j] = f(null), [M, N] = f(null), [P, F] = f(null), [I, L] = f(null), [ee, R] = f(null), [z, B] = f(null), V = (e, n) => (r) => {
		let i = t.pages.find((t) => t.id === e);
		i && R({
			anchorEl: r.currentTarget,
			pageId: i.id,
			pageTitle: i.title,
			handleType: n,
			isStartPage: i.id === t.startPageId
		});
	}, H = (e, t, n, r, i) => {
		F({
			anchorEl: i,
			sourcePageId: e,
			targetPageId: t,
			ruleId: n,
			initialLeaf: r
		});
	}, te = (e) => e.isDefault ? "Remove this page's default path? It will end the survey here instead of continuing on (use Undo right after if you change your mind)." : "Delete this branch rule? This can't be undone by itself (use Undo right after if you change your mind).", U = (e, t) => {
		t.isDefault ? v(e, "end") : t.ruleId && _(e, t.ruleId);
	}, ne = (e) => {
		window.confirm(te(e.data)) && (U(e.source, e.data), L(null));
	}, W = l(() => Yf(t, y), [t, y]), [G, re] = f([]), [ie, K] = f([]), ae = (e) => {
		let n = e.data.variant === "disqualifying" ? T.custom.warningBanner.icon : e.data.variant === "positive" ? T.palette.warning.main : T.palette.text.disabled;
		return {
			id: e.id,
			source: e.source,
			target: e.target,
			label: e.label,
			type: "branchEdge",
			reconnectable: !0,
			style: e.data.variant === "disqualifying" ? {
				stroke: n,
				strokeWidth: 1.75,
				strokeDasharray: "6 4"
			} : {
				stroke: n,
				strokeWidth: 1.75
			},
			markerEnd: {
				type: yC.ArrowClosed,
				color: n,
				width: 16,
				height: 16
			},
			data: {
				...e.data,
				color: n,
				onLabelClick: e.data.ruleId ? () => {
					let n = t.pages.find((t) => t.id === e.source)?.branch.find((t) => t.id === e.data.ruleId), r = E.current?.querySelector(`.react-flow__node[data-id="${CSS.escape(e.target)}"]`);
					H(e.source, e.target, e.data.ruleId, EA(n), r ?? null);
				} : void 0,
				onDeleteRequest: () => void ne(e)
			}
		};
	};
	s(() => {
		let e = W.nodes.map((e) => ({
			...e,
			selected: I?.type === "node" && I.id === e.id,
			data: {
				...e.data,
				isActivePage: e.id === n,
				isSnapTarget: e.id === A,
				autoFocusRename: e.id === M,
				onAutoFocusHandled: () => N(null),
				onTargetDotClick: V(e.id, "target"),
				onSourceDotClick: V(e.id, "source")
			}
		})), t = W.startMarker ? {
			id: W.startMarker.id,
			type: "startNode",
			position: W.startMarker.position,
			data: {},
			draggable: !1,
			selectable: !1,
			connectable: !1,
			focusable: !1
		} : null, r = W.disqualifiedTerminal ? {
			id: W.disqualifiedTerminal.id,
			type: "disqualifiedNode",
			position: W.disqualifiedTerminal.position,
			data: {},
			draggable: !1,
			selectable: !1,
			connectable: !1,
			focusable: !1
		} : null, i = W.edges.map((e) => ({
			...ae(e),
			selected: I?.type === "edge" && I.id === e.id
		})), a = W.startMarker ? {
			id: W.startMarker.edge.id,
			source: W.startMarker.edge.source,
			target: W.startMarker.edge.target,
			sourceHandle: "source",
			targetHandle: "target",
			type: "branchEdge",
			label: "",
			selectable: !1,
			focusable: !1,
			deletable: !1,
			style: {
				stroke: T.custom.successBanner.text,
				strokeWidth: 1.75
			},
			markerEnd: {
				type: yC.ArrowClosed,
				color: T.custom.successBanner.text,
				width: 16,
				height: 16
			},
			data: {
				variant: "neutral",
				isDefault: !1,
				color: T.custom.successBanner.text
			}
		} : null, o = T.custom.warningBanner.icon, s = (W.disqualifiedTerminal?.edges ?? []).map((e) => ({
			id: e.id,
			source: e.source,
			target: e.target,
			targetHandle: "target",
			type: "branchEdge",
			label: e.label,
			selectable: !1,
			focusable: !1,
			deletable: !1,
			style: {
				stroke: o,
				strokeWidth: 1.75,
				strokeDasharray: "6 4"
			},
			markerEnd: {
				type: yC.ArrowClosed,
				color: o,
				width: 16,
				height: 16
			},
			data: {
				variant: "disqualifying",
				isDefault: !1,
				color: o
			}
		})), c = [];
		t && c.push(t), r && c.push(r), re([...c, ...e]), K([
			...a ? [a] : [],
			...s,
			...i
		]);
	}, [W, T]), s(() => {
		re((e) => e.map((e) => e.type === "pageNode" ? {
			...e,
			selected: I?.type === "node" && I.id === e.id,
			data: {
				...e.data,
				isActivePage: e.id === n,
				isSnapTarget: e.id === A,
				autoFocusRename: e.id === M,
				onAutoFocusHandled: () => N(null)
			}
		} : e)), K((e) => e.map((e) => ({
			...e,
			selected: I?.type === "edge" && I.id === e.id
		})));
	}, [
		n,
		A,
		I,
		M
	]);
	let oe = (e) => {
		let t = e.filter((e) => e.type === "position" || e.type === "dimensions");
		t.length !== 0 && re((e) => $E(t, e));
	}, q = (e, t) => {
		let n = null, r = Infinity;
		for (let i of G) {
			if (i.type !== "pageNode" || i.id === e) continue;
			let a = i.position.x - t.x, o = i.position.y - t.y, s = Math.hypot(a, o);
			s < TA && s < r && (n = i, r = s);
		}
		return n;
	}, se = () => F(null), ce = (e, t, n) => {
		let r = E.current?.querySelector(`.react-flow__node[data-id="${CSS.escape(t)}"]`);
		F({
			anchorEl: r ?? n ?? null,
			sourcePageId: e,
			targetPageId: t,
			initialLeaf: null
		});
	}, le = (e) => {
		if (!P) return;
		let t = {
			logic: "AND",
			conditions: [e]
		};
		P.ruleId ? g(P.sourcePageId, P.ruleId, {
			when: t,
			goToPageId: P.targetPageId
		}) : h(P.sourcePageId, {
			id: Qc("branch"),
			when: t,
			goToPageId: P.targetPageId
		}), se();
	}, ue = (t, n) => {
		if (!t.source || !t.target) return;
		let r = e.getState().survey, i = uA(r, t.source, t.target);
		if (!i.valid) {
			w(i.reason ?? "That branch is not allowed.");
			return;
		}
		let a = r.pages.find((e) => e.id === t.source);
		if (!(a && (a.defaultNextPageId !== "end" || a.branch.length > 0))) {
			v(t.source, t.target);
			return;
		}
		ce(t.source, t.target, n);
	}, J = (e, n, r) => {
		let i = "clientX" in e ? e : e.changedTouches?.[0];
		if (!i) return;
		let a = k.current;
		if (!a) return;
		let o = a.screenToFlowPosition({
			x: i.clientX,
			y: i.clientY
		}), s = G.find((e) => o.x >= e.position.x && o.x <= e.position.x + 190 && o.y >= e.position.y && o.y <= e.position.y + 100);
		if (!s || r !== "source") return;
		let c = n.source, l = s.id;
		if (l === n.target) return;
		let u = uA(t, c, l);
		if (!u.valid) {
			w(u.reason ?? "That branch is not allowed.");
			return;
		}
		if (n.data?.isDefault) {
			v(c, l);
			return;
		}
		let d = n.data?.ruleId;
		if (!d) return;
		let f = t.pages.find((e) => e.id === c)?.branch.find((e) => e.id === d), p = E.current?.querySelector(`.react-flow__node[data-id="${CSS.escape(l)}"]`);
		H(c, l, d, EA(f), p ?? null);
	}, fe = () => R(null), pe = (e, t, n) => t === "source" ? {
		source: e,
		target: n,
		sourceHandle: "source",
		targetHandle: "target"
	} : {
		source: n,
		target: e,
		sourceHandle: "source",
		targetHandle: "target"
	}, me = () => {
		if (!ee) return;
		let { pageId: t, handleType: n, anchorEl: r } = ee;
		o();
		let i = e.getState().selectedPageId;
		fe(), i && ue(pe(t, n, i), r);
	}, he = () => {
		if (!ee) return;
		let { pageId: t, handleType: n, anchorEl: r } = ee;
		c(t);
		let i = e.getState().selectedPageId;
		fe(), i && ue(pe(t, n, i), r);
	}, ge = () => {
		ee && (p(ee.pageId), fe());
	}, _e = () => {
		if (!ee) return;
		let { pageId: e, pageTitle: n } = ee;
		if (fe(), t.pages.length <= 1) {
			w("A survey needs at least one page.");
			return;
		}
		Zg(t, e, n) && u(e);
	}, ve = (e, n) => t.pages.filter((t) => t.id !== e).filter((r) => {
		let i = pe(e, n, r.id);
		return !i.source || !i.target ? !1 : uA(t, i.source, i.target).valid;
	}).map((e) => ({
		id: e.id,
		title: e.title
	})), ye = () => {
		if (!ee) return;
		let { pageId: e, pageTitle: t, handleType: n, anchorEl: r } = ee;
		B({
			anchorEl: r,
			pageId: e,
			pageTitle: t,
			handleType: n,
			candidates: ve(e, n)
		}), fe();
	}, be = () => B(null), xe = (e) => {
		if (!z) return;
		let { pageId: t, handleType: n, anchorEl: r } = z;
		be(), ue(pe(t, n, e), r);
	}, Y = (e, t) => {
		if (t.type !== "pageNode") return;
		let n = q(t.id, t.position);
		j(n?.id ?? null);
	}, Se = (e, n) => {
		if (n.type !== "pageNode") return;
		let r = q(n.id, n.position);
		if (j(null), r) {
			let e = t.pages.findIndex((e) => e.id === n.id), i = t.pages.findIndex((e) => e.id === r.id);
			if (e === -1 || i === -1) return;
			let a = n.position.x <= r.position.x ? i : i + 1;
			e < a && --a, a = Math.max(0, Math.min(a, t.pages.length - 1)), a !== e && m(e, a), C(n.id);
		} else b(n.id, n.position);
	}, Ce = (e, t) => {
		t.type === "pageNode" && (e.target.closest(".react-flow__handle") || (r(t.id), L({
			type: "node",
			id: t.id
		})));
	}, we = (e, t) => {
		t.type === "pageNode" && (e.target.closest(".react-flow__handle") || (r(t.id), a("builder")));
	}, X = (e, t) => {
		L({
			type: "edge",
			id: t.id
		});
	}, Te = () => {
		L(null), i();
	};
	s(() => {
		if (P || ee || z) return;
		let e = (e) => {
			e.key === "Escape" && i();
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		P,
		ee,
		z,
		i
	]);
	let Ee = () => {
		o();
		let t = e.getState().selectedPageId;
		k.current?.fitView({
			padding: .3,
			duration: 0
		}), requestAnimationFrame(() => N(t));
	}, De = (e) => {
		let n = "source" in e ? e.source : void 0, r = "target" in e ? e.target : void 0;
		return !n || !r ? !1 : uA(t, n, r).valid;
	}, Oe = P ? y_(t, P.sourcePageId) : [], ke = P ? t.pages.find((e) => e.id === P.targetPageId)?.title ?? "" : "";
	return /* @__PURE__ */ S(D, {
		sx: {
			flex: 1,
			display: "flex",
			minHeight: 0
		},
		children: [/* @__PURE__ */ S(D, {
			ref: E,
			sx: {
				flex: 1,
				minWidth: 0,
				position: "relative"
			},
			children: [
				/* @__PURE__ */ S(Ck, {
					nodes: G,
					edges: ie,
					nodeTypes: CA,
					edgeTypes: wA,
					onNodesChange: oe,
					onInit: (e) => {
						k.current = e;
					},
					onNodeClick: Ce,
					onNodeDoubleClick: we,
					onEdgeClick: X,
					onPaneClick: Te,
					onNodeDrag: Y,
					onNodeDragStop: Se,
					onConnect: ue,
					onReconnect: () => {},
					onReconnectEnd: J,
					edgesReconnectable: !0,
					isValidConnection: De,
					onBeforeDelete: async ({ nodes: e, edges: n }) => {
						let r = e.filter((e) => e.id === "__start__" || e.id === "__disqualified__" ? !1 : t.pages.length <= 1 ? (w("A survey needs at least one page."), !1) : Zg(t, e.id, e.data.title)), i = new Set(e.map((e) => e.id)), a = n.filter((e) => !i.has(e.source) && !i.has(e.target)).filter((e) => window.confirm(te(e.data)));
						return r.length === 0 && a.length === 0 ? !1 : {
							nodes: r,
							edges: a
						};
					},
					onNodesDelete: (e) => {
						for (let t of e) u(t.id);
						L(null);
					},
					onEdgesDelete: (e) => {
						for (let t of e) U(t.source, t.data);
						L(null);
					},
					deleteKeyCode: ["Delete", "Backspace"],
					fitView: !0,
					proOptions: { hideAttribution: !0 },
					children: [
						/* @__PURE__ */ x(Mk, {
							color: T.palette.divider,
							gap: 20
						}),
						/* @__PURE__ */ x(Vk, { showInteractive: !1 }),
						/* @__PURE__ */ x(iA, {
							pannable: !0,
							zoomable: !0,
							style: { background: T.palette.background.paper }
						}),
						/* @__PURE__ */ x(kE, {
							position: "top-left",
							children: /* @__PURE__ */ x(DA, {})
						}),
						/* @__PURE__ */ x(kE, {
							position: "bottom-left",
							children: /* @__PURE__ */ x(O, {
								size: "small",
								variant: "outlined",
								startIcon: /* @__PURE__ */ x(Me, { fontSize: "small" }),
								onClick: Ee,
								sx: { bgcolor: "background.paper" },
								children: "Add page"
							})
						})
					]
				}),
				/* @__PURE__ */ x(_A, {
					open: P !== null,
					anchorEl: P?.anchorEl ?? null,
					fields: Oe,
					initialLeaf: P?.initialLeaf,
					destinationLabel: ke,
					onClose: se,
					onSave: le,
					onEditFullRule: P ? () => {
						r(P.sourcePageId), se();
					} : void 0
				}),
				/* @__PURE__ */ x(xA, {
					state: ee,
					onClose: fe,
					onAddPage: me,
					onConnectExisting: ye,
					onSetAsStart: ge,
					onDuplicate: he,
					onDelete: _e
				}),
				/* @__PURE__ */ x(SA, {
					state: z,
					onClose: be,
					onSelect: xe
				})
			]
		}), n ? /* @__PURE__ */ x(bA, {
			pageId: n,
			onClose: i
		}) : /* @__PURE__ */ x(yA, {})]
	});
}
//#endregion
//#region src/builder/components/GlobalSnackbar.tsx
function kA() {
	let e = Ul((e) => e.message), t = Ul((e) => e.severity), n = Ul((e) => e.clear);
	return /* @__PURE__ */ x(ie, {
		open: e !== null,
		autoHideDuration: 4e3,
		onClose: n,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "center"
		},
		children: /* @__PURE__ */ x(C, {
			severity: t,
			onClose: n,
			variant: "filled",
			sx: { width: "100%" },
			children: e
		})
	});
}
//#endregion
//#region src/builder/components/BuilderLayout.tsx
function AA({ saveStatus: e, onSave: t }) {
	let n = Q((e) => e.survey), r = Q((e) => e.selectedPageId), i = Q((e) => e.viewMode), a = Q((e) => e.undo), o = Q((e) => e.redo);
	s(() => {
		let e = (e) => {
			if (e.metaKey || e.ctrlKey) {
				if (e.key.toLowerCase() === "s") {
					e.preventDefault(), t();
					return;
				}
				e.key.toLowerCase() === "z" && (e.preventDefault(), e.shiftKey ? o() : a());
			}
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		a,
		o,
		t
	]);
	let c = n.pages.find((e) => e.id === r);
	return /* @__PURE__ */ S(D, {
		sx: {
			height: "100%",
			display: "flex",
			flexDirection: "column"
		},
		children: [
			/* @__PURE__ */ x(jp, {
				saveStatus: e,
				onSave: t
			}),
			/* @__PURE__ */ S(D, {
				sx: {
					flex: 1,
					display: "flex",
					minHeight: 0
				},
				children: [/* @__PURE__ */ x(a_, {}), i === "flow" ? /* @__PURE__ */ x(OA, {}) : c ? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(D, {
					sx: {
						flex: 1,
						minWidth: 0,
						overflowY: "auto"
					},
					children: /* @__PURE__ */ x(v_, {})
				}), /* @__PURE__ */ x(E_, { pageId: c.id })] }) : /* @__PURE__ */ x(K, {
					sx: { flex: 1 },
					alignItems: "center",
					justifyContent: "center",
					children: /* @__PURE__ */ x(J, {
						color: "text.secondary",
						children: "No page selected."
					})
				})]
			}),
			/* @__PURE__ */ x(kA, {})
		]
	});
}
//#endregion
//#region src/builder/surveyReadiness.ts
function jA(e) {
	let t = [];
	e.title.trim().length === 0 && t.push("Survey name is required."), (e.type ?? "").trim() || t.push("Survey type is required.");
	for (let n of e.pages) for (let e of n.questions) {
		let r = e.label || e.title || e.id;
		if (e.type === "turnstile" && !e.turnstileSiteKey?.trim() && t.push(`"${r}" (${n.title}): Turnstile SiteKey is required.`), e.disqualifyingOptions) for (let [i, a] of Object.entries(e.disqualifyingOptions)) (typeof a == "string" ? a : a?.title)?.trim() || t.push(`"${r}" (${n.title}): disqualification notice for "${i}" is required.`);
	}
	return t;
}
//#endregion
//#region src/SurveyBuilder.tsx
var MA = y({ key: "sbk-builder" });
function NA(e) {
	let t = e.survey ? mp(e.survey) : { valid: !0 }, n = l(() => yt(e.primaryColor), [e.primaryColor]);
	return /* @__PURE__ */ x(v, {
		value: MA,
		children: /* @__PURE__ */ S(m, {
			theme: n,
			children: [/* @__PURE__ */ x(_, {}), /* @__PURE__ */ x(p, {
				className: e.bgColor,
				sx: { height: "100%" },
				children: t.valid ? /* @__PURE__ */ x(Gl, {
					initialSurvey: e.survey ? yp(e.survey) : void 0,
					children: /* @__PURE__ */ x(PA, { ...e })
				}) : /* @__PURE__ */ x(wp, { errors: t.errors })
			})]
		})
	});
}
function PA({ survey: e, onChange: t, onSave: n }) {
	let r = Q((e) => e.survey), i = Q((e) => e.loadSurvey), a = zl((e) => e.loadForSurvey), o = d(!1);
	s(() => {
		o.current || (o.current = !0, a(r.id));
	}, []);
	let c = d(e?.id);
	s(() => {
		e && e.id !== c.current && (c.current = e.id, i(e), a(e.id));
	}, [
		e,
		i,
		a
	]);
	let l = d(null), u = d(!1);
	s(() => {
		if (!u.current) {
			u.current = !0;
			return;
		}
		return l.current && clearTimeout(l.current), l.current = setTimeout(() => t?.(r), 500), () => {
			l.current && clearTimeout(l.current);
		};
	}, [r, t]);
	let f = ql(r), p = Ul((e) => e.showError);
	return /* @__PURE__ */ x(AA, {
		saveStatus: f,
		onSave: () => {
			let e = jA(r);
			if (e.length > 0) {
				p(e.length === 1 ? e[0] : `${e[0]} (+${e.length - 1} more)`);
				return;
			}
			n?.(r);
		}
	});
}
var FA = new Iu.default({
	allErrors: !0,
	strict: !1
}).compile({
	$id: "survey-builder-kit/survey-response",
	type: "object",
	required: [
		"id",
		"surveyId",
		"surveyVersion",
		"answersFormatVersion",
		"answers",
		"visitedPageIds",
		"startedAt"
	],
	properties: {
		id: { type: "string" },
		surveyId: { type: "string" },
		title: { type: "string" },
		type: { type: "string" },
		surveyVersion: { type: "number" },
		answersFormatVersion: { const: 3 },
		answers: {
			type: "array",
			items: {
				type: "object",
				required: [
					"questionId",
					"pageId",
					"pageTitle",
					"type",
					"label",
					"displayValue"
				],
				properties: {
					questionId: { type: "string" },
					slug: { type: "string" },
					pageId: { type: "string" },
					pageTitle: { type: "string" },
					type: { type: "string" },
					label: { type: "string" },
					displayValue: { type: "string" },
					skipped: { type: "boolean" },
					options: {
						type: "array",
						items: {
							type: "object",
							required: [
								"value",
								"label",
								"selected"
							],
							properties: {
								value: { type: "string" },
								label: { type: "string" },
								selected: { type: "boolean" },
								disqualifying: { type: "boolean" }
							}
						}
					},
					disqualifying: { type: "boolean" },
					disqualifyMessage: { type: "string" }
				}
			}
		},
		visitedPageIds: {
			type: "array",
			items: { type: "string" }
		},
		score: {
			type: "object",
			required: ["total", "byCategory"],
			properties: {
				total: { type: "number" },
				byCategory: {
					type: "array",
					items: {
						type: "object",
						required: [
							"categoryId",
							"label",
							"points"
						],
						properties: {
							categoryId: { type: "string" },
							label: { type: "string" },
							points: { type: "number" }
						}
					}
				},
				passed: { type: "boolean" }
			}
		},
		startedAt: { type: "string" },
		completedAt: { type: "string" },
		serviceSku: { type: "string" }
	}
});
function IA(e) {
	return e ? e.map((e) => `${e.instancePath || "(root)"} ${e.message ?? "is invalid"}`) : [];
}
function LA(e) {
	return FA(e) ? { valid: !0 } : {
		valid: !1,
		errors: IA(FA.errors)
	};
}
//#endregion
export { Ku as CURRENT_ANSWERS_FORMAT_VERSION, Ct as CURRENT_SCHEMA_VERSION, Jg as QUESTION_TYPE_ICONS, NA as SurveyBuilder, Ep as SurveyRunner, Xu as computeScore, St as isConditionGroup, pl as newSurvey, Op as renderAssessment, LA as validateSurveyResponse };

//# sourceMappingURL=survey-builder-kit.js.map
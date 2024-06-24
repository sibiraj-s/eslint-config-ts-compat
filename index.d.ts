type Severity = 0 | 1 | 2;
type SeverityString = 'error' | 'off' | 'warn';
type RuleLevel = Severity | SeverityString;
type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
type RuleEntry = RuleLevel | RuleLevelAndOptions;
type RulesRecord = Partial<Record<string, RuleEntry>>;

declare const SharedConfig: {
  name: string;
  rules: RulesRecord;
};

export default SharedConfig;

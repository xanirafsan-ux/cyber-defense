import json
import unittest
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from tools.analyze_auth_logs import analyze


class AuthAnalyzerTest(unittest.TestCase):
    def test_synthetic_dataset(self):
        result = analyze(str(ROOT / 'data' / 'auth-events.json'))
        self.assertEqual(result['total_events'], 6)
        self.assertEqual(result['failed_events'], 4)
        self.assertEqual(result['successful_events'], 2)
        self.assertEqual(result['failures_by_user']['rahim'], 3)
        self.assertGreaterEqual(result['suspicious_event_count'], 3)


if __name__ == '__main__':
    unittest.main()
